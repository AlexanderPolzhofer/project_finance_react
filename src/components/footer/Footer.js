import React from 'react';
import style from './Footer.module.css';

class Footer extends React.Component {
    render() {
        return <div className={style.container}>
            <p style={{ margin: "5px" }}>Kontakt |</p>
            <p style={{ margin: "5px" }}> Impressum |</p>
            <p style={{ margin: "5px" }}> 2021</p>
        </div>;
    }
}

export default Footer;