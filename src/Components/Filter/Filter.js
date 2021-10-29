import React from 'react'
import "./Filter.css";

const Filter = ({text,setText}) => {
    return (
        <div className="filter">
           <input onChange={(e)=>setText(e.target.value)}/> 
        </div>
    )
}

export default Filter;