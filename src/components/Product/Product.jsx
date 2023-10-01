import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../fakeData/fakedb';

const Product = (props) => {
    const {img, name, seller, quantity, price, ratings, id} = props.product;
   const handleAddToCart = props.handleAddToCart;
   
   
    return (
        <div className='product'>
           <img src={img} alt=''/>
           <div className='product-info'>
                <h6 className='product-name'>
                Product Name: {name}
                </h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating:  {ratings}</p>
           </div>
           <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
            Add to cart 
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;