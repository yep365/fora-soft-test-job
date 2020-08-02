import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";

import { roomsActions } from "../../redux/actions";
import { Messages, ChatInput, SignIn } from "../../components";

import "./Chat.scss";

const Chat = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector(({ user }) => user);
  const { roomIsLoading } = useSelector(({ rooms }) => rooms);
  const { messageIsLoading, items } = useSelector(({ messages }) => messages);
  // useEffect(() => {
  //   if (userName) {
  //     dispatch(roomsActions.createRoom(userName));
  //   }
  // }, [userName]);

  return (
    <div className="chat">
      {userName ? (
        <>
          <Messages
            roomIsLoading={roomIsLoading}
            messageIsLoading={messageIsLoading}
            messages={items}
            userName={userName}
          />
          <ChatInput
            roomIsLoading={roomIsLoading}
            messageIsLoading={messageIsLoading}
          />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Chat;
