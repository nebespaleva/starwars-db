import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return(
            <div className='d-flex justify-content-around header'>
                <h1 className='header-title'>StarWars DB</h1>
                <div className='links d-flex justify-content-between align-items-center'>
                    <a href="#">People</a>
                    <a href="#">Planets</a>
                    <a href="#">Starships</a>
                </div>
            </div>
        )
    }
}