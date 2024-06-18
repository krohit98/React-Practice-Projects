import React from 'react';
import * as service from '../service';

const ProductList = (props) => {

    const [products, setProducts] = React.useState([])

    function addProduct(e){
        if(e.target.localName === "button"){
            let product = JSON.parse(e.target.value)
            props.addToCart(prevCart => {
                if(prevCart[product.id]){
                    let updatedItemPrice = parseFloat((prevCart[product.id].price+(prevCart[product.id].price/prevCart[product.id].qty)).toFixed(2));
                    return {...prevCart, [product.id]:{...prevCart[product.id], qty:prevCart[product.id].qty+1, price:updatedItemPrice}}
                }
                else
                    return {...prevCart, [product.id]:{id:product.id, title:product.title, price:product.price, qty:1}}
            })
        }
    }

    function showEnlargeImage(e){
        if(e.target.localName === "img"){
            document.getElementById("enlargedImage").src = e.target.src
            document.getElementById("enlargedImage").style.display = "block";
        }
    }

    function hideEnlargeImage(e){
        if(e.target.localName === "img"){
            document.getElementById("enlargedImage").style.display = "none";
        }
    }

    async function fetchProducts(){
        let productList = await service.getProducts();
        setProducts([...productList])
    }

    React.useEffect(()=>{
        fetchProducts();
    },[])

    return(
        // Using event delegation for optimization
        <>
        <ul id="productList" onClick={(e)=>addProduct(e)} onMouseOver={(e)=>showEnlargeImage(e)} onMouseOut={(e)=>hideEnlargeImage(e)}>
            {products.length>0?
                products.map(product=>{
                    return(
                        <li className="productItem" key={product.id}>
                            <div className="productImage">
                                <img src={product.image} alt="product"/>
                            </div>
                            <div className="productDetails">
                                <p className="productTitle">{product.title}</p>
                                <p className="productCategory">Category: {product.category}</p>
                                <p className="productRating">Rating: {product.rating.rate}</p>
                                <p className="productPrice">${product.price}</p>
                                <button className='addItemBtn' value={JSON.stringify(product)}>Add</button>
                            </div>
                        </li>
                    )
                })
            :
                <li id="loader-wrapper">
                    <div id="loader"></div>
                </li>
            }
        </ul>
        <img id="enlargedImage" src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="enlarged product" />
        </>
    )
}

export default ProductList;