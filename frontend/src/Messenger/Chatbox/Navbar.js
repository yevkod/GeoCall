import React from 'react';
import closeIcon from '../../resources/images/close-icon.svg';
import { useDispatch } from 'react-redux';
import { removeChatbox } from '../messengerSlice';
import s from '../Messenger.module.css';

const ChatboxLabel = ({ username }) => {
    return <p className={s.chatbox_nav_bar_label}>{username}</p>;
  };

  const CloseButton = ({ socketId }) => {
    const dispatch = useDispatch();

    const handleCloseChatbox = () => {
      dispatch(removeChatbox(socketId));
    };

    return (
      <div className={s.chatbox_close_icon_container}>
        <img
          src={closeIcon}
          alt="close"
          className={s.chatbox_close_icon_img}
          onClick={handleCloseChatbox}
        />
      </div>
    );
  };

  const NavBar = ({ username, socketId }) => {
    return (
      <div className={s.chatbox_nav_bar_container}>
        <ChatboxLabel username={username} />
        <CloseButton socketId={socketId} />
      </div>
    );
  };

export default NavBar