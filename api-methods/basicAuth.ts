import { getBasicAuth } from '../helper/base64_encoded';
const { expect } = require('chai');
const axios = require('axios');
import { AllureStep } from '../utils/allureStep';

class BasicAuth {
	authToken!: string;
	private static instance: BasicAuth;
	@AllureStep('BasicAuth authorization')
	async authorization(slug: string) {
		const response = await axios({
			method: 'get',
			url: `${process.env.AUTH_HOST}/api/token?microservice=${slug}`,
			headers: {
				Authorization: getBasicAuth(),
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		return response;
	}

	@AllureStep('BasicAuth get Token')
	async getToken(slug: string) {
		if (this.authToken) {
			return this.authToken;
		}
		this.authToken = (await this.authorization(slug)).data.data.access_token;
		return this.authToken;
	}
	public static getInstance(): BasicAuth {
		if (!BasicAuth.instance) {
			BasicAuth.instance = new BasicAuth();
		}
		return BasicAuth.instance;
	}
}

export default BasicAuth;
