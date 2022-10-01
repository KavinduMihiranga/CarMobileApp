const express=require('express')
const app=express()
const router=express.Router()

const Register=require('../models/register.models')

app.use(express.json)

router.get('/',async(req,res)=>{
    try {
        const register=await Register.find()
        res.json(register)
    } catch (err) {
        res.send('err :'+err)
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const register=await Register.findById(req.params.id)
        res.json(register)
    } catch (err) {
        res.send('Err :'+err)
    }
})

router.post('/',async(req,res)=>{
    const register=new Register({
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        phoneNo:req.body.phoneNo,
        password:req.body.password
    })
    try {
        const response=await register.save()
        res.json(response)
    } catch (err) {
        res.send('Err :'+err)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const register=await Register.findById(req.params.id)
        const response=await register.remove()

        res.json(response)
    } catch (err) {
        res.send('Err :'+err)
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const register=await Register.findById(req.params.id)
        register.name=req.body.name
        register.email=req.body.email
        register.phoneNo=req.body.phoneNo
        register.password=req.body.password

        const response=await register.save()
        res.json(response)
    } catch (err) {
        res.send('Err :'+err)
    }
})
module.exports=router