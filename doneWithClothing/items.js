//Admin actions

let products =[];
const items = [{name:"watch", id : "789"},{name:"sweater", id : "145"},{name:"band", id : "729"}];

//add to product list 
function addProduct(item){
    products.push(item);
    return products;
}

//remove from product list 
function removeProduct(_itemID){

    if(products.some(item =>item.id ===_itemID)){
        products = products.filter(product=> product.id != _itemID)
    }

}

//mark as delivered
let delivered = false
function markDelivered(){
    delivered = true;
    return delivered;
}


addProduct({name:"shoe", id : "123"})
addProduct({name:"shirt", id : "456"})
console.log(products)
//removeProduct("123")
