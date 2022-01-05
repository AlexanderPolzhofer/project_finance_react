import Cardlist from '../../components/cardList/CardList.jsx';
import Heading from '../../components/heading/Heading.js';

import './Homepage.style.css';

const HomepageComponent = () => {

    return (
        <div>
            <div className='center-heading'>
                <Heading title='Wertpapiere' />
            </div>
            <Cardlist />
        </div>
    );
}

export default HomepageComponent;
