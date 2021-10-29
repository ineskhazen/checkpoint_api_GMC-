
import { Zoom } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Drink.css";


const Drink = ({history}) => {
    const [drink,setDrink] = useState({});
    const {id}=useParams();
    useEffect(()=>{getDrink();
    },[]);
    const getDrink=async()=>{
        const{data}=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
         setDrink(data.drinks[0]);
       
    };
    return (
      <Zoom in ={true} timeout={1000}>
        <div className="détail_drink">

             <h1 className="title ">{drink.strDrink}</h1> 
             <p className="information">{drink.strInstructions}</p>
             <img className="im" src={drink.strDrinkThumb} alt="" style={{border: 'solid 1px black', width:'40%'}} />
             <div className="type">
             <h5>{drink.strAlcoholic}</h5>
             </div>
             <div className="info">
                <h2> Ingredients:</h2>
                 <ul>
                  <div>{drink.strIngredient1}</div>
                  <div>{drink.strIngredient2}</div>
                  <div>{drink.strIngredient3}</div>
                  <div>{drink.strIngredient4}</div>
                  <div>{drink.strIngredient5}</div>
                    </ul>
            </div>
              <div className="control">
                <button className="btn1" onClick={()=>history.goBack()}>Go Back</button>
             </div>
        </div>
        </Zoom>
        
    )
}

export default Drink;
