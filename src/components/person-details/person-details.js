import React, { Component } from 'react';
import './person-details.css';

export default class PersonDetails extends Component {
    render() {
        return(
            <div className='d-flex justify-content-center person-details'>
                <div>
                    <img src='https://www.designyourway.net/art/wp-content/uploads/2019/07/ivan-batalla-r2-d2-star-wars-3.jpg' 
                        alt='person'
                        className='person-img'
                    />
                </div>
                <div>
                    <h2 className='person-details-title'>Planet Name</h2>
                    <ul className='list-group'>
                        <li className='list-group-item'>Gender: Male</li>
                        <li className='list-group-item'>Birth year: 4960</li>
                        <li className='list-group-item'>Eye color: Red</li>
                    </ul>
                </div>
            </div>
        )
    }
}