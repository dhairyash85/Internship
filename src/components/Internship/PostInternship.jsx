import React, { useContext, useState } from 'react'
import currentUserContext from '../../Context/currentUserContext'
import UserNavbar from '../User/UserNavbar'
function PostInternship(){
  const {currentUser}=useContext(currentUserContext)
  const [formData, setFormData]=useState({
    title:"",
    industry:"",
    location:"",
    duration:0,
    paid:true,
    company:currentUser.company,
    description:"",
    recruiter:currentUser.name,
    aboutCompany:"",
    skillsRequired:[]
  })
  const handleChange=(event)=>{
    setFormData({...formData,[event.target.name]: event.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:4000/api/postInternship",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title:formData.title ,
        industry:formData.industry ,
        location:formData.location ,
        duration:formData. duration,
        paid:true ,
        company:formData.company ,
        description:formData.description ,
        recruiter:formData.recruiter ,
        aboutCompany:formData.aboutCompany,
        skillsRequired:formData.skillsRequired
      })
    })
    const json = await response.json()
    console.log(json)
    if (!json.success){
        alert("Enter Valid")
    }
  }
  return (
    <div>
      <UserNavbar/>
      { currentUser.type=="Recruiter"?
      <>
        <div className="bg-white h-screen flex items-top justify-start  p-10">
          <form className="w-full shadow-md p-8 rounded" onSubmit={handleSubmit}>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Post Internship</h3>
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">Title:</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Enter Title"
                value={currentUser.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">Industry:</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Enter industry"
                value={currentUser.industry}
                name="industry"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">Location:</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Enter location"
                value={currentUser.location}
                name="location"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">Duration:</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Enter duration"
                value={currentUser.duration}
                name="duration"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">Paid:</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Enter Skills Required"
                value={currentUser.skillsRequired}
                name="skillsRequired"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">Description:</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Enter description"
                value={currentUser.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-800">About Company:</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                placeholder="Enter About Company"
                value={currentUser.aboutCompany}
                name="aboutCompany"
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <button type="submit" className="w-100 bg-blue-500 text-white p-2 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>:
      <>Interns cants post</> }
    </div>
  )
}

export default PostInternship