import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
} from "reactstrap";
import APIURL from '../helpers/enviorment.';

interface signupProfile{
    email: string;
    username:string;
    password:string;
    firstName:string;
    lastName:string;
}

class Signup extends Component <any, signupProfile>{
    state:signupProfile;

    constructor(props:any){
        super(props);
        this.state ={
            email:"",
            username:"",
            password:"",
            firstName:"",
            lastName:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     componentDidMount(){
         console.log(this.props)
     }
    handleSubmit(event:any){
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {
            method:"POST",
            body:JSON.stringify({
                user:{
                    email:this.state.email,
                    username:this.state.username,
                    password:this.state.password,
                    firstName:this.state.firstName,
                    lastName:this.state.lastName,
                },
            }),
            headers:new Headers({
                "Content-Type": "application/json",
            }),
        })
        .then((response) => response.json())
        .then((data) => {
           
            this.props.updateToken(data.sessionToken);
        })
        .then(() => {
            if(localStorage.getItem("token")){
                this.props.toggle();
                window.location.reload(true);
            }
        });
    }
    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label className="updatetext" htmlFor="username">Username:</Label>
                        <Input onChange={(e) => this.setState({username:e.target.value})}
                        name="username"
                        value={this.state.username}
                        required
                        placeholder="username"
                        minLength={8}
                        //pattern="^({a-z\d}+)@({a-z\d-}+({a-z}{2,8}))()$"
                        />
                        <FormFeedback></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label className="updatetext" htmlFor="email">Email:</Label>
                        <Input onChange={(e) => this.setState({email: e.target.value})}
                        name="emial"
                        value={this.state.email}
                        required
                        type="email"
                        //pattern="^({a-z\d}+)@({a-z\d-}+({a-z}{2,8}))()$"
                        placeholder="user@email.com"
                        />
                        <FormFeedback></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label className="updatetext" htmlFor="password">password:</Label>
                        <Input onChange={(e) => this.setState({password: e.target.value})}
                        name="password"
                        value={this.state.password}
                        required
                        type="password"
                        minLength={8}
                        placeholder="********"
                        />
                        <FormFeedback></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label className="updatetext" htmlFor="firstName">First Name</Label>
                        <Input onChange={(e) => this.setState({firstName: e.target.value})}
                        name="firstName"
                        value={this.state.firstName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className="updatetext" htmlFor="lastName">Last Name:</Label>
                        <Input onChange={(e) => this.setState({lastName: e.target.value})}
                        name="lastName"
                        value={this.state.lastName}
                        />
                    </FormGroup>
                    <Button id= "ButtonSpace" className="Button" type="submit">Signup</Button>
                </Form>
            </div>
        );
    }
}

export default Signup;