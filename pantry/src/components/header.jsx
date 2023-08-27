import React, {useState} from "react";
import { Link } from "react-router-dom";


const Header = () => {

return(
    <div id='header-main-div'>
        <Link to='/'><img id='pantry-main-logo' src={require("./pantry-main-logo.png")}/></Link>
        <div id="nav-bar">
            <Link to='/dashboard'><p className="nav-bar-links"> Dashboard</p></Link>
            <p className="nav-bar-links"> Trade Requests</p>
            <p className="nav-bar-links"> Search</p>
            <Link to='/users/register'><p className="nav-bar-links"> Sign Up/Login</p></Link>
        </div>
    </div>
)





}

export default Header;