import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history=useHistory();
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setloginPassword] = useState('');
    const [data, setData] = useState(null)
    const submit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/login', {
            username: loginUsername,
            password: loginPassword
        })
        if (res.status === 422 || !res) {
            window.alert("INVALID REGISTRATION")
            console.log('Invalid Registeration')
        } else {
            // window.alert("Login Successfull")
            setData(res.data)
            history.push('/')
        }
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Login</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form method="POST" onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input className="form-control"
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={loginUsername}
                                    onChange={(e) => setLoginUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input className="form-control"
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={loginPassword}
                                    onChange={(e)=>setloginPassword(e.target.value)}
                                />
                            </div>
                            <button className="btn-get-started btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;