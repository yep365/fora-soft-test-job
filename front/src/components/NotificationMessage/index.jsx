import React from "react";
import PropTypes from "prop-types";

import { Time } from "../../components";

const NotificationMessage = ({ text, date }) => {
  return (
    <div className="message-notification">
      {text}
      <Time date={String(date)} />
    </div>
  );
};
NotificationMessage.propTypes = {
  text: PropTypes.string,
};

export default NotificationMessage;
