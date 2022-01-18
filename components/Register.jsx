import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();
    const [registeredUsername, setRegisteredUsername] = useState('');
    const [registeredPassword, setRegisteredPassword] = useState('');
    const [registeredEmail, setRegisteredEmail] = useState('');
    const [data, setData] = useState(null)
    const submit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/register', {
            email: registeredEmail,
            username: registeredUsername,
            password: registeredPassword
        })
        if (res.status === 422 || !res) {
            window.alert("INVALID REGISTRATION")
            console.log('Invalid Registeration')
        } else {
            // window.alert("Regiteration Successfull")
            setData(res.data)
            // console.log(data)
            history.push('/')
        }

    }
    return (
        <>
            <h1 className="text-center">{data ? `Welcome ${data.username}` : ''}</h1>
            <div className="my-5">
                <h1 className="text-center">Register</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form method="POST" onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input className="form-control"
                                    value={registeredEmail}
                                    onChange={(e) => setRegisteredEmail(e.target.value)}
                                    type="email" name="email" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input className="form-control"
                                    value={registeredUsername}
                                    onChange={(e) => setRegisteredUsername(e.target.value)}
                                    type="text" name="username" id="username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input className="form-control"
                                    value={registeredPassword}
                                    onChange={(e) => setRegisteredPassword(e.target.value)}
                                    type="password" name="password" id="password" />
                            </div>
                            <button className="btn-get-started btn-primary">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register