import React from "react";
import PropTypes from "prop-types";

import "./RecordAudio.scss";

const RecordAudio = ({
  onRecord,
  isRecording,
  onStopRecord,
  roomId,
  userName,
}) => {
  return (
    <div>
      {roomId && userName && (
        <button onClick={onRecord}>Транслировать аудио</button>
      )}
      {isRecording && (
        <button onClick={onStopRecord}>Остановить трансляцию</button>
      )}
    </div>
  );
};
RecordAudio.propTypes = {
  onRecord: PropTypes.func,
  isRecording: PropTypes.bool,
  onStopRecord: PropTypes.func,
  roomId: PropTypes.string,
  userName: PropTypes.string,
};

export default RecordAudio;
