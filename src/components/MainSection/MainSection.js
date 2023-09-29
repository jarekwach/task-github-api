import React from 'react';
import './MainSection.css';

const MainSection = ({ children }) => {
	return (
		<section className='main-section'>
			<div className='main-section__container '>{children}</div>
		</section>
	);
};

export default MainSection;
