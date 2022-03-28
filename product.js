let bigStealsOfTheWeekData = [
    {
        id: 1,
        url: "/assets/images/ka-ht-214-craftsfort-original-imag5qwapevkuxuu.jpeg",
        title: "Luggage Rack, Shoe Racks ....",
        price: "Upto 65% off",
        description: "Solidwood,Metal,Plastic,Kids ...",
        amount: 3000
    },
    {
        id:2,
        url: "/assets/images/gc-1120111cma-45-woodland-denim-original-imafdrgtvvmmdveg.jpeg",
        title: "Woodland, Lee Cooper & more",
        price: "Up to 60% off",
        description: "Men's Casual Shoes, Sandals...",
        amount: 4000
    },
    {
        id:3,
        url: "/assets/images/samsung-sm-t975nzkainu-original-imafuhg9tfydgg78.jpeg",
        title: "SAMSUNG Galaxy Tab S7+ 6 GB RAM",
        price: "Extra ₹2000 Off!",
        description: "Electronics, Mobile...",
        amount: 12000
    },
    {
        id:4,
        url: "/assets/images/s704y-10-asics-grand-shark-white-original-imafuxxxgxgz8d4r.jpeg",
        title: "ADIDAS, ASICS, Puma...",
        price: "Upto 60%+Extra 5% Off",
        description: "Men's Footwear",
        amount: 3000
    },
    {
        id:5,
        url: "/assets/images/606678c64c32301a.jpg",
        title: "Gold Coins & Precious Jewellery",
        price: "Upto 20% Off",
        description: "Malabar Gold, Candere...",
        amount: 500
    },
    {
        id:6,
        url: "/assets/images/-original-imagahnnunvh24f2.jpeg",
        title: "ZEBRONICS Smartwatch",
        price: "Upto 50% off",
        description: "From ₹1999",
        amount: 1200
    },
    {
        id:7,
        url: "/assets/images/8f8035fcd64a2c12.jpg",
        title: "Belts & Wallets",
        price: "From ₹299",
        description: "#Grab Or Gone",
        amount: 400
    },
]


let bidStealsOfWeekTag = document.getElementById("big-steals-of-week")

function createDealsOfTheDay(data){
    console.log(data)
    let createdElement = document.createElement("div")
    createdElement.className = "footwear-Card-design"
    createdElement.innerHTML = `<a href="/">
        <img src=${data.url} alt="image">
        <div class="title">${data.title}</div>
        <div class="price">${data.price}</div>
        <div class="category">${data.description}</div>
    </a>`
    return createdElement
}

for(let i=0; i<bigStealsOfTheWeekData.length; i++){
    let ele = createDealsOfTheDay(bigStealsOfTheWeekData[i])
    bidStealsOfWeekTag.appendChild(ele);
}