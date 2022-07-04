import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import style from './HeroSection.module.css';

import Slider_1 from '../../../assist/Slider/slider_1.jpg';
import Slider_2 from '../../../assist/Slider/slider_2.jpg';
import Slider_3 from '../../../assist/Slider/slider_3.jpg';
import Slider from './Slider';

const SliderData = [
	{
		text: 'You are the world and the world is you',
		img: Slider_1,
	},
	{
		text: 'Can the mind be aware of emptiness without naming it, running away from it or judging it, but just be with it?',
		img: Slider_2,
	},
	{
		text: 'I have to study myself in actuality – as I am, not as I wish to be.',
		img: Slider_3,
	},
];

const HeroSection = () => {
	return (
		<>
			<Swiper
				modules={[Autoplay]}
				slidesPerView={1}
				spaceBetween={50}
				autoplay={{ delay: 4500 }}
			>
				<SwiperSlide>
					<Slider text={SliderData[0].text} img={SliderData[0].img} />
				</SwiperSlide>
				<SwiperSlide>
					<Slider text={SliderData[1].text} img={SliderData[1].img} />
				</SwiperSlide>
				<SwiperSlide>
					<Slider text={SliderData[2].text} img={SliderData[2].img} />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default HeroSection;
