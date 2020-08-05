import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Header } from "../../components";
import { Chat, Footer } from "../../containers";
import { roomsActions } from "../../redux/actions";

const Layout = ({ match }) => {
  const dispatch = useDispatch();
  const { userName } = useSelector(({ user }) => user);
  const roomId = match?.params?.roomId;

  useEffect(() => {
    if (roomId) {
      dispatch(roomsActions.setCurrentRoom(roomId));
    }
  }, [roomId]);

  useEffect(() => {
    if (roomId && userName) {
      dispatch(roomsActions.fetchMessages(roomId));
    }
    if (!roomId && userName) {
      dispatch(roomsActions.createRoom(userName));
    }
  }, [roomId, userName]);

  return (
    <>
      <Header />
      <Chat />
      <Footer />
    </>
  );
};
Layout.propTypes = {
  match: PropTypes.object,
};

export default Layout;
