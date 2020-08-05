import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { socket } from "../../core";
import { CameraItem, RecordAudio } from "../../components";

import "./Footer.scss";

const Footer = () => {
  const { userName } = useSelector(({ user }) => user);
  const { roomId } = useSelector(({ rooms }) => rooms);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [blobState, setBlobState] = useState(null);

  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.mozGetUserMedia ||
    window.navigator.msGetUserMedia ||
    window.navigator.webkitGetUserMedia;

  const onRecieveAudio = (blob, name, roomId) => {
    const newBlob = new Blob(blob, { type: "audio/webm;codecs=opus" });
    setBlobState(null);
    setBlobState(window.URL.createObjectURL(newBlob));
  };
  useEffect(() => {
    socket.on("ROOM:RECEIVE_AUDIO", onRecieveAudio);
    return () => {
      socket.removeEventListener("ROOM:RECEIVE_AUDIO", onRecieveAudio);
    };
  }, []);

  const onRecord = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, onRecording, onError);
    }
  };
  const onStopRecord = () => {
    mediaRecorder.stop();
    setIsRecording(false);
  };
  const onRecording = (stream) => {
    const recorder = new MediaRecorder(stream);

    setMediaRecorder(recorder);

    recorder.onstart = function (e) {
      this.chunks = [];
      setIsRecording(true);
    };
    recorder.ondataavailable = function (e) {
      this.chunks.push(e.data);
    };
    recorder.onstop = function (e) {
      // Sending chunks data to all users in that room
      socket.emit("ROOM:AUDIO", this.chunks, userName, roomId);
    };

    // Start recording
    recorder.start();

    // Stop recording after 5 seconds and broadcast it to server
    const audioStream = () => {
      if (recorder?.state === "recording") {
        recorder.stop();
        recorder.start();
      }
    };
    const interval = setInterval(audioStream, 5000);
    if (isRecording) {
      clearInterval(interval);
    }
  };

  const onError = (err) => {
    alert(`Произошла ошибка: ${err}`);
    console.log("The following error occured: " + err);
  };
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
      {blobState && (
        <audio autoPlay className="audio">
          <source src={blobState} />
        </audio>
      )}
    </div>
  );
};

export default Footer;
