
let cartList = document.getElementById("cart-list")
let calculateAmount = document.getElementById("amount-calculation")

function createDealsOfTheDay(data){
    console.log(data)
    let createdElement = document.createElement("a")
    createdElement.href = `product-detail.html?id=${data.id}`
    createdElement.className = "cart-listing"
    createdElement.innerHTML = `
        <img src=${data.url} alt="image">
        <div class="title">${data.title}</div>
        <div class="price">${data.price}</div>
        <div class="category">${data.description}</div>
        <div class="title">Rs. ${data.amount}</div>
        </div>
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