import React from "react";

import { MessageItem } from "../../components";

import "./Messages.scss";

const Messages = () => {
  let messages = [
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
    { message: "Привет, как дела??", isMe: true },
    { message: "Нормально, у тебя?", isMe: false },
    { message: "Отлично", isMe: true },
  ];
  return (
    <div className="messages">
      {messages?.map((item) => (
        <MessageItem text={item.message} isMe={item.isMe} />
      ))}
    </div>
  );
};

export default Messages;
