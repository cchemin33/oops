import React from 'react';
import './Card.scss';
import StarRating from './StarRating';

function Card () {
    return <>
        <img src="src/assets/pexels-pixabay-47730.jpg" alt="terrain foot"/>
        <h1>Title</h1>
        <StarRating/>
        <h2 id="Secondary"> Secondary Text</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <hr/>
        <h2 id="Subtitle"> 
        Subtitle
        </h2>
            <div id="button">
                <button className="buTTon">Item 1</button>
            <button className="buTTon">Item 2</button>
            <button className="buTTon">Item 3</button>
            <button className="buTTon">Item 4</button>
            </div>
        <h2 id="Titre3">
            Action 1
        </h2>
        </>
}

export default Card;