import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";

import { roomsActions, messagesActions } from "../../redux/actions";
import { Messages, ChatInput, SignIn } from "../../components";
import socket from "../../core/socket";

import "./Chat.scss";

const Chat = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector(({ user }) => user);
  const { roomIsLoading, roomId } = useSelector(({ rooms }) => rooms);
  const { messageIsLoading, items } = useSelector(({ messages }) => messages);
  // useEffect(() => {
  //   if (userName) {
  //     dispatch(roomsActions.createRoom(userName));
  //   }
  // }, [userName]);
  const onNewMessage = (newMessage) => {
    dispatch(messagesActions.addMessage(newMessage));
  };
  const onNewOnlineUser = (newUser) => {
    let messageObj = {
      text: `${newUser} присоединился!`,
      type: "USER_CONNECTED",
    };
    dispatch(messagesActions.addMessage(messageObj));
  };
  const onUserDisconnect = (userName) => {
    let messageObj = {
      text: `${userName} покинул чат!`,
      type: "USER_CONNECTED",
    };
    dispatch(messagesActions.addMessage(messageObj));
  };
  useEffect(() => {
    socket.on("ROOM:NEW_MESSAGE", onNewMessage);
    socket.on("USER:CONNECTED", onNewOnlineUser);
    socket.on("ROOM:USER_DISCONNECTED", onUserDisconnect);
    return () => {
      socket.removeListener("ROOM:NEW_MESSAGE", onNewMessage);
      socket.removeListener("USER:CONNECTED", onNewOnlineUser);
      socket.removeListener("ROOM:USER_DISCONNECTED", onUserDisconnect);
    };
  }, [roomId]);

  return (
    <div className="chat">
      {userName ? (
        <>
          <Messages
            roomIsLoading={roomIsLoading}
            messages={items}
            userName={userName}
          />
          <ChatInput roomIsLoading={roomIsLoading} userName={userName} />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Chat;
