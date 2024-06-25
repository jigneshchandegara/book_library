let express = require("express");
const { usercontroller } = require("../controller");
const { isLogin } = require("../middleware/auth");
let router = express.Router();


router.post("/createuser", usercontroller.postdata);
router.get("/listuser", isLogin,  usercontroller.getdata);
router.delete("/deleteuser/:id", usercontroller.deletedata);
router.put("/updateuser/:id", usercontroller.updatadata);

router.post("/login", usercontroller.login)

module.exports = router