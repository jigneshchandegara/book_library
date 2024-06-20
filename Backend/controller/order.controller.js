const { orderservice } = require("../service");

let ordercreate = async (req, res) => {
    try {
        let body = req.body;
        let result = await orderservice.postorder(body);

        res.status(201).json({
            message: "Order created successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message

        })
    }
}

let listorder = async (req, res) => {
    try {
        let result = await orderservice.getorders();
        res.status(200).json({
            message: "Orders fetched successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { ordercreate, listorder }