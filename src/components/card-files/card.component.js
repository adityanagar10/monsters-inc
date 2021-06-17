import React from 'react';
import './card.container.styles.css'

function cardcomponent(props){
    return(
        <div className="card-container"> 
        <img alt="Monster Image" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
        </div>)
}

export default cardcomponent;