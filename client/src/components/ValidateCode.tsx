import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './Button';
import { sagaActions } from '../redux/sagaActions';
import { IStoreState } from '../redux/types';

export const ValidateCode = () => {
	const [code, setCode] = useState('');
	const dispatch = useDispatch();

	const onValidateCode = () => {
		dispatch({
			type: sagaActions.VALIDATE_CODE,
			payload: code
		});
		
		// setCode('');
	};

	return (
		<div>
			<input type="text" value={code} onChange={e => setCode(e.target.value)} />			
			<Button onClick={onValidateCode} caption="Validate" />
		</div>
	);
};

