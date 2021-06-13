const products = [
    {
        id:1,
        title: "american mayonise",
        category:"breakfast",
        price:66,
        img:"../assets/images/product-1.jpg",
    },
    {
        id:2,
        title: "chicken wings",
        category:"dinner",
        price:45,
        img:"../assets/images/product-2.jpg",
    },
    {
        id:3,
        title: "fried chicken",
        category:"lunch",
        price:56,
        img:"../assets/images/product-3.jpg",
    },
    {
        id:4,
        title: "kabob's some",
        category:"lunch",
        price:25,
        img:"../assets/images/product-4.jpg",
    },
    {
        id:5,
        title: "fried drumstick",
        category:"dinner",
        price:56,
        img:"../assets/images/product-5.jpg",
    },
    {
        id:6,
        title: "boiled chicken",
        category:"dinner",
        price:40,
        img:"../assets/images/product-6.jpg",
    },
    {
        id:7,
        title: "salad special",
        category:"lunch",
        price:26,
        img:"../assets/images/product-7.jpg",
    },
    {
        id:8,
        title: "Spaghetti",
        category:"lunch",
        price:46,
        img:"../assets/images/product-8.jpg",
    },
    {
        id:9,
        title: "sandwich jambon",
        category:"dinner",
        price:87,
        img:"../assets/images/product-9.jpg",
    },
    {
        id:10,
        title: "pizza seafood",
        category:"breakfast",
        price:60,
        img:"../assets/images/product-10.jpg",
    },
    {
        id:11,
        title: "pesto pizza",
        category:"breakfast",
        price:89,
        img:"../assets/images/product-11.jpg",
    },
    {
        id:12,
        title: "quarantine buddy",
        category:"dinner",
        price:99,
        img:"../assets/images/product-12.jpg",
    },
    {
        id:13,
        title: "country delight",
        category:"lunch",
        price:66,
        img:"../assets/images/product-13.jpg",
    },
    {
        id:14,
        title: "quarantine buddy",
        category:"breakfast",
        price:68,
        img:"../assets/images/product-14.jpg",
    },
    {
        id:15,
        title: "oreo dream",
        category:"lunch",
        price:86,
        img:"../assets/images/product-15.jpg",
    },
    {
        id:16,
        title: "bacon overflow",
        category:"breakfast",
        price:35,
        img:"../assets/images/product-16.jpg",
    },
];

// get element
const productContainer = document.querySelector('.product-container');
const buttonContainer = document.querySelector('.btn-container');

// load our product
window.addEventListener("DOMContentLoaded",function(){
    displayProductList(products);
    displayButtons();
})

// Display product list
function displayProductList(productList){
    let displayProduct = productList.map(function(product){
        return ` <div class="col product-list">
        <img src=${product.img} alt=${product.title} >
        <div class="product-content">
          <h4>${product.title}</h4>
          <h4 class="price">$${product.title}</h4>
        </div>
      </div> `
    })
    displayProduct  = displayProduct.join("");
    productContainer.innerHTML = displayProduct;
}

function displayButtons(){
    const categories = products.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['all']);
    
    
    
    const categoryBtns = categories.map(function(category){
        return `<div class="col-1">
        <button type="button" class="btn filter-btn" data-id=${category}>${category} </button>
      </div>`
    }).join("");
    buttonContainer.innerHTML = categoryBtns;
    
    const filterBtn = document.querySelectorAll('.filter-btn')
    filterBtn.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const category = e.currentTarget.dataset.id;
            const productCategory = products.filter(function(productList){
                if(productList.category == category){
                    return productList;
                }
            });
            if(category == 'all'){
                displayProductList(products);
            }else{
                displayProductList(productCategory);
            }
        });
    })
}