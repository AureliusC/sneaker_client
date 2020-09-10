import React, {Component } from "react";
import "../../App.css"
import { Col, Row} from "reactstrap";
import {Link,Route, Switch} from "react-router-dom"
import Home from "./Home";
import LoginPage from "./LoginPage";

class Header extends Component<any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <div className="Navbar">
                <Row>
                    <Col className="nav-link">
                        <Link
                        to="/home"
                        className="nav-link-link"
                        onClick={this.props.clickLogout}
                        >Logout</Link>
                    </Col>
                    <Col className="nav-link">
                        <Link to="/profile" className="nav-link-link">
                            profile
                        </Link>
                    </Col>
                    <Col className="nav-link">
                        <Link to="/home" className="nav-link-link">
                            Home
                        </Link>
                    </Col>
                </Row>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <div className="main-content">
                                <Home />
                            </div>
                        </Route>
                        <Route exact path="/home">
                            <div className="main-content">
                                <Home />
                            </div>
                        </Route>
                        <Route exact path="/profile">
                            <div className="main-content">
                                <LoginPage />
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
            
        );
    }
}

export default Header;
    