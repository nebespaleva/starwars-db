import React from 'react';
import icon from './death-star.png';
import './error.css';

const ErrorMessage = () => {
    return(
        <div className='error-container'>
            <img src={icon} alt='error icon' className='error-img'/>
            <div className='error-title'>Oops, something goes wrong...</div>
            <div className='error-subtitle'>We've sent out droids to fix the problem!</div>
        </div>
    )
}

export default ErrorMessage;