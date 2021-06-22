import React from 'react';
import { ValidateCode } from './components/ValidateCode';
import { ValidationResult } from './components/ValidationResult';
import './styles.css';

export const App = () => (
	<div className="mdl-grid">
		<div className="mdl-layout-spacer" />
		<div className="mdl-cell mdl-cell--4-col">
			<ValidateCode />
			<ValidationResult />
		</div>
		<div className="mdl-layout-spacer" />
	</div>
);
