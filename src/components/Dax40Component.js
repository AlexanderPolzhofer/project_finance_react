import React, { Component } from 'react';

class Dax40Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
 

    render() {
        return (
            <div style={{ backgroundColor: "aqua" }}>
                <ul>
                   
                    {!this.props.isVisible ? "" : this.props.values.map(value => (<li>Titel: {value.Name} {" "} ISIN:  {value.ISIN}</li>))}

                </ul>
            </div>
        );
    }
}

export default Dax40Component;
