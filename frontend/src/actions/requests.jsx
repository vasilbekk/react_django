import axios from 'axios'

export const api = axios.create({
	headers: {'Content-Type': "application/json"},
	// timeout: 5000,
	baseURL: 'https://chatupper.com/api/'
})