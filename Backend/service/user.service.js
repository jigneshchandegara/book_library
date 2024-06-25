const { userSchema } = require("../models")


let postuser = (body) => {
    return userSchema.create(body)
}

let getuser = () => {
    return userSchema.find()
}

let deleteuser = (id) => {
    return userSchema.findByIdAndDelete(id)
}

let updateuser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body)
}

let findusername = (name) => {
    return userSchema.findOne({name})
}

module.exports = { postuser, getuser, deleteuser, updateuser, findusername }