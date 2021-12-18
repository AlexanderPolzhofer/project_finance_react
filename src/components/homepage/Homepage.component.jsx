import Cardlist from '../cardList/CardList.jsx';
import Heading from '../heading/Heading.js';
import './Homepage.style.css';

const HomepageComponent = () => {

    return (
        <div>
            <div className='center-heading'>
                <Heading />
            </div>
            <Cardlist />
        </div>
    );
}

export default HomepageComponent;
