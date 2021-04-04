import React from 'react';
import {Redirect} from 'react-router-dom';

import './login.css';

const Login = ({isLoggedIn, onLogin}) => {

    if(isLoggedIn) {
        return <Redirect to='/'/>;
    }

    return(
        <div className='login'>
            <h3 className='text-center login-subtitle'>To see secret content you must be log in</h3>
            <button type='button'
                    className='button btn btn-warning'
                    onClick={onLogin}>
                LOGIN
            </button>
        </div>
    )
}

export default Login;