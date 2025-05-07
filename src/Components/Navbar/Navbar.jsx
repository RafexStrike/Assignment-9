import React, { Suspense } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import AuthContext from "../../Contexts/Auth/AuthContext";
import { use } from "react";

const Navbar = () => {
  const userInfo = use(AuthContext);
  const { user, logOutUser, isLoadingDone } = userInfo;
  const defaultProfilePic = "https://i.ibb.co/1dSwFqY/default-avatar.png";

  if (!isLoadingDone) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  const handleLogOut = () => {
    logOutUser().then(() => "user has been logged out successfully");
  };
  // console.log("printing user from the navbar", user.email)
  // console.log("Is user truthy?", !!user);
  const links = (
    <>
      <NavLink className="nav-link " to="/">
        Home
      </NavLink>
      <NavLink className="nav-link " to="/profile">
        Profile
      </NavLink>
      <NavLink className="nav-link " to="/organize">
        Organize
      </NavLink>
      <NavLink className={`nav-link  ${user ? "hidden" : ""}`} to="/login">
        Login
      </NavLink>
      <NavLink className={`nav-link  ${user ? "hidden" : ""}`} to="/signup">
        Register
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-[#F3EDDC] shadow-sm rounded-xl">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-[#F3EDDC] rounded-box w-52 space-y-2"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-semibold">
            Eventero
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex space-x-4">{links}</div>

        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2 md:gap-4">
              <Link to="/profile" className="flex items-center gap-2">
                <img
                  title={user?.displayName || "User"}
                  src={user?.photoURL || defaultProfilePic}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-primary"
                />
                <span className="hidden md:inline text-gray-700 truncate max-w-[120px]">
                  {user.email}
                </span>
              </Link>
              <button
                onClick={handleLogOut}
                className="btn btn-success btn-sm md:btn-md rounded-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to={`/login`}
              className="btn btn-success btn-sm md:btn-md rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
