import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './header.css';

export default class Header extends Component {
    render() {
        return(
            <div className='d-flex justify-content-around header'>
                <Link to='/'>
                    <h1 className='header-title'>StarWars DB</h1>
                </Link>
                <div className='links d-flex justify-content-between align-items-center'>
                    <Link to='/people/'>People</Link>
                    <Link to='/planets/'>Planets</Link>
                    <Link to='/starships/'>Starships</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/secret-room'>Secret Room</Link>
                </div>
            </div>
        )
    }
}