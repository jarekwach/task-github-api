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
				className='find-user__form'
				onSubmit={handleSubmit}>
				<label>Check user details:</label>
				<input
					type='text'
					value={inpValue}
					name='username'
					onChange={(e) => {
						setInpValue(e.target.value);
						setError('');
					}}
				/>
				<input
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
