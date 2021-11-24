import React from "react";
import style from "./Content.module.css";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className={style.container}>

            {this.props.isVisible ? this.props.data.volume : "loading ..."}

        </div >
        );
    }
}

export default Content;