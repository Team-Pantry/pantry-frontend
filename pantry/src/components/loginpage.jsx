import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({setUser}) => {

    const [password, setPassword] = useState('')

    const [email, setEmail] = useState('')


    const navigate = useNavigate()

    const handleSubmit = async(event) => {

        event.preventDefault();

        localStorage.setItem('username', email)
        setUser(localStorage.getItem('username'))
        

        setPassword('')

        setEmail('')
 

        navigate('/dashboard')

    }


    return(
        <div id='register-main-div'>
            <div id='register-content-container'>
                <p id='register-title'>Join the Pantry family today</p>
                <form id='register-form' onSubmit={handleSubmit}>
                    <label htmlFor="email" className="user-input-label">Email</label>
                    <input type='text' name="username" className="user-input" value={email} onChange={(event) => {

                        setEmail(event.target.value)
                        }}></input>        
                    <label htmlFor="password" className="user-input-label">Password</label>
                    <input type='password' name="password" className="user-input" value={password} onChange={(event) => {

                        setPassword(event.target.value)
                        }}></input>
                    <div id='register-button-div'>
                    <button className="button" type="submit">Sign in</button>
                    </div>
                </form>
               <Link to='/users/register'> <p id='already-reg'>Don't have an account with us yet? Create one today.</p></Link>
            </div>
        </div>
    )
}

export default Login;