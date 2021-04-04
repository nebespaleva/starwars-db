import React from 'react';
import {withRouter} from 'react-router-dom';
import {PersonsList, PersonDetails} from '../../sw-components';

import './pages.css';

const PersonsPage = ({history, match}) => {

    const {id} = match.params;

    return (
        <div className='person-page'>
            <PersonsList
                onItemSelected={(itemId) => history.push(itemId)}
            >
            </PersonsList>
            <PersonDetails itemId={id ? id : 1}/>
        </div>
    )
}

export default withRouter(PersonsPage);