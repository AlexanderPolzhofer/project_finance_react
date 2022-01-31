import React from 'react';

import NotFoundLogo from './../../assets/images/notFound.png';
import './NotFoundPage.styles.css';

const NotFoundPage = () => {
    return (
        <div className='center'>
            <img src={NotFoundLogo} alt='notFoundImage'  />
            <h4>Seite leider nicht gefunden ...</h4>
        </div>
    );
}

export default NotFoundPage;
