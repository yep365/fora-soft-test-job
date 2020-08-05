import React from "react";

import "./CameraItem.scss";

const CameraItem = ({
  onRecord,
  isRecording,
  onStopRecord,
  roomId,
  userName,
}) => {
  console.log(roomId, userName);
  return (
    <div>
      {roomId && userName && <button onClick={onRecord}>Записать аудио</button>}
      {isRecording && <button onClick={onStopRecord}>Остановить запись</button>}
    </div>
  );
};

export default CameraItem;
