import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Restaurants from "./Restaurants"
import Contact from "./Contact"
import About from "./About"
import Login from "./Login";
import Register from "./Register";
import NewRestaurant from "./NewRestaurat";
import RestaurantDetail from "./RestaurantDetail";
import Footer from "./footer";

const App = () => {
    return (<>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/restaurants/new" component={NewRestaurant} />
            <Route exact path="/restaurants/:id" component={RestaurantDetail} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect to="/"/>
        </Switch>
        <Footer/>
    </>
    )
}

export default App