import React from 'react';

import './description.style.css'

const DescriptionComponent = ({ description }) => {
    return (
        <div className='description-container'>
          <p>Description:</p>  {description}
        </div>
    );
}

export default DescriptionComponent;
