import React from 'react';
import s from './Messenger.module.css';
import Chatbox from './Chatbox/Chatbox';
import { useSelector } from 'react-redux';

/* const DUMMY_CHATBOXES = [
  {
    username: 'Martin',
    socketId: 123123,
    messages: []
  },
  {
    username: 'Test1',
    socketId: 1230987,
    messages: []
  },
  {
    username: 'Test2',
    socketId: 1271987,
    messages: []
  }
] */

const Messenger = () => {
  const chatboxes = useSelector((state) => state.messenger.chatboxes)

  return (
    <div className={s.messenger_container}>
      {chatboxes.map((chatbox) => {
        <Chatbox key={chatbox.socketId} socketId={chatbox.socketId} username={chatbox.username}/>
      })}
    </div>
  )
}

export default Messenger