import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from '../../routes';

type Props = {};

const Login: FC<Props> = (props) => {
	const history = useHistory();

	return (
		<div className='h-100vh d-flex align-items-center justify-content-center'>
			<div className='card w-100' style={{ maxWidth: '450px' }}>
				<div className='card-body'>
					<div className='d-flex justify-content-center'>
						<img
							src='/logo.svg'
							className='rounded-circle border clickable'
							onClick={() => history.push(routes.LANDING)}
							alt='Paymento'
							style={{
								height: '80px',
								width: '80px',
							}}
						/>
					</div>
					<h4 className='card-title text-center mb-0'>Paymento</h4>
					<p className='card-text text-center'>Welcome back!</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							history.push(routes.DASHBOARD);
						}}>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input type='email' name='email' id='email' placeholder='Email' className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Password</label>
							<input type='password' name='password' id='password' placeholder='Password' className='form-control' />
						</div>
						<div className='form-group d-flex align-items-center'>
							<button type='submit' className='btn btn-primary btn-sm'>
								Sign In
							</button>
							<Link className='ml-auto' to={routes.REGISTER}>
								Don't have an account yet? Sign Up
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
