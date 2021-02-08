import React, { Fragment,useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import PrivateRoute from './common/PrivateRoute'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import {routes} from './route';
import ConfigDB from './data/customizer/config'

// Auth
import { loadUser } from './actions/auth'
import Login from './components/auth/Login'


const Root = (props) =>  {

  const [anim, setAnim] = useState("");
  const animation = ConfigDB.data.router_animation
  const abortController = new AbortController();
  const [user, setUser] = useState(null)

  useEffect(() => {
      setAnim(animation)
      console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
      console.disableYellowBox = true;
      // User auth
      store.dispatch(loadUser())
      setUser(store.getState().auth.user)
      return function cleanup() {
          abortController.abort();
        }
      // eslint-disable-next-line
    }, []);

    return(
      <Fragment>
        <Provider store={store}>
        <BrowserRouter basename={`cabinet/`}>
        <Switch>
            <Route path='/login' component={Login} />
            
            <App>
                <TransitionGroup>
                  {routes.map(({ path, Component }) => (
                      <PrivateRoute key={path} path={path} component={Component} anim={anim}/>
                      ))}
                </TransitionGroup>
            </App>
        </Switch>
        </BrowserRouter>
        </Provider>
      </Fragment>
      )
}
ReactDOM.render(<Root/>,
  document.getElementById('root')
);

serviceWorker.unregister();
