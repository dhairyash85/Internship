const express=require('express')
const router=express.Router()
const Internship=require('../Model/Internship')
router.post('/postInternship', async (req, res)=>{
    try{
        await Internship.create({
            title:req.body.title,
            industry:req.body.industry,
            location:req.body.location,
            duration:req.body.duration,
            paid:req.body.paid,
            company:req.body.company,
            description:req.body.description,
            recruiter:req.body.recruiter,
            aboutCompany:req.body.aboutCompany,
        })
        res.send({success:true})
    }catch(err){
        console.log(err)
        res.send({success:false})
    }
})
module.exports=router