const mongoose=require('mongoose')
const {Schema}=mongoose;
const InternSchema=new Schema({
    name:{
        type: String,
        required: true,
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
        default:"Intern"
    },
    date:{
        type: Date,
        default: Date.now
    },
})
module.exports=mongoose.model('Intern', InternSchema)