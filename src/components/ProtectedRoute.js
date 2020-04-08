import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/*  ProtectedRoute takes in all the same props 
that we had previously passed into our Route component 
and returns the very same Route component using the render prop. */

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    return (
        <Route {...rest} render = {
            props => {
                if (user) {
                    return <Component {...rest} {...props} />;
                } else {
                    return <Redirect to={
                        {
                            pathname: '/unauthorized',
                            state: {
                                from: props.location
                            }
                        }
                    } />;
                }
            }
        } />
    );
};

ProtectedRoute.propTypes = {
    component: PropTypes.object.isRequired,
    user: PropTypes.bool.isRequired,
    location: PropTypes.node.isRequired,
};


export default ProtectedRoute;