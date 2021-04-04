import React from 'react';
import {Redirect} from 'react-router-dom';

const SecretRoom = ({isLoggedIn}) => {
    if(isLoggedIn) {
        return(
            <h2 className='jumbotron text-center'>This room is full of secrets!!!</h2>
        )
    } else {
        return (
            <Redirect to='/login'/>
        )
    }
}

export default SecretRoom;