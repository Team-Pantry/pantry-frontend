import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";


const Header = ({setUser}) => {
    const navigate = useNavigate()

return(
<>
    {
        localStorage.getItem('username')

        ?   (<div id='header-main-div'>
            <Link to='/'><img id='pantry-main-logo' src={require("./pantry-main-logo.png")}/></Link>
                <div id="nav-bar">
            <Link to='/dashboard'><p className="nav-bar-links"> Dashboard</p></Link>
            <Link to='/swap'><p className="nav-bar-links"> Food swap</p></Link>
            <button className="nav-bar-links" id='logout-button' onClick={() => {
                localStorage.removeItem('username')
                setUser('')
                navigate('/')
            }}> Logout</button>
        </div>
        </div>)

        : (<div id='header-main-div'>
            <Link to='/'><img id='pantry-main-logo' src={require("./pantry-main-logo.png")}/></Link>
            <div id="nav-bar">
                <Link to='/users/register'><p className="nav-bar-links" id="sign-in-header"> Sign in or Register</p></Link>
            </div>
            </div>)
    }
    </>

)





}

export default Header;