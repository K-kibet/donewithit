const products = [],
    elementsContainer = document.querySelector(".items"),
    elements = elementsContainer.querySelectorAll('.item')
    //likeButton = element.querySelector(".like");

products.push({
    title: "Fivem setup",
    price : 250,
    isLiked:false,
    img:'',
    description:"",
    sales: 0
})


products.push({
    title: "WordPress development",
    price : 250,
    isLiked:false,
    description : "Lorem ipsum",
    img:'dadada.png',
    sales: 30
})

//mark as liked
const makeLiked =()=>{
    products.forEach(product=>{
        if(!product.isLiked){
            product.isLiked = !product.isLiked;
        }
    })
}


function displayItems(){
    products.forEach(product=>{

        let status = product.isLiked ? "Liked" : "Like"

        const item = `     
                <div class="item">
                    <div class="title"></div>
                    <img src=${product.img} alt=".">
                    <div class="description">${product.description}</div>
                    <div class="actions">
                        <div class="user-actions">
                            <div class="like" onClick="">${status}</div>
                            <div class="share">Share</div> 
                            <div class="sales">Sales: <span>${product.price}</span></div>                           
                        </div>
                        <button class="booking">Book now</button>
                    </div>
                </div>`
                
                const container = document.querySelector('.items');
                container.insertAdjacentHTML("beforeend", item)
    })
}




displayItems()











makeLiked()
console.log(products[0].isLiked)




