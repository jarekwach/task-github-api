import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<MainSection>
				<Form />
				<Outlet />
			</MainSection>
			<Footer />
		</>
	);
};

export default Layout;
