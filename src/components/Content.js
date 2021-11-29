import React from "react";
import style from "./Content.module.css";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <div className={style.container}>
            <ul>

                {this.props.isVisible ? this.props.data.map(item => (<li key={item.id} style={{ listStyleType: "none" }}>Volume: {item.volume}</li>)) : " "}

                {this.props.areDAXValuesVisible ? this.props.values.map(value => (<li key={value.id} style={{ listStyleType: "none", cursor: "pointer" }} onClick={() => alert(`clicked on: ${value.Name}`)}>Titel: {value.Name} ISIN: {value.ISIN}</li>)) : " "}
            </ul>
        </div >
    }
}


export default Content;