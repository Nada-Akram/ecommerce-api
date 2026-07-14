const API = "http://localhost:5000/products";

async function loadProuducts() {

    const response = await fetch(API);

    const products = await response.json();

    const container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <div class="card-content">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">$${product.price}</div>

                <button
                class="add-btn"
                onclick="addToCart('${product._id}')">

                Add To Cart

                </button>

            </div>

        </div>

        `;

    });

}

async function addToCart(id){

    await fetch("http://localhost:5000/carts",{
        
        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            items:[

                {
                    product:id;
                    quantity:1
                }

            ]

        })

    });

    alert("Added To Cart Successfully");

}

loadProuducts();