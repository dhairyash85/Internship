const express=require('express')
const router=express.Router()
const Recruiter=require('../Model/Recruiter')
const {body, validationResult}=require('express-validator')
const bcrypt=require("bcryptjs")
router.post('/createRecruiter',  body("email").isEmail(), body("password").isLength({min:8}),  async (req, res)=>{
   const error=validationResult(req)
   if(!error.isEmpty()){
      return res.status(400).json({errors:  error.array()})
   }

   const salt = await bcrypt.genSalt(10)
   let secPassword= await bcrypt.hash(req.body.password, salt)
     try{
        await Recruiter.create({
            name:req.body.name,
            password:secPassword,
            email: req.body.email,
            company:req.body.company
        })
        res.json({success: true})
     }catch(err){
        console.log(err)
        res.json({success: false})
     }
})

router.post('/recruiterLogin', body("email").isEmail(), body("password").isLength({min:8}),async (req, res)=>{
   try{
      const error=validationResult(req)
      if(!error.isEmpty()){
         return res.status(400).json({errors:  error.array()})
      }  
      let email=req.body.email;
      let recruiter = await Recruiter.findOne({"email":email});
      if(!recruiter) return res.status(400).json({errors:  "User does not exist"})
      const pwdCompare=await bcrypt.compare(req.body.password, recruiter.password)
      if(!pwdCompare) return res.json({errors:  "Incorrect Password"})
      const data={
         recruiter:{
            id:recruiter.id
         }
      }
      res.json({success: true, user:recruiter})
   }catch(err){
      console.log(err)
      res.json({success: false})
   }
})

module.exports=router;