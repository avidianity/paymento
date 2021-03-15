import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import bg from '../../assets/static/images/404.png';

type Props = {};

const FourZeroFour: FC<Props> = (props) => {
	return (
		<div className='pos-a t-0 l-0 bgc-white w-100 h-100 d-f fxd-r fxw-w ai-c jc-c pos-r p-30'>
			<div className='mR-60'>
				<img alt='Not Found' src={bg} />
			</div>
			<div className='d-f jc-c fxd-c'>
				<h1 className='mB-30 fw-900 lh-1 c-red-500' style={{ fontSize: '60px' }}>
					404
				</h1>
				<h3 className='mB-10 fsz-lg c-grey-900 tt-c'>Oops Page Not Found</h3>
				<p className='mB-30 fsz-def c-grey-700'>The page you are looking for does not exist or has been moved.</p>
				<div>
					<Link to={routes.LANDING} type='primary' className='btn btn-primary'>
						Go to Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FourZeroFour;
