import React, { Component } from 'react';
import Header from '../header'
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import RandomPlanet from '../random-planet/random-planet';

export default class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <RandomPlanet/>
                <ItemList/>
                <PersonDetails/>
            </div>
        )
    }
}