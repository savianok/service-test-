import { message } from '../test-data/config-service.data';
const { expect } = require('chai');
const axios = require('axios');
const { allure } = require('allure-mocha/runtime');
import { AllureStep } from '../utils/allureStep';
import { fullUrl } from '../test/contexts.spec';

class Response {
	@AllureStep('Check Success Webhook Api')
	async successWebhookApi(url: string) {
		await expect(fullUrl).to.equal(url);
	}

	@AllureStep('Check Success Task Webhook Api')
	async successWebhookApiTaskAllRequestsAfter1min(AllRequestsTotal: number) {
		await expect(AllRequestsTotal).to.be.within(1, 3);
	}

	@AllureStep('Check Success Async Response Properties Api Select Job Id')
	async checkSuccessAsyncResponsePropertiesApiSelectJobId(
		contentBodyJobId: any,
		jobId: any,
		contentBody: any,
		message: string,
	) {
		await expect(contentBodyJobId).to.equal(jobId);
		expect(contentBody.data.message).to.equal(message);
	}

	@AllureStep('Check Success Async Response Properties Api Delete Batch Webhook')
	async checkSuccessAsyncResponsePropertiesApiDeleteBatchWebhook(
		contentBodySuccess: boolean,
		fileReference: any,
		contentBodyDataRemovedFilesArray: any,
	) {
		await expect(fileReference).to.equal(contentBodyDataRemovedFilesArray);
		expect(contentBodySuccess).to.equal(true);
	}

	@AllureStep('Check unSuccess Async Response Properties Api Select Job Id')
	async checkUnSuccessAsyncResponsePropertiesApiSelectJobId(
		contentBodyJobId: any,
		jobId: any,
		contentBody: any,
		message: string,
	) {
		await expect(contentBodyJobId).to.equal(jobId);
		expect(contentBody.error.msg).to.equal(message);
	}

	@AllureStep('Check Success Async Response Properties Api Delete')
	async checkSuccessAsyncResponsePropertiesApiDelete(response: any, expectedCode: number) {
		await expect(response.status).to.equal(expectedCode);
		await expect(response.data.success).to.equal(true);
	}

	@AllureStep('Check Success Response Properties')
	async checkSuccessResponseProperties(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
	}

	@AllureStep('Check Success Response Properties Maintenance')
	async checkSuccessResponsePropertiesMaintenance(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('maintenance');
	}

	@AllureStep('Check Success Response Properties Maintenance True')
	async checkSuccessResponsePropertiesMaintenanceTrue(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data.data.maintenance).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('maintenance');
	}

	@AllureStep('Check Success Response Properties Maintenance False')
	async checkSuccessResponsePropertiesMaintenanceFalse(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data.data.maintenance).to.equal(false);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('maintenance');
	}

	@AllureStep('Check Unsuccess Response Properties')
	async checkUnsuccessResponseProperties(error: any, expectedCode: number, errorMessage: string) {
		expect(error.status).to.equal(expectedCode);
		expect(error.data.success).to.equal(false);
		expect(error.data.error.msg).to.equal(errorMessage);
		expect(error.data).to.have.property('foreignRef');
		expect(error.data).to.have.property('jobId');
		expect(error.data).to.have.property('sequenceNo');
		expect(error.data).to.have.property('success');
		expect(error.data).to.have.property('error');
		expect(error.data.error).to.have.property('msg');
		expect(error.data.error).to.have.property('code');
		expect(error.data.error).to.have.property('details');
		expect(error.data.error).to.have.property('previousError');
	}

	@AllureStep('Check Unsuccess Response Properties 405')
	async checkUnsuccessResponseProperties405(error: any, expectedCode: number) {
		expect(error.status).to.equal(expectedCode);
		expect(error.data.success).to.equal(false);
	}

	@AllureStep('Check Get Success Failed Jobs')
	async checkGetSuccessFailedJobs(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data).to.have.property('failedJobs');
	}

	@AllureStep('Check Success Response Properties Queue Worker')
	async checkSuccessResponsePropertiesQueueWorker(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(undefined);
	}

	@AllureStep('Check Success File Response Properties only Status')
	async checkSuccessFileResponsePropertiesOnlyStatus(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
	}

	@AllureStep('Check Success Product categories Response Properties')
	async checkSuccessTranslationKeysResponsePropertiesList(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data.translationKeys[0]).to.have.property('id');
		expect(response.data.data.translationKeys[0]).to.have.property('key');

		expect(response.data.data.translationKeys[0]).to.have.property('createdBy');
		expect(response.data.data.translationKeys[0]).to.have.property('updatedBy');
		expect(response.data.data.translationKeys[0]).to.have.property('deletedBy');
		expect(response.data.data.translationKeys[0]).to.have.property('createdAt');
		expect(response.data.data.translationKeys[0]).to.have.property('updatedAt');
		expect(response.data.data.translationKeys[0]).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Product categories Response Properties')
	async checkSuccessTranslationKeyCreateResponse(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('id');
		expect(response.data.data).to.have.property('key');
		expect(response.data.data).to.have.property('createdBy');
		expect(response.data.data).to.have.property('updatedBy');
		expect(response.data.data).to.have.property('deletedBy');
		expect(response.data.data).to.have.property('createdAt');
		expect(response.data.data).to.have.property('updatedAt');
		expect(response.data.data).to.have.property('deletedAt');
		expect(response.data.data).to.have.property('translations');
		expect(response.data.data.translations[0]).to.have.property('languageId');
		expect(response.data.data.translations[0]).to.have.property('languageName');
		expect(response.data.data.translations[0]).to.have.property('languageCode');
		expect(response.data.data.translations[0]).to.have.property('value');
	}

	@AllureStep('Check Success Show Translation Key Response Properties')
	async checkSuccessShowTranslationKeyResponse(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('id');
		expect(response.data.data).to.have.property('key');
		expect(response.data.data).to.have.property('createdBy');
		expect(response.data.data).to.have.property('updatedBy');
		expect(response.data.data).to.have.property('deletedBy');
		expect(response.data.data).to.have.property('createdAt');
		expect(response.data.data).to.have.property('updatedAt');
		expect(response.data.data).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Product Part Types Response Properties Create')
	async checkSuccessProductPartTypesResponseProperties(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('id');
		expect(response.data.data).to.have.property('identifier');
		expect(response.data.data).to.have.property('description');
		expect(response.data.data).to.have.property('createdBy');
		expect(response.data.data).to.have.property('updatedBy');
		expect(response.data.data).to.have.property('deletedBy');
		expect(response.data.data).to.have.property('createdAt');
		expect(response.data.data).to.have.property('updatedAt');
		expect(response.data.data).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Product Parts Response Properties Create')
	async checkSuccessProductPartsResponseProperties(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('id');
		expect(response.data.data).to.have.property('name');
		expect(response.data.data).to.have.property('description');
		expect(response.data.data).to.have.property('createdBy');
		expect(response.data.data).to.have.property('updatedBy');
		expect(response.data.data).to.have.property('deletedBy');
		expect(response.data.data).to.have.property('createdAt');
		expect(response.data.data).to.have.property('updatedAt');
		expect(response.data.data).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Product Part Types Response Properties List')
	async checkSuccessProductPartTypesResponsePropertiesList(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data.productPartTypes[0]).to.have.property('id');
		expect(response.data.data.productPartTypes[0]).to.have.property('identifier');
		expect(response.data.data.productPartTypes[0]).to.have.property('description');
		expect(response.data.data.productPartTypes[0]).to.have.property('createdBy');
		expect(response.data.data.productPartTypes[0]).to.have.property('updatedBy');
		expect(response.data.data.productPartTypes[0]).to.have.property('deletedBy');
		expect(response.data.data.productPartTypes[0]).to.have.property('createdAt');
		expect(response.data.data.productPartTypes[0]).to.have.property('updatedAt');
		expect(response.data.data.productPartTypes[0]).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Product Parts Response Properties List')
	async checkSuccessProductPartsResponsePropertiesList(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data.productParts[0]).to.have.property('id');
		expect(response.data.data.productParts[0]).to.have.property('name');
		expect(response.data.data.productParts[0]).to.have.property('description');
		expect(response.data.data.productParts[0]).to.have.property('createdBy');
		expect(response.data.data.productParts[0]).to.have.property('updatedBy');
		expect(response.data.data.productParts[0]).to.have.property('deletedBy');
		expect(response.data.data.productParts[0]).to.have.property('createdAt');
		expect(response.data.data.productParts[0]).to.have.property('updatedAt');
		expect(response.data.data.productParts[0]).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Products Response Properties List')
	async checkSuccessProductsResponsePropertiesList(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data.products[0]).to.have.property('id');
		expect(response.data.data.products[0]).to.have.property('name');
		expect(response.data.data.products[0]).to.have.property('description');
		expect(response.data.data.products[0]).to.have.property('createdBy');
		expect(response.data.data.products[0]).to.have.property('updatedBy');
		expect(response.data.data.products[0]).to.have.property('deletedBy');
		expect(response.data.data.products[0]).to.have.property('createdAt');
		expect(response.data.data.products[0]).to.have.property('updatedAt');
		expect(response.data.data.products[0]).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Product categories Response Properties List')
	async checkSuccessProductCategoriesResponsePropertiesList(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data.productCategories[0]).to.have.property('id');
		expect(response.data.data.productCategories[0]).to.have.property('name');
		expect(response.data.data.productCategories[0]).to.have.property('description');
		expect(response.data.data.productCategories[0]).to.have.property('createdBy');
		expect(response.data.data.productCategories[0]).to.have.property('updatedBy');
		expect(response.data.data.productCategories[0]).to.have.property('deletedBy');
		expect(response.data.data.productCategories[0]).to.have.property('createdAt');
		expect(response.data.data.productCategories[0]).to.have.property('updatedAt');
		expect(response.data.data.productCategories[0]).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Products Response Properties Create')
	async checkSuccessProductsResponseProperties(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('id');
		expect(response.data.data).to.have.property('name');
		expect(response.data.data).to.have.property('identifier');
		expect(response.data.data).to.have.property('description');
		expect(response.data.data).to.have.property('enabled');
		expect(response.data.data).to.have.property('createdBy');
		expect(response.data.data).to.have.property('updatedBy');
		expect(response.data.data).to.have.property('deletedBy');
		expect(response.data.data).to.have.property('createdAt');
		expect(response.data.data).to.have.property('updatedAt');
		expect(response.data.data).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Product  Response Properties')
	async checkSuccessProductResponse(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
	}

	@AllureStep('Check Success Product categories Response Properties Create')
	async checkSuccessProductCategoriesResponseProperties(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('id');
		expect(response.data.data).to.have.property('name');
		expect(response.data.data).to.have.property('description');
		expect(response.data.data).to.have.property('createdBy');
		expect(response.data.data).to.have.property('updatedBy');
		expect(response.data.data).to.have.property('deletedBy');
		expect(response.data.data).to.have.property('createdAt');
		expect(response.data.data).to.have.property('updatedAt');
		expect(response.data.data).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Languages Response Properties')
	async checkSuccessLanguagesResponsePropertiesList(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data.languages[0]).to.have.property('id');
		expect(response.data.data.languages[0]).to.have.property('code');
		expect(response.data.data.languages[0]).to.have.property('name');
		expect(response.data.data.languages[0]).to.have.property('createdBy');
		expect(response.data.data.languages[0]).to.have.property('updatedBy');
		expect(response.data.data.languages[0]).to.have.property('deletedBy');
		expect(response.data.data.languages[0]).to.have.property('createdAt');
		expect(response.data.data.languages[0]).to.have.property('updatedAt');
		expect(response.data.data.languages[0]).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Languages Properties')
	async checkSuccessLanguagesProperties(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('id');
		expect(response.data.data).to.have.property('code');
		expect(response.data.data).to.have.property('name');
		expect(response.data.data).to.have.property('createdBy');
		expect(response.data.data).to.have.property('updatedBy');
		expect(response.data.data).to.have.property('deletedBy');
		expect(response.data.data).to.have.property('createdAt');
		expect(response.data.data).to.have.property('updatedAt');
		expect(response.data.data).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Contexts Response Properties List')
	async checkSuccessContextsResponsePropertiesList(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data.contexts[0]).to.have.property('id');
		expect(response.data.data.contexts[0]).to.have.property('name');
		expect(response.data.data.contexts[0]).to.have.property('description');
		expect(response.data.data.contexts[0]).to.have.property('createdBy');
		expect(response.data.data.contexts[0]).to.have.property('updatedBy');
		expect(response.data.data.contexts[0]).to.have.property('deletedBy');
		expect(response.data.data.contexts[0]).to.have.property('createdAt');
		expect(response.data.data.contexts[0]).to.have.property('updatedAt');
		expect(response.data.data.contexts[0]).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Context Properties')
	async checkSuccessContextProperties(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('id');
		expect(response.data.data).to.have.property('name');
		expect(response.data.data).to.have.property('description');
		expect(response.data.data).to.have.property('createdBy');
		expect(response.data.data).to.have.property('updatedBy');
		expect(response.data.data).to.have.property('deletedBy');
		expect(response.data.data).to.have.property('createdAt');
		expect(response.data.data).to.have.property('updatedAt');
		expect(response.data.data).to.have.property('deletedAt');
	}

	@AllureStep('Check Success Get Task Lists')
	async checkSuccessGetTaskLists(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
		expect(response.data.data).to.have.property('tasks');
		expect(response.data.data.tasks[0]).to.have.property('id');
		expect(response.data.data.tasks[0]).to.have.property('command');
		expect(response.data.data.tasks[0]).to.have.property('createdAt');
		expect(response.data.data.tasks[0]).to.have.property('updatedAt');
		expect(response.data.data.tasks[0]).to.have.property('frequency');
		expect(response.data.data.tasks[0]).to.have.property('overlappingExpiresAt');
		expect(response.data.data.tasks[0]).to.have.property('runOnMaintenance');
		expect(response.data.data.tasks[0]).to.have.property('runOnSingleServer');
		expect(response.data.data.tasks[0]).to.have.property('scheduled');
		expect(response.data.data.tasks[0]).to.have.property('type');
	}

	@AllureStep('Check Success Delete Response Properties')
	async checkSuccessDeleteResponseProperties(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);
	}

	@AllureStep('Check Success Delete Response Properties Config ')
	async checkSuccessDeleteResponsePropertiesConfig(response: any, expectedCode: number) {
		expect(response.status).to.equal(expectedCode);

		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
	}

	@AllureStep('Check Success File Properties Move File Webhook')
	async checkSuccessFilePropertiesMoveFileWebhook(response: any, expectedCode: number, message: string) {
		expect(response.status).to.equal(expectedCode);
		expect(response.data.success).to.equal(true);
		expect(response.data.data.msg).to.equal(message);
		expect(response.data).to.have.property('foreignRef');
		expect(response.data).to.have.property('jobId');
		expect(response.data).to.have.property('sequenceNo');
		expect(response.data).to.have.property('success');
		expect(response.data).to.have.property('data');
	}
}

export default new Response();
