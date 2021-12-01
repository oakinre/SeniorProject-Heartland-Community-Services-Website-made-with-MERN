const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const {signin,signup, me} = require('../Controllers/user.js')
const {body, validationResult} = require("express-validator");


router.post("/signin",  signin);
router.post("/signup", body("email").isEmail().withMessage("The email is invalid"),
body("password").isLength({ min: 5 }).withMessage("The password is invalid"), signup);
router.get("/me", auth, me);
module.exports = router;