require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO-URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/products", productRoutes);
app.use("/carts", cartRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});