
let cartList = document.getElementById("cart-list")
let calculateAmount = document.getElementById("amount-calculation")

function createDealsOfTheDay(data){
    console.log(data)
    let createdElement = document.createElement("div")
    createdElement.className = "cart-listing"
    createdElement.innerHTML = `<a href="product-detail.html?id=${data.id}">
        <img src=${data.url} alt="image">
        <div class="title">${data.title}</div>
        <div class="price">${data.price}</div>
        <div class="category">${data.description}</div>
        <div class="title">Rs. ${data.amount}</div>
        </a>
        <button onclick="increaseQuantity(${data.id})">+</button>${data.quantity}<button onclick="decreaseQuantity(${data.id})">-</button>
    `
    return createdElement
}

let totalSum = 0
function amountCalculation(data){
    let createdElement = document.createElement("div")
    totalSum += data.amount * data.quantity
    createdElement.innerHTML = `
     ${data.amount} * ${data.quantity} = ${data.amount * data.quantity}
    `
    return createdElement
}

function cartListing(){
    let cartData = JSON.parse(localStorage.getItem("cart"))
    if(cartData){
        for(let i=0; i<cartData.length; i++){
            let ele = createDealsOfTheDay(cartData[i])
            let data = amountCalculation(cartData[i])
            cartList.appendChild(ele);
            calculateAmount.appendChild(data);
        }
    }else{
        alert("Cart is Empty")
    }
   
}

cartListing()

let total = document.getElementById("total")
total.innerHTML = `Total Amount = ${totalSum}`


function increaseQuantity(id){
    let cartData = JSON.parse(localStorage.getItem("cart"))
    let leftData = cartData && cartData.filter(ele => ele.id != id)
    let filterData = cartData && cartData.find(ele => ele.id == id)
    filterData.quantity += 1
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify([filterData, ...leftData]))
    cartListing()
}

function decreaseQuantity(id){
    let cartData = JSON.parse(localStorage.getItem("cart"))
    let filterData = cartData && cartData.find(ele => ele.id == id)
    if(filterData.quantity == 1){
        alert("Minimum Product must be 1")
    }else{
        let leftData = cartData && cartData.filter(ele => ele.id != id)
        filterData.quantity -= 1
        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify([filterData, ...leftData]))
        cartListing()
    }
}