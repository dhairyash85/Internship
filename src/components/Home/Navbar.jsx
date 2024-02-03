import { Link, useNavigate } from 'react-router-dom';
import logo from '/internship.png';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the /login route
    navigate('/internLogin');
  };

  return (
    <div className="flex p-10 justify-between bg-blue-500 shadow-lg h-24 items-center">
      <div className="flex items-center justify-evenly">
        <img src={logo} alt="logo" className="w-16 h-16 p-2" />
        <h1 className="text-4xl font-bold">Internship</h1>
      </div>
      <div className="flex items-center gap-4 p-5">
        <button
          onClick={handleLoginClick}
          className="login-btn bg-blue-600 text-white py-2 px-4 rounded"
        >
          Intern
        </button>
        <div className="w-1/2 border border-white h-8"></div>
        <Link to="/recruiterLogin">
          <button className="bg-gray-200 text-blue-700 backdrop-blur-md py-2 px-4 rounded">
            Recruiter
          </button>
        </Link>
      </div>
    </div>
  );
}
