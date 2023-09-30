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
			setInpValue('');
		} else {
			setError('Please enter username');
		}
	};

	const handleChange = (e) => {
		setInpValue(e.target.value);
		setError('');
	};

	return (
		<>
			<form
				className='form'
				onSubmit={handleSubmit}>
				<label className='form__label'>Username:</label>
				<input
					className='form__input'
					type='text'
					value={inpValue}
					name='username'
					onChange={handleChange}
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
