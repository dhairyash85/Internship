const mongoose=require('mongoose')
const {Schema}=mongoose;
const ScoreSchema=new Schema({
    score:{
        type:Number,
        required: true
    },
    email:{
        type:String,
        required: true
    },
})
module.exports=mongoose.model('scores', ScoreSchema)