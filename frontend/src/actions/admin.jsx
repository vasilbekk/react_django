import { api } from './requests'
import { toast } from 'react-toastify'
import { tokenConfig } from './auth'
import { ADMIN_USERS_LOADING, ADMIN_USERS_LOADED, ADMIN_USERS_LOADING_FAILED } from './types'



export const getUsersFromState = state => state?state.admin?state.admin.users:[]:[]

export const loadAdminUserList = (dispatch, getState) => {
	dispatch({type: ADMIN_USERS_LOADING})
	api.get('/users/', tokenConfig(getState))
		.then(res => dispatch({type: ADMIN_USERS_LOADED, payload:res.data}))
		.catch(err => {
			toast.error('Не удалось загрузить список пользователей')
			dispatch({type:ADMIN_USERS_LOADING_FAILED})
		})
}
