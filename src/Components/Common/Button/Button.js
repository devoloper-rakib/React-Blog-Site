import React from 'react';
import Style from './Button.module.css';
const Button = ({ text, style, handleDirect }) => {
	return (
		<button onClick={handleDirect} style={style} className={Style.button}>
			{text}
		</button>
	);
};

export default Button;
