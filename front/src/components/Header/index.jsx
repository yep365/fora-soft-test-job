import React from "react";
import { useSelector } from "react-redux";

import "./Header.scss";

const Header = () => {
  const { activeUsers, userName } = useSelector(({ user }) => user);
  return (
    <div className="header">
      {activeUsers && <h1>Активные пользователи:</h1>}
      {activeUsers?.map((userObj, index) => (
        <div className="header-users" key={index}>{`${
          userObj.userName === userName
            ? `Вы: -------> ${userName}`
            : `${userObj.userName}`
        }`}</div>
      ))}
    </div>
  );
};

export default Header;
