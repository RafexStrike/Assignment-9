import React from "react";
import { use } from "react";
import AuthContext from "../../Contexts/Auth/AuthContext";
import { useLocation } from "react-router";

const ForgetPassword = () => {
  const location = useLocation();
  const passedEmail = location.state?.loginEmail;
  console.log(passedEmail);
  const { sendPasswordResetLink } = use(AuthContext);
  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    sendPasswordResetLink(email);
  };
  return (
    <div className="max-w-md mx-auto my-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleResetPassword}>
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Give your email"
              defaultValue={passedEmail ? passedEmail : ""}
            />

            <button className="btn btn-neutral mt-4">Send Reset Link</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
