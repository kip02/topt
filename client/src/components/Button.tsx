import React from 'react';

type Props = {
	caption: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
};

export const Button = ({ caption, onClick }: Props) => (
	<button className="mdc-button mdc-button--outlined" onClick={onClick}>
		<div className="mdc-button__ripple"></div>
		<span className="mdc-button__label">{caption}</span>
	</button>
);