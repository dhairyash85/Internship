const express=require('express')
const router=express.Router()
router.post('/internship', async (req, res)=>{

    try{
        if(req.body.skills) {
            let skills=await req.body.skills
            let internships=global.internship.filter((internship)=>{
                return skills.every((skill)=>internship.skillsRequired.includes(skill))
            })
            console.log(internships)
            res.send(internships)
        }
        else res.send(global.internship)
    }catch(err) {console.log(err.message)
    res.send("Server error")
    }
})
module.exports=router