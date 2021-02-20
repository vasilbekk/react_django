import React, { Fragment,useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import PrivateRoute from './common/PrivateRoute'
import {TransitionGroup } from 'react-transition-group'
import {routes} from './route';
import ConfigDB from './data/customizer/config'

// Auth
import { loadUser } from './actions/auth'
import Login from './components/auth/Login'
import Error404 from './components/auth/error404'


const Root = (props) =>  {
  const abortController = new AbortController();
  

  useEffect(() => {
      console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
      console.disableYellowBox = true;
      // User auth
      store.dispatch(loadUser())
      return function cleanup() {
          abortController.abort();
        }
      // eslint-disable-next-line
    }, []);

    return(
      <Fragment>
        <Provider store={store}>
        <BrowserRouter basename={`/`}>
        <Switch>
            <Route path='/login' component={Login} />
            
            <App>
                <TransitionGroup>
                  {routes.map(({ path, Component, permission }) => (
                      <PrivateRoute key={path} path={path} component={Component} permission={permission}/>
                      ))}
                </TransitionGroup>
              <Route component={Error404} />
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
