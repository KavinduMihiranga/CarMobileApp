const express=require('express')
const app=express()
const router=express.Router()

const Login=require('../models/login.models')

app.use(express.json)

  router.post('/',async(req,res)=>{
    const login=new Login({
     id:req.body.id,
    name:req.body.name
    })
    try {
     const response=await login.save()
     // res.send(response)
     res.json(response)
    } catch (err) {
     res.send('Err :' + err)
    }
 })
 


module.exports=router