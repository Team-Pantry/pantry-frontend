import React, { useEffect, useState }  from "react";
import { fetchFromAPI } from "../api";
import { Link } from "react-router-dom";
import dummyData from "../api/dummy_data";


const Dashboard = () => {

    const [items, setItems] = useState([]);
    
    const getAllItems = async() => {

        setItems(dummyData)

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
            <div id='search-div'>
                <input type='text' placeholder="Search for an item" id='search-bar'></input>
                <input type='text' placeholder="Location" id='location-search'></input>
                <button className="button" id='search-button'>Search</button>
            </div>
            <div id='main-shelf'>
                {
                    items.map(item => {
                        return(
                            <div key={item.id} className="item">
                                <img className='item-image' src={item.thumbnail} />
                                <Link to={`/dashboard/food/${item.id}`}>
                                <p className="item-name">{item.title}</p>
                                </Link>
                                <p className="shared-by">Shared by {item.author}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Dashboard;