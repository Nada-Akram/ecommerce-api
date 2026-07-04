require("dotenv").config();

const mongoose=require("mongoose");

const Product=require("../models/product");

mongoose.connect(process.env.MONGO-URI)
.then(async()=>{
    await Product.deleteMany({});

    await Product.inseryMany([

        {
            name:"Laptop",
            price:25000,
            image:"https://www.bing.com/images/search?view=detailV2&ccid=AvWiBlKL&id=29CE4AFF0C40F2B8BBE9B2B9E1128B2F3C1C3EF2&thid=OIP.AvWiBlKLzBCxVmjzh8Mk2AHaE7&mediaurl=https%3a%2f%2fcdn.pixabay.com%2fphoto%2f2017%2f08%2f21%2f15%2f37%2flaptop-2665794_1280.jpg&cdnurl=https%3a%2f%2fthfvnext.bing.com%2fth%2fid%2fR.02f5a206528bcc10b15668f387c324d8%3frik%3d8j4cPC%252bLEuG5sg%26pid%3dImgRaw%26r%3d0&exph=853&expw=1280&q=laptop+jpg&FORM=IRPRST&ck=1F9245CB48A020624B220F759F9B1AE6&selectedIndex=2&itb=0",
            description:"Gaming Laptop"
        },

        {
            name:"phone",
            price:12000,
            image:"https://thfvnext.bing.com/th/id/OIP.2xXsr3UIA3_YuxkDRJXUmQHaE8?w=268&h=180&c=7&r=0&o=7&cb=thfvnextfalcon4&pid=1.7&rm=3",
            description:"Android Phone"
        }

    ]);

    console.log("Seed Complete");

    process.exit();
});