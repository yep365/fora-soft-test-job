import React, { useEffect, useRef } from "react";
import { Spin } from "antd";
import classNames from "classnames";

import { MessageItem } from "../../components";

import "./Messages.scss";

const Messages = ({ messageIsLoading, roomIsLoading }) => {
  const messagesRef = useRef(null);

  let messages = [
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
    { message: "Привет, как дела??", isMe: true, author: "Mike Mike" },
    { message: "Нормально, у тебя?", isMe: false, author: "Petya Petya" },
    { message: "Отлично", isMe: true, author: "Mike Mike" },
  ];

  useEffect(() => {
    if (messages) {
      messagesRef.current.scrollTo(0, 9999999999);
    }
  }, []);
  return (
    <div
      className={classNames("messages", {
        "messages--loading": messageIsLoading || roomIsLoading,
      })}
      ref={messagesRef}
    >
      {messageIsLoading || roomIsLoading ? (
        <Spin />
      ) : (
        messages?.map((item) => (
          <MessageItem
            text={item.message}
            isMe={item.isMe}
            author={item.author}
          />
        ))
      )}
    </div>
  );
};

export default Messages;
