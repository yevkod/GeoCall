import React from 'react';
import ChatButton from './ChatButton';
import s from '../MapPage.module.css';

const ActionButtons = (props) => {
  return (
    <div className={s.map_page_card_buttons_container}>
        <ChatButton {...props}/>
    </div>
  )
}

export default ActionButtons