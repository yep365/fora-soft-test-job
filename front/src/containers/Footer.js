import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { socket } from "../core";
import { Footer as BaseFooter } from "../components";

const Footer = () => {
  const { userName } = useSelector(({ user }) => user);
  const { roomId } = useSelector(({ rooms }) => rooms);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [blobState, setBlobState] = useState(null);
  const [intervalState, setIntervalState] = useState(null);
  const [streamingUser, setStreamingUser] = useState(null);
  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.mozGetUserMedia ||
    window.navigator.msGetUserMedia ||
    window.navigator.webkitGetUserMedia;
  const onRecieveAudio = (blob, name, roomId) => {
    setStreamingUser(name);
    const newBlob = new Blob(blob, { type: "audio/webm;codecs=opus" });
    setBlobState(null);
    setBlobState(window.URL.createObjectURL(newBlob));
  };
  const onStopRecieveAudio = (name, roomId) => {
    setStreamingUser(null);
  };
  useEffect(() => {
    socket.on("ROOM:RECEIVE_AUDIO", onRecieveAudio);
    socket.on("ROOM:STOP_RECEIVE_AUDIO", onStopRecieveAudio);
    return () => {
      socket.removeEventListener("ROOM:RECEIVE_AUDIO", onRecieveAudio);
      socket.on("ROOM:STOP_RECEIVE_AUDIO", onStopRecieveAudio);
      clearInterval(intervalState);
    };
  }, []);

  const onRecord = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, onRecording, onError);
    }
  };
  const onStopRecord = () => {
    setIsRecording(false);
    mediaRecorder.stop();
    setTimeout(() => {
      socket.emit("ROOM:STOP_AUDIO", userName, roomId);
    }, 101);
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
      // Sending chunks of data to all users in that room
      socket.emit("ROOM:AUDIO", this.chunks, userName, roomId);
    };

    recorder.start();

    // Stop recording after interval seconds and broadcast it to server
    const audioStream = () => {
      if (recorder?.state === "recording") {
        recorder.stop();
        recorder.start();
      }
    };
    setIntervalState(setInterval(audioStream, 100));
  };

  const onError = (err) => {
    alert(`Произошла ошибка: ${err}`);
    console.log("The following error occured: " + err);
  };
  return (
    <BaseFooter
      onRecord={onRecord}
      setIsRecording={setIsRecording}
      isRecording={isRecording}
      onStopRecord={onStopRecord}
      roomId={roomId}
      userName={userName}
      blobState={blobState}
      streamingUser={streamingUser}
    />
  );
};

export default Footer;
