import { allure } from 'allure-mocha/dist/MochaAllureReporter';

export function AllureStep(message: string) {
	return (target: Object, property: string, descriptor: PropertyDescriptor) => {
		const originalFunction = descriptor.value;
		descriptor.value = function (...args: any[]) {
			return allure.step(message, async () => {
				return originalFunction.apply(this, args);
			});
		};

		return descriptor;
	};
}
