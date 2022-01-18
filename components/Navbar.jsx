import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                            <div className="container-fluid">
                                <NavLink exact activeClassName="menu-active" className="navbar-brand" to="#">RestCritic</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu-active" className="nav-link " aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu-active" className="nav-link" to="/restaurants">Restaurants</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu-active" className="nav-link" to="/restaurants/new">Add A Restaurant</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu-active" className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu-active" className="nav-link" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu-active" className="nav-link" to="/register">Register</NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                </div>

            </div>
        </>
    )
}



export default Navbar