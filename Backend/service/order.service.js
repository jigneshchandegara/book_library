const { orderSchema } = require("../models")

let postorder = (body) => {
    return orderSchema.create(body)
}

let getorders = () => {
    return orderSchema.find().populate(["username", "titlename"])
}

module.exports = { postorder, getorders }