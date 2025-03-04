import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneCode, setPhoneCode] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [otp, setOtp] = useState("");
    const [otpErr, setOtpErr] = useState("");
    const [pageType, setPageType] = useState("register");
    const [isLoading, setLoading] = useState(false);

    console.log(isLoading);
    // Registration Submission
    const onRegister = async (e) => {
        e.preventDefault();
        const body = {
            firstName,
            lastName,
            email,
            phoneCode,
            phone,
            password,
            userType: "Partner",
            companyName: "Appworks Technology",
        };

        try {
            setLoading(true);
            const response = await axios.post(
                "https://startupify.co.in:5100/api/v1/register",
                body
            );
            if (response.status === 200) {
                console.log(response.data.data.token);
                setToken(response.data.data.token);
            }
            setPageType("otp");
        } catch (error) {
            alert(error?.response?.data?.message || "Registration failed");
            console.error(error?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    // OTP Verification
    const onOtpSubmit = async (e) => {
        e.preventDefault();
        const otpData = { otp: otp, token: token, deviceId: "deviceId" };

        try {
            const response = await axios.post(
                "https://startupify.co.in:5100/api/v1/verify-register",
                otpData
            );
            if (response.status === 200 || response.status === 201) {
                alert("OTP Verified Successfully!");
                navigate("/");
            }
        } catch (err) {
            setOtpErr("Invalid OTP, please try again.");
            console.error(err);
        }
    };

    return (
        <>
            <section className="bg-image vh-100">
                <div className="d-flex align-items-center h-100 ">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                {pageType === "register" && (
                                    <div className="card shadow-lg rounded-4 my-3">
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase fw-bold text-center mb-5">
                                                Create an account
                                            </h2>
                                            <form onSubmit={onRegister}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div
                                                            data-mdb-input-init=""
                                                            className="form-outline mb-4 fw-bold"
                                                        >
                                                            <label
                                                                className="form-label"
                                                                htmlFor="form3Example1cg"
                                                            >
                                                                First Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="form3Example1cg"
                                                                className="form-control form-control-lg"
                                                                value={firstName}
                                                                onChange={(e) => setFirstName(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div
                                                            data-mdb-input-init=""
                                                            className="form-outline mb-4 fw-bold"
                                                        >
                                                            <label
                                                                className="form-label"
                                                                htmlFor="form3Example1cg"
                                                            >
                                                                Last Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="form3Example1cg"
                                                                className="form-control form-control-lg"
                                                                value={lastName}
                                                                onChange={(e) => setLastName(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div
                                                            data-mdb-input-init=""
                                                            className="form-outline mb-4 fw-bold"
                                                        >
                                                            <label
                                                                className="form-label"
                                                                htmlFor="form3Example1cg"
                                                            >
                                                                Phone Code
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="form3Example1cg"
                                                                className="form-control form-control-lg"
                                                                value={phoneCode}
                                                                onChange={(e) => setPhoneCode(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div
                                                            data-mdb-input-init=""
                                                            className="form-outline mb-4 fw-bold"
                                                        >
                                                            <label
                                                                className="form-label"
                                                                htmlFor="form3Example1cg"
                                                            >
                                                                Phone Number
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="form3Example1cg"
                                                                className="form-control form-control-lg"
                                                                value={phone}
                                                                onChange={(e) => setPhone(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>


                                                <div
                                                    data-mdb-input-init=""
                                                    className="form-outline mb-4 fw-bold"
                                                >
                                                    <label
                                                        className="form-label"
                                                        htmlFor="form3Example3cg"
                                                    >
                                                        Your Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="form3Example3cg"
                                                        className="form-control form-control-lg"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div
                                                    data-mdb-input-init=""
                                                    className="form-outline mb-4 fw-bold"
                                                >
                                                    <label
                                                        className="form-label"
                                                        htmlFor="form3Example4cg"
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="form3Example4cg"
                                                        className="form-control form-control-lg"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    {isLoading ? (
                                                        <Button
                                                            variant="primary"
                                                            disabled={isLoading}
                                                            type="submit"
                                                            className="w-100 py-3"
                                                        >
                                                            Registering...
                                                        </Button>
                                                    ) : (
                                                        <button
                                                            type="submit"
                                                            data-mdb-button-init=""
                                                            data-mdb-ripple-init=""
                                                            className="btn fw-bold btn-success w-100 py-3"
                                                        >
                                                            Register
                                                        </button>
                                                    )}
                                                </div>
                                                <p className="text-center text-muted mt-5 mb-0">
                                                    Have already an account?{" "}
                                                    <Link to="/" className="fw-bold text-body">
                                                        <u>Login here</u>
                                                    </Link>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* OTP Verification Page */}
                            {pageType === "otp" && (
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="card" style={{ width: "500px", height : "250px" }}>
                                        <div className="card-body text-center">
                                            <h3 className="mb-4 fw-bold">Verify OTP</h3>
                                            <Form onSubmit={onOtpSubmit}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Enter OTP</Form.Label>
                                                    <Form.Control
                                                        value={otp}
                                                        onChange={(e) => setOtp(e.target.value)}
                                                        type="text"
                                                        maxLength={6}
                                                        placeholder="Enter 6-digit OTP"
                                                    />
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Verify OTP
                                                </Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
