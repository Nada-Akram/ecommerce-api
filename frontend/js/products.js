const API_URI = "http://localhost:5000/products";
const CART_API = "http://localhost:5000/carts";

let allProducts = [];

async function loadProducts() {
    try {

        const response = await fetch(API_URI);
        allProducts = await response.json();

        displayProducts(allProducts);

    } catch (error) {
        console.log(error);
    }
}

function displayProducts(products) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    if(products.length === 0){

        container.innerHTML = `
            <h2 style="text-align:center;">
                No Products Found
            </h2>
        `;

        return;

    }

    products.forEach(product => {
        
        container.innerHTML += `
        
        <div class="card">
        
            <img src="${product.image}" alt="${product.name}">
            
            <div class="card-content">
            
                <h3>${product.name}</h3>
                
                <p><strong>Category:</strong> ${product.category}</p>
                
                <div class="price">
                    $${product.price}
                </div>
                
                <button
                    class="add-btn"
                    onclick="addToCart('${product._id}')">
                    
                    <i class="fa-solid fa-cart-shopping"></i>
                    
                    Add To Cart
                    
                </button>
                
            </div>
            
        </div>
        
        `;

    });

}

async function addToCart(productId){

    try{
        
        const response = await fetch(CART_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                items:[
                    {
                        product:productId,
                        quantity:1
                    }
                ]

            })

        });

        if (response.ok){

            alert("Product Added Successfully");

            updateCartCount();

        }

    }

    catch(error){

    console.log(error);
    
    }

}

function searchProducts(){

    const searchValue = document
        .grtElementById("search")
        .value
        .toLowerCase();

    const filteredProducts = allProducts.filter(product=>{

        return product.name.toLowerCase().includes(searchValue)

        ||

        product.category.toLowerCase().includes(searchValue);

    });

    displayProducts(filteredProducts);

}

async function updateCartCount(){

    try{

        const response = await fetch(CART_URL);

        const carts = await response.json();

        let total = 0;

        carts.forEach(cart=>{

            cart.items.forEach(item=>{

                totel += item.quantity;

            });

        });

        document.getElementById("cart-count").innerText = total;

    }

}

document
.getElementById("search")
.addEventListener("keyup",searchProducts);

loadProducts();

updateCartCount();