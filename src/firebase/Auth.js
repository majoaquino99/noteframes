import React, { useEffect, useState } from 'react';
import firebaseApp from './firebaseConfig';
import PropTypes from 'prop-types';

/* createContext() - Tool that allows you to propagate data 
through the whole React component tree.  */
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const [pending, setPending] = useState(true);
    /*  It holds the user and will update it every time our 
    authentication status changes in firebase */

    useEffect(() => {
        const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false);
        });
        return unsubscribe;
    }, []);
    
    if (pending) {
        return <>Loading...</>;
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};