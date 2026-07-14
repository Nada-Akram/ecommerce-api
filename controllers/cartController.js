const Cart=require("../models/cart");

exports.getCart = async (req, res) => {

    const carts = await Cart.find().populate("items.product");
    res.json(carts);
};

exports.createCart = async (req, res) => {

    const cart=await Cart.create(req.body);

    res.status(201).json(cart);

};

exports.deleteCart = async (req, res) => {

    await Cart.findByIdAndDelete(req.params.id);

    res.json({
        message: "Deleted"
    });
    
};