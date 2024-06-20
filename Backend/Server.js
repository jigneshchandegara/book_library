require("dotenv").config()
let http = require("http");
let express = require("express");
let connectDB = require("./DB/dbconnect");
let routes = require("./routes");
let app = express();



//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/v1" ,routes);

//DB connect
connectDB()

//server
http.createServer(app).listen(process.env.PORT ,() =>{
    console.log(`server is running on port ${process.env.PORT}`);
})
