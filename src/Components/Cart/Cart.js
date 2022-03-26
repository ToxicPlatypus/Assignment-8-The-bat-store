import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, generateRandom, random, clearAll} = props;
    // const [id, name, image] = cart;

    

    if(cart[0]){
        // console.log(cart[0].name);
    }
    if(cart.length === 3){ 
    }

    return (
        <div className='cart'>
        <h3>Selected Bats</h3>

        {cart.map((c) => 
            (
	        <p> {c.name} </p>
            ))}

            <button className='cartButton' onClick={() => generateRandom(cart)}>Choose one for me</button>
            <p>{random.name}</p>

            <button className='cartButton' onClick={() => clearAll()}>Choose again</button>
        </div>
        
    );

};

export default Cart;

