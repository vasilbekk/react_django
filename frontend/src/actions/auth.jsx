import {api} from './requests'
import { returnErrors } from './messages';

import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAILED	
} from './types'


export const loadUser = () => (dispatch, getState) => {
	// User loading
	dispatch({type: USER_LOADING})

	
	api.get('/auth/user/', tokenConfig(getState))
		.then(res => {
			dispatch({
				type: USER_LOADED,
				payload: res.data
			});
		}).catch(err=> {
			dispatch({
				type: AUTH_ERROR
			});
		});
}


// Login User
export const login = (username, password) =>  dispatch => {


	// Request Body
	const body = JSON.stringify({username, password})
	dispatch({type: USER_LOADING})
	
	api.post('/auth/login/', body)
		.then(res => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
		}).catch(err=> {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: LOGIN_FAILED
			});
		});
}

// Logout user
export const logout = () => (dispatch, getState) => {
	console.log('logout()')
	
	api.post('auth/logout/', null, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: LOGOUT_SUCCESS
			});
		}).catch(err=> {
			dispatch(returnErrors(err.response.data, err.response.status));
		});
}

// Register user
export const register = ({ username, password, email }) =>  dispatch => {

	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	// Request Body
	const body = JSON.stringify({username, email, password})

	api.post('/auth/register/', body)
		.then(res => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});
		}).catch(err=> {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: REGISTER_FAILED
			});
		});
}


export const getUserFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('user'))
}

// Setup config with token
export const tokenConfig = getState => {
	// Get token
	const token = localStorage.getItem('token')
	console.log(token)

	const config = {
		headers: {
			'Content-Type' : 'application/json'
		}
	}

	// If token -> add to headers
	if (token) {config.headers['Authorization'] = `Token ${token}`}

	return config
}