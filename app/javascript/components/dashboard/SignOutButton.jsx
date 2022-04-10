import React, {useState,setState} from 'react';
import './style.css'
function SignOutButton() {

    const handleSubmit  = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user.email");
        window.location.reload();
    }

    return(
        <div>
            <button onClick={()=>handleSubmit()} type="submit" class="btn btn-signout">Sign Out</button>
        </div>       
    )       
}

export default SignOutButton