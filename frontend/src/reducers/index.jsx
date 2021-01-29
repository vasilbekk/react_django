import { combineReducers } from 'redux'
import auth from './auth'
import Customizer from './customizer'

export default combineReducers({
	auth,
	Customizer
})