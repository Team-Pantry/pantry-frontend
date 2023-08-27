import React from "react";
import { useParams } from "react-router";

const SingleFood = () => {
    
    const {id} = useParams();
    console.log(id)
    return(
        <div id='single-food-main'>
            <div id='single-food-left'>
                <h1 id='single-food-name'>81 carrots</h1>
                <img id='single-product-image' src="https://seed2plant.in/cdn/shop/products/carrotseeds.jpg?v=1604032858" />
            </div>
            <div id='single-food-right'>
                <p id='single-food-desc'>Accidentally bought 90 carrots instead of 9. I like carrots but not THAT much. Let me know if you'd like to trade.</p>
                <p id='traded-by'>Traded by: Shruthi</p>
                <button className="button" id='single-product-button'>Request a swap</button>
            </div>
        </div>
    )
}

export default SingleFood;