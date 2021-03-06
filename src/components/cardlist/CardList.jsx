import React from 'react';

import { useEffect, useState } from 'react';

import logoGermany from './../../assets/images/flagGermany.png';
import CardComponent from '../card/CardComponent';


export const Cardlist = () => {

    const [indices, setIndices] = useState([]);

    useEffect(() => {
        setIndices([{ id: 1, name: "DAX", logo: logoGermany }]);
    }, []);

    const getAllIndexComponents = () => {
        let cards = [];
        indices.forEach(element => {
            cards.push(<CardComponent key={element.id} id={element.id} title={element.name} imageUrl={element.logo}></CardComponent>);
        });
        return cards;
    }

    return (

        < div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            {getAllIndexComponents()}
        </div >

    );
}

export default Cardlist;