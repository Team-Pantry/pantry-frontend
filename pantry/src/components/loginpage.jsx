import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div id="login-main-div">
            <div id='register-content-container'>
                <p id='register-title'>Sign into your Pantry account</p>
                <form id='register-form'>
                    <label htmlFor="username" className="user-input-label">Username</label>
                    <input type='text' name="username" className="user-input"></input>
                    <label htmlFor="password" className="user-input-label">Password</label>
                    <input type='text' name="password" className="user-input"></input>
                    <div id='register-button-div'>
                    <button className="button" type="submit">Log in</button>
                    </div>
                </form>
               <Link to='/users/register'> <p id='already-reg'>Don't have an account with us yet? Create one today.</p></Link>
            </div>
        </div>
    )
}

export default Login;