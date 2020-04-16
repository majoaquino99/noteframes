import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../firebase/Auth';
import PropTypes from 'prop-types';

/*  ProtectedRoute takes in all the same props 
that we had previously passed into our Route component 
and returns the very same Route component using the render prop. */

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={props =>
                currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={'/'} />
                )
            }
        />
    );
};

ProtectedRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.elementType.isRequired, PropTypes.element.isRequired]).isRequired,
};


export default ProtectedRoute;