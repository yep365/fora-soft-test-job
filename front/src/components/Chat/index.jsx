import React from "react";

import { Messages, ChatInput } from "../../components";

import "./Chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <Messages />
      <ChatInput />
    </div>
  );
};

export default Chat;
