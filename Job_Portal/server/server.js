const app = require("./index");
const cloudinary = require("cloudinary");
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_APIKEY,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
