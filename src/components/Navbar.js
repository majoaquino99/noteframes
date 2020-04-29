import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import firebaseApp from '../firebase/firebaseConfig';

const Navbar = () => {
    const history = useHistory();
    const handleLogOut = () => {
        firebaseApp.auth().signOut(); 
        history.push('/');
    };
    return (
        <nav>
            <ul className="menu">
                <li className="logo"><h1>My Notes</h1></li>
                <li className="item"><a href="https://github.com/majoaquino99/noteframes" 
                    target="_blank" 
                    rel="noopener noreferrer">Github</a></li>
                <li className="item button" onClick={handleLogOut}>Log Out</li>
                <li className="toggle"><span className="bars"></span></li>
            </ul>
        </nav>
    );
};


export default withRouter(Navbar);