import React, { useEffect, useRef } from "react";
import { Spin } from "antd";
import classNames from "classnames";

import { MessageItem } from "../../components";

import "./Messages.scss";

const Messages = ({ roomIsLoading, messages, userName }) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messages) {
      messagesRef.current.scrollTo(0, 9999999999);
    }
  }, [messages]);

  return (
    <div
      className={classNames("messages", {
        "messages--loading": roomIsLoading,
      })}
      ref={messagesRef}
    >
      {roomIsLoading ? (
        <Spin tip="Загрузка" />
      ) : (
        messages?.map((item, index) => {
          return item.type === "USER_CONNECTED" ? (
            <div className="message-new-user">{item.text}</div>
          ) : (
            <MessageItem
              text={item.text}
              isMe={!!(item.user.name === userName)}
              author={item.user.name}
              key={index}
            />
          );
        })
      )}
    </div>
  );
};

export default Messages;
