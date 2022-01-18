const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose')


const UserSchmea= new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
})

UserSchmea.plugin(passportLocalMongoose)


module.exports=mongoose.model('User',UserSchmea)