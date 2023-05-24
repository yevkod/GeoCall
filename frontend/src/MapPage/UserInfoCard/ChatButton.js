import React from 'react';
import chatIcon from '../../resources/images/chat-icon.svg';
import { useDispatch } from 'react-redux';
import {addChatbox} from '../../Messenger/messengerSlice';
import s from '../MapPage.module.css';

const ChatButton = ({ socketId, username }) => {
    const dispatch = useDispatch();

    const handleAddChatbox = () => {
        dispatch(
            addChatbox({
                username,
                socketId,
            })
        )
    }
    return (
        <img src={chatIcon} className={s.map_page_card_img} onClick={handleAddChatbox}></img>
    )
}

export default ChatButton