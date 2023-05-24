import React from 'react';
import Navbar from './Navbar';
import Messages from './Messages';
import NewMessage from './NewMessage';
import s from '../Messenger.module.css';

const Chatbox = (props) => {
    const { socketId } = props;
    return (
        <div className={s.chatbox_container}>
            <Navbar {...props}/>
            <Messages socketId={socketId}/>
            <NewMessage socketId={socketId}/>
        </div>
    )
}

export default Chatbox