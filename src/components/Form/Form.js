import React from 'react';
import './Form.css'

const Form = ({ children, onSubmit }) => {
	return (
		<form
			className='find-user__form'
			onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export default Form;
