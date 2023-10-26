//login
//signup

import React, { useState, useEffect } from "react";
import { Loginbtn, SignUpbtn } from "../Buttons/AuthenticationButtons";
import { Link, useNavigate } from "react-router-dom";
import "../../sassfiles/components/Forms/_authenticationforms.scss";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../../features/authSlice";
import { toast } from "react-toastify";

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

export const SignUpForm = () => {
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
export const LoginForm = () => {
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
