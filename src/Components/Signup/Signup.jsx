import React, { useState } from "react";
import { Link } from "react-router";
import { useContext } from "react";
import AuthContext from "../../Contexts/Auth/AuthContext";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { toast } from 'react-hot-toast';
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userInfo = useContext(AuthContext);
  const { createUser, updateUserProfile, loginUserWithGoogle } = userInfo;
  
  const navigate = useNavigate();
  const locationLogin = useLocation();

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  
    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.");
      return;
    }
  
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, "")
          .then(() => {
            toast.success("Signup successful!");
            navigate(locationLogin?.state || `/`);
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            toast.error("Failed to update profile. Please try again.");
          });
      })
      .catch((error) => {
        console.error("Signup error:", error);
        toast.error("Signup failed. Please try again.");
      });
  };
  
  const handleGoogleLogIn = () => {
    loginUserWithGoogle()
      .then((result) => {
        navigate(locationLogin?.state || `/`);
      })
      .catch((error) => {
        console.error("Google login error:", error);
        toast.error("Google login failed. Please try again.");
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="mt-4 mb-6">
      <DynamicPageTitle title="Signup" />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="mb-8 text-2xl font-bold text-center">
                Signup now <br />{" "}
                <span className="text-lg font-normal">
                  and never miss a local event!
                </span>
              </h1>
              <form onSubmit={handleRegister}>
                <label className="label">Name</label>
                <input 
                  type="text" 
                  className="input mb-3 w-full" 
                  placeholder="Name" 
                  name="name" 
                  required 
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input mb-3 w-full"
                  placeholder="Email"
                  name="email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input mb-3 w-full pr-10"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <Link to={`/login`} className="link link-hover font-extralight">
                    Already have an account?
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4 w-full">Signup</button>
              </form>
              {/* google login button starts */}
              <div>
                <div className="flex items-center gap-4 my-4">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="text-sm text-gray-500">
                    or continue with
                  </span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>
              </div>
              <button
                onClick={handleGoogleLogIn}
                className="btn bg-[#E4D8B4] text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Google
              </button>
              {/* google login button ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;