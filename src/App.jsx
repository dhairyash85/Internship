import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import InternLogin from "./components/Intern/InternLogin";
import Home from "./components/Main/Home";
import Intro from "./components/Intro";
import InternAuth from "./components/Intern/InternAuth";
import RecruiterLogin from "./components/Recruiter/RecruiterLogin"
import RecruiterAuth from "./components/Recruiter/RcruiterAuth";
import UserProfile from "./components/User/UserProfile";
import {  useState } from "react";
import currentUserContext from "./Context/currentUserContext";
import Quiz from "./components/QuizPage/Quiz";
import PostInternship from "./components/Internship/PostInternship";
const App = () => {
  const[currentUser, setCurrentUser]=useState(null)
  return (
    <currentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <Router>
        <div>
          <Routes>
            <Route path="/internLogin" element={<InternLogin />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/profile" element={<UserProfile/>}
            />
            <Route path="/" element={<Intro />}></Route>
            <Route path="/internRegister" element={<InternAuth />}></Route>
            <Route path="/recruiterLogin" element={<RecruiterLogin/>}></Route>
            <Route path="/recruiterRegister" element={<RecruiterAuth/>}></Route>
            <Route path="/quiz" element={<Quiz/>}></Route>
            <Route path="/postinternship" element={<PostInternship/>}></Route>
          </Routes>
        </div>
      </Router>
    </currentUserContext.Provider>
  );
};

export default App;
