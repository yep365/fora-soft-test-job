import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Chat, Header } from "../../components";
import { roomsActions } from "../../redux/actions";

const Layout = ({ match }) => {
  const dispatch = useDispatch();
  const { userName } = useSelector(({ user }) => user);
  const {
    params: { roomId },
  } = match;
  useEffect(() => {
    if (roomId) {
      //   console.log(roomId);
      dispatch(roomsActions.setCurrentRoom(roomId));
    }
  }, [roomId]);
  useEffect(() => {
    if (roomId && userName) {
      dispatch(roomsActions.fetchMessages(roomId));
    }
  }, [roomId, userName]);
  return (
    <>
      <Header />
      <Chat />
    </>
  );
};

export default Layout;
