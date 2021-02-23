import { combineReducers } from 'redux'
import auth from './auth'
import Customizer from './customizer'
import admin from './admin'

export default combineReducers({
	auth,
	admin,

	Customizer
})