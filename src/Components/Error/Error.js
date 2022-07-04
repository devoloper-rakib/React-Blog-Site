import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>404 Error The webpage Not Found</h1>
			<button onClick={() => navigate('/')}>
				Click this button to go home
			</button>
		</>
	);
};

export default Error404;
