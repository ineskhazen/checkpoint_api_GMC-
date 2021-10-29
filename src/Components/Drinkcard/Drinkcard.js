

import { Zoom } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import "./Drinkcard.css";
// import Drinks from '../../Pages/Drinks/Drinks';

const Drinkcard = ({drink}) => {
    return (
        <Zoom in ={true} timeout={1000}>
        <div className="drink-card"> 
        <div className="titlecard">
         <h2>{drink.strDrink}</h2>
         </div>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} style={{border: 'solid 1px black', width:'100%'}}/>
        <Link to ={`/Drinks/Drink/${drink.idDrink}`}><div className="btn">Details</div></Link >
              
        </div>
        </Zoom>
       
        
    )
}

export default Drinkcard;
