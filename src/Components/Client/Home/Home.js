import React from 'react';
import Layout from '../../Common/Layout/Layout';
import HeroSection from '../HeroSection/HeroSection';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Post from '../Post/Post';
import Category from '../Category/Category';

const Home = () => {
	return (
		<>
			<Layout>
				<HeroSection />
				<div className='BlogPostMain'>
					<div className='PostLeft'>
						<Post />
					</div>
					<div className='PostRight'>
						<Category />
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Home;
