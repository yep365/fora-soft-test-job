import React from "react";
import { Alert } from "antd";
import PropTypes from "prop-types";

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
Chat.propTypes = {
  userName: PropTypes.string,
  roomIsLoading: PropTypes.bool,
  errorRoom: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  errorMessage: PropTypes.bool,
};

export default Chat;
