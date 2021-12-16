import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListItem = () => {

    let navigate = useNavigate();

    return (
        <div style={{ backgroundColor: "aqua" }} >
            <button onClick={() => navigate('/dax40')}>BACK</button>
            <h2>LISTITEM</h2>
        </div>
    );
}

export default ListItem;