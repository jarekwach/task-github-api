import React from 'react';
import './FindSection.css';

const FindSection = ({ children }) => {
	return (
		<section className='find-user'>
			<div className='find-user__container '>{children}</div>
		</section>
	);
};

export default FindSection;
