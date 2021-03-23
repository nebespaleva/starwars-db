import React, { Component } from 'react';
import ErrorMessage from '../error-indicator';
import Header from '../header'
import RandomPlanet from '../random-planet/random-planet';
import ToggleBtn from '../togggle-button';
import ItemsPage from '../items-page';
import SwapiService from '../../services/swapi-service';


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hideComponent: false,
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onToggleBtn = () => {
        this.setState(({hideComponent}) => {
            return {
                hideComponent: !hideComponent
            }
        })
    }

    render() {

        const {hideComponent, hasError} = this.state;

        const showComponent = !hideComponent ? <RandomPlanet/> : null
        const showWord = hideComponent ? 'Show' : 'Hide';

        if (hasError) {
            return <ErrorMessage/>
        }

        return(
            <div>
                <Header/>
                {showComponent}
                <ToggleBtn 
                    toggleBtn={this.onToggleBtn}
                    showWord={showWord}/>
                <ItemsPage
                    getData={this.swapiService.getAllPeople}/>
                <ItemsPage
                    getData={this.swapiService.getAllPlanets}/>
                <ItemsPage
                    getData={this.swapiService.getAllStarships}/>
            </div>
        )
    }
}