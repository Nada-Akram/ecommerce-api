const API_BASE_URL = "http://localhost:5000";

async function getProducts() {
    const response = await fetch(`${API_BASE_URL}/products`);
    return await response.json();
}

async function createProduct(product) {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Typee": "application/json"
        },
        body: JSON.stringify(product)
    });

    return await response.json();

}

async function getCart() {
    const response = await fetch(`${API_BASE_URL}/carts`);
    return await response.json();
}

async function addToCart(productId, quantity = 1) {
    const response = await fetch(`${API_BASE_URL}/carts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            items: [
                {
                    product: productId,
                    quantity: quantity
                }
            ]
        })
    });

    return await response.json();

}

async function deleteCart(cartId) {
    const response = await fetch(`${API_BASE_URL}/carts/${cartId}`, {
        method: "DELETE"
    });

    return await response.json();
}