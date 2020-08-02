import { UserModel } from "../models/index.mjs";

export default (req, res, next) => {
  const userName = req.body.name;
  if (userName === undefined) {
    return res.status(401).json({
      status: "error",
      message: "name field is required",
    });
  }

  UserModel.findOne({ name: userName }, (err, user) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: err,
      });
    }
    if (user === null) {
      const newUser = new UserModel({ name: userName });
      newUser.save().then((userObj) => {
        req.body.userId = userObj._id;
        next();
      });
    } else {
      req.body.userId = user._id;
      next();
    }
  });
};
