import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS
} from '../actions/types'



const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false, 
	isLoading: false,
	user: JSON.parse(localStorage.getItem('user'))
}

export default function(state=initialState, action) {
	switch(action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true
			}
		case USER_LOADED:
		case LOGIN_SUCCESS:
			if (action.payload.token) {localStorage.setItem('token', action.payload.token)}
			if (action.payload.user) {localStorage.setItem('user', JSON.stringify(action.payload.user))}
				else if (action.payload) {localStorage.setItem('user', JSON.stringify(action.payload))}
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			}

		case AUTH_ERROR:
		case LOGIN_FAILED:
		case LOGOUT_SUCCESS:
			localStorage.removeItem('token')
			localStorage.removeItem('isAuthenticated')
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