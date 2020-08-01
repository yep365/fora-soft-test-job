import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";

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
  return (
    <div className="chat-sigin">
      <h1>Введите Ваше имя</h1>
      <div className="chat-sigin__bottom">
        <input type="text" value={nameInput} onChange={(e) => setName(e)} />
        <Button onClick={sendName}>Продолжить</Button>
      </div>
    </div>
  );
};

export default SignIn;
