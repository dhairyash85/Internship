import React, { useContext, useState } from 'react';
import './app.css';
import { useNavigate } from 'react-router';
import currentUserContext from '../../Context/currentUserContext';
export default function AuthForm(props) {
  const {currentUser,setCurrentUser}=useContext(currentUserContext)
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform authentication logic using email and password
    const response=await fetch("http://localhost:4000/api/internLogin",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
              },
          body:JSON.stringify({
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
        setCurrentUser(json.user)
        console.log(currentUser)
        navigate("/home")
      }
    // Add your authentication logic here
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <form className="w-96 shadow-md p-8 rounded" onSubmit={handleSubmit}>
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">Sign In</h3>
        </div>
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-800">Email address:</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-800">Password:</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded mt-1"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </div>
        <p className="text-right text-sm text-gray-800">
          Forgot <a href="#" className="link-primary hover:underline">password?</a>
        </p>
      </form>
    </div>
  );
}