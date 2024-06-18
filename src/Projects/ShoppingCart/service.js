async function getProducts(){
    let products;
    await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(jsonRes => products = jsonRes)

    return products
}

export {getProducts};