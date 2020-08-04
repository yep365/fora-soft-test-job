import React from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";

import "./Header.scss";

const Header = () => {
  const { activeUsers, userName } = useSelector(({ user }) => user);
  return (
    <div className="header">
      {activeUsers && <h1>Активные пользователи:</h1>}
      {activeUsers?.map((userObj) => (
        <div className="header-users">{`${
          userObj.userName === userName
            ? `Вы: -------> ${userName}`
            : `${userObj.userName}`
        }`}</div>
      ))}
    </div>
  );
};

export default Header;
