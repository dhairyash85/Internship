import React, { useContext } from "react";
import Navbar from "../Home/Navbar";
import currentUserContext from "../../Context/currentUserContext";
import { useNavigate } from "react-router";
import UserNavbar from "./UserNavbar";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const {currentUser}=useContext(currentUserContext)
  const handleEditProfile = () => {
    console.log("Edit Profile clicked");
  };

  const handleLogout = () => {
    console.log("Log Out clicked");
  };

  return (
    <>
      <UserNavbar />
      <div className="container mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="card">
              <div className="card-body text-center">
                <img
                  src="/profilePicture.png"
                  className="rounded-circle mb-3"
                  alt="Profile"
                  style={{ width: "150px", height: "150px", margin: "auto" }}
                />
                <h5 className="card-title">{currentUser.name}</h5>
                <p className="card-text">Program currentUser</p>
                <p className="card-text">University</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="card">
              <div className="card-body">
                {currentUser.about&&
                  <div>
                    <strong>
                      <h6 className="font-bold text-lg mb-2">About Me</h6>
                    </strong>
                    <p>{currentUser.about}</p>
                  </div>
                }
                <hr className="my-3" />

                <div>
                  <strong>
                    <h6 className="font-bold text-lg mb-2">Education</h6>
                  </strong>
                  {currentUser.education &&
                    currentUser.education.map((edu) => (
                      <div key={edu.id}>
                        <p className="font-bold">{edu.degree}</p>
                        <p>{edu.school}</p>
                        <p className="text-gray-600 text-sm">
                          {edu.graduationYear}
                        </p>
                      </div>
                    ))}
                </div>
            <hr className="my-3" />

                <div>
                  <strong>
                    <h6 className="font-bold text-lg mb-2">Skills</h6>
                  </strong>
                  <ul className="list-disc ml-5">
                    {currentUser.skills &&
                      currentUser.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="card">
              <div className="card-body">
                <div>
                  <strong>
                    <h6 className="font-bold text-lg mb-2">Experience</h6>
                  </strong>
                  <p>{currentUser.experience || "N/A"}</p>
                </div>
                <hr className="my-3" />

                <div>
                  <strong>
                    <h6 className="font-bold text-lg mb-2">GitHub Link</h6>
                  </strong>
                  <p>{currentUser.githubLink || "N/A"}</p>
                </div>
                <hr className="my-3" />

                <div>
                  <strong>
                    <h6 className="font-bold text-lg mb-2">Portfolio</h6>
                  </strong>
                  <p>{currentUser.portfolioLink || "N/A"}</p>
                </div>
                <hr className="my-3" />

                <div>
                  <strong>
                    <h6 className="font-bold text-lg mb-2">Projects</h6>
                  </strong>
                  <ul className="list-disc ml-5">
                    {currentUser.projects &&
                      currentUser.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card-footer text-center">
              <button className="btn btn-primary" onClick={handleEditProfile}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        { currentUser.type==="Recruiter" &&
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="card-footer text-center">
                <Link className="btn btn-primary" to="/postInternship">
                  Post Internship
                </Link>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default UserProfile;
