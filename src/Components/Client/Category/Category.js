import React from 'react';
import Logo from '../../Common/Logo/Logo';
import { v4 as uuidv4 } from 'uuid';
import category from '../../../Database/Catagory.json';
import './Category.css';

const Category = () => {
	return (
		<>
			<h1 className='categoryTitle'>
				<Logo />
			</h1>
			<p className='categoryDesc'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
				error! Corrupti, magni atque error deserunt vitae dignissimos ea vel
				officia, non ullam quisquam harum neque exercitationem autem, odit
				distinctio quam ut et debitis velit? Adipisci qui doloremque animi
				dolorem nam!
			</p>
			<h1 className='categoryTitle'>Hot Topics</h1>

			{category.map((item) => {
				return (
					<article className='categoryText' key={uuidv4()}>
						<p>{item.Category}</p>
						<p>{item.NumberOfPost}</p>
					</article>
				);
			})}
		</>
	);
};

export default Category;
