import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "antd";

import { userActions } from "../../redux/actions";

import "./SignIn.scss";
import user from "../../redux/reducers/user";

const SignIn = () => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");

  const setName = (e) => {
    setNameInput(e.target.value);
  };

  const sendName = () => {
    dispatch(userActions.setUserName(nameInput));
  };
  const handleSendMessage = (e) => {
    if (e && e.keyCode === 13) {
      sendName();
    }
  };
  return (
    <div className="chat-sigin">
      <h1>Введите Ваше имя</h1>
      <div className="chat-sigin__bottom">
        <Input
          type="text"
          value={nameInput}
          onChange={setName}
          onKeyUp={handleSendMessage}
        />
        <Button onClick={sendName}>Продолжить</Button>
      </div>
    </div>
  );
};

export default SignIn;
