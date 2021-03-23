import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import PlanetView from './planet-view';
import ErrorMessage from '../error-indicator';
import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000)
    }

    componentWillUnmount() {
        console.log('unmounting')
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        
        const id = Math.floor((Math.random() * 16) + 2);

        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }

    render() {

        const {loading, planet, error} = this.state;

        const showData = !(loading || error);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = showData ? <PlanetView planet={planet}/> : null;

        return(
            <div className='d-flex justify-content-center rnd-planet'>
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}