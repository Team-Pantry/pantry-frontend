import React from "react";

const FoodSwap = () => {
    const dummySwapRequests = [
        {
            'id': '1',
            'from': 'JT',
            'message': 'I have 81 carrots I can trade for your sourdough bread',
            'regarding': 'Sourdough bread',
            'date': 'today'
        },
        {
            'id': '2',
            'from': 'Alex',
            'message': 'I want some sourdough bread! I can trade some cheddar cheese',
            'regarding': 'Sourdough bread',
            'date': 'yesterday'
        },
        {
            'id': '3',
            'from': 'Victoria',
            'message': 'I have manchego cheese I am willing to trade for some sourdough! Please respond, thanks.',
            'regarding': 'Sourdough bread',
            'date': 'yesterday'
        },
        {
            'id': '$',
            'from': 'Alex 2',
            'message': 'Please',
            'regarding': 'Sourdough bread',
            'date': 'yesterday'
        },
    ]
    
    return(
        <div id='swap-main'>
            <div id='swap-requests'>
                <p id='swap-requests-title'>Latest food swap requests</p>
                {
                    dummySwapRequests.map(item => {
                        return(
                            <div key={item.id} className="swap-request">
                                <p><strong>Date: </strong> {item.date}</p>
                                <p><strong>From: </strong> {item.from}</p>
                                <p><strong>Regarding:  </strong>{item.regarding}</p>
                                <p><strong>Message: </strong> {item.message}</p>
                                <div id='swap-reply'>
                                <input type='text' id='swap-reply-input' placeholder="Type a response"></input>
                                <button className="button" id='grocery-button'>Reply</button>
                                </div>
                            </div>
                        )
                    })
                }
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