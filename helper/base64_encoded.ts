export function getBasicAuth(): string {
	const credentials = `${process.env.AUTH_CLIENT_ID}:${process.env.AUTH_SECRET}`;
	const encodedCredentials = Buffer.from(credentials).toString('base64');
	const AUTH = `Basic ${encodedCredentials}`;
	return AUTH;
}
