import React from "react";

const FoodSwap = () => {
    
    return(
        <div id='swap-main'>
            <div id='swap-requests'>

            </div>
            <div id='grocery-list'>
                <p id='grocery-list-title'>My grocery list</p>
                <ul id='grocery-item-list'>
                    <li>Carrots</li>
                    <li>Cheddar Cheese</li>
                    <li>Swiss Cheese</li>
                    <li> Havarti Cheese</li>
                    <li>Gouda Cheese</li>
                    <li>Manchego Cheese</li>
                    <li> Halloumi Cheese</li>
                    <li>Mozzarella Cheese</li>
                </ul>
                <div id='add-grocery'>
                <input type='text' id='grocery-item'></input>
                <button className="button" id='grocery-button'>Add item</button>
                </div>

            </div>
        </div>
    )
}

export default FoodSwap;