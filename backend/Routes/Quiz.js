// https://opentdb.com/api.php?amount=10&category=18
const express=require('express')
const router=express.Router()
const ScoreBoard=require('../Model/ScoreBoard')
router.post('/updateScore', async (req, res)=>{
    // let {email, score}=req.body;
    // if(!email || !score) return res.status(400).send({error:"Invalid"})
    try{

        const scoreBoard=await ScoreBoard.findOne({email: req.body.email})
        if(!scoreBoard){
            await ScoreBoard.create({
                email: req.body.email,
                score: req.body.score
            })
            return res.send({success: true})
        }
        else{
            console.log(scoreBoard)
            prev=scoreBoard.score
            console.log(prev)
            scoreBoard.updateOne({score:prev+req.body.score}).exec()
            return res.send({success: true})
        }
    }catch(err){
        console.log(err)
        return res.send({success:false, error:err})
    }
})
module.exports=router