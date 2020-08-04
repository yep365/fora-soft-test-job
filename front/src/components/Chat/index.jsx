import React from "react";
import { Alert } from "antd";

import { Messages, ChatInput, SignIn } from "../../components";

import "./Chat.scss";

const Chat = ({ userName, roomIsLoading, errorRoom, items, errorMessage }) => {
  return (
    <div className="chat">
      {(errorMessage || errorRoom) && (
        <Alert
          type="error"
          description={`${
            errorMessage ? `Не удалось отправить сообщение` : `${errorRoom}`
          }`}
        />
      )}

      {userName ? (
        <>
          <Messages
            roomIsLoading={roomIsLoading}
            messages={items}
            userName={userName}
          />
          <ChatInput
            roomIsLoading={roomIsLoading}
            errorMessage={errorMessage}
            errorRoom={errorRoom}
            userName={userName}
          />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Chat;
