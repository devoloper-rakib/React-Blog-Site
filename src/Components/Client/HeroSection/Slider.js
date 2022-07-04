import React from 'react';
import Button from '../../Common/Button/Button';
import style from './HeroSection.module.css';
const Slider = ({ text, img }) => {
	return (
		<>
			<div className={style.MainSlider}>
				<div className={style.sliderText}>
					<div className='div'>
						<h1>{text}</h1>
						<Button text='Read More' />
					</div>
				</div>
				<div className={style.sliderImg}>
					<img src={img} alt={text} />
				</div>
			</div>
		</>
	);
};

export default Slider;
