let selectedProductId = location.search.split('=')[1]

function productDetail(){
    let data = JSON.parse(localStorage.getItem("productList"))
    let filterData = data.find(ele => ele.id == selectedProductId)

    let productId = document.querySelector("#product-detail")
    productId.innerHTML = `
    <img src=${filterData.url} alt="image">
    <div class="title">${filterData.title}</div>
    <div class="price">${filterData.price}</div>
    <div class="category">${filterData.description}</div>
    <div class="title">Rs. ${filterData.amount}</div>
    <button id="add-to-cart"> Add to Cart </button>
    `

    let addToCartBtn = document.querySelector("#add-to-cart")
    addToCartBtn.addEventListener('click',()=>addToCart(filterData))
}

productDetail()



function addToCart(data){
    let cartData = JSON.parse(localStorage.getItem("cart"))
    let cart = cartData ?? []
    let filterData = cartData && cartData.find(ele => ele.id == data.id)
    if(filterData){
        alert("Product is already present in Cart")
    } else {
        data.quantity = 1
        cart.push(data)
        localStorage.setItem('cart',JSON.stringify(cart))
    }
}
