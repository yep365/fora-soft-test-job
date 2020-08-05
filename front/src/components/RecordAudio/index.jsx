import React from "react";

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
      {roomId && userName && <button onClick={onRecord}>Записать аудио</button>}
      {isRecording && <button onClick={onStopRecord}>Остановить запись</button>}
    </div>
  );
};

export default RecordAudio;
