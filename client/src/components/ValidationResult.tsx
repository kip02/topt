import React from 'react';
import { useSelector } from 'react-redux'
import { IStoreState } from '../redux/types';

export const ValidationResult = () => {
	const isAuthorised = useSelector((state: IStoreState) => state.authorised);
	const attempts = useSelector((state: IStoreState) => state.attempts);
	
	return (
		<>
			<div>
				<label>Attempts: { attempts }</label>
			</div>
			<div>
				<label>{isAuthorised ? 'Authorised' : 'Not Authorised'}</label>
			</div>
		</>
	);
};

