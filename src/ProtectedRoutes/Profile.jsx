import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, Row, Col, Nav, Navbar, Dropdown, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import logo from '../components/user.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
    const location = useLocation();
    const [isLoading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userData');
        navigate('/');
    };

    const fetchProfile = async () => {
        setLoading(true);
        const accessToken = localStorage.getItem('accessToken');

        try {
            const response = await axios.get('https://startupify.co.in:5100/api/v1/profile', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}` 
                }
            });

            if (response.data) {
                setUserData(response.data.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="d-flex" style={{ height: "100vh" }}>
            {/* Sidebar */}
            <div className="bg-dark text-white p-3 d-flex flex-column flex-shrink-0" style={{ width: 250 }}>
                <h4 className="text-center mb-4">Dashboard</h4>
                <hr className="text-secondary" />
                <Nav className="flex-column">
                    <Nav.Link onClick={() => navigate('/dashboard')} className="text-white">
                        <FontAwesomeIcon icon={faHouse} className="me-2"/>
                        Home</Nav.Link>
                    <Nav.Link onClick={() => navigate('/profile')} className= {`$(location?.pathname === "/profile" ? 'text-primary' : 'text-white')`}>
                    <FontAwesomeIcon icon={faUser} className="me-2"/>Profile</Nav.Link>
                    <Nav.Link className="text-white" href="#">Settings</Nav.Link>
                    <Nav.Link className="text-white" href="#">Messages</Nav.Link>
                    <Nav.Link onClick={logout} className="text-white mt-auto">Logout</Nav.Link>
                </Nav>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1">
                {/* Navbar */}
                <Navbar bg="light" expand="lg" className="px-3">
                    <Navbar.Toggle aria-controls="navbarContent" />
                    <Navbar.Collapse id="navbarContent" className="justify-content-end">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <img src={logo} alt="User" style={{ width: 50, height: 50, borderRadius: '50%' }} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className= {`$(location?.pathname === "/profile" ? 'text-primary' : 'text-white')`} onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Navbar>

                {/* Profile Section */}
                <Container className="mt-5">
                    {isLoading ? (
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) : (
                        userData && (
                            <Card className="w-75 mx-auto shadow">
                                <Row className="g-0">
                                    {/* Left Profile Section */}
                                    <Col md={4} className="text-white d-flex flex-column align-items-center justify-content-center p-4" 
                                        style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)" }}>
                                        <img
                                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                                            className="img-fluid mb-2"
                                            alt="User"
                                        />
                                        <h4 className="mb-1">{userData?.firstName} {userData?.lastName}</h4>
                                        <p className="mb-2">Web Designer</p>
                                    </Col>

                                    {/* Right Profile Details */}
                                    <Col md={8} className="p-4">
                                        <h4 className="mb-3">Personal Information</h4>
                                        <Row>
                                            <Col md={6}>
                                                <p className="fw-bold mb-1">Email</p>
                                                <p>{userData?.email}</p>
                                            </Col>
                                            <Col md={6}>
                                                <p className="fw-bold mb-1">Phone</p>
                                                <p>{userData?.phoneCode} {userData?.phone}</p>
                                            </Col>
                                        </Row>

                                        <h4 className="mt-4 mb-3 fw-bold">Company Details</h4>
                                        <Row>
                                            <Col md={6}>
                                                <p className="fw-bold mb-1">Company Name</p>
                                                <p>{userData?.companyName}</p>
                                            </Col>
                                            <Col md={6}>
                                                <p className="fw-bold mb-1">Employee ID</p>
                                                <p>{userData?.userCode}</p>
                                            </Col>
                                        </Row>

                                        <h4 className="mt-4 mb-3 fw-bold">Address</h4>
                                        <Row>
                                            <Col md={6}>
                                                <p className="fw-bold mb-1">City</p>
                                                <p>{userData?.city}</p>
                                            </Col>
                                            <Col md={6}>
                                                <p className="fw-bold mb-1">Address Line 1</p>
                                                <p>{userData?.addressLine1}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <p className="fw-bold mb-1">Address Line 2</p>
                                                <p>{userData?.addressLine2 ? userData?.addressLine2 : "N/A"}</p>
                                            </Col>
                                        </Row>

                                        <div className="mt-4 text-end">
                                            <Button variant="primary" onClick={() => navigate('/profile-update')}>Edit Profile</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        )
                    )}
                </Container>
            </div>
        </div>
    );
};

export default Profile;
