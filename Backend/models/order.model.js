let mongoose = require("mongoose")
const book = require("./book.model")

const orderSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema"
    },
    titlename: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookSchema"
    },
    // bookprice: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "bookSchema"
    // },
    // bookimage: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "bookSchema"
    // },
    date: {
        type: String,
        required: true,
    },
})

let order = mongoose.model("orderSchema", orderSchema);
module.exports = order;  
