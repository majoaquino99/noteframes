import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Landing = (props) => {
    return (
        <div>
            <h1>Landing</h1>
            <p><Link to='/home'>View Notes</Link></p>
            <p>Logged in status: {props.user}</p>
            <button onClick= {props.handleLogin}>Login</button>
        </div>
    );
};

Landing.propTypes = {
    user: PropTypes.string.isRequired,
    handleLogin: PropTypes.node.isRequired,
};

export default Landing;