const express=require('express')
const router=express.Router()
const ScoreBoard=require('../Model/ScoreBoard')
router.post('/leaderboard', async (req, res)=>{
    try{
        const rank= await ScoreBoard.find({}).sort({score:'desc'})
        return res.send({leaderboard:rank})
    }catch(err){
        console.log(err)
        return res.send({success:false})
    }
})
module.exports=router