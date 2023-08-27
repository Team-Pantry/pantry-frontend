import React from "react";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../api";


const Dashboard = () => {

    const [items, setItems] = useState([]);
    
    const getAllItems = async() => {
        const myItems = await fetchFromAPI({
            path:'photos'
        })
        console.log(myItems)
        setItems(myItems.slice(0, 1000))

    }

    useEffect(() => {
        const loadDash = async() => {
            await getAllItems();
        }
        loadDash();
    }, [])
    return(
        <div id='dashboard-main-div'>
            <div id='main-shelf'>
                {
                    items.map(item => {
                        return(
                            <div key={item.id} className="item">
                                <img className='item-image' src={item.url} />

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Dashboard;