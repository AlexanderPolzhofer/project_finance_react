import React from 'react';
import style from "./CardComponent.module.css";


class Cardcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  
    render() {
        return (
            <div className={style.container}>
                <p>{this.props.title}
                </p>
                <img src={this.props.imageUrl} alt="flag" style={{ width: "89px", height: "89px" }}></img>
            </div>
        );
    }
}


export default Cardcomponent;
