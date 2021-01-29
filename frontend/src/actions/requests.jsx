import axios from 'axios'

export const api = axios.create({
	headers: {'Content-Type': "application/json"},
	timeout: 5000,
	baseURL: 'http://127.0.0.1:8000/api/'
})