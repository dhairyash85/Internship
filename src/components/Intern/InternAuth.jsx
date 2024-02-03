import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm(props) {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState("signup");
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleSignInClick = () => {
    // If authMode is "signup", change to "signin" and navigate to "/login"
    if (authMode === "signup") {
      changeAuthMode();
    }

    // Navigate to the "/login" route
    navigate("/login");
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform authentication logic using email and password
    const response=await fetch("http://localhost:4000/api/createIntern",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
              },
          body:JSON.stringify({
              name : fullName,
              email:email,
              password:password
          })
      })
      const json = await response.json()
      console.log(json)
      if (!json.success){
          alert("Enter Valid")
      }
      if(json.success){
        navigate("/login")
      }

    // Add your authentication logic here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-96 shadow-md p-8 rounded bg-white">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h3>
        </div>
        <div className="text-center mb-4">
          {authMode === "signin" ? (
            <span>
              Not registered yet?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={changeAuthMode}
              >
                Sign Up
              </span>
            </span>
          ) : (
            <span>
              Already registered?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleSignInClick}
              >
                Sign In
              </span>
            </span>
          )}
        </div>
        {authMode === "signin" ? (
          <>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">
                Email address:
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">
                Password:
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
                onClick={handleSignInClick}
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">
                Full Name:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="e.g. Snehal Patil"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">
                Email address:
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">
                Password:
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white p-2 rounded"
              >
                Submit
              </button>
            </div>
          </>
        )}
        <p className="text-center text-sm text-gray-800">
          Forgot{" "}
          <a href="#" className="text-blue-500 hover:underline">
            password?
          </a>
        </p>
      </form>
    </div>
  );
}
