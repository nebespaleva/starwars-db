import React, { Component } from 'react';
import ErrorMessage from '../error-indicator';
import Header from '../header'
import RandomPlanet from '../random-planet/random-planet';
import ToggleBtn from '../togggle-button';
import {PlanetPage, StarshipPage, PersonsPage, Login, SecretRoom} from '../pages';
import Greeting from '../greeting';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-context-service';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { StarshipsDetails, PlanetsDetails} from '../../sw-components';


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hideComponent: false,
        hasError: false,
        isLoggedIn: false
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

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {

        const {hideComponent, hasError, isLoggedIn} = this.state;

        const showComponent = !hideComponent ? <RandomPlanet/> : null
        const showWord = hideComponent ? 'Show' : 'Hide';

        if (hasError) {
            return <ErrorMessage/>
        }

        return(
        <SwapiServiceProvider value={this.swapiService}>
            <Router>
                <div>
                    <Header/>
                    {showComponent}
                    <ToggleBtn 
                        toggleBtn={this.onToggleBtn}
                        showWord={showWord}/>
                    <Switch>
                        <Route path='/' component={Greeting} exact/>
                        <Route path='/people/:id?' component={PersonsPage}/>
                        <Route path='/planets/' component={PlanetPage}       exact/>
                        <Route path='/planets/:id' 
                            render={({match}) => {
                                const {id} = match.params;
                                return <PlanetsDetails itemId={id}/>
                            }}
                        />
                        <Route path='/starships/' component={StarshipPage}   exact/>
                        <Route path='/starships/:id' 
                            render={({match}) => {
                                const {id} = match.params;
                                return <StarshipsDetails itemId={id}/>
                            }}
                        />
                        <Route path='/login' render={() => {
                            return(
                                <Login isLoggedIn={isLoggedIn}
                                    onLogin={this.onLogin}/>
                                    )
                                }
                            }
                        />
                        <Route path='/secret-room' render={() => {
                            return <SecretRoom isLoggedIn={isLoggedIn}/>
                        }}/>
                        <Route render={() => {
                            return <h2 className='text-center'>Page not found</h2>
                        }}/>
                    </Switch>
                </div>
            </Router>
        </SwapiServiceProvider>
        )
    }
}