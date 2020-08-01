import React from "react";
import classNames from "classnames";

import "./MessageItem.scss";

const MessageItem = ({ text, isMe, author }) => {
  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div
        className={classNames("message-author", {
          "message-author--isme": isMe,
        })}
      >
        {author}
      </div>
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
