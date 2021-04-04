import React from 'react';
import './greeting.css';

const Greeting = () => {
    return(
        <React.Fragment>
            <h2 className='greeting-title'>Welcome to STARWARS</h2>
            <h2 className='greeting-subtitle'><span className="greeting-first">DATA</span><span className="greeting-second">BASE</span></h2>
        </React.Fragment>
    )
}

export default Greeting;
