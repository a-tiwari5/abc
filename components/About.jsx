import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "../images/img1.jpg"
import Card from "./Card"

const About = () => {
    return (
        <>
            <Common
                name="Welcome to About Page"
                imgsrc={web}
                visit='/contact'
                btnname="Contact Now">
            </Common>
            <div className="my-5">
                <h1 className="text-center">Developers Team</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h1 className="text-center">Our Project Guide</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About

// https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80