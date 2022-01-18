const mongoose = require('mongoose')
const db = mongoose.connection;
const seeds = require('./names')
const Restaurant = require('../models/restaurant')
mongoose.connect("mongodb+srv://Adarsh:Adhd@cluster0.kcold.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",()=>{
    console.log('mongoose in connected')
})

const seedDB = async () => {
    await Restaurant.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const restaurant = new Restaurant({
            name: seeds.restaurants[i].name,
            neighborhood: seeds.restaurants[i].neighborhood,
            image: seeds.restaurants[i].photograph,
            address: seeds.restaurants[i].address,
            description: "Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin- starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work.Eater critic Ryan Sutton awarded this restaurant two stars",
            
        })
        await restaurant.save();
    }
}


seedDB().then(() => {
    db.close();
})
