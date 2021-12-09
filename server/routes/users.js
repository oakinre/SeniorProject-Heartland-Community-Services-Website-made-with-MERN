const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const {adminSignIn, adminSignUp, signin,signup, me} = require('../Controllers/user.js')
const {body} = require("express-validator");

router.post("/adminSignIn", adminSignIn);
router.post("/adminSignUp",
body("password").isLength({ min: 5 }).withMessage("The password is invalid"), adminSignUp);
router.post("/signin",  signin);
router.post("/signup", body("email").isEmail().withMessage("The email is invalid"),
body("password").isLength({ min: 5 }).withMessage("The password is invalid"), signup);
router.get("/me", auth, me);
module.exports = router;