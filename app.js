require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const errorHandeler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("MongoDB Connected");
})
.catch((err) => { 
   console.error("MongoDB Connection Error:", err);
});

app.use("/products", productRoutes);
app.use("/carts", cartRoutes);

app.use(errorHandeler);

app.get("/", (req, res) => {
    res.send("Welcome to the E-Commerce API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;