let mongoose =require("mongoose");

const connectDB = () =>{
    mongoose.connect(process.env.DB_URL).then(() =>{
        console.log("DB connect successfully");
    }).catch((error) =>{
        console.log(error);
    });
}

module.exports = connectDB