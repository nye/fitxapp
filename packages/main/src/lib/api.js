import axios from 'axios';

export class API {
	constructor() {
		this.baseUrl = import.meta.env.VITE_FACTORIAL_API_BASE;
		this.apiKey = import.meta.env.VITE_FACTORIAL_API_KEY;
		this.employee_id = import.meta.env.VITE_FACTORIAL_EMPLOYEE_ID;
	}

	async post(endpoint, data){
		const url = `${this.baseUrl}${endpoint}`;
		const options = {
			headers: {
				'accept': 'application/json',
				'content-type': 'application/json',
				'x-api-key': this.apiKey,
			},
		};

		try{
			const response = await axios.post(url, data, options);
			return response.data;
		}catch(error){
			console.error(`Error in POST request to ${endpoint}:`, error.message);
			throw error;
		}
	}

	async get(endpoint){
		const url = `${this.baseUrl}${endpoint}`;
		const options = {
			headers: {
				'accept': 'application/json',
				'x-api-key': this.apiKey,
			},
		};

		try{
			const response = await axios.get(url, options);
			return response.data;
		}catch(error){
			console.error(`Error in POST request to ${endpoint}:`, error.message);
			throw error;
		}
	}
}
