const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const {body, validationResult} = require("express-validator");
const JWT_SECRET= "2389th230g23pf13809g123pogb32108gpn23ogh3208gn23-9gh3028ghdsafdasf321dsa54";
const signin = async (req, res) => {

    const { email, password } = req.body;

    try{
        const existingUser = await User.findOne({ email });

        if(!existingUser){
         return res.status(400).json({
            errors: [
              {
                msg: "Invalids credentials",
              },
            ],
            data: null,
          });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect){
                return res.status(400).json({
                  errors: [
                    {
                      msg: "Invalids credentials",
                    },
                  ],
                  data: null,
                });  
        }
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, JWT_SECRET, {expiresIn: "3h"});

        res.status(200).json({ result: existingUser, token, errors: []});

    }catch(error){
        res.status(500).json({message: 'Something went wrong'});
    }
}

 const signup = async (req, res) => {

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });

      return res.status(400).json({ errors, data: null });
    }
    
    const { email, password, confirmPassword, firstName, lastName, AOI, CDL, Setup, OverEighteen, WeekOne, WeekTwo, WeekThree, WeekFour } = req.body;

    try{
        const existingUser = await User.findOne({email});

        if(existingUser) {
            return res.status(400).json({
              errors: [
                {
                  msg: "Email already in use",
                },
              ],
              data: null,
            });
          }

        if (password != confirmPassword) {
            return res.status(400).json({
              errors: [
                {
                  msg: "Confirmed Password not the same",
                },
              ],
              data: null,
            });
          };

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, AOI, CDL, Setup, OverEighteen, WeekOne, WeekTwo, WeekThree, WeekFour})

        const token = jwt.sign({email: result.email, id: result._id}, JWT_SECRET, {expiresIn: "3h"});

       res.status(200).json({ result: result, token, errors: []});

    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong'});
    }
}

const me = async (req, res) => {
  const user = await User.findOne({ email: req.user });

  return res.json({
    errors: [],
    data: {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        password: user.password,
        AOI: user.AOI,
        CDL: user.CDL,
        Setup: user.Setup,
        OverEighteen: user.OverEighteen,
        WeekOne: user.WeekOne,
        WeekTwo: user.WeekTwo,
        WeekThree: user.WeekThree,
        WeekFour: user.WeekFour
      },
    },
  });
}

module.exports = {
    signin, signup, me, User
}