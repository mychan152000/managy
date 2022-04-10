import React, {useState,setState} from 'react';
import './style.css'
const axios = require("axios");
function RegistrationForm() {
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

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
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));
            return res.json();
            } else {
            throw new Error(res);
            }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err));
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm