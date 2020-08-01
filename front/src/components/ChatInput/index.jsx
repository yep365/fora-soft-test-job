import React, { useState } from "react";
import { Button } from "antd";

import "./ChatInput.scss";

const ChatInput = ({ roomIsLoading, messageIsLoading }) => {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="chat-input">
      {!!roomIsLoading || !!messageIsLoading ? null : (
        <>
          <input type="text" value={input} onChange={(e) => onInputChange(e)} />
          <Button disabled={!input} type={input ? "primary" : "default"}>
            {input ? "Отправте сообщение" : "Введите сообщение"}
          </Button>
        </>
      )}
    </div>
  );
};

export default ChatInput;
