const express = require("express")
const router = express.Router()

const {signin,signup} = require('../Controllers/user.js')
const {body, validationResult} = require("express-validator");


router.post("/signin",  signin);
router.post("/signup", body("email").isEmail().withMessage("The email is invalid"),
body("password").isLength({ min: 5 }).withMessage("The password is invalid"), signup);

module.exports = router;