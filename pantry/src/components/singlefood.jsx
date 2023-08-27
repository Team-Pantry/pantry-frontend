import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import dummyData from "../api/dummy_data";

const SingleFood = () => {
    const [foodItem, setFoodItem] = useState({})

    const {id} = useParams();
    const getFood = async() => {
        for(let i = 0; i < dummyData.length; i++){
            if (dummyData[i].id === id){
                console.log(dummyData[i])
                setFoodItem(dummyData[i])
            }
        }
    }

    useEffect(() => {
        const loadItem = async() => {
            await getFood();
        }
        loadItem();
    }, [])
    return(
        <div id='single-food-main'>
            <div id='single-food-left'>
                <h1 id='single-food-name'>{foodItem.title}</h1>
                <img id='single-product-image' src={foodItem.image} />
            </div>
            <div id='single-food-right'>
                <p id='single-food-desc'>{foodItem.description}</p>
                <p id='traded-by'>Traded by: {foodItem.author}</p>
                <p id='traded-by'>Trader's grocery list: {foodItem.groceryList}</p>
                <button className="button" id='single-product-button'>Request a swap</button>
            </div>
        </div>
    )
}

export default SingleFood;