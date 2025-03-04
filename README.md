 {pageType === 'register' && (
                                    <div className="card my-3" style={{ borderRadius: 15 }}>
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase text-center mb-5">
                                                Create an account
                                            </h2>
                                            <form onSubmit={onRegister}>
                                                <div data-mdb-input-init="" className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example1cg">
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
                                                <div data-mdb-input-init="" className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example1cg">
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
                                                <div data-mdb-input-init="" className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example1cg">
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
                                                <div data-mdb-input-init="" className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example1cg">
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
                                                <div data-mdb-input-init="" className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example3cg">
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
                                                <div data-mdb-input-init="" className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example4cg">
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
                                                    {
                                                        isLoading ?
                                                            <Button variant="primary" disabled={isLoading} type="submit">
                                                                Registering...
                                                            </Button> :
                                                            <button
                                                                type="submit"
                                                                data-mdb-button-init=""
                                                                data-mdb-ripple-init=""
                                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                            >
                                                                Register
                                                            </button>
                                                    }

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











                                # student-dashboard-react
