import React from 'react';
import s from './LoginPage.module.css';

const LoginButton = ({ onClickHandler, disabled }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClickHandler}
            className={s.l_page_login_button}>
            Login
        </button>
    )
};

export default LoginButton;