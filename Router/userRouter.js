const exp = require("express")
const router = exp.Router()
const userController = require("../Controller/userController")

router.post("/signUp", userController.userCreate)

module.exports = router