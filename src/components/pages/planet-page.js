import React from 'react';
import { withRouter } from 'react-router-dom';
import {PlanetsList} from '../../sw-components';

import './pages.css';

const PlanetPage = ({history}) => {

    return (
        <div className='person-page'>
            <PlanetsList
                onItemSelected={(itemId) => history.push(itemId)}
            >
            </PlanetsList>
        </div>
    )
};

export default withRouter(PlanetPage);