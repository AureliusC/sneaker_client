import React,{Component} from 'react';
import "../../App.css";
import Auth from "../Authorization/Auth"
import Profile from "./Profile"

interface auth{
    sessionToken:string;
}

//type Props={sessionToken:string}

class LoginPage extends Component<any> {
    state: auth;

    constructor(props:any){
        super(props);
        this.state={sessionToken: ""};
    }

    componentDidMount(){
        if(localStorage.getItem('token') === 'undefined'){
            localStorage.clear();
            this.setState({sessionToken: ''});
            this.setState({authorization:false})
        } else if (localStorage.getItem('token')){
            this.setState({sessionToken:localStorage.getItem('token')})
        }
    };

    protectedViews(){
        return(this.state.sessionToken === localStorage.getItem('token') ? <Profile token={this.state.sessionToken}/>: <Auth updateToken={this.props.updateToken}/>)
    }
    render(){
        return(
            <div>
                {this.protectedViews()}
            </div>
        );
    }
};
export default LoginPage;