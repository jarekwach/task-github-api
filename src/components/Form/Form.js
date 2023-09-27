import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import Alert from '../Alert';

const Form = () => {
	const [inpValue, setInpValue] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inpValue !== '') {
			navigate(`/user/${inpValue}`);
		} else {
			setError('Please enter username');
		}
	};

	return (
		<>
			<form
				className='find-user__form form'
				onSubmit={handleSubmit}>
				<label className='form__label'>Check user details:</label>
				<input
					className='form__input'
					type='text'
					value={inpValue}
					name='username'
					onChange={(e) => {
						setInpValue(e.target.value);
						setError('');
					}}
				/>
				<input
					className='form__input form__input--submit'
					type='submit'
					value={'send'}
				/>
			</form>
			{error && (
				<Alert
					message={error}
					onClick={() => setError('')}
				/>
			)}
		</>
	);
};

export default Form;
