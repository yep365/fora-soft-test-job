import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { roomsActions, messagesActions, userActions } from "../redux/actions";
import socket from "../core/socket";
import { Chat as BaseChat } from "../components";

const Chat = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector(({ user }) => user);
  const { roomIsLoading, roomId, errorRoom } = useSelector(
    ({ rooms }) => rooms
  );
  const { items, errorMessage } = useSelector(({ messages }) => messages);

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
    <BaseChat
      userName={userName}
      roomIsLoading={roomIsLoading}
      errorRoom={errorRoom}
      items={items}
      errorMessage={errorMessage}
    />
  );
};

export default Chat;
