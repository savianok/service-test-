const { WebhookAPI } = require('@epic/webhooksite-api');
const api = new WebhookAPI(process.env.WEBHOOK_URL);

export async function getWebhookUrl() {
	const TokenId = await api.getTokenId();
	const WebhookUrl = await api.getWebhookUrl(TokenId);
	return WebhookUrl;
}
