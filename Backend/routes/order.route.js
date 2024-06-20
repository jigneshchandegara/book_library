let express = require("express");
const { ordercontroller } = require("../controller");
let router = express.Router();

router.post("/ordercreate", ordercontroller.ordercreate);
router.get("/getorders", ordercontroller.listorder);

module.exports = router