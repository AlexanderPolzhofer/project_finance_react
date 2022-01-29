import React from 'react';

import { useNavigate } from 'react-router-dom';

import style from "./CardComponent.module.css";


const Cardcomponent = ({ title, imageUrl, id }) => {

    let navigate = useNavigate();


    const handleClick = () => {
        navigate("/daxValues", { state: { "name": title, "id": id } });
    }

    return (
        <div className={style.container} onClick={() => handleClick()}>
            <p>{title}
            </p>
            <img src={imageUrl} alt="flag" className={style.logoImage} />
        </div>
    );
}

export default Cardcomponent;
