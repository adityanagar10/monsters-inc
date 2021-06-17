import bodyParser from 'body-parser';
import React from 'react';
import './card.styles.css'
export default (props)=>{  
    return(<div className='card-container'>
    {props.monsters.map(monster => {return(<h1 key={monster.id}>{monster.name}</h1>)})} 
    </div>)};