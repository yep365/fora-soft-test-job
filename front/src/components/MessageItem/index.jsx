import React from "react";
import classNames from "classnames";

import "./MessageItem.scss";

const MessageItem = ({ text, isMe }) => {
  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div
        className={classNames("message-bubble", {
          "message-bubble--isme": isMe,
        })}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageItem;
