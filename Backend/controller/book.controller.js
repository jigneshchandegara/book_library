const { bookservice } = require("../service")

let createdata = async (req, res) => {
    try {
        let body = req.body
        let result = await bookservice.postbook(body)
        res.status(201).json({
            message: "book create successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

let listdata = async (req, res) => {
    try {
        let result = await bookservice.getbook()
        res.status(200).json({
            message: "list of books successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

let deletedata = async (req, res) => {
    try {
        let { id } = req.params
        let result = await bookservice.deletebook(id);
        res.status(200).json({
            message: "book deleted successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

let updatadata = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params
        let result = await bookservice.updatebook(id, body);
        res.status(200).json({
            message: "book updated successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = { createdata, listdata, deletedata, updatadata }