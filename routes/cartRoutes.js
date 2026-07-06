const express=require("express");

const router=express.Router();

const cartController=require("../controllers/cartController");

router.get("/",cartController.getCarts);

router.post("/",cartController.createCart);

router.delete("/:id",cartController.deleteCart);

module.exports=router;