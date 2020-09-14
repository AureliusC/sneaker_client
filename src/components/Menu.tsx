import React , {useState } from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import {Dashboard} from './Dashboard';
import Auth from './Auth';
import '../App.css';
  

interface Props{
    name?:string;
}

export const Menu =(props:Props) =>{

    const [token,setToken]= useState(localStorage.getItem("token"));

    const updateToken= (newToken:string) =>{
        localStorage.setItem("token", newToken)
        setToken(newToken);

    }
    const deleteToken =()=>{
        localStorage.removeItem("token")
        setToken('')
    }

    let routes
    if (token){
        routes=(
            <Switch>
                <Route path="/loutgot" />
            </Switch>
        )
    }

    return(
        <div>
            {token?
            <div>
                {routes}
                <Dashboard deleteToken={deleteToken} />
        </div>
        :
        <Auth updateToken={updateToken} />}
        </div>
)};

export default Menu ;