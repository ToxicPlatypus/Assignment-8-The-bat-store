import React from 'react';
import './Bat.css'

const Bat = (props) => {
    const {name, price, image} = props.product;
    // console.log(props)
    const {handleAddToCart} = props;
    return (
        <div className='product'>
           <img src={image} alt="" />
           <div className="product-info">
           <h2>Name: {name}</h2>
           <p>Price: {price}</p>
           </div>
           <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Bat;