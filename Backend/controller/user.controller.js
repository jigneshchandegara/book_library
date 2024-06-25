const { createToken } = require("../middleware/auth");
const { userservice } = require("../service");
const sendEmail = require("../service/email.service");


let postdata = async (req, res) => {
    try {
        let body = req.body

        let user = await userservice.postuser(body);

        // email service

        if (user) {
            let result = await sendEmail(
                user.email,
                "Book Library",
                `welcome ${user.name}  your Book library app`
            );
            console.log(result);
        }

        res.status(201).json({
            message: "User created successfully",
            data: user
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

let login = async (req, res) => {
    try {
        let { name, password } = req.body;

        let user = await userservice.findusername(name);

        if (!user) {
            throw new Error("user not found!")
        }
        if (user.password != password) {
            throw new Error("password invalid")
        }

        let token = createToken({ user });
        console.log(token);

        res.cookie("token", token);

        res.status(200).json({
            message: "login successfull",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = { postdata, getdata, deletedata, updatadata, login }