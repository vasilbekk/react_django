import { CREATE_MESSAGE, GET_MESSAGES } from './types';

// CREATE_MESSAGE
export const createMessage = msg => {
	return {
		type: CREATE_MESSAGE,
		payload: msg
	}
}

// RETURN ERRORS
export const returnErrors = (msg, status) => {
	if (!msg) {return undefinedError()}
	if (!status) {return undefinedError()}
	return {
		type: GET_MESSAGES,
		payload: { msg, status }
	}
}

export const parseError = (err) => {
	if (err.response) {
		return returnErrors(err.response.data, err.response.status)
	}
	else {
		return undefinedError()
	}
}

const undefinedError = () => {
	return {
		type: GET_MESSAGES,
		payload: 'Возникла неизвестная ошибка!'
	}
}
