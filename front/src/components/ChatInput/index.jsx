import React, { useState } from "react";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";

import { messagesActions } from "../../redux/actions";

import "./ChatInput.scss";

const ChatInput = ({ roomIsLoading, userName, errorRoom, errorMessage }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onSendMessage = () => {
    dispatch(
      messagesActions.sendMessage({ text: input, user: { name: userName } })
    );
    setInput("");
  };
  return (
    <div className="chat-input">
      {!!roomIsLoading || errorRoom || errorMessage ? null : (
        <>
          <Input
            size="large"
            type="text"
            value={input}
            onChange={(e) => onInputChange(e)}
          />
          <Button
            disabled={!input}
            type={input ? "primary" : "default"}
            onClick={onSendMessage}
          >
            {input ? "Отправте сообщение" : "Введите сообщение"}
          </Button>
        </>
      )}
    </div>
  );
};

export default ChatInput;
