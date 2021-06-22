import { IAuthorisation } from '../redux/types';
import { totp } from 'otplib';

const SHARED_SECRET = 'SHARED_SECRET_1234567';

export const validationService = {
	validateCode: (token: string): IAuthorisation => {
		let isAuthorised = false;
		totp.options = { digits: 8, step: 30 };
		
		console.log('Authorisation with token: ', token);

		const myToken = totp.generate(SHARED_SECRET);
		console.log('Token generated in client side:', myToken);
		
		try {
			isAuthorised = totp.verify({
				token,
				secret: SHARED_SECRET
			});
			console.log('isAuthorised:', isAuthorised);
		} catch(err) {
			console.error('Authorisation failed: ', err);
		}
		return {
			authorised: isAuthorised
		};
	}
};
