import React, { useEffect, useState } from 'react';
import Bat from '../Bat/Bat';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    }
    , []);

    return (
        <div className='shop-container'>
            
            <div className='product-container'>
                {
                    products.map(
                        product => <Bat key={product._id} product={product}> 
                        
                        </Bat>
                    )
                }
            </div>

            <div className='cart-container'>

            </div>
        </div>
    );
};

export default Shop;