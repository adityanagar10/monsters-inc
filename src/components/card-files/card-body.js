import React from 'react';
import './card.styles.css'
import CardComponent from './card.component';
export default (props)=>{  
    return(<div className='card-body'>
     <h1>"Aditya"</h1>
    {props.monsters.map(monster => {return(
        <CardComponent key={monster.id} monster={monster} /> 
        )})} 
    </div>)};