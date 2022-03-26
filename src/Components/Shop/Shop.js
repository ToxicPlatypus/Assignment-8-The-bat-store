import React, { useEffect, useState } from 'react';
import Bat from '../Bat/Bat';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState('');

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    }
    , []);

    const generateRandom = (cart) => {
        const random = cart[Math.floor(Math.random() * cart.length)];
        setRandom(random);
        console.log(random);
    } 

    const clearAll = () =>{
        setCart([]);
    }

    const handleAddToCart = (product) => {
        // console.log('clicked');
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(
                        product => <Bat key={product._id} product={product} handleAddToCart={handleAddToCart}> 
                        </Bat>
                    )
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart} generateRandom={generateRandom} random={random} clearAll={clearAll}></Cart>
            </div>

        </div>
    );
};

export default Shop;