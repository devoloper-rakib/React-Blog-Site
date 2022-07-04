import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../../Common/Button/Button';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import Input from './Input';

const Login = () => {
	const navigate = useNavigate();
	const handleDirect = () => {
		navigate('/dashBoard', { replace: true });
	};
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<Navbar />
			<div className='loginBody'>
				<div className='loginMain'>
					<div className='login_upper'>
						<h1>Login</h1>
					</div>
					{toggle ? (
						<div className='inputField'>
							<div className='input'>
								<label htmlFor='useName'>UserName :</label>
								<Input type='text' placeholder='Enter Your UserName...' />{' '}
							</div>
							<div className='input'>
								<label htmlFor='email'>Email :</label>
								<Input
									type='email'
									placeholder='Enter Your Email Address...'
								/>{' '}
							</div>
							<div className='input'>
								<label htmlFor='password'>Password :</label>
								<Input
									type='password'
									placeholder='Enter Your Password...'
								/>{' '}
							</div>
							<Button style={{ width: '100%' }} text='Sign Up' />
						</div>
					) : (
						<div className='inputField'>
							<div className='input'>
								<label htmlFor='email'>Email :</label>
								<Input
									type='email'
									placeholder='Enter Your Email Address...'
								/>{' '}
							</div>
							<div className='input'>
								<label htmlFor='password'>Password :</label>
								<Input
									type='password'
									placeholder='Enter Your Password...'
								/>{' '}
							</div>

							<Button
								handleDirect={handleDirect}
								style={{ width: '100%' }}
								text='LOG IN'
							/>
						</div>
					)}

					<div className='LoginBottom'>
						{toggle ? (
							<p>
								Don't Have an Account !{' '}
								<span onClick={() => setToggle((prev) => !prev)}> Sign Up</span>{' '}
							</p>
						) : (
							<p>
								Already Have an Account ?{' '}
								<span onClick={() => setToggle((prev) => !prev)}> Sign In</span>{' '}
							</p>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Login;
