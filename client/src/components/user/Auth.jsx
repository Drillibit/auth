import React from 'react';
import { Route, Redirect }  from 'react-router-dom';
import getUser from './getUser';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
            
                <Redirect to="/"/>
    )} />
    
)
export default PrivateRoute;
