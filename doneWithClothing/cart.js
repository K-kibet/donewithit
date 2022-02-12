//import renderItems from "./items";
//const cart = renderItems({...cart})

const cart = [];



// add an item to cart
function addToCart(item){
    cart.push(item);
    return console.log(cart);
}

//remove an item from cart 
function removeFromCart(item){
    //cart.filter();
    cart.filter(item => {
    
    })
}

// calculate total value of items in cart
function calculateTotal (items) {
    let totalPrice = 0;
    let totalItems = 0;
    items.forEach(item => {
        let price = item.price
        totalPrice += price;
        totalItems += 1;
    });
    return [totalPrice, totalItems]

}

//checkout your cart
/*function checkOutCart([]){
    
}*/


//test % debug
const items = [
    {
        name : 'shoe',
        price : 200
    },
    {
        name:'shirt',
        price : 20
    }
]


items.forEach(item => {
    addToCart(item)
})


console.log(calculateTotal(cart))
