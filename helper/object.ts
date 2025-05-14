export function deleteProperty<T extends object, R extends keyof T>(target: T, propName: R): T {
	delete target[propName];
	return target;
}
