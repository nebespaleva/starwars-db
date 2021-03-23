import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import './person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        personInfo: null,
        loading: null
    }

    componentDidMount() {
        this.renderPerson();
    }

    componentDidUpdate(prevProp) {
        if (this.props.personId !== prevProp.personId) {
            this.renderPerson();
        }
    }


    renderPerson = () => {

        this.setState({
            loading: true
        })
        
        const {personId} = this.props;

        this.swapiService
            .getPerson(personId)
            .then((personInfo) => {
                this.setState({
                    personInfo,
                    loading: false
                })
            })

    }

    render() {

        const {personInfo, loading} = this.state;
        if (!personInfo) {
            return (
                <span>Please, choose your character</span>
            )
        }

        const content = () => {
            return(
                <React.Fragment>
                    <div>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${personInfo.id}.jpg`} 
                            alt='person'
                            className='person-img'
                        />
                    </div>
                    <div className='person-info'>
                        <h2 className='person-details-title'>{personInfo.name}</h2>
                        <ul className='list-group'>
                            <li className='list-group-item'>Gender: {personInfo.gender}</li>
                            <li className='list-group-item'>Birth year: {personInfo.birthYear}</li>
                            <li className='list-group-item'>Eye color: {personInfo.eyeColor}</li>
                        </ul>
                    </div>
                </React.Fragment>
            )
        }

        const showSpinner = loading ? <Spinner/> : null;
        const showContent = !loading ? content() : null;

        return(
            <div className='d-flex justify-content-center person-details'>
                {showSpinner}
                {showContent}
            </div>
        )
    }
}