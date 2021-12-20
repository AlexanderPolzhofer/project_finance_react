import React from 'react';
import CardComponent from '../card/CardComponent';
import { useEffect, useState } from 'react';


export const Cardlist = () => {

    const [indices, setIndices] = useState([]);

    useEffect(() => {
        // get all Aktienindizis (DAX, ATX....)
        setIndices([{"id:":1,"name:": "DAX", "logo": "images/flagGermany.png" }, {"id":2, "name": "ATX", "logo": "images/flagUSA.png" }, {"id":3, "name": "Nikkei", "logo": "images/flagUSA.png" }]);
        // const fetchDataTest = async () => {
        //     const url = "http://localhost:8080/indices";

        //     try {

        //     } catch (err) {
        //         console.log("Error: " + err.stack)
        //     }
        // }

        // fetchDataTest();

    }, []);

    const getAllIndexComponents = ()=>{
        let cards = [];
        indices.forEach(element => {
            cards.push(<CardComponent key={element.id} id={element.id} title={element.name} imageUrl={element.logo}></CardComponent>);
        });
        return cards;
    }

    return (

        < div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {getAllIndexComponents()}
        </div >

    );
}

export default Cardlist;