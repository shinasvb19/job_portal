const JWT = require("jsonwebtoken");
const { Types } = require("mongoose");
const authCheck = (req, res, next) => {
  if (req.headers["x-custom-header"]) {
    try {
      user = req.headers["x-custom-header"];
      const decode = JWT.verify(user, "anjdjajjajjehd3fj333");
      email = decode.email;
      next();
    } catch (err) {
      return res.status(200).send({ errormsg: "authentication failed" });
    }
  } else {
    return res.status(200).send({ errormsg: "authentication failed" });
  }
};
exports.authCheck = authCheck;

const validateAdminToken = async (req, res, next) => {
  if (req.headers["x-custom-header"]) {
    try {
      token = req.headers["x-custom-header"];
      const decode = JWT.verify(token, "secret456");
      email = decode.email;
      type = decode.type;
      if (type === "admin") {
        next();
      }
    } catch (err) {
      return res.status(200).send({ errormsg: "authentication failed" });
    }
  } else {
    return res.status(200).send({ errormsg: "authentication failed" });
  }
};

exports.validateAdminToken = validateAdminToken;
