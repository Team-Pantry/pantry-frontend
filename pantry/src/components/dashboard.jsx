import React, { useEffect, useState }  from "react";
import { fetchFromAPI } from "../api";
import { Link } from "react-router-dom";


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
            <h1 id='dashboard-title'>What's In Our Pantry Today</h1>
            <div id='main-shelf'>
                {
                    items.map(item => {
                        return(
                            <div key={item.id} className="item">
                                <img className='item-image' src={item.url} />
                                <Link to={`/dashboard/food/${item.id}`}>
                                <p className="item-name">Item Title</p>
                                </Link>
                                <p className="shared-by">Shared by Shruthi</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Dashboard;