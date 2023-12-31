import { getShoppingCart } from "../fakeData/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

// if cart data is in database, you have to async await
const storeCart = getShoppingCart();
const savedCart = [];

console.log(storeCart);
for(const id in storeCart){
    const addedProduct = products.find(pd => pd.id === id);
    if(addedProduct){
        const quantity = storeCart[id];
        addedProduct.quantity = quantity
        savedCart.push(addedProduct);
    }
}

    console.log(products);
    return savedCart;

}

export default cartProductsLoader;