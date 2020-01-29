import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Requirements: 
// 1. It has the same API as Route
// 2. It renders a Route component and passes all the props through
// 3. It checks if the user is authenticated, if they, are...
// ... it renders the component props, if not...
// ... it redirects to login

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={(props) => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            } else {
                return <Redirect to="/api/login" />
            }
        }}
        />
    )
}

export default PrivateRoute;
