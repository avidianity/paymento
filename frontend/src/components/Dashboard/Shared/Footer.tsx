import React, { FC } from 'react';

type Props = {};

const Footer: FC<Props> = (props) => {
	return (
		<footer className='bdT ta-c p-30 lh-0 fsz-sm c-grey-600'>
			<span>
				Copyright © 2019 Designed by
				<a href='https://colorlib.com' target='_blank' title='Colorlib'>
					Colorlib
				</a>
				. All rights reserved.
			</span>
		</footer>
	);
};

export default Footer;