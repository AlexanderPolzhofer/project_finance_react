import React from "react";
import style from "./Content.module.css";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className={style.container}>

            <ul>
                <li>
                    SAP volumeData: {this.props.isVisible ? this.props.volumeData : "loading ..."} {" "}
                    datum: {this.props.isVisible ? this.props.tradingDate : "loading ..."}
                    {this.props.error ? alert(this.props.error) : null}
                </li>
            </ul>



        </div >
        );
    }
}

export default Content;