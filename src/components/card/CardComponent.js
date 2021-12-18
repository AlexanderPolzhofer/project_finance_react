import React from 'react';
import style from "./CardComponent.module.css";
import { useNavigate } from 'react-router-dom';

const Cardcomponent = ({ title, imageUrl, id }) => {

    let navigateDAX = useNavigate();
    let navigateSP500 = useNavigate();
    let navigateNikkei = useNavigate();

    const handleClick = () => {
        if (id === 1) {
            navigateDAX('/dax40')
        } else if (id === 2) {
            navigateSP500('/S&P500')
        } else if (id === 3) {
            navigateNikkei('/nikkei225')
        }
    }

    return (
        <div className={style.container} onClick={() => handleClick()}>
            <p>{title}
            </p>
            <img src={imageUrl} alt="flag" style={{ width: "89px", height: "89px" }}></img>
        </div>
    );
}

export default Cardcomponent;
