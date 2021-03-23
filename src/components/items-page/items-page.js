import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorMessage from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './items-page.css';

export default class PersonsPage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1,
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (id) => {
        this.setState({
                selectedPerson: id
            });
    }


    render() {

        const {selectedPerson, hasError} = this.state;

        if (hasError) {
            return <ErrorMessage/>
        }

        return (
            <div className='person-page'>
                <ItemList
                    onItemSelected={this.onPersonSelected}
                    getData={this.props.getData}
                    renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
                <PersonDetails
                    personId={selectedPerson}/>
            </div>
        )
    }
}