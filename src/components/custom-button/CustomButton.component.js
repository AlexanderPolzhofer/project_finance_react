import React from 'react';
import { useNavigate } from 'react-router-dom';

import './CustomButton.style.css'

const CustombuttonComponent = ({ text, to }) => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`${to}`);
    }

    return (
        <div>
            <button className='button' onClick={() => handleClick()}>{text}</button>
        </div>
    );
}

export default CustombuttonComponent;
