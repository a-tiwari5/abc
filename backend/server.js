const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const passport=require('passport')
const localStrategy=require('passport-local')
// const cookieParser=require('cookie-parser')
const bcrypt=require('bcryptjs')
const session=require('express-session')
const bodyParser=require('body-parser')
const {catchAsync}=require('./utilities/catchAsync')
const app=express();

const User=require('./models/user')
const Restaurant=require('./models/restaurant')

mongoose.connect("mongodb+srv://Adarsh:Adhd@cluster0.kcold.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",()=>{
    console.log('mongoose in connected')
})


// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.use(session({
    secret:"notagoodsecret",
    resave:true,
    saveUninitialized:true
}))

// app.use(cookieParser("notagoodsecret"))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// User Routes
app.post('/register', catchAsync(async(req,res)=>{
    const{email, username, password}=req.body;
    const user= new User({email, username});
    const registeredUser=await User.register(user, password)
    console.log(registeredUser)
    res.send(registeredUser)
}))

app.post('/login', passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}), (req,res)=>{
    res.send(req.body);
})



//Restaurant routes

app.get('/restaurants',catchAsync(async(req,res)=>{
    const restaurants=await Restaurant.find({})
    res.send(restaurants)
}))

app.post('/restaurants', catchAsync(async(req,res)=>{
    console.log(req.body)
    const restaurant= await new Restaurant({...req.body})
    await restaurant.save();
    console.log("after" + restaurant)
    res.send(restaurant)
}))  


app.listen(4000,()=>{
    console.log('Server has started on 4000')
})