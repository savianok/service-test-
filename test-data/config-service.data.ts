const { faker } = require('@faker-js/faker');
import { getWebhookUrl } from '../api-methods/webhook';

let storedWebhookUrl: string | undefined = undefined;

export const retrieveWebhookUrl = async function retrieveWebhookUrl() {
	if (!storedWebhookUrl) {
		storedWebhookUrl = await getWebhookUrl();
	}
	return storedWebhookUrl;
};
export const storedWebhookUrlExport = storedWebhookUrl;

export const source = 'http://example.com';
export const target = 'http://example.com';
export const messageID = '123-abc-321';

export let auth = {
	source: source,
	target: target,
	messageID: messageID,
};

export const message = {
	successIsTrue: 'Success is true',
	successIsFalse: 'Success is false',
	successJob: 'Job has been accepted.',
	invalidData: 'The given data was invalid.',
	routeNotFound: 'The route api/admin/mainance could not be found.',
	wrongJson: 'Given request JSON structure was invalid.',
	requiredAsyncJob: 'Response data should be provided for async jobs.',
	maintenanceValidation: 'The maintenance field must be true or false.',
	requiredMaintenanceField: 'The maintenance field is required.',
	profileNotFound: 'Profile not found.',
	encryptedFile: 'PdfToolbox error occurred. Error code: 105. File is encrypted and could not be opened for writing.',
	jobError: 'PdfToolbox error occurred. Error code: 105. File is encrypted and could not be opened for writing.',
	pdftoolboxError: 'An error occurred while executing the job.',
	resourceNotFound: 'Resource not found.',
	FileNotFound: 'File not found.',
	FileMovedSuccessfully: 'File moved successfully.',
	FileCannotBeMoved: 'File cannot be moved to the same storage.',
	FileIsLocked: 'File is locked due to recently create.',
	EpicIdParse:
		'Epic\\Id\\EpicId::parse(): Argument #1 ($id) must be of type string, array given, called in /var/www/html/app/Rules/v1/EpicIdRule.php on line 25',

	FileAlreadyTracked: 'File already tracked by service under reference',
};

const longString = 'b'.repeat(65536);

export const characters = {
	1: 'r',
	2: 'aw',
	3: 'ord',
	100: 'qwertqattpzn2n4vl9s9nj77hg783gfzdjrznhv9unqvb4ryhd4jur8cygqattpzn2n4vl9s9njhgwpgggdjuf6uvpqyitwlwefe',
	101: '1qwertqattpzn2n4vl9s9nj77hg783gfzdjrznhv9unqvb4ryhd4jur8cygqattpzn2n4vl9s9njhgwpgggdjuf6uvpqyitwlwefe',
	128: 'uF2L6UVPqyiTwL4RA7MvKCAG8WWgJB6KPRdVP87Pu4fdNL4F6WdV783gAyhqx3zRLGGttKHVFN5fZdJrZnhV9uNQvb4ryHD4Jur8cygqATtPzN2n4vL9S9Nj77hGwPGG',
	129: 'uF2L6UVPqyiTwL4RA7MvKCAG8WWgJB6KPRdVP87Pu4fdNL4F6WdV783gAyhqx3zRLGGttKHVFN5fZdJrZnhV9uNQvb4ryHD4Jur8cygqATtPzN2n4vL9S9Nj77hGwPGGg',
	179: 'qwertyqwertywerqattpznunvlisnjgggghgfzdjrznhvunqvbryhdjurcygqattpznunvlisnjhgwpgggdjufuvpqyitwlwefeqwertqattpznunvlisnjgggghgfzdjrznhvunqvbryhdjurcygqattpzgggdjufuqweZXCqwertyqwer',
	180: 'qwertqattpzn2n4vl9s9nj77hg783gfzdjrznhv9unqvb4ryhd4jur8cygqattpzn2n4vl9s9njhgwpgggdjuf6uvpqyitwlwefe1qwertqattpzn2n4vl9s9nj77hg783gfzdjrznhv9unqvb4ryhd4jur8cygqattpzgggdjuf6uqweZXC',
	255: 'http://uf2l6uvpqyitwl4ra7mvkcag8wwgjb6kprdvp87pu4fdnl4f6wdv783gayhqx3zrlggttkhvfn5fzdjrznhv9unqvb4ryhd4jur8cygqattpzn2n4vl9s9nj77hgwpgggwgjb6kprdvp87pu4fdnl4f6wdv783gayhqx3zrlggttkhvfn5fzdjrznhv9unqvb4ryhd4jur8cygqattpzn2n4vl9s9njhgwpgggdjuf6uvpqyitwlwefe',
	256: 'http://uf2l6uvpqyitwl4ra7mvkcag8wwgjb6kprdvp87pu4fdnl4f6wdv783gayhqx3zrlggttkhvfn5fzdjrznhv9unqvb4ryhd4jur8cygqattpzn2n4vl9s9nj77hgwpgggwgjb6kprdvp87pu4fdnl4f6wdv783gayhqx3zrlggttkhvfn5fzdjrznhv9unqvb4ryhd4jur8cygqattpzn2n4vl9s9njhgwpgggdjuf6uvpqyitwlwefeW',
	65535: longString,
	//const longString = 'b'.repeat(65536);
	//console.log(longString);,
	randomText: faker.lorem.text(),
	randomPhone: faker.phone.number(),
	randomFirstName: faker.name.firstName(),
	randomLastName: faker.name.lastName(),
	randomEmail: faker.internet.email(),
	emptyString: '',
	simpleString: 'example.com',
	invalidDateTime: '21-12-2024T00:00:00',
	dateBeforeCurrentTime: '2020-12-21T00:00:00',
	no64BaseFile: 'itIsAnotBase64Unknown123file',
};

export const requestHeaderConfig = {
	version: 1,
	source: 'http://example.com',
	target: 'http://example.com',
	messageID: '123-abc-321',
	datetime: faker.datatype.datetime(1893456000000),
	description: faker.lorem.text(),
	debug: true,
	asyncResponse: null,
};

export const requestHeaderLanguage = {
	version: 1,
	source: 'http://example.com',
	target: 'http://example.com',
	messageID: '123-abc-321',
	datetime: faker.datatype.datetime(1893456000000),

	description: faker.lorem.text(),
	debug: true,
	asyncResponse: null,
};

export const requestHeaderContext = {
	version: 1,
	source: 'http://example.com',
	target: 'http://example.com',
	messageID: '123-abc-321',
	datetime: faker.datatype.datetime(1893456000000),
	description: faker.lorem.text(),
	debug: true,
	asyncResponse: null,
};

export const requestHeader = {
	version: 1,
	source: 'http://example.com',
	target: 'http://example.com',
	messageID: '123-abc-321',
	datetime: faker.datatype.datetime(1893456000000),
	description: faker.lorem.text(),
	debug: true,
	contact: [
		{
			person: `${faker.name.firstName()} ${faker.name.lastName()}`,
			email: faker.internet.email(),
			phone: faker.phone.number(),
			description: faker.lorem.word(),
		},
	],
	asyncResponse: null,
};

export function fileRequestHeader() {
	return {
		version: 1,
		source: 'http://example.com',
		target: 'http://example.com',
		messageID: '123-abc-321',
		datetime: faker.datatype.datetime(1893456000000),
		description: faker.lorem.text(),
		debug: true,
		contact: [
			{
				person: `${faker.name.firstName()} ${faker.name.lastName()}`,
				email: faker.internet.email(),
				phone: faker.phone.number(),
				description: faker.lorem.word(),
			},
		],
		asyncResponse: null,
	};
}

export const requestHeaderAsyncWebhookMove = async function requestHeaderAsyncWebhookMove() {
	const WebhookUrl = await retrieveWebhookUrl();

	const requestHeaderAsyncWebhookMove = {
		version: 1.0,
		source: 'https://tests.dev',
		target: 'https://tests.dev',
		messageID: 'test-message-ID	',
		datetime: faker.datatype.datetime(1893456000000),
		description: faker.lorem.text(),
		debug: true,
		contact: [
			{
				person: `${faker.name.firstName()} ${faker.name.lastName()}`,
				email: faker.internet.email(),
				phone: faker.phone.number(),
				description: faker.lorem.word(),
			},
		],
		asyncResponse: {
			notify: [
				{
					filename: null,
					path: null,
					connectionProfile: {
						http: {
							method: 'POST',
							url: WebhookUrl,
							headers: [],
						},
					},
				},
			],
		},
	};
	return requestHeaderAsyncWebhookMove;
};

export function fileRequestBody() {
	return {
		foreignReference: 'http://example.com',
		originType: 'order',
		fileExtension: 'pdf',
		expireAt: '2038-01-01T00:00:00',
		binaryContent:
			'JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PAovVGl0bGUgKP7/AGkAcwAgAHQAaABlACAAdABlAHMAdAAgAGYAaQBsAGUAIABpAG4AIAAuAHAAZABmACkKL1Byb2R1Y2VyIChTa2lhL1BERiBtNjEpCi9DcmVhdG9yIChTa2lhL1BERiBtNjEpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyMTA1MjcxMjEzMDUrMDAnMDAnKQovTW9kRGF0ZSAoRDoyMDIxMDUyNzEyMTMwNSswMCcwMCcpCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAzIDAgUgo+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgWzQgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKNCAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDMgMCBSCi9NZWRpYUJveCBbMCAwIDU5NSA4NDJdCi9Db250ZW50cyA1IDAgUgovUmVzb3VyY2VzCjw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRm9udCA8PAovRjEgNiAwIFIKPj4KPj4KPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCAxMzgKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgooVGhpcyBpcyB0aGUgdGVzdCBmaWxlIGluIC5wZGYpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKNiAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTEKL0Jhc2VGb250IC9IZWx2ZXRpY2EKL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcKPj4KZW5kb2JqCnhyZWYKMCA3CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMDc3IDAwMDAwIG4gCjAwMDAwMDAxMzggMDAwMDAgbiAKMDAwMDAwMDE5MyAwMDAwMCBuIAowMDAwMDAwMzIzIDAwMDAwIG4gCjAwMDAwMDAzOTkgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA3Ci9Sb290IDIgMCBSCi9JbmZvIDEgMCBSCj4+CnN0YXJ0eHJlZgo0NjUKJSVFT0YK',
	};
}

export function fileRequestBodyLanguage() {
	return {
		name: `${faker.lorem.word()}${faker.address.countryCode('alpha-2')}`,
		code: `${faker.lorem.word({ length: { min: 2, max: 5 }, strategy: 'fail' })}`,
	};
}

export function fileRequestBodyLanguageUpdate() {
	return {
		name: `${faker.lorem.word()}${'-UPDATE-'}${faker.address.countryCode('alpha-2')}`,

		code: `${faker.lorem.word({ length: { min: 2, max: 5 }, strategy: 'fail' })}`,
	};
}

export function fileRequestBodyContext() {
	return {
		name: `${faker.name.firstName()} ${faker.name.lastName()} ${faker.name.firstName()} ${faker.lorem.word({
			length: { min: 3, max: 50 },
			strategy: 'fail',
		})}${faker.name.lastName()}`,
		description: `${faker.lorem.word({
			length: { min: 2, max: 5 },
			strategy: 'fail',
		})}${'-description-'}${faker.lorem.word()}${faker.name.lastName()} `,
	};
}

export function fileRequestBodyContextUpdate() {
	return {
		description: `${faker.lorem.word()} ${'-UPDATE-'} ${faker.name.firstName()} `,
	};
}
