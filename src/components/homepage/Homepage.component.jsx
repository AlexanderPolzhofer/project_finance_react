import { useState } from 'react';
import Cardlist from '../cardList/CardList.jsx';
import Content from '../content/Content.js';
import Heading from '../heading/Heading.js';
import DAX40_Values from '../table/daxValues';
import './Homepage.style.css';

const HomepageComponent = () => {

    const [areDAXValuesVisible, setVisibilityFromDAXValues] = useState(false);
    const [valuesDAX, setValuesDAX] = useState([]);

    const getDaxValues = () => {
        const dax40 = DAX40_Values;
        setVisibilityFromDAXValues(true);
        setValuesDAX(dax40);
    }

    return (
        <div>
            <div className='center-heading'>
                <Heading />
            </div>
            <Cardlist />
            <Content values={valuesDAX} areDAXValuesVisible={areDAXValuesVisible} />
            <button onClick={() => getDaxValues()}>get dax values from state</button>
        </div>
    );
}

export default HomepageComponent;
