import {
	requestHeaderLanguage,
	fileRequestBodyLanguage,
	fileRequestBodyLanguageUpdate,
} from '../test-data/config-service.data';
import BasicAuth from './basicAuth';
const { expect } = require('chai');
const axios = require('axios');
const { allure } = require('allure-mocha/runtime');
import { AllureStep } from '../utils/allureStep';

class Languages {
	private token!: string;
	private auth = BasicAuth.getInstance();
	private async getAccessToken() {
		this.token = this.token ?? (await this.auth.getToken(`${process.env.CONFIG_SLUG}`));
	}

	@AllureStep('Get a list of all Languages')
	async viewListOfLanguages() {
		let response;
		try {
			await this.getAccessToken();
			response = await axios({
				method: 'get',

				url: `${process.env.CONFIG_HOST}/api/v1/languages`,
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

	@AllureStep(`Create a Language`)
	async createLanguage() {
		await this.getAccessToken();
		const queryData = {
			header: requestHeaderLanguage,
			body: {
				...fileRequestBodyLanguage(),
			},
		};
		try {
			const response = await axios({
				method: 'post',
				url: `${process.env.CONFIG_HOST}/api/v1/languages`,
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

	@AllureStep(`Show Language by id`)
	async viewLanguageInfoById(languageId: number) {
		let response;
		try {
			await this.getAccessToken();
			response = await axios({
				method: 'get',
				url: `${process.env.CONFIG_HOST}/api/v1/languages/${languageId}`,
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

	@AllureStep(`Update a Language`)
	async updateLanguage(languageId: number) {
		await this.getAccessToken();
		const queryData = {
			header: requestHeaderLanguage,
			body: {
				...fileRequestBodyLanguageUpdate(),
			},
		};
		try {
			const response = await axios({
				method: 'put',
				url: `${process.env.CONFIG_HOST}/api/v1/languages/${languageId}`,
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

	@AllureStep(`Delete Language`)
	async deleteLanguage(languageId: number) {
		let response;
		try {
			await this.getAccessToken();
			response = await axios({
				method: 'delete',
				url: `${process.env.CONFIG_HOST}/api/v1/languages/${languageId}`,
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

	@AllureStep(`Restore Language`)
	async restoreLanguage(languageId: number) {
		let response;
		try {
			await this.getAccessToken();
			response = await axios({
				method: 'put',
				url: `${process.env.CONFIG_HOST}/api/v1/languages/${languageId}/restore`,
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

	@AllureStep(`Delete force Language`)
	async deleteForceLanguage(languageId: number) {
		let response;
		try {
			await this.getAccessToken();
			response = await axios({
				method: 'delete',
				url: `${process.env.CONFIG_HOST}/api/v1/languages/${languageId}/force-delete`,
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

export default new Languages();
