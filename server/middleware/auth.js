const jwt = require("jsonwebtoken");
const JWT_SECRET= "2389th230g23pf13809g123pogb32108gpn23ogh3208gn23-9gh3028ghdsafdasf321dsa54";
const secret = JWT_SECRET;

const auth = async (req, res, next) => {

    let token = req.header("authorization");

    if (!token) {
      return res.status(403).json({
        errors: [
          {
            msg: "unauthorized",
          },
        ],
      });
    }

    token = token.split(" ")[1];
    try {
      const user = (await jwt.verify(
        token,
        secret
      ));
  
      req.user = user.email;
      
      next();
    } catch (error) {
      return res.status(403).json({
        errors: [
          {
            msg: "unauthorized",
          },
        ],
      });
    }
  };

module.exports = auth;