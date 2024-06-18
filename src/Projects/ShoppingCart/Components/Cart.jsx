import React, { useEffect } from 'react';

const Cart = (props) => {

    function updateQuantity(productId, operation){
        props.updateCart(prevCart=>{
            switch(operation){
                case "increment":{
                    let updatedItemPrice = parseFloat((prevCart[productId].price+(prevCart[productId].price/prevCart[productId].qty)).toFixed(2));
                    return {...prevCart, [productId]:{...prevCart[productId], qty:prevCart[productId].qty+1, price:updatedItemPrice}};
                }
                case "decrement":{
                    let updatedItemPrice = parseFloat((prevCart[productId].price-(prevCart[productId].price/prevCart[productId].qty)).toFixed(2));
                    return {...prevCart, [productId]:{...prevCart[productId], qty:prevCart[productId].qty-1, price:updatedItemPrice}};
                }
                case "remove":{
                    delete prevCart[productId];
                    return {...prevCart};
                }
                default:
                    return;
            }
        })
    }

    function clickHandler(e){
        switch(e.target.className){
            case "cartItemIncreaseQty":{
                updateQuantity(parseInt(e.target.value), "increment");
                break;
            }
            case "cartItemDecreaseQty":{
                updateQuantity(parseInt(e.target.value), "decrement");
                break;
            }
            case "removeItemBtn":{
                updateQuantity(parseInt(e.target.value), "remove");
                break;
            }
            default:
                return;
        }
    }

    useEffect(()=>{
        let totalAmount = Object.values(props.cartProducts).reduce((sum, product)=>{
            return sum+product.price
        },0)
        document.getElementById("total-amount").innerHTML = `$${totalAmount.toFixed(2)}`;

    },[props.cartProducts])

    return(
        // Using event delegation for optimization
        <>
        <ul id="cart" onClick={(e)=>clickHandler(e)}>
            {
                Object.keys(props.cartProducts).length>0?
                Object.values(props.cartProducts).map(product=>{
                    return(
                        <li id="cartItem" key={product.id}>
                            <p className="cartItemTitle">{product.title}</p>
                            <div className="cartItemDetails">
                                <p className="cartItemPrice">${product.price}</p>
                                <div className="cartItemQtySection">
                                    <button className="cartItemDecreaseQty" disabled={product.qty===1?true:false} value={product.id}>-</button>
                                    <p className="cartItemQty">{product.qty}</p>
                                    <button className="cartItemIncreaseQty" value={product.id}>+</button>
                                    <button className="removeItemBtn" value={product.id}></button>
                                </div>
                            </div>
                        </li>
                    )
                })
                :
                <li id="empty-cart-msg">There are no items in your cart.</li>
            }
        </ul>
        <div id="cart-total">
            <span>Total Amount: </span>
            <span id="total-amount">1234</span>
        </div>
        </>
    )
}

export default Cart;