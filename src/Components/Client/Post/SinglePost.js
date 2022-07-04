import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Post.css';
const SinglePost = () => {
	const { title } = useParams();
	const { state } = useLocation();
	return (
		<div className='singlePostContainer'>
			<div className='singleImages'>
				<img src={state.images} alt={title} />
			</div>
			<h1>{title}</h1>

			<p>{state.description.slice(0, 501)}</p>
			<p>{state.description.slice(501, 1000)}</p>
			<p>{state.description}</p>
		</div>
	);
};

export default SinglePost;
