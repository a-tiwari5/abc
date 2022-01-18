const mongoose=require('mongoose')
const Schema=mongoose.Schema;


const RestaurantSchema= new Schema({
    name:{
        type:String,
        required:true,
    },
    neighborhood:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Restaurant',RestaurantSchema)