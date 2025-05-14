import { message } from '../test-data/config-service.data';
import Admin from '../api-methods/admin.axios';
import Languages from '../api-methods/languages.axios';
import Response from '../api-methods/responses';
import { afterEach, beforeEach, after, before } from 'mocha';
const sql = require('../sql/contexts-service.sql');

const { expect } = require('chai');
const axios = require('axios');
const { allure } = require('allure-mocha/runtime');
import { AllureStep } from '../utils/allureStep';

describe('Get list of languages', () => {
	it('C6940002.1 Get a list of all languages ', async () => {
		const response = await Languages.viewListOfLanguages();
		await Response.checkSuccessLanguagesResponsePropertiesList(response, 200);
	});
});

describe('Creates a language object', () => {
	it('C6940002.2 Creates a language object', async () => {
		const response = await Languages.createLanguage();
		await Response.checkSuccessLanguagesProperties(response, 201);
		await sql.Select(sql.deleteLanguageByIdLastQueryInLanguages());
	});
});

describe('Get single language entity by id', () => {
	let languageId: number;

	beforeEach('Create a language', async () => {
		languageId = (await Languages.createLanguage()).data.data.id;
	});

	it('C6940002.3 Show language by id ', async () => {
		const response = await Languages.viewLanguageInfoById(languageId);
		await Response.checkSuccessLanguagesProperties(response, 200);
		await sql.Select(sql.deleteLanguageByIdLastQueryInLanguages());
	});
});

describe('Update a language', () => {
	let languageId: number;

	beforeEach('Create a language', async () => {
		languageId = (await Languages.createLanguage()).data.data.id;
	});

	it('C6940002.4 Update a language', async () => {
		const response = await Languages.updateLanguage(languageId);
		await Response.checkSuccessLanguagesProperties(response, 200);
		await sql.Select(sql.deleteLanguageByIdLastQueryInLanguages());
	});
});

describe('Delete a language', () => {
	let languageId: number;

	beforeEach('Create a language', async () => {
		languageId = (await Languages.createLanguage()).data.data.id;
	});

	it(`C6940002.5  Delete a language`, async () => {
		const response = await Languages.deleteLanguage(languageId);
		await Response.checkSuccessDeleteResponseProperties(response, 200);
		await sql.Select(sql.deleteLanguageByIdLastQueryInLanguages());
	});

	it(`C6940002.5.5 Delete a deleted language`, async () => {
		const responseDelete = await Languages.deleteLanguage(languageId);
		const response = await Languages.deleteLanguage(languageId);
		await Response.checkUnsuccessResponseProperties(response, 404, message.resourceNotFound);
		await sql.Select(sql.deleteLanguageByIdLastQueryInLanguages());
	});
});

describe('Restore a language', () => {
	let languageId: number;

	beforeEach('Create a language ', async () => {
		languageId = (await Languages.createLanguage()).data.data.id;
	});

	it(`C6940002.6  Restore a language`, async () => {
		const responseDelete = await Languages.deleteLanguage(languageId);
		const response = await Languages.restoreLanguage(languageId);
		await Response.checkSuccessResponseProperties(response, 200);
		await sql.Select(sql.deleteLanguageByIdLastQueryInLanguages());
	});
});

describe('Delete force a language', () => {
	let languageId: number;

	beforeEach('Create a language', async () => {
		languageId = (await Languages.createLanguage()).data.data.id;
	});

	it(`C6940002.7  Delete force a language`, async () => {
		const response = await Languages.deleteForceLanguage(languageId);
		await Response.checkSuccessResponseProperties(response, 200);
	});
});

export let fullUrl: string;
