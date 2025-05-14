import BasicAuth from './basicAuth';
const { expect } = require('chai');
const axios = require('axios');
const { allure } = require('allure-mocha/runtime');
import { AllureStep } from '../utils/allureStep';

class Admin {
	private token!: string;
	private auth = BasicAuth.getInstance();
	private async getAccessToken() {
		this.token = this.token ?? (await this.auth.getToken(`${process.env.CONFIG_SLUG}`));
	}

	@AllureStep('Get maintenance status')
	async getMaintenanceStatus() {
		await this.getAccessToken();
		let response;
		try {
			response = await axios({
				method: 'get',
				url: `${process.env.CONFIG_HOST}/api/admin/maintenance`,
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

	@AllureStep('Get maintenance status with broken link')
	async getMaintenanceStatusBrokenLink() {
		await this.getAccessToken();
		let response;
		try {
			response = await axios({
				method: 'get',
				url: `${process.env.CONFIG_HOST}/api/admin/mainance`,
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

	@AllureStep('Set maintenance status true')
	async setMaintenanceStatusTrue() {
		await this.getAccessToken();
		const queryData = {
			maintenance: true,
		};
		const response = await axios({
			method: 'post',
			url: `${process.env.CONFIG_HOST}/api/admin/maintenance`,
			data: queryData,
			headers: {
				Authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		return response;
	}

	@AllureStep('Set maintenance status false')
	async setMaintenanceStatusFalse() {
		await this.getAccessToken();
		const queryData = {
			maintenance: false,
		};
		const response = await axios({
			method: 'post',
			url: `${process.env.CONFIG_HOST}/api/admin/maintenance`,
			data: queryData,
			headers: {
				Authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		return response;
	}

	@AllureStep('Set maintenance status (integer value)')
	async setMaintenanceStatusInteger() {
		await this.getAccessToken();
		const queryData = {
			maintenance: 12,
		};
		let response;
		try {
			response = await axios({
				method: 'post',
				url: `${process.env.CONFIG_HOST}/api/admin/maintenance`,
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

	@AllureStep('Set maintenance status (string value)')
	async setMaintenanceStatusString() {
		await this.getAccessToken();
		const queryData = {
			maintenance: 'true',
		};
		let response;
		try {
			response = await axios({
				method: 'post',
				url: `${process.env.CONFIG_HOST}/api/admin/maintenance`,
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

	@AllureStep('Set maintenance status (null value)')
	async setMaintenanceStatusNull() {
		await this.getAccessToken();
		const queryData = {
			maintenance: null,
		};
		let response;
		try {
			response = await axios({
				method: 'post',
				url: `${process.env.CONFIG_HOST}/api/admin/maintenance`,
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

	@AllureStep('Set maintenance status without body')
	async setMaintenanceStatusWithoutBody() {
		await this.getAccessToken();
		const queryData = {};
		let response;
		try {
			response = await axios({
				method: 'post',
				url: `${process.env.CONFIG_HOST}/api/admin/maintenance`,
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

	@AllureStep('Get the list all of the failed queue jobs')
	async getListFailedJobs() {
		await this.getAccessToken();
		const response = await axios({
			method: 'get',
			url: `${process.env.CONFIG_HOST}/api/admin/queue/list-failed`,
			headers: {
				Authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		return response;
	}

	@AllureStep('Restart queue worker')
	async restartQueueWorker() {
		await this.getAccessToken();
		const queryData = {
			maintenance: true,
		};
		const response = await axios({
			method: 'post',
			url: `${process.env.CONFIG_HOST}/api/admin/queue/restart`,
			data: queryData,
			headers: {
				Authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		return response;
	}

	@AllureStep('Retry failed queue jobs')
	async retryFailedQueueJobs() {
		await this.getAccessToken();
		const queryData = {
			maintenance: true,
		};
		const response = await axios({
			method: 'post',
			url: `${process.env.CONFIG_HOST}/api/admin/queue/retry`,
			data: queryData,
			headers: {
				Authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		return response;
	}

	@AllureStep('Flush all of the failed jobs from storage')
	async flushAllFailedJobsFromStorage() {
		await this.getAccessToken();
		const queryData = {
			maintenance: true,
		};
		const response = await axios({
			method: 'delete',
			url: `${process.env.CONFIG_HOST}/api/admin/queue/delete`,
			data: queryData,
			headers: {
				Authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		return response;
	}
}

export default new Admin();
