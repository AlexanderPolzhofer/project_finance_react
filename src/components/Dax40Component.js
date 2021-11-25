import React, { Component } from 'react';

class Dax40Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            values: []
        }
    }

    getDaxValues = () => {
        const dax40 = [{
            id: 1,
            Name: "ADIDAS AG NA O.N.",
            ISIN: "DE000A1EWWW0"
        },
        {
            id: 2,
            Name: "AIRBUS SE",
            ISIN: "NL0000235190"
        },
        {
            id: 3,
            Name: "ALLIANZ SE NA O.N.",
            ISIN: "DE0008404005"
        }]

        this.setState({ values: dax40 });
        this.setState({ isVisible: true });
    }


    render() {
        return (
            <div>
                <ul>
                    {!this.state.isVisible ? "loading ..." : this.state.values.map(value => (<li>{value.Name}</li>))}

                </ul>
            </div>
        );
    }
}

export default Dax40Component;
