import React from "react";
import style from "./Content.module.css";
import ListItem from "../listItem/ListItem.js";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockJSON: [],
            isStockJSONVisible: false
        }
    }

    fetchData = () => {
        const url = "http://localhost:8080/stock/value/SAP.XETRA";

        let stockJSON = [];

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {
                    stockJSON.push(element);
                })
                this.setState({ stockJSON: stockJSON });
                this.setState({ isStockJSONVisible: true });
                console.log(stockJSON);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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