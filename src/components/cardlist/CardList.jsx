import React from 'react';
import CardComponent from '../card/CardComponent';

export const Cardlist = () => {
    return (

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CardComponent title="DAX" imageUrl="images/flagGermany.png" />
            <CardComponent title="S&P 500" imageUrl="images/flagUSA.png" />
            <CardComponent title="Nikkei 225" imageUrl="images/flagJapan.png" />
        </div>

    );
}

export default Cardlist;