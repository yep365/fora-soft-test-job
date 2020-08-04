import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Alert } from "antd";

import {
  roomsActions,
  messagesActions,
  userActions,
} from "../../redux/actions";
import { Messages, ChatInput, SignIn } from "../../components";
import socket from "../../core/socket";

import "./Chat.scss";

const Chat = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector(({ user }) => user);
  const { roomIsLoading, roomId, errorRoom } = useSelector(
    ({ rooms }) => rooms
  );
  const { items, errorMessage } = useSelector(({ messages }) => messages);
  // useEffect(() => {
  //   if (userName) {
  //     dispatch(roomsActions.createRoom(userName));
  //   }
  // }, [userName]);
  const onNewMessage = (newMessage) => {
    dispatch(messagesActions.addMessage(newMessage));
  };

  const onUserLogStatus = (userName, status) => {
    let messageObj = {
      text: `${userName} ${!!status ? `присоединился! ` : `покинул чат! `}`,
      type: "logInOut",
      date: new Date(),
    };
    dispatch(messagesActions.addMessage(messageObj));
  };
  const onActiveUsers = (activeUsers) => {
    dispatch(userActions.setActiveUsers(activeUsers));
  };
  useEffect(() => {
    socket.on("USER:CONNECTED", onUserLogStatus);
    socket.on("ROOM:NEW_MESSAGE", onNewMessage);
    socket.on("ROOM:USER_DISCONNECTED", onUserLogStatus);
    socket.on("ROOM:ACTIVE_USERS", onActiveUsers);
    return () => {
      socket.removeListener("USER:CONNECTED", onUserLogStatus);
      socket.removeListener("ROOM:NEW_MESSAGE", onNewMessage);
      socket.removeListener("ROOM:USER_DISCONNECTED", onUserLogStatus);
      socket.removeListener("ROOM:ACTIVE_USERS", onActiveUsers);
    };
  }, [roomId]);

  return (
    <div className="chat">
      {(errorMessage || errorRoom) && (
        <Alert
          type="error"
          description={`${
            errorMessage ? `Не удалось отправить сообщение` : `${errorRoom}`
          }`}
        />
      )}

      {userName ? (
        <>
          <Messages
            roomIsLoading={roomIsLoading}
            messages={items}
            userName={userName}
          />
          <ChatInput
            roomIsLoading={roomIsLoading}
            errorMessage={errorMessage}
            errorRoom={errorRoom}
            userName={userName}
          />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Chat;
