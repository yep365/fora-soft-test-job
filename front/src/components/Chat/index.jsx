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
  useEffect(() => {
    socket.on("SERVER:NEW_MESSAGE", onNewMessage);
    return () => {
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
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
