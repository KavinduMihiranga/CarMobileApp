const express=require('express')
const app=express()
const router=express.Router()

const Vehicle=require('../models/vehicle.models')

app.use(express.json)

router.get('/',async(req,res)=>{
    try {
        const vehicle=await Vehicle.find()
        res.json(vehicle)
    } catch (err) {
        res.send('err :'+err)
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const vehicle=await Vehicle.findById(req.params.id)
        res.json(vehicle)
    } catch (err) {
        res.send('Err :'+err)
    }
})

router.post('/',async(req,res)=>{
    const vehicle=new Vehicle({
        id:req.body.id,
        brand:req.body.brand,
        model:req.body.model,
        color:req.body.color,
        price:req.body.price
    })
    try {
        const response=await vehicle.save()
        res.json(response)
    } catch (err) {
        res.send('Err :'+err)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const vehicle=await Vehicle.findById(req.params.id)
        const response=await vehicle.remove()
        
        res.json(response)
    } catch (err) {
        res.send('Err: '+err)
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const vehicle=await Vehicle.findById(req.params.id)
        vehicle.brand=req.body.brand
        vehicle.model=req.body.model
        vehicle.color=req.body.color
        vehicle.price=req.body.price

        const response=await vehicle.save()
        res.json(response)
    } catch (err) {
        res.send('Err: '+err)
    }
})
module.exports=router