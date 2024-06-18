import React from 'react';
import ProductList from './ProductList';
import '../style.css'
import Cart from './Cart';

const ShoppingCart = () => {

    const[cartProducts, setCartProducts] = React.useState({})

    return(
        <div id="shopping-cart">
            <div id="product-section">
                <div id="product-heading">Products</div>
                <ProductList addToCart={setCartProducts}/>
            </div>
            <div id="cart-section">
                <div id="cart-heading">Cart</div>
                <Cart cartProducts={cartProducts} updateCart={setCartProducts}/>
            </div>
        </div>
    )
}

export default ShoppingCart;