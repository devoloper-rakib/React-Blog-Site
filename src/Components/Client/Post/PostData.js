import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Common/Button/Button';
import './Post.css';
const PostData = ({ item }) => {
	const transCutSting = (str, num) => {
		if (str.length > num) {
			return str.slice(0, num) + '.......';
		} else {
			return str;
		}
	};

	const { description, category, date, title, author, images } = item;
	return (
		<>
			<div className='SinglePost'>
				<div className='PostImg'>
					<img src={images} alt={category} />
				</div>
				<div className='PostText'>
					<Link
						className='PostButton'
						// to={title}
						to='/login'
						state={{ title, description, category, images }}
					>
						{category}
					</Link>
					<h3 className='postTitle'>{title}</h3>
					<p className='postDescription'>{transCutSting(description, 230)}</p>
					<Link to={title} state={{ title, description, category, images }}>
						<Button text='learn More' />
					</Link>
					<div className='author'>
						<img src={require('../../../assist/autor.png')} alt={author} />
						<div className='authorDis'>
							<p>{author}</p>
							<p>{date}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostData;
