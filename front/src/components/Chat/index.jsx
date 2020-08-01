import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";

import { Messages, ChatInput, SignIn } from "../../components";

import "./Chat.scss";

const Chat = () => {
  const { userName } = useSelector(({ user }) => user);
  const { roomIsLoading } = useSelector(({ rooms }) => rooms);
  const { messageIsLoading } = useSelector(({ messages }) => messages);

  return (
    <div className="chat">
      {userName ? (
        <>
          <Messages
            roomIsLoading={roomIsLoading}
            messageIsLoading={messageIsLoading}
          />
          <ChatInput
            roomIsLoading={roomIsLoading}
            messageIsLoading={messageIsLoading}
          />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Chat;
