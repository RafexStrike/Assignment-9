import React from "react";
import { use } from "react";
import AuthContext from "../../Contexts/Auth/AuthContext";

const ForgetPassword = () => {
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
              placeholder="Email"
            />

            <button className="btn btn-neutral mt-4">Send Reset Link</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
