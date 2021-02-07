import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {
	AUTH_USER_LINK,
	LOGIN_USER_LINK,
	LOGOUT_USER_LINK,
	REGISTER_USER_LINK
} from './links'

import { api } from '../actions/requests'

const authResponseData = () => ({
	user: {
		id: 11,
		username: "vasilbekk",
		email: "serg2002w@mail.ru"
	},
	token: "280a856d1b611dbda02957c41bc169e06a486d07c22595a107fcc3f0bb70287d",
})

export const configureFakeBackend = () => {
	var mock = new MockAdapter(api)
	console.log(1)
	mock.onPost(AUTH_USER_LINK).reply(500, authResponseData())
}

