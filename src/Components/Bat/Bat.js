import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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

           
           <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
               <p className='btn-text'>Add To Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
           

           
        </div>
    );
};

export default Bat;