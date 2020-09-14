import React ,{useState} from 'react'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import './App.css';


function App(){
    return(
        <div className ="App">

            <Router>
                <Menu/>
            </Router>
        </div>
    )
}

export default App;