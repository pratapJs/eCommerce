import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from "./index"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
      {...rest}
      render={props =>
          isAuthenticated() ? (
              <Component {...props} />
          ) : (
              <Redirect
                  to={{
                      pathname: "/signin",
                      state: { from: props.location }
                  }}
              />
          )
      }
  />
);
 

/* function PrivateRoute({ children, ...rest }) {
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  } */

export default PrivateRoute;
