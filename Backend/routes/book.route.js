let express = require("express");
const { bookcontroller } = require("../controller");
let router = express.Router();

router.post("/createbook", bookcontroller.createdata);
router.get("/listbook", bookcontroller.listdata);
router.delete("/deletebook/:id", bookcontroller.deletedata);
router.put("/updatebook/:id", bookcontroller.updatadata);


module.exports = router