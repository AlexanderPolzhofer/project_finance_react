import React from 'react';
import CardComponent from '../card/CardComponent';


export const Cardlist = () => {

    return (

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CardComponent id={1} title="DAX" imageUrl="images/flagGermany.png" />
            <CardComponent id={2} title="S&P 500" imageUrl="images/flagUSA.png" />
            <CardComponent id={3} title="Nikkei 225" imageUrl="images/flagJapan.png" />
        </div>

    );
}

export default Cardlist;