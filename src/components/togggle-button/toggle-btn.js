import React from 'react';
import './toggle-btn.css';

const ToggleBtn = ({showWord, toggleBtn}) => {

    return (
        <button 
            type='button'
            className='toggle-btn'
            onClick={toggleBtn}>
            {showWord} random planets
        </button>
    )
}

export default ToggleBtn;
