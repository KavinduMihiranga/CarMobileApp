const mongoose=require('mongoose')

const loginScheme = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Login',loginScheme)