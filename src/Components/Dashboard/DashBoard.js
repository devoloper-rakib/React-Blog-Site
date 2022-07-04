import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Client/Navbar/Navbar';
import Logo from '../Common/Logo/Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPercentage,
	faChartLine,
	faShoppingCart,
	faChartSimple,
	faBoxesStacked,
	faCubes,
} from '@fortawesome/free-solid-svg-icons';

import './DashBoard.css';
const DashBoard = ({ design }) => {
	return (
		<div className='mainDashBoard'>
			<div className='DashBoardBody'>
				<div className='dashBoardLeft'>
					<aside>
						<div className='dashLogo'>
							<Logo />
						</div>
						<ul>
							<li>
								<FontAwesomeIcon icon={faChartLine} />
								<Link to='/'>DashBoard</Link>
							</li>
							<li>
								<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
								<Link to='/'>Order/BLog</Link>
							</li>
							<li>
								<FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon>
								<Link to='/'>Statistic</Link>
							</li>

							<li>
								<FontAwesomeIcon icon={faBoxesStacked}></FontAwesomeIcon>
								<Link to='/'>Product</Link>
							</li>
							<li>
								<FontAwesomeIcon icon={faCubes}></FontAwesomeIcon>
								<Link to='/'>Stock</Link>
							</li>
							<li>
								<FontAwesomeIcon icon={faPercentage}></FontAwesomeIcon>
								<Link to='/'>Offer</Link>
							</li>
						</ul>
					</aside>
				</div>

				<div className='dashBoardRight'>
					<Navbar />{' '}
					<main>
						<div className='h1'>
							<h1>Welcome to Dev Dex</h1>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
