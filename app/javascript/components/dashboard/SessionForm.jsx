import React, {useState,setState} from 'react';
import './style.css'
function SessionForm() {
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
        fetch("/login", {
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
            window.location.reload();
            return res.json();
            } else {
            return res.text().then((text) => Promise.reject(text));
            }
        })
        .then((json) => console.dir(json))
        .catch((err) => {
            setError(err);
            console.error(err);
        });
    }

    return(
        <div className="form">
            <div className="form-body">
                {error &&
                    <div className="error">
                        <p> {error} </p>
                    </div> 
                }
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
                <button onClick={()=>handleSubmit()} type="submit" className="btn">Sign In</button>
            </div>
        </div>
       
    )       
}

export default SessionForm