import React from "react";
import classNames from "classnames";

import { Time } from "../../components";

import "./MessageItem.scss";

const MessageItem = ({ text, isMe, author, date }) => {
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
      <Time date={date} />
    </div>
  );
};

export default MessageItem;
