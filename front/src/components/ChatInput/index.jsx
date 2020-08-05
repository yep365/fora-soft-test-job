import React, { useState } from "react";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { messagesActions } from "../../redux/actions";

import "./ChatInput.scss";

const ChatInput = ({ roomIsLoading, userName, errorRoom, errorMessage }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSendMessage = (e) => {
    if (e && e.keyCode === 13) {
      onSendMessage();
    }
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
            onChange={onInputChange}
            onKeyUp={handleSendMessage}
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
ChatInput.propTypes = {
  roomIsLoading: PropTypes.bool,
  userName: PropTypes.string,
  errorRoom: PropTypes.string,
  errorMessage: PropTypes.bool,
};

export default ChatInput;
