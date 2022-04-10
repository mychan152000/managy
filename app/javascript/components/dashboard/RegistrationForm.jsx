import React, {useState,setState} from 'react';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

function RegistrationForm() {
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }

    const handleSubmit  = () => {
        fetch("/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
            email: email,
            password: password,
            },
        }),
        })
        .then((res) => {
            if (res.ok) {
            localStorage.setItem("user.email", email);
            localStorage.setItem("token", res.headers.get("Authorization"));
            window.location.reload();
            return res.json();
            } else {
            throw new Error(res);
            }
        })
        .then((json) => console.dir(json))
        .catch((err) => {
            setError(err);
            console.error(err);
            return false;
        });
    }

    return(
        <div className="container">
            <Form className="form">
                <h1>Registration</h1>
                {error &&
                        <div className="error">
                            <p> {error} </p>
                        </div> 
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" placeholder="Enter email" value={email} onChange = {(e) => handleInputChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="Password" value={password} onChange = {(e) => handleInputChange(e)} />
                </Form.Group>
                <Button variant="primary" onClick={()=>handleSubmit()} >
                    Sign Up
                </Button>
            </Form>
        </div>
       
    )       
}

export default RegistrationForm