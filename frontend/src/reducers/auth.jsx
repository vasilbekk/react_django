import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS
} from '../actions/types'

import { getUserFromLocalStorage, authUserByAction, logoutUserByAction } from '../actions/auth'

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: localStorage.getItem('isAuthenticated'), 
	isLoading: false,
	user: getUserFromLocalStorage()
}


export default function(state=initialState, action) {
	switch(action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true
			}
		case USER_LOADED:
			authUserByAction(action)
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			}
		case LOGIN_SUCCESS:
			authUserByAction(action)
			return {
				...state,
				token: action.payload.token,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload.user
			}

		case AUTH_ERROR:
		case LOGIN_FAILED:
		case LOGOUT_SUCCESS:
			console.log('reducer: AUTH_ERROR, LOGIN_FAILED')
			logoutUserByAction(action)
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false
			}

		default:
			return state;
	}
}