import React from "react";
import style from "./Content.module.css";
import ListItem from "../listItem/ListItem.js";
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockJSON: [],
            isStockJSONVisible: true
        }
    }

    render() {
        return <div className={style.container}>
            <ul>

                {this.props.isVisible ? this.props.data.map(item => (<li key={item.id} style={{ listStyleType: "none" }}>Volume: {item.volume}</li>)) : " "}

                {this.props.areDAXValuesVisible ? this.props.values.map(value => (<li key={value.id} style={{ listStyleType: "none", cursor: "pointer" }} onClick={() => alert(`clicked on: ${value.Name}`)}>Titel: {value.Name} ISIN: {value.ISIN}</li>)) : " "}

                <ListItem isVisible={this.state.isStockJSONVisible} values={this.state.stockJSON} />
            </ul>
        </div >
    }
}


export default Content;