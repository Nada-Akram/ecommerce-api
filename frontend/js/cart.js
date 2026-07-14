const API_URL = "http://localhost:5000/carts";

const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

async function loadCart() {
    try{
        const response = await fetch(API_URL);
        const data = await response.json();

        cartItemsContainer.innerHTML = "";
        let total = 0;

        if (!data.length) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "$0.00";
            return;
        }

        data.forEach(cart => {
            cart.items.forEach(item => {
                const price = item.product.price * item.quantity;
                total += price;

                const cartItem = document.createElement("div");
                cartItem.className = "cart-item";

                cartItem.innerHTML = `
                    <img src="${item.product.image}" alt="${item.product.name}">
                    <div class="cart-info">
                        <h3>${item.product.name}</h3>
                        <p>Price: $${item.product.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                
                    <button onclick="removeCart('${cart._id}')">
                        Remove
                    </button>
                `;

                cartItemsContainer
                .appendChild(cartItem);
            });
        });


        cartTotal.textContent = `$${total.toFixed(2)}`;

    } catch (error) {
        console.error(error);
        cartItemsContainer.innerHTML = "<p>Failed to load cart.</p>";
    }
}

async function removeCart(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        loadCart();
    } catch (error) {
        console.log(error);
    }

}

loadCart();