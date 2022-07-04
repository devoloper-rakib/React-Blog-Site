import React from 'react';
import './Footer.css';
const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<>
			<p className='footer'>
				Copyright {date} All rights reserved to <span>Rakib Hasan Sohag</span>
			</p>
		</>
	);
};

export default Footer;
