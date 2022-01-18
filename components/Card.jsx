import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ id,imgsrc, title, address }) => {
    return (
        <>
            <div className="col-lg-6 col-md-4 col-10 mx-auto">
                <div key={id} className="card">
                    <img src={imgsrc} className="card-img-top w-auto h-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{title}</h5>
                        <p className="card-text">Address: {address}</p>
                        <NavLink to={`/restaurants/${id}`} className="btn-get-started">See More</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card