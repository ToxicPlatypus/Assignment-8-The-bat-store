import React from 'react';
import './Bat.css'

const Bat = (props) => {
    const {name, price, image} = props.product;
    return (
        <div className='product'>
           <img src={image} alt="" />
           <h2>{name}</h2>
           <p>{price}</p>
        </div>
    );
};

export default Bat;