import React from 'react';
import './Alert.css';

const Alert = ({ message, onClick }) => {
	return (
		<div className='alert'>
			<button
				className='alert__btn'
				onClick={onClick}>
				X
			</button>
			<p className='alert__message'>{message}</p>
		</div>
	);
};

export default Alert;
