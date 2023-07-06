import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[login ,setLogin]  = useState()


  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    if (email === "seller1@gmail.com" && password === "12345") {
      setEmail(localStorage.setItem("email", email));
      setPassword(localStorage.setItem("password", password));
      setLogin(localStorage.setItem("login", true));
     

      navigate("/home");
    }
  }

  return (
    <>
      <div className="  bg-gradient-primary">
        <div className="b-center ">
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-xl-10 col-lg-12 col-md-9  ">
                <div className="card o-hidden border-0 shadow-lg my-5 ">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                      <div className="col-lg-6">
                        <div className="p-5 f-box">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">
                              Welcome Back!
                            </h1>
                          </div>
                          <form className="user" onClick={handleClick}>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Enter Email Address..."
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                />
                                <label
                                  className="custom-control-label"
                                  for="customCheck"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <Link className="btn btn-primary btn-user btn-block">
                              Login
                            </Link>
                          </form>
                        </div>
                      </div>
                    </div>
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

export default Login;
