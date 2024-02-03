const mongoose=require('mongoose')
const {Schema}=mongoose;
const RecruiterSchema=new Schema({
    name:{
        type: String,
        required: true,
    },
    company:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    type:{
        type:String,
        default:"Recruiter"
    },
    date:{
        type: Date,
        default: Date.now
    },
})
module.exports=mongoose.model('Recruiter', RecruiterSchema)