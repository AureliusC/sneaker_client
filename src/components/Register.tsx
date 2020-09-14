import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from "./helpers/enviorment."


type acceptedProps = {
    updateToken:(token:string) => void
}

const Signup = ({ updateToken }: acceptedProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const handleSubmit = (event:any) => {
        event.preventDefault();
        
        fetch('http://localhost:3000/user/create', {
            method: "POST",
            body: JSON.stringify({ user: { email: email, password: password, firstName: firstName, lastName: lastName } }),
            headers:{
                "Content-Type": "application/json"
        }})
            
           
        .then(
            (res) => res.json()
        ).then((data) => {
            console.log(data)
            window.confirm("Account has been successfully created")
            updateToken(data.sessionToken)
           
         })
        }

    return (
        <div>
            <h4 className="registration-title">Create An Account</h4>
            <Form onSubmit={handleSubmit}>

            <FormGroup>
                    <Label htmlFor="firstName" className="registration-firstname-label">First Name:</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} required name="firstName" value={firstName} placeholder="Enter First Name..." className="registration-firstname-input" aria-required/>
                </FormGroup>

                <br/>

                <FormGroup>
                    <Label htmlFor="lastName" className="registration-lastname-label">Last Name:</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} required name="lastName" value={lastName} placeholder = "Enter Last Name" className="registration-lastname-input" aria-required/>
                </FormGroup>

                <br/>
                
                <FormGroup>
                    <Label htmlFor="email" className="registration-email-label">Email:</Label>
                    <Input onChange={(e) => setEmail(e.target.value)}  required name="email" value={email} placeholder="Enter Email" className="registration-email-input" aria-required/>
                </FormGroup>

                <br/>
                
                <FormGroup>
                    <Label htmlFor="password" className="registration-password-label">Password:</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} required name="password" value={password} type="password" className="registration-password-input" placeholder="Enter Password" aria-required/>
                </FormGroup>

                <br />
                
                <button type="submit" value="Register" className= "register-button"> Create an account</button>
            
            </Form>
            
            <br />
            <br />
           
        </div>
    )

}

export default Signup;
