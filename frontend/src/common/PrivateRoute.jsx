import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'

const PrivateRoute = ({ path, component: Component, anim, auth, ...rest }) => (
  <Route {...rest} exact path={`${process.env.PUBLIC_URL}${path}`}>
    {({ match }) => (
        <CSSTransition 
        in={match != null}
        timeout={100}
        classNames={anim} 
        unmountOnExit
        >
        <div>
        {auth.isAuthenticated?<Component/>:<Redirect to='/login'/>}
        
        </div>
        </CSSTransition> 
    )}
  </Route>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);