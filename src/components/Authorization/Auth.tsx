import React, {Component } from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Signup from  "./Signup";
import Login from "./Login";

interface auth{
    sessionToken: string;
    login: boolean;
    modal: boolean;
}

class Auth extends Component<any>{
    state:auth;

    constructor(props:any){
        super(props);
        this.state={sessionToken:"", login: false, modal: false};
        this.toggle=this.toggle.bind(this);
        this.title=this.title.bind(this);
        this.loginToggle = this.loginToggle.bind(this);
        this.updateToken = this.updateToken.bind(this);
    }

    title(){
        return this.state.login ? "Login" : "Signup";
    }

    loginToggle(event:any){
        event.preventDefault();
        
        this.setState({login:!this.state.login});
    }
    updateToken(newToken: any){
        localStorage.setItem("token", newToken);
        this.setState({sessionToken:newToken});
        console.log(this.state.sessionToken);
    }

    toggle(){
        this.setState({modal:!this.state.modal});
    }

    render(){
        return(
            <div className="main">
            <h4>
                Login
            </h4>
            <div className="mainDiv">
                <Button id="ButtonSpace" className="Button mainModalButton" onClick={this.toggle}>
                    Signup or Login
                </Button>
                {!this.state.login ?(
                    <Modal className ="updateprofilemodal"
                    isOpen={this.state.modal}
                    toggle={this.toggle} >
                    
                        <button type="button" className="close Button"
                        aria-label="close"
                        onClick={this.toggle} >
                            <span aria-hidden="true" className="CloseButton">Close</span>
                        </button>
                        <ModalBody>
                            <Signup updateToken={this.updateToken} toggle={this.toggle} />
                        </ModalBody>
                        <ModalFooter>
                            <Button id="ButtonSpace" className="Button" onClick={this.loginToggle}>
                                {!this.state.login? "Member: Login": "Not A Member?:Signup"}
                            </Button>
                        </ModalFooter>
                        </Modal>
                ) : (
                    <Modal className="updateprofilemodal" isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>{this.title()}</ModalHeader>
                        <ModalBody>
                            <Login updateToken={this.updateToken} toggle={this.toggle} / >
                        </ModalBody>
                        <ModalFooter>
                            <Button id="ButtonSpace" className="Button" onClick={this.toggle} >
                                {this.state.login ? " Not A Member : Signup" : "Already a Member: Login"}
                            </Button>
                        </ModalFooter>
                    </Modal>                
                )}
            </div>
            </div>
        )
    }

}
export default Auth;