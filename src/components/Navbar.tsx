import React from 'react';
import '../App.css'

type acceptedProps ={
    deleteToken:() => void
}

const Navbar = ({deleteToken}:acceptedProps) =>(
    <div className="nav">
        <button className="bg-red 700 hover:bg-green-800 text-white  font-bold py1 px m-3 rounded focus :outline-none focus:shawdow-outline" onClick={deleteToken}>Logout</button>
    </div>
);

export default Navbar ;