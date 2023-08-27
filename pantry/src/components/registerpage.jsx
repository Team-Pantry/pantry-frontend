import React from "react";

const Register = () => {
    return(
        <div id='register-main-div'>
            <div id='register-content-container'>
                <p id='register-title'>Join the Pantry family today</p>
                <form id='register-form'>
                    <label htmlFor="username" className="user-input-label">Username</label>
                    <input type='text' name="username" className="user-input"></input>
                    <label htmlFor="password" className="user-input-label">Password</label>
                    <input type='text' name="password" className="user-input"></input>
                    <label htmlFor="confirm-password" className="user-input-label">Confirm password</label>
                    <input type='text' name="confirm-password" className="user-input"></input>
                    <div id='register-button-div'>
                    <button className="button" type="submit">Create account</button>
                    </div>
                </form>
                <p id='already-reg'>Already have an account? Sign in instead.</p>
            </div>
        </div>
    )
}

export default Register;