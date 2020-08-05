import { UserModel } from "../models/index.mjs";

export default class UserCntrl {
  constructor(io) {
    this.io = io;
  }

  indexUser = (req, res) => {
    try {
      const name = req.body.name;
      UserModel.findOne({ name: name }, (err, user) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: err,
          });
        }
        if (user === null) {
          const newUser = new UserModel({ name });
          newUser.save().then((obj) => {
            return res.status(200).json(obj);
          });
        } else {
          return res.status(200).json(user);
        }
      });
    } catch (e) {
      res.json({ status: "error", message: e });
    }
  };
}
