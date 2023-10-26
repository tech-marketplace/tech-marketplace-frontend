import React from "react";
import Navbar from "../components/Navbar";
import { LoginForm } from "../components/Forms/AuthenticationForms";
import { SignUpForm } from "../components/Forms/AuthenticationForms";
// import '../sassfiles/pages/_authentication.scss'

export const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="centered-container">
        <div className="login">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <div className="centered-container">
        <div className="signup">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};
