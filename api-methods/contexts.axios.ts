import {
	requestHeaderContext,
	fileRequestBodyContext,
	fileRequestBodyContextUpdate,
} from '../test-data/config-service.data';
import { deleteProperty } from '../helper/object';
import { faker } from '@faker-js/faker';
import BasicAuth from './basicAuth';
const { expect } = require('chai');
const axios = require('axios');
const { allure } = require('allure-mocha/runtime');
import { AllureStep } from '../utils/allureStep';

class Contexts {
	private token!: string;
	private auth = BasicAuth.getInstance();
	private async getAccessToken() {
		this.token = this.token ?? (await this.auth.getToken(`${process.env.CONFIG_SLUG}`));
	}

	@AllureStep('Get a list of all contexts')
	async viewListOfContexts() {
		let response;
		try {
			await this.getAccessToken();
			response = await axios({
				method: 'get',

				url: `${process.env.CONFIG_HOST}/api/v1/contexts`,
				headers: {
					Authorization: `Bearer ${this.token}`,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});
			return response;
		} catch (error) {
			return (error as any).response;
		}
	}

	@AllureStep(`Create a Context`)
	async createContext() {
		await this.getAccessToken();
		const queryData = {
			header: requestHeaderContext,
			body: {
				...fileRequestBodyContext(),
			},
		};
		try {
			const response = await axios({
				method: 'post',
				url: `${process.env.CONFIG_HOST}/api/v1/contexts`,
				data: queryData,
				headers: {
					Authorization: `Bearer ${this.token}`,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});
			return response;
		} catch (error) {
			return (error as any).response;
		}
	}

	@AllureStep(`Update a Context`)
	async updateContext(contextId: number) {
		await this.getAccessToken();
		const queryData = {
			header: requestHeaderContext,
			body: {
				...fileRequestBodyContextUpdate(),
			},
		};
		try {
			const response = await axios({
				method: 'put',
				url: `${process.env.CONFIG_HOST}/api/v1/contexts/${contextId}`,
				data: queryData,
				headers: {
					Authorization: `Bearer ${this.token}`,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});
			return response;
		} catch (error) {
			return (error as any).response;
		}
	}

	@AllureStep(`Delete Context`)
	async deleteContext(contextId: number) {
		let response;
		try {
			await this.getAccessToken();
			response = await axios({
				method: 'delete',
				url: `${process.env.CONFIG_HOST}/api/v1/contexts/${contextId}`,
				headers: {
					Authorization: `Bearer ${this.token}`,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});
			return response;
		} catch (error) {
			return (error as any).response;
		}
	}

	@AllureStep(`Restore a Context`)
	async restoreContext(contextId: number) {
		let response;
		try {
			await this.getAccessToken();
			response = await axios({
				method: 'put',
				url: `${process.env.CONFIG_HOST}/api/v1/contexts/${contextId}/restore`,
				headers: {
					Authorization: `Bearer ${this.token}`,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});
			return response;
		} catch (error) {
			return (error as any).response;
		}
	}

	@AllureStep(`Show context by id`)
	async viewContextInfoById(contextId: number) {
		let response;
		try {
			await this.getAccessToken();
			response = await axios({
				method: 'get',
				url: `${process.env.CONFIG_HOST}/api/v1/contexts/${contextId}`,
				headers: {
					Authorization: `Bearer ${this.token}`,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});
			return response;
		} catch (error) {
			return (error as any).response;
		}
	}
}

export default new Contexts();
