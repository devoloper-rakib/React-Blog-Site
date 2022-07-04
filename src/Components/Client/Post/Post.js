import React from 'react';
import './Post.css';
import { v4 as uuidv4 } from 'uuid';
import Data from '../../../Database/PostData.json';
import PostData from './PostData';
const Post = () => {
	// const id = new Date().getTime().toString();
	// *** mamun vai ai custom id ta keno kaj korlo nah akto bolte parben ***

	return (
		<>
			<h1 className='latest'>Latest News</h1>
			<div className='AllPost'>
				{Data.map((item) => (
					<PostData key={uuidv4()} item={item} />
				))}
			</div>
		</>
	);
};

export default Post;
