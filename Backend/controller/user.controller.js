const { userservice } = require("../service")


let postdata = async (req, res) => {
    try {
        let body = req.body

        let result = await userservice.postuser(body);

        res.status(201).json({
            message: "User created successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

let getdata = async (req, res) => {
    try {
        let result = await userservice.getuser();
        res.status(200).json({
            message: "User Data SuccessFully List Get",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

let deletedata = async (req, res) => {
    try {
        let { id } = req.params;

        let result = await userservice.deleteuser(id);
        res.status(200).json({
            message: "User Data SuccessFully Delete",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

let updatadata = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        let result = await userservice.updateuser(id, body);

        res.status(200).json({
            message: "User Data SuccessFully Updata",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { postdata, getdata, deletedata, updatadata }