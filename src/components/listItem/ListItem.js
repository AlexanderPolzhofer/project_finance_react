import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div style={{ backgroundColor: "aqua" }}>
                <ul>

                    {this.props.isVisible ? "" : this.props.values.map(value => (<li>Code: {value.code} {" "} ISIN:  {value.isin} {" "} Exchange: {value.exchange} {" "} desription: {value.description} {" "} dividend per share: {value.dividendShare}</li>))}

                </ul>
            </div>
        );
    }
}

export default ListItem;