//login
//signup

import React, { useState, useEffect } from "react";
import { Loginbtn, SignUpbtn } from "../Buttons/AuthenticationButtons";
import { Link, useNavigate } from "react-router-dom";
import "../../sassfiles/components/Forms/_authenticationforms.scss";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../../features/authSlice";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

// export const LoginForm = () => {
//   return (
//     <div>
//       <form className="login-form">
//         <div className="input-container">
//           <input id="email" placeholder="Email" type="text"></input>
//         </div>
//         <div className="input-container">
//           <input id="password" placeholder="Password" type="password"></input>
//         </div>
//       </form>
//       <Loginbtn />
//       <Link to="/sign-up">Don't have an account? Sign up</Link>
//     </div>
//   );
// };

export const SignUppForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };
  // console.log("user:", user);
  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            id="firstName"
            placeholder="First Name"
            type="text"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>

        <div className="input-container">
          <input
            id="lastName"
            placeholder="Last Name"
            type="text"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>

        <div className="input-container">
          <input
            id="email"
            placeholder="Email"
            type="text"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="input-container">
          <input
            id="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button className="SignUpBtn">
          {" "}
          {auth.registerStatus == "pending" ? "Submitting..." : "Register"}
        </button>
        {auth.registerStatus == "rejected" ? <p>{auth.registerError}</p> : null}
      </form>

      {/* <SignUpbtn /> */}
      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
};

export const SignUpForm = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(registerUser(user));
  // };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Invalid email format"
        )
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
          "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
        ),
    }),
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  // console.log("user:", user);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5">
            <form className="login-form" onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="auth-error-message mt-1">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="auth-error-message mt-1">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="auth-error-message mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="input-group">
                <input
                  type={showPassword1 ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />

                <span
                  className="input-group-text"
                  id="basic-addon1"
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword1 ? (
                    <i className="bi bi-eye"></i>
                  ) : (
                    <i className="bi bi-eye-slash"></i>
                  )}
                </span>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="auth-error-message mt-1">
                  {formik.errors.password}
                </div>
              ) : null}

              <div className="text-center py-3">
                <button
                  className="LoginBtn"
                  type="submit"
                  disabled={auth.registerStatus === "pending"}
                >
                  {auth.registerStatus === "pending"
                    ? "Submitting..."
                    : "Register"}
                </button>
                {auth.registerStatus === "rejected" ? (
                  <div className="auth-error-message mt-1">
                    {auth.registerError}
                  </div>
                ) : null}
              </div>
            </form>

            <div className="text-center">
              Already have an account?
              <Link
                to="/login"
                id="emailHelp"
                className="form-text text-center mt-2 ms-1"
              >
                Login
              </Link>
            </div>
            <div className="text-center"></div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5">
            {" "}
            <form className="login-form" onSubmit={handleSubmit}>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="First Name"
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />
              </div>

              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type={showPassword1 ? "text" : "password"}
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <span
                  class="input-group-text"
                  id="basic-addon1"
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword1 ? (
                    <i class="bi bi-eye"></i>
                  ) : (
                    <i class="bi bi-eye-slash"></i>
                  )}
                </span>
              </div>

              <div className="text-center py-3">
                <button className="LoginBtn">
                  {" "}
                  {auth.registerStatus == "pending"
                    ? "Submitting..."
                    : "Register"}
                </button>
                {auth.registerStatus == "rejected" ? (
                  <p>{auth.registerError}</p>
                ) : null}
              </div>
            </form>
            <div className="text-center">
              {" "}
              Already have an account?
              <Link
                to="/login"
                id="emailHelp"
                class="form-text text-center mt-2 ms-1"
              >
                Login
              </Link>
            </div>
            <div className="text-center"> </div>{" "}
           
          </div>{" "}
        </div>
      </div> */}
    </>
  );
};
export const LoginForm = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(loginUser(user));
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Invalid email format"
        )
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
          "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
        ),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  // console.log("user:", user);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5">
            <form className="login-form" onSubmit={formik.handleSubmit}>
              <div className="mb-1">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="auth-error-message">{formik.errors.email}</div>
              ) : null}
              <div className="input-group mt-3 mb-2">
                <input
                  type={showPassword1 ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />

                <span
                  className="input-group-text"
                  id="basic-addon1"
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword1 ? (
                    <i className="bi bi-eye"></i>
                  ) : (
                    <i className="bi bi-eye-slash"></i>
                  )}
                </span>
                {/* {formik.touched.password && formik.errors.password ? (
                  <div className="auth-error-message">
                    {formik.errors.password}
                  </div>
                ) : null} */}
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="auth-error-message">
                  {formik.errors.password}
                </div>
              ) : null}
              <div className="text-center py-3">
                <button
                  className="LoginBtn"
                  type="submit"
                  disabled={auth.loginStatus === "pending"}
                >
                  {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
                </button>
                {auth.loginStatus === "rejected" ? (
                  <div className="error">{auth.loginError}</div>
                ) : null}
              </div>
            </form>
            <div className="text-center">
              Don't have an account?
              <Link
                to="/sign-up"
                id="emailHelp"
                className="form-text text-center mt-2 ms-1"
              >
                Sign up
              </Link>
            </div>
            <div className="text-center"></div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5">
            {" "}
            <form className="login-form" onSubmit={handleSubmit}>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type={showPassword1 ? "text" : "password"}
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <span
                  class="input-group-text"
                  id="basic-addon1"
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword1 ? (
                    <i class="bi bi-eye"></i>
                  ) : (
                    <i class="bi bi-eye-slash"></i>
                  )}
                </span>
              </div>

              <div className="text-center py-3">
                {" "}
                <button className="LoginBtn">
                  {" "}
                  {auth.loginStatus == "pending" ? "Submitting..." : "Login"}
                </button>
                {auth.loginStatus == "rejected" ? (
                  <p>{auth.loginError}</p>
                ) : null}
              </div>
            </form>
            <div className="text-center">
              {" "}
              Don't have an account?
              <Link
                to="/sign-up"
                id="emailHelp"
                class="form-text text-center mt-2 ms-1"
              >
                Sign up
              </Link>
            </div>
            <div className="text-center"> </div>{" "}
          </div>{" "}
        </div>
      </div> */}
    </>
  );
};
export const LoginnForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };
  // console.log("user:", user);
  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            id="email"
            placeholder="Email"
            type="text"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="input-container">
          <input
            id="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button className="SignUpBtn">
          {" "}
          {auth.loginStatus == "pending" ? "Submitting..." : "Login"}
        </button>
        {auth.loginStatus == "rejected" ? <p>{auth.loginError}</p> : null}
      </form>
      <Link to="/sign-up">Don't have an account? Sign up</Link>
    </div>
  );
};
