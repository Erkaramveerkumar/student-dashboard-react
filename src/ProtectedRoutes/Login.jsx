import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [accessToken, setAccessToken] = useState('');
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const onLogin = async (e) => {
        e.preventDefault();
        const body = {
            username,
            password,
            "deviceId": "deviceId"
        }
        try {
            setLoading(true);
            const response = await axios.post('https://startupify.co.in:5100/api/v1/login', body)
            if (response.status === 200) {
                setAccessToken(response.accessToken);
                localStorage.setItem('accessToken', response.data.data.accessToken);
                localStorage.setItem('isLogin', true);
                localStorage.setItem('userData', JSON.stringify(response.data.data));
                navigate('/dashboard');
            }
        } catch (error) {
            alert(error?.response?.message || 'Login Failed');
            console.log(error?.response?.message);
        } finally {
            setLoading(false);
        }
    };
    return (

        <>
            <section className="vh-100 bg-image">
                <div className="d-flex align-items-center h-100">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center h-100" >
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div
                                    className="card bg-white text-dark rounded-4"
                                >
                                    <div className="card-body p-5">
                                        <div className="mb-md-5 mt-md-4">
                                            <h2 className="fw-bold mb-2 text-uppercase text-center">Login</h2>
                                            <p className="text-dark-50 mb-5 text-center">
                                                Please enter your login and password!
                                            </p>
                                            <form action="" onSubmit={onLogin}>
                                                <div
                                                    data-mdb-input-init=""
                                                    className="form-outline form-dark mb-4"
                                                >
                                                    <label className="form-label fw-bold" htmlFor="typeEmailX">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="typeEmailX"
                                                        className="form-control form-control-lg "
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                    />

                                                </div>
                                                <div
                                                    data-mdb-input-init=""
                                                    className="form-outline form-dark mb-4"
                                                >
                                                    <label className="form-label fw-bold" htmlFor="typePasswordX">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="typePasswordX"
                                                        className="form-control form-control-lg"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />

                                                </div>
                                                <div className='d-flex justify-content-center'>
                                                    {isLoading ? (
                                                        <button
                                                            variant="primary"
                                                            disabled={isLoading}
                                                            type="submit"
                                                            className="w-100 btn btn-primary py-3"
                                                        >
                                                            Logging...
                                                        </button>
                                                    ) : (
                                                        <button
                                                            data-mdb-button-init=""
                                                            data-mdb-ripple-init=""
                                                            className="btn btn-primary w-100 py-3"
                                                            type="submit"
                                                        >
                                                            Login
                                                        </button>
                                                    )}

                                                </div>
                                            </form>
                                        </div>
                                        <div>
                                            <p className="mb-0 mt-3 text-center">
                                                Don't have an account?{" "}
                                                <Link to="/register" className="text-dark fw-bold">
                                                    Sign Up
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login