import { UserModel, MessageModel } from "../models/index.mjs";

export default class MessageController {
  constructor(io) {
    this.io = io;
  }

  index = (req, res) => {
    try {
      const roomId = req.params.roomId;
      MessageModel.find({ room: roomId }, "text user date -_id")
        .populate("user", "name -_id")
        .exec(function (err, messages) {
          if (err) {
            return res.status(404).json({
              status: "error",
              message: "Messages not found",
            });
          }
          return res.json(messages);
        });
    } catch (e) {
      return res.status(500).json({ status: "error", message: e });
    }
  };
  create = (req, res) => {
    try {
      const postData = {
        text: req.body.text,
        room: req.body.roomId,
        user: req.body.userId,
      };

      const message = new MessageModel(postData);
      message
        .save()
        .then((newMsg) => {
          UserModel.findById(newMsg.user, "name -_id").then((foundUser) => {
            const sendObj = {
              text: newMsg.text,
              user: { name: foundUser.name },
              date: newMsg.date,
            };
            res.json(sendObj);
          });
        })
        .catch(() => {
          res.sendStatus(500);
        });
    } catch (e) {
      return res.status(500).json({ status: "error", message: e });
    }
  };
}
