import {
  Container,
  Card,
  Row,
  Col,
  Nav,
  Navbar,
  Dropdown,
  Button,
  Spinner,
} from "react-bootstrap";
import axios from "axios";
import logo from "../components/user.png";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Watching phoneCode and phone to trigger validation on change
  const phoneCode = watch("phoneCode", "");
  const phone = watch("phone", "");

  const onSubmit = async (e) => {
    e.countryId = "101";
    e.stateId = "4022";
    e.gender = "Male";

    try {
      setLoading(true);
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.put(
        "https://startupify.co.in:5100/api/v1/profile",
        e,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response) {
        alert("Profile updated successfully!");
        navigate("/profile");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    navigate("/");
  };
  const fetchProfile = async () => {
    setLoading(true);
    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(
        "https://startupify.co.in:5100/api/v1/profile",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data) {
        setUserData(response.data.data);
        setValue("firstName", response?.data?.data?.firstName);
        setValue("lastName", response?.data?.data?.lastName);
        setValue("phoneCode", response?.data?.data?.phoneCode);
        setValue("phone", response?.data?.data?.phone);
        setValue("companyName", response?.data?.data?.companyName);
        setValue("addressLine1", response?.data?.data?.addressLine1);
        setValue("addressLine2", response?.data?.data?.addressLine2);
        setValue("city", response?.data?.data?.city);
        setValue("email", response?.data?.data?.email);
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
      <div
        className="bg-dark text-white p-3 d-flex flex-column flex-shrink-0"
        style={{ width: 250 }}
      >
        <h4 className="text-center mb-4">Dashboard</h4>
        <hr className="text-secondary" />
        <Nav className="flex-column">
          <Nav.Link
            onClick={() => navigate("/dashboard")}
            className="text-white"
          >
            Dashboard
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/profile")} className="text-white">
            Profile
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            Settings
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            Messages
          </Nav.Link>
          <Nav.Link onClick={logout} className="text-white mt-auto">
            Logout
          </Nav.Link>
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
                <img
                  src={logo}
                  alt="User"
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/profile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>

        {/* Profile Section */}

        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="shadow-lg">
                <Card.Header className="bg-primary text-white text-center">
                  <h4>Update Profile</h4>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="First Name"
                            {...register("firstName", {
                              required: "First name is required",
                            })}
                          />
                          {errors.firstName && (
                            <Form.Text className="text-danger">
                              {errors.firstName.message}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Last Name"
                            {...register("lastName", {
                              required: "Last name is required",
                            })}
                          />
                          {errors.lastName && (
                            <Form.Text className="text-danger">
                              {errors.lastName.message}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Phone Code"
                            {...register("phoneCode", {
                              required: "Phone code is required",
                              pattern: {
                                value: /^91$/,
                                message:
                                  "Invalid phone code (India's code is 91)",
                              },
                            })}
                          />
                          {(errors.phoneCode ||
                            (phoneCode && !/^91$/.test(phoneCode))) && (
                            <Form.Text className="text-danger">
                              {errors.phoneCode?.message ||
                                "Invalid phone code (India's code is 91)"}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                      <Col md={8}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Phone Number"
                            {...register("phone", {
                              required: "Phone number is required",
                              pattern: {
                                value: /^[6789]\d{9}$/,
                                message:
                                  "Invalid phone number (must be 10 digits, starting with 6-9)",
                              },
                            })}
                          />
                          {(errors.phone ||
                            (phone && !/^[6789]\d{9}$/.test(phone))) && (
                            <Form.Text className="text-danger">
                              {errors.phone?.message ||
                                "Invalid phone number (must be 10 digits, starting with 6-9)"}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <Form.Text className="text-danger">
                          {errors.email.message}
                        </Form.Text>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Company Name"
                        {...register("companyName", {
                          required: "Company name is required",
                        })}
                      />
                      {errors.companyName && (
                        <Form.Text className="text-danger">
                          {errors.companyName.message}
                        </Form.Text>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Address Line 1"
                        {...register("addressLine1", {
                          required: "Address is required",
                        })}
                      />
                      {errors.addressLine1 && (
                        <Form.Text className="text-danger">
                          {errors.addressLine1.message}
                        </Form.Text>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Address Line 2 (Optional)"
                        {...register("addressLine2")}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="City"
                        {...register("city", { required: "City is required" })}
                      />
                      {errors.city && (
                        <Form.Text className="text-danger">
                          {errors.city.message}
                        </Form.Text>
                      )}
                    </Form.Group>
                    <div className="text-center">
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />{" "}
                            Submitting...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfileUpdate;
