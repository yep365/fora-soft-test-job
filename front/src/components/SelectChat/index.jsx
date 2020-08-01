import React from "react";
import { Button } from "antd";

import "./SelectChat.scss";

const SelectChat = () => {
  return (
    <div className="select-chat">
      <div className="select-chat__btn">
        <Button size="large">Текстовый чат</Button>
      </div>
      <div className="select-chat__btn">
        <Button size="large">Видео чат</Button>
      </div>
    </div>
  );
};

export default SelectChat;
