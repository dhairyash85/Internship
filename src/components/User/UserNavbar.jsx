import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Correcting to useNavigate
import logo from "/internship.png";

const UserNavbar = () => {
  const navigate = useNavigate(); // Using useNavigate

  const handleLoginClick = () => {
    navigate("/home"); // Correcting to use navigate
  };

  return (
    <div>
      <div className="flex p-10 justify-between bg-blue-400 shadow-lg h-24 items-center">
        <div className="flex items-center justify-evenly">
          <img src={logo} alt="logo" className="w-16 h-16 p-2" />
          <h1 className="text-4xl font-bold">Internship</h1>
        </div>
        <div className="flex items-center gap-4 p-5">
          <button
            onClick={handleLoginClick}
            className="login-btn bg-blue-600 text-white py-2 px-4 rounded"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
