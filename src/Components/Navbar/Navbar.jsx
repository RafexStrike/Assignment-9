import React, { Suspense } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import AuthContext from "../../Contexts/Auth/AuthContext";
import { use } from "react";

const Navbar = () => {
  const userInfo = use(AuthContext);
  const { user, logOutUser } = userInfo;

  const handleLogOut = () => {
    logOutUser().then(() => "user has been logged out successfully");
    // .catch((error) => console.log(error));
  };
  const userEmail = user?.email;
  console.log(user);
  console.log(userEmail);

  const links = (
    <>
      <div>
        <NavLink className="mr-2 nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="mr-2 nav-link " to="/events">
          Events
        </NavLink>
        <NavLink className="mr-2 nav-link " to="/login">
          Login
        </NavLink>
        <NavLink className="mr-2 nav-link " to="/signup">
          Register
        </NavLink>
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm rounded-xl">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Eventero</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <Suspense fallback={<p>User information is loading...</p>}>
                <p>{userEmail}</p>
              </Suspense>
              <button
                onClick={handleLogOut}
                className="btn btn-success rounded-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={`/login`} className="btn btn-success rounded-lg">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
