import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchFromAPI } from "../api";


const Register = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(event) => {

        event.preventDefault();
        console.log(username)

        localStorage.setItem('username', username)
        setUser(localStorage.getItem('username'))
        
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        setEmail('')
        setLocation('')

        navigate('/dashboard')

    }


    return(
        <div id='register-main-div'>
            <div id='register-content-container'>
                <p id='register-title'>Join the Pantry family today</p>
                <form id='register-form' onSubmit={handleSubmit}>
                    <label htmlFor="username" className="user-input-label">Name</label>
                    <input type='text' name="username" className="user-input" value={username} onChange={(event) => {
                        setUsername(event.target.value)
                        }}></input>
                    <label htmlFor="email" className="user-input-label">Email</label>
                    <input type='text' name="username" className="user-input" value={email} onChange={(event) => {

                        setEmail(event.target.value)
                        }}></input>    
                    <label htmlFor="email" className="user-input-label">Location</label>
                    <input type='text' name="username" className="user-input" value={location} onChange={(event) => {

                        setLocation(event.target.value)
                        }}></input>      
                    <label htmlFor="password" className="user-input-label">Password</label>
                    <input type='password' name="password" className="user-input" value={password} onChange={(event) => {

                        setPassword(event.target.value)
                        }}></input>
                    <label htmlFor="confirm-password" className="user-input-label">Confirm password</label>
                    <input type='password' name="confirm-password" className="user-input" value={confirmPassword} onChange={(event) => {
                        setConfirmPassword(event.target.value)
                        }}></input>
                    <div id='register-button-div'>
                    <button className="button" type="submit">Create account</button>
                    </div>
                </form>
               <Link to='/users/login'> <p id='already-reg'>Already have an account? Sign in instead.</p></Link>
            </div>
        </div>
    )
}

export default Register;