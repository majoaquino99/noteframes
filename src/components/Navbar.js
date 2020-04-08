import React from 'react';
// import firebaseApp from '../firebaseConfig';
import { PropTypes } from 'prop-types';

const Navbar = ({logout}) => {
    /*  const logout = () => {
        firebaseApp.auth().signOut();
    }; */
    return (
        <nav>
            <ul className="menu">
                <li className="logo"><h1>My Notes</h1></li>
                <li className="item"><a href="https://github.com/majoaquino99/noteframes" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li className="item"><a href="#">Settings</a></li>
                <li className="item button"><button onClick={logout}>Log Out</button></li>
                <li className="toggle"><span className="bars"></span></li>
            </ul>
        </nav>
    );
};

export default Navbar;