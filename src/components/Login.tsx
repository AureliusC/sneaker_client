import React,{useState} from "react";
import {BrowserRouter, Link } from "react-router-dom"
import APIURL from './helpers/enviorment.';

type acceptedProps ={
    updateToken:(token:string) =>void
}

const Login =({updateToken} : acceptedProps) =>{
    const [email,setEmail]= useState("");
    const[password,setPassword]= useState("");

    const handleSubmit =(e:any) => {
        e.preventDefault();

        // const url = `${APIURL}/user/login`;
        const bodyObj ={
            user:{
                email:email,
                password:password,
            },
        };
        fetch('http://localhost:3000/user/login',{
            method:"POST",
            body:JSON.stringify(bodyObj),
            headers: new Headers({
                "Content-Type" :"application/json",
            }),
        })
        .then((res) => res.json())
        .then((json) => {
            
                updateToken(json.sessionToken)
            
        });
    };

    return(
        <div>
            <h4 className="login-title">Budget Login</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="login-emial-label">Email:</label>
                <input
                type="text"
                name="email"
                required
                value={email}
                className="login-email-input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email" 
                />
                <br />
                <br />
                <label htmlFor="password" className="login-password-label">Password:</label>
                <input
                type="password"
                name="password"
                className="login-password-input"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password" />
                <br />
                <button type="submit" value="Login"className="login-button">
                    Login
                </button>
            </form>
            <BrowserRouter>
            <br />
            <br />
            
            </BrowserRouter>
        </div>
    )
};

export default Login;