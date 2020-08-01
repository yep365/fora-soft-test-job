import React, { useState } from "react";
import { Button } from "antd";

import "./ChatInput.scss";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="chat-input">
      <input type="text" onChange={(e) => onInputChange(e)} />
      <Button disabled={!input} type={input ? "primary" : "default"}>
        {input ? "Отправте сообщение" : "Введите сообщение"}
      </Button>
    </div>
  );
};

export default ChatInput;
