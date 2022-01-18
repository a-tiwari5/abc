import React, { useState } from "react";


const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    });

    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit = (evn) => {
        evn.preventDefault();
    }

    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact US</h1>
        </div>
        <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit} action="">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Enter Your Name</label>
                            <input
                                type="text"
                                className="form-control bg-1"
                                id="exampleFormControlInput1"
                                name=""
                                value={data.fullname}
                                onChange={inputEvent}
                                placeholder="Enter Your Name"
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input
                                type="number"
                                className="form-control bg-1"
                                id="exampleFormControlInput1"
                                name="fullname"
                                value={data.phone}
                                onChange={inputEvent}
                                placeholder="+919876543210"
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Email address</label>
                            <input type="email"
                                className="form-control bg-1"
                                id="exampleFormControlInput1"
                                name="phone"
                                value={data.email}
                                onChange={inputEvent}
                                placeholder="Enter Your Email"
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Message</label>
                            <textarea
                                className="form-control bg-1"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="email"
                                value={data.msg}
                                onChange={inputEvent}
                                required></textarea>
                        </div>
                        <div className="col-12 mb-4">
                            <button
                                className="btn btn-outline-primary"
                                type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default Contact