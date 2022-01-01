import React from 'react';
import style from './Footer.module.css';

const Footer = () => {

    const handleClick = () => {
        alert("clicked");
    }

    return (<div className={style.container}>
        <p style={{ margin: "5px" }} onClick={() => handleClick()}>Kontakt |</p>
        <p style={{ margin: "5px" }} onClick={() => handleClick()}> Impressum |</p>
        <p style={{ margin: "5px" }} onClick={() => handleClick()}> 2021</p>
    </div>
    );
}

export default Footer;