import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../components/user.png";
import { NavLink } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    // localStorage.clear();
    localStorage.removeItem("isLogin");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    navigate("/");
  };
  const onProfile = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="d-flex" style={{ height: "100vh" }}>
        <div
          className="bg-dark text-white p-3 d-flex flex-column flex-shrink-0"
          style={{ width: 250 }}
        >
          <h4 className="text-center mb-4 ">Dashboard</h4>
          <hr className="text-secondary" />
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                className= {`nav-link $(location?.pathname === "/dashboard" ? 'text-primary' : 'text-white')`}
                aria-current="page"
                to=""
              >
                 <FontAwesomeIcon icon={faHouse} className="me-2"/>
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                onClick={onProfile}
                className="text-decoration-none text-white ms-2"
              >
                <FontAwesomeIcon icon={faUser} className="me-2"/>
                Profile
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="">
                <i className="bi bi-gear me-2" />
                Settings
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="">
                <i className="bi bi-envelope me-2" />
                Messages
              </Link>
            </li>
            <li className="nav-item mt-auto">
              <NavLink
                onClick={logout}
                className="text-decoration-none text-white ms-2 "
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Main Content */}
        <div className="flex-grow-1">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <Dropdown className="ms-auto me-3">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <div className="collapse navbar-collapse" id="navbarContent">
                    <div className="">
                      <img
                        src={logo}
                        alt="logo"
                        className=""
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink
                      onClick={onProfile}
                      className="text-decoration-none text-dark"
                    >
                      Profile
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/" className="text-decoration-none text-dark">
                      Logout
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </nav>
          {/* Content Section */}
          <div className="container my-4">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    <p className="card-text">
                      Manage your personal information.
                    </p>
                    <Link to="" className="btn btn-primary">
                      Go to Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Settings</h5>
                    <p className="card-text">Update your preferences.</p>
                    <Link to="" className="btn btn-primary">
                      Go to Settings
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Messages</h5>
                    <p className="card-text">Check your inbox.</p>
                    <Link to="" className="btn btn-primary">
                      Go to Messages
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Dashboard Overview Section */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Dashboard Overview</h5>
                    <p className="card-text">
                      Summary of your recent activities:
                    </p>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card text-center bg-light mb-3">
                          <div className="card-body">
                            <h6 className="card-title">Tasks Completed</h6>
                            <h3 className="text-success">24</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card text-center bg-light mb-3">
                          <div className="card-body">
                            <h6 className="card-title">Messages Received</h6>
                            <h3 className="text-primary">8</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card text-center bg-light mb-3">
                          <div className="card-body">
                            <h6 className="card-title">Profile Views</h6>
                            <h3 className="text-warning">120</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="" className="btn btn-secondary mt-2">
                      View Detailed Report
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
