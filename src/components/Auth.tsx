import React ,{useState} from 'react';
import {Container,Row ,Col} from 'reactstrap';
import Signup from './Register';
import Login from './Login';

interface Props {
    updateToken:(token:string) => void
}

export const Auth = ({updateToken}:Props) =>{
    const [LogIn, setLogIn] =useState(true);

    return(
    <Container className="auth-container">
        <Row>
            <Col md="6">
                {LogIn ? <Login updateToken={updateToken} />:<Signup updateToken={updateToken} />} 
            </Col>
            <button className="auth-button" onClick={() => setLogIn(!LogIn)}>
                {Login ? <p className="sign-up-text">Need an account? Signup up here</p>: <h5>Already have an account? Log in here!</h5>}
            </button>
        </Row>
    </Container>
    )
}
export default Auth;