require("dotenv").config();

const mongoose=require("mongoose");
const Product=require("../models/product");
const product = require("./models/product");

const products = [
    {
        name: "Laptop",
        price: 15000,
        description: "Gaming Laptop",
        category: "Electronics",
        image: "https://www.bing.com/images/search?view=detailV2&ccid=pLkz2kXu&id=CC1D1249628CE84213DD716758481C38FD9EE9D8&thid=OIP.pLkz2kXu8wy0FPxjy5U1OwHaFk&mediaurl=https%3a%2f%2fm.media-amazon.com%2fimages%2fI%2f71XwLX0ySeL.jpg&cdnurl=https%3a%2f%2fthfvnext.bing.com%2fth%2fid%2fR.a4b933da45eef30cb414fc63cb95353b%3frik%3d2Ome%252fTgcSFhncQ%26pid%3dImgRaw%26r%3d0&exph=1246&expw=1659&q=laptop&FORM=IRPRST&ck=A87A0710FCE85396A0A8D498BA5EE79F&selectedIndex=1&itb=0"
    },
    {
        name: "Headphones",
        price: 800,
        description: "Wireless Headphones",
        category: "Electronics",
        image: "https://tse4.mm.bing.net/th/id/OIP.nE_uoT22bff3E1QQdXdeTgHaHa?r=0&cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "Shoes",
        price: 1200,
        description: "Running Shoes",
        category: "Fashion",
        image: "https://www.bing.com/images/search?view=detailV2&ccid=D%2f3Ffb6D&id=76DF1BF22FB43D1AF53BC928209E618E9A57AFEB&thid=OIP.D_3Ffb6DmtitEWkxJAI5VAHaFj&mediaurl=https%3a%2f%2fstatic.independent.co.uk%2fs3fs-public%2fthumbnails%2fimage%2f2019%2f03%2f04%2f17%2fmens-running-shoes-hero.jpg&cdnurl=https%3a%2f%2fthfvnext.bing.com%2fth%2fid%2fR.0ffdc57dbe839ad8ad11693124023954%3frik%3d669Xmo5hniAoyQ%26pid%3dImgRaw%26r%3d0&exph=1875&expw=2500&q=shoes&FORM=IRPRST&ck=16C7B2766AA36D21164E5318D2CFDA0D&selectedIndex=0&itb=0"
    }
];

const seedDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");

        await product.deleteMany({});
        console.log("Old productsremoved");

        await product.insertMany(products);
        console.log("Products added")

        await mongoose.connection.close();
        console.log("Connection closed");
    } catch (err) {
        console.error("Error:", err.message);
        await mongoose.connection.close();
        process.exit(1);
    }
};
seedDB();