let jwt = require("jsonwebtoken");

let createToken = (data) => {
    let token = jwt.sign(data, process.env.SECRET);
    return token
}

let isLogin = (req, res, next) => {
    try {
        let token = req.cookies["token"];
        console.log(token, "token cookies");
        if (!token) {
            throw new Error("you are not login")
        }
        let user = jwt.verify(token, process.env.SECRET);
        console.log(user, "token verify");
        req.u = user;
        next();
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = { createToken, isLogin }