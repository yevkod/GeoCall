import React from 'react';
import s from '../Messenger.module.css';

const RightMessage = ({ content }) => {
    return <p className={s.chatbox_message_right}>{content}</p>
}

const LeftMessage = ({ content }) => {
    return <p className={s.chatbox_message_left}>{content}</p>
}

const SingleMessage = ({ content, myMessage }) => {
    return (
        <div className={s.chatbox_message_wrapper}
            style={myMessage ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }}
        >
            {myMessage ? <RightMessage content={content}/> : <LeftMessage content={content}/>}
        </div>
    )
}

export default SingleMessage