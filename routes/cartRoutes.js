const router = require("express").Router();

const cartController = require("../controllers/cartController");

router.get("/",cartController.getCart);

router.post("/",cartController.createCart);

router.delete("/:id",cartController.deleteCart);

module.exports = router;
