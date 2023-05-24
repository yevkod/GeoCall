import React from 'react';
import s from './MapPage.module.css';
import locationIcon from '../resources/images/location-icon.svg';
import { useDispatch } from 'react-redux';
import { setCardChosenOption } from './mapSlice';

const Marker = (props) => {

    const { myself, socketId, username, coords } = props;
    const dispatch = useDispatch();

    const handleOptionChoose = () => {
        if (!myself) {
            dispatch(
                setCardChosenOption({
                    socketId: socketId,
                    username: username,
                    coords: coords
                })
            )
        }
    }

    return (
        <div className={s.map_page_marker_container} onClick={handleOptionChoose}>
            <img src={locationIcon} alt={username} className={s.map_page_marker_img} />
            <p className={s.map_page_market_text}>{myself ? 'Me' : username}</p>
        </div>
    )
}

export default Marker