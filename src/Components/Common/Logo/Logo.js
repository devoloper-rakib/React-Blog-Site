import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Logo.module.css';

const Logo = ({ design }) => {
	return (
		<NavLink design={design} to='/' className={style.logo}>
			Blog <span>Dex</span>
		</NavLink>
	);
};

export default Logo;
