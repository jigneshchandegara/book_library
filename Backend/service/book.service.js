const { bookSchema } = require("../models");


let postbook = (body) => {
    return bookSchema.create(body)
};

let getbook = () => {
    return bookSchema.find()
}

let deletebook = (id) => {
    return bookSchema.findByIdAndDelete(id)
}

let updatabook = (id, body) => {
    return bookSchema.findByIdAndUpdate(id, body)
}

module.exports = { postbook, getbook, deletebook, updatabook };