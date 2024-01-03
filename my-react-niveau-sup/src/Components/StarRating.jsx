import React from 'react';
import './StarRating.scss';

function StarRating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? 'star filled' : 'star'}>
            ★
        </span>
    ));

    return <div className="star-rating">{stars}</div>;
}

export default StarRating;
