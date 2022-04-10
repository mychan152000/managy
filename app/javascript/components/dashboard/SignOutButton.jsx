import React, {useState,setState} from 'react';
import './style.css'
function SignOutButton() {

    const handleSubmit  = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return(
        <div>
            <button onClick={()=>handleSubmit()} type="submit" class="btn">Sign Out</button>
        </div>       
    )       
}

export default SignOutButton