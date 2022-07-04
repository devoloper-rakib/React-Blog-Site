import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar as ReactNavbar, Nav } from 'react-bootstrap';
import style from './Navbar.module.css';
import Logo from '../../Common/Logo/Logo';
const Navbar = () => {
	return (
		<div>
			<ReactNavbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container>
					<Logo />
					<ReactNavbar.Toggle aria-controls='responsive-navbar-nav' />
					<ReactNavbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? style.activeNav : style.defaultNav
								}
							>
								Home
							</NavLink>
							<NavLink
								to='/article'
								className={({ isActive }) =>
									isActive ? style.activeNav : style.defaultNav
								}
							>
								Article
							</NavLink>
							<NavLink
								to='/team'
								className={({ isActive }) =>
									isActive ? style.activeNav : style.defaultNav
								}
							>
								Team
							</NavLink>
							<NavLink
								to='/contact'
								className={({ isActive }) =>
									isActive ? style.activeNav : style.defaultNav
								}
							>
								Contact
							</NavLink>
						</Nav>
						<Nav>
							<NavLink to='/login' className={style.headerLogIn}>
								LogIn
							</NavLink>
							<NavLink to='/' className={style.headerSubscribe}>
								Subscribe
							</NavLink>
						</Nav>
					</ReactNavbar.Collapse>
				</Container>
			</ReactNavbar>
		</div>
	);
};

export default Navbar;
