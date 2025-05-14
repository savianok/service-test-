import { message } from '../test-data/config-service.data';
import Admin from '../api-methods/admin.axios';
import Contexts from '../api-methods/contexts.axios';
import Response from '../api-methods/responses';
import { afterEach, beforeEach, after, before } from 'mocha';
const sql = require('../sql/contexts-service.sql');
const { expect } = require('chai');
const axios = require('axios');
const { allure } = require('allure-mocha/runtime');
import { AllureStep } from '../utils/allureStep';

describe('Get list of contexts', () => {
	it('C6940001.1 Get a list of all contexts ', async () => {
		const response = await Contexts.viewListOfContexts();
		await Response.checkSuccessContextsResponsePropertiesList(response, 200);
	});
});

describe('Create a Context object', () => {
	it('C6940001.2 Create a Context object', async () => {
		const response = await Contexts.createContext();
		await Response.checkSuccessContextProperties(response, 201);
		await sql.Select(sql.deleteContextByIdLastQueryInContexts());
	});
});

describe('Show context by id', () => {
	let contextId: number;

	beforeEach('Create a context ', async () => {
		contextId = (await Contexts.createContext()).data.data.id;
	});

	it('C6940001.3 Show context by id ', async () => {
		const response = await Contexts.viewContextInfoById(contextId);
		await Response.checkSuccessContextProperties(response, 200);
		await sql.Select(sql.deleteContextByIdLastQueryInContexts());
	});
});

describe('Update a context', () => {
	let contextId: number;

	beforeEach('Create a context ', async () => {
		contextId = (await Contexts.createContext()).data.data.id;
	});

	it('C6940001.4 Update a context', async () => {
		const response = await Contexts.updateContext(contextId);
		await Response.checkSuccessResponseProperties(response, 200);
		await sql.Select(sql.deleteContextByIdLastQueryInContexts());
	});
});

describe('Delete a context', () => {
	let contextId: number;

	beforeEach('Create a context ', async () => {
		contextId = (await Contexts.createContext()).data.data.id;
	});

	it(`C6940001.5  Delete context`, async () => {
		const response = await Contexts.deleteContext(contextId);
		await Response.checkSuccessResponseProperties(response, 200);
		await sql.Select(sql.deleteContextByIdLastQueryInContexts());
	});

	it(`C6940001.5.1 Delete a deleted context`, async () => {
		const responseDelete = await Contexts.deleteContext(contextId);
		const response = await Contexts.deleteContext(contextId);
		await Response.checkUnsuccessResponseProperties(response, 404, message.resourceNotFound);
		await sql.Select(sql.deleteContextByIdLastQueryInContexts());
	});
});

describe('Restore a context', () => {
	let contextId: number;

	beforeEach('Create a context ', async () => {
		contextId = (await Contexts.createContext()).data.data.id;
	});

	it(`C6940001.6  Restore context`, async () => {
		const responseDelete = await Contexts.deleteContext(contextId);
		const response = await Contexts.restoreContext(contextId);
		await Response.checkSuccessResponseProperties(response, 200);
		await sql.Select(sql.deleteContextByIdLastQueryInContexts());
	});
});

export let fullUrl: string;
