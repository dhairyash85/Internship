const express=require('express')
const router=express.Router()
const Intern=require('../Model/Intern')
const {body, validationResult}=require('express-validator')
const bcrypt=require("bcryptjs")
router.post('/createIntern',  body("email").isEmail(), body("password").isLength({min:8}),  async (req, res)=>{
   const error=validationResult(req)
   if(!error.isEmpty()){
      return res.status(400).json({errors:  error.array()})
   }  

   const salt = await bcrypt.genSalt(10)
   let secPassword= await bcrypt.hash(req.body.password, salt)
     try{
        await Intern.create({
            name:req.body.name,
            password:secPassword,
            email: req.body.email
        })
        res.json({success: true})
     }catch(err){
        console.log(err)
        res.json({success: false})
     }
})

router.post('/internLogin', body("email").isEmail(), body("password").isLength({min:8}),async (req, res)=>{
   try{
      const error=validationResult(req)
      if(!error.isEmpty()){
         return res.status(400).json({errors:  error.array()})
      }  
      let email=req.body.email;
      let intern = await Intern.findOne({"email":email});
      if(!intern) return res.status(400).json({errors:  "User does not exist"})
      const pwdCompare=await bcrypt.compare(req.body.password, intern.password)
      if(!pwdCompare) return res.json({errors:  "Incorrect Password"})
      const data={
         intern:{
            id:intern.id
         }
      }
      return res.json({success: true, user:intern})
   }catch(err){
      console.log(err)
      return res.json({success: false})
   }
})

module.exports=router;