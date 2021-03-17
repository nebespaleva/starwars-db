import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    constructor() {
        super();
        this.updatePlanet();
    }

    state = {
        planet: {}
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet})
    }

    updatePlanet = () => {
        
        const id = Math.floor((Math.random() * 16) + 2);

        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
    }

    render() {

        const {planet: {id, name, population, rotationPeriod, diametr}} = this.state;

        return(
            <div className='d-flex justify-content-center rnd-planet'>
                <div>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                        alt='planet'
                        className='planet-img'
                    />
                </div>
                <div>
                    <h2 className='rnd-planet-title'>{name}</h2>
                    <ul className='list-group'>
                        <li className='list-group-item'>Population: {population}</li>
                        <li className='list-group-item'>Rotation period:  {rotationPeriod} hours</li>
                        <li className='list-group-item'>Diameter: {diametr} km</li>
                    </ul>
                </div>
            </div>
        )
    }
}