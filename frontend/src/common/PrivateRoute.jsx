import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import ConfigDB from '../data/customizer/config'
import { getUserPermissions, isUserHavePermission } from '../actions/user'
import Error403 from '../components/auth/error403'

const anim = ConfigDB.data.router_animation

const PrivateRoute = ({ path, component: Component, auth, permission, ...rest }) => (
  <Route {...rest} exact path={`${process.env.PUBLIC_URL}${path}`}>
    {({ match }) => (
        <CSSTransition 
        in={match != null}
        timeout={100}
        classNames={anim} 
        unmountOnExit
        >
        <div>
        {auth.isAuthenticated?
            isUserHavePermission(auth.user, permission)?
                <Component/>
            :<Error403 />
        :<Redirect to='/login'/>}
        
        </div>
        </CSSTransition> 
    )}
  </Route>
);

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);