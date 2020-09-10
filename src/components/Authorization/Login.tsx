import React,{Component } from 'react';
import {
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Label,
    Input,
    Button,
} from "reactstrap";
import APIURL from '../helpers/enviorment.';

interface loginprofile{
    username:string;
    password:string;
}

class Login extends Component<any, loginprofile>{
    state: loginprofile;

    constructor(props:any){
        super(props);
        this.state={username: "", password: ""};
        this.handleSubmit= this.handleSubmit.bind(this);
        this.authorization=this.authorization.bind(this);
    }

    authorization(){
        if(localStorage.getItem('token')=== 'undefind'){
            localStorage.clear();
            alert("Wrong Password or Username")
                window.location.reload(true);
            } else{
                alert("Wrong Password or Username")
                localStorage.clear();
            }
        }

        handleSubmit(event:any) {
            event.preventDefault();
            fetch(`${APIURL}/user/login`,{
                method:"POST",
                body:JSON.stringify({
                    user:{username:this.state.username, password: this.state.password },
                }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            })
            .then((response) => response.json())
            .then((data) =>{
              console.log(this.props)
                this.props.updateToken(data.sessionToken);
            })
            .then(() =>{
                if(localStorage.getItem('token')){
                    this.props.toggle();
                }
                this.authorization();
            });
        }

        render(){
            return(
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label className="Updatetext" htmlFor="username">Username:</Label>
                            <Input
                            onChange={(e)=> this.setState({username: e.target.value})}
                            name="username"
                            value={this.state.username } required placeholder="username"
                            minLength={8}
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$"
                            />
                            <FormFeedback></FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label className="updatetext" htmlFor="password">Password:</Label>
                            <Input
                            onChange={(e) => this.setState({ password: e.target.value})}
                            name="password"
                            minLength={8}
                            placeholder="********"
                            />
                            <FormFeedback></FormFeedback>
                        </FormGroup>
                        <Button id="ButtonSpace" className="Button" type="submit">Login</Button>
                    </Form>
                </div>
            );
        }
    }

    export default Login;