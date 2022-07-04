import React from 'react';
import './Login.css';
const Input = ({ placeholder, type, text }) => {
	return (
		<>
			<div className='input_field'>
				<input type={type} placeholder={placeholder} />
			</div>
		</>
	);
};

export default Input;
