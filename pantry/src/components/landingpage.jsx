import { Link } from "react-router-dom";
import React from "react";

const LandingPage = () => {

return(
    <div id="landing-main">
        <div id='landing-blurb-div'>
            <p id="landing-blurb">It takes a village.</p>
            <div id='landing-button-div'>
            <Link to='/users/login'><button className="button" id="landing-button">Start sharing</button></Link>
            </div>
        </div>
        <img id='landing-img' src="https://hips.hearstapps.com/hmg-prod/images/healthy-fresh-rainbow-colored-fruits-and-vegetables-royalty-free-image-1651630109.jpg?crop=0.668xw:1.00xh;0.0799xw,0&resize=1200:*" />
    </div>
)    
}

export default LandingPage;