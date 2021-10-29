import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Drinkcard from '../../Components/Drinkcard/Drinkcard';
import Filter from '../../Components/Filter/Filter';

import "./Drinks.css";

const Drinks =() => {
 const [drinks, setDrinks] = useState([]);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const [text, setText] = useState("");
useEffect(() => {
     getDrinks();   
}, [text]);
const getDrinks=async()=>{
     
    setLoading(true);
try {
let response= await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`);
    setDrinks(response.data.drinks);
    setLoading(false);

} catch (error) {
    setError(true);
    setLoading(false);
}
};
    return (
        <div className="drinks" >
                    
<Filter  text={text} setText={setText}/>
  
{loading ?(<h1>Loading...</h1>)
:error ? (<h1>Error </h1>)
 :drinks==null? (<h1>There is no cocktails with this name</h1>)


: (<div className="drinks-list">{drinks.map((el)=>(<Drinkcard drink={el} key={el.idDrink}/>))}</div>
//  :(drinks.map((el)=>el.strDrink))
)}
        </div>
    )
};

export default Drinks;


