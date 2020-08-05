import React from "react";
import classNames from "classnames";

import { Time } from "../../components";

const NotificationMessage = ({ text, date }) => {
  return (
    <div className="message-notification">
      {text}
      <Time date={String(date)} />
    </div>
  );
};

export default NotificationMessage;
