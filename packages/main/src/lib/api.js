import axios from 'axios';
import { DateTime } from 'luxon';

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

	async shifts(){
		try{
			const response = await this.get('/attendance/shifts?employee_ids[]=' + this.employee_id + '&start_on=' + DateTime.now().setZone('Europe/Madrid').toFormat('yyyy-MM-dd'));

			return response.data;
		}catch(error){
			console.error('Error fetching data:', error.message);
			throw error;
		}
	}

	async clockIn(){
		try{
			return await this.post('/attendance/shifts/clock_in', {
				employee_id: this.employee_id,
				now: DateTime.now().setZone('Europe/Madrid').toFormat('yyyy-MM-dd HH:mm:ss'),
			});
		}catch(error){
			console.error('Error fetching data:', error.message);
			throw error;
		}
	}

	async clockOut(){
		try{
			return await this.post('/attendance/shifts/clock_out', {
				employee_id: this.employee_id,
				now: DateTime.now().setZone('Europe/Madrid').toFormat('yyyy-MM-dd HH:mm:ss'),
			});
		}catch(error){
			console.error('Error fetching data:', error.message);
			throw error;
		}
	}
}
