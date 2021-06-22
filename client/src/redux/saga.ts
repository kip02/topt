import { call, all, takeEvery, put } from 'redux-saga/effects';
import { codeHasBeenValidated } from './authSlice';
import { sagaActions } from './sagaActions';
import { validationService } from '../services/validationService';
import { IAuthorisation, IValidateAction } from './types';

export function* validateCodeSaga(action: IValidateAction): Generator {
	try {
		console.log('Saga action received:', action);
		const result: any = yield call(
			validationService.validateCode,
			action.payload
		);

		yield put(codeHasBeenValidated(result));
	} catch (e) {
		yield put({ type: 'VALIDATE_CODE_FAILED' });
	}
}


export default function* rootSaga() {
	yield all([
		takeEvery(sagaActions.VALIDATE_CODE, validateCodeSaga)
	]);
}
