import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ListItem = () => {

    let navigate = useNavigate();
    let { value } = useParams();

    return (
        <div>
            <button onClick={() => navigate('/dax40')}>BACK</button>
            <h2>{value}</h2>
            <span>{value.description}</span>

        </div>
    );
}

export default ListItem;