import { useEffect, useState } from "react";
import Results from "./Results";

export default function Internships() {
  const [internship, setInternship] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/internship", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInternship(res);
        console.log(internship);
      });
  }, []);
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(selectedLanguage!=""){
    fetch("http://localhost:4000/api/internship", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skills: [selectedLanguage]}),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInternship(res);
        console.log(internship);
      });}
      else{
        fetch("http://localhost:4000/api/internship", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInternship(res);
        console.log(internship);
      });
      }
    
  };

  return (
    <div className="mt-10 px-6">
      <div className="items-center" id="internship-list">
        <h2 className="text-center text-3xl m-2">Internship Filter</h2>
        <form
          onSubmit={handleSubmit}
          className="flex gap-3 items-center justify-center m-3"
        >
          <label htmlFor="language">Select Language:</label>
          <select
            className="border border-black"
            id="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="">Select</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="Social Media">Social Media</option>
          </select>

          <label htmlFor="city">Select City:</label>
          <select
            className="border border-black"
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">Select</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="india">India</option>
          </select>

          <button type="submit" className="border border-black p-1">
            Filter
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {internship &&
          internship.map((internship) => (
            <Results
              job={internship.title}
              company={internship.company}
              city={internship.location}
              salary={internship.paid}
              logo="/companyLogo.png"
            />
          ))}
          {/* <Results job="React"/> */}
      </div>
    </div>
  );
}