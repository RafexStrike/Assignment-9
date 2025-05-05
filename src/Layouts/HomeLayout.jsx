import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-6xl mx-auto mt-4 px-4 flex-grow w-full">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
