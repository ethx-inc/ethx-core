import { NodePlopAPI } from 'plop';

export const plopWelcome = (plop: NodePlopAPI): void => {
	plop.setWelcomeMessage(
		`Welcome to package generation. Please follow the prompts to generate your new package. For any questions view the README.`
	);
};
