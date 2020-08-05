import React from "react";
import PropTypes from "prop-types";

import { RecordAudio } from "../../components";

import "./Footer.scss";

const Footer = ({
  onRecord,
  setIsRecording,
  isRecording,
  onStopRecord,
  roomId,
  userName,
  blobState,
  streamingUser,
}) => {
  return (
    <div className="footer">
      <RecordAudio
        onRecord={onRecord}
        setIsRecording={setIsRecording}
        isRecording={isRecording}
        onStopRecord={onStopRecord}
        roomId={roomId}
        userName={userName}
      />
      {blobState && streamingUser && (
        <>
          <h1>{`${streamingUser} в данный момент транслирует свой голос`}</h1>
          <audio autoPlay className="audio">
            <source src={blobState} />
          </audio>
        </>
      )}
    </div>
  );
};
Footer.propTypes = {
  onRecord: PropTypes.func,
  setIsRecording: PropTypes.func,
  isRecording: PropTypes.bool,
  onStopRecord: PropTypes.func,
  roomId: PropTypes.string,
  userName: PropTypes.string,
  blobState: PropTypes.string,
  streamingUser: PropTypes.string,
};

export default Footer;
