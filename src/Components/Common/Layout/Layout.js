import React from 'react';
import Navbar from '../../Client/Navbar/Navbar';
import './Layout.css';
const Layout = ({ children }) => {
	return (
		<>
			{/* <Navbar /> */}

			<div className='layOut'>{children}</div>

			{/* <Footer/> */}
		</>
	);
};

export default Layout;
