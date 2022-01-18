import React, { useState } from "react";
// import SData from "../seeds/names"
import Card from "./Card";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const Restaurants = () => {
    // const makeRestaurants = (() => {
    //     console.log(SData.restaurants[0].name, SData.restaurants[0].address, SData.restaurants[0].photograph)
    // })
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        const res= axios.get('http://localhost:4000/restaurants')
        res.then((data)=>{
            if(data.data){
                setRestaurants(data.data.reverse())
            }
        })
    }, [restaurants])
    // console.log(restaurants)
    return (
        
        <>
            <div className="my-5">
                <h1 className="text-center">Restaurants</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {restaurants.map((val) => {
                                return <Card
                                    id={val._id}
                                    imgsrc={val.image}
                                    title={val.name}
                                    address={val.address}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurants