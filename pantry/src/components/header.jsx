import React, {useState} from "react";
import { Link } from "react-router-dom";


const Header = () => {

return(
    <div id='header-main-div'>
        <img id='pantry-main-logo' src={require("./pantry-main-logo.png")}/>
        <div id="nav-bar">
            <p className="nav-bar-links"> Dashboard</p>
            <p className="nav-bar-links"> Trade Requests</p>
            <p className="nav-bar-links"> Search</p>
            <Link to='/users/register'><p className="nav-bar-links"> Sign Up/Login</p></Link>
        </div>
    </div>
)





}

export default Header;