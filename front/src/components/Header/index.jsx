import React from "react";
import { Button } from "antd";

import { SelectChat } from "../../components";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <SelectChat />
    </div>
  );
};

export default Header;
