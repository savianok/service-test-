'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.addWebhookCodeToAutotest = void 0;
const axios_1 = __importDefault(require('axios'));
function addWebhookCodeToAutotest() {
	const createWebhookToken = async () => {
		const response = await (0, axios_1.default)({
			method: 'post',
			url: `${process.env.WEBHOOK_URL}/token`,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		return response;
	};
}
exports.addWebhookCodeToAutotest = addWebhookCodeToAutotest;
