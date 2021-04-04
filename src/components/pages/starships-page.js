import React from 'react';
import {StarshipsList} from '../../sw-components';
import {withRouter} from 'react-router-dom';

import './pages.css';

const StarshipPage = ({history}) => {

    return (
        <div className='person-page'>
            <StarshipsList
                onItemSelected={(itemId) => history.push(itemId)}
            >
            </StarshipsList>
        </div>
    )
}

export default withRouter(StarshipPage);