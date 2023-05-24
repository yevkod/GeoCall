import React from 'react';
import s from './LoginPage.module.css';

const LoginInput = (props) => {
    const { username, setUsername } = props;

    const handleValueChange = (e) => {
        setUsername(e.target.value)
    }

    return (
        <input className={s.l_page_input} value={username} onChange={handleValueChange} />
    )
};

export default LoginInput;