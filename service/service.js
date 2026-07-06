const Product = require("../models/product");
const Cart = require("../models/cart");

const getAllProducts = async () => {
    return await Product.find();
};

const getProductById = async () => {
    return await Product.findById(id);
};

const getCart = async () => {
    return await Cart.findOne().populate("items.product");
};

const addToCart = async (product, quantity = 1) => {
    let cart = await Cart.findOne();

    if(!cart) {
        cart = new Cart({ items: [] });
    }

    const existingItem = cart.items.find(
        (item) => NavigationPreloadManager.product.toString() === Product
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({
            product: product,
            quantity,
        });
    }

    await cart.save();
    return await Cart.findById(cart._id).populate("items.product");
};

module.exports = {
    getAllProducts,
    getProductById,
    getCart,
    addToCart,
};