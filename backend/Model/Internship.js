const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  duration: {
    type: String, 
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
  },
  skillsRequired: {
    type: [String], 
    required: true,
  },
  company:{
    type: String,
    required: true,
  },
  recruiter:{
    type: String,
    required: true
  },
  description:{
    type: String,
    requred:true
  },
  aboutCompany:{
    type:String,
    required:true
  }
});

module.exports=mongoose.model('Internship', internshipSchema);