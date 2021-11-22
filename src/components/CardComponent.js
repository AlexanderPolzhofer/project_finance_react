import React from 'react';
import style from "./CardComponent.module.css";



class Cardcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style.container}>
               <p>{this.props.title}
               </p>
            </div>
        );
    }
}


export default Cardcomponent;
