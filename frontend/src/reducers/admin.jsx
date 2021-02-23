import { ADMIN_USERS_LOADING, ADMIN_USERS_LOADED, ADMIN_USERS_LOADING_FAILED} from '../actions/types'

const initialState = {
	usersLoading: false,
	projectsLoading: false,
	users: [],
	projects: []
}


export default function(state=initialState, action) {
	switch(action.type) {
		case ADMIN_USERS_LOADING:
			return {
				...state,
				usersLoading: true
			}
		case ADMIN_USERS_LOADED:
			return {
				...state,
				usersLoading: false,
				users: action.payload
			}

		case ADMIN_USERS_LOADING_FAILED:
			return {
				...state,
				usersLoading: false,
				users: []
			}

		default:
			return state;
	}
}