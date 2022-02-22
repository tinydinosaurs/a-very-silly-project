import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ current }) => {
	const location = useLocation();
	const { pathname } = location;

	return (
		<div className='Header'>
			<h1 className='Header__title'>
				<Link to='/'>Silly Silly</Link>
			</h1>

			<div className='Header__links'>
				<Link
					to='/course'
					className={`Header__link ${
						pathname === '/course' ? 'current' : ''
					}`}
				>
					Course
				</Link>
				<Link
					to='/platitudes'
					className={`Header__link ${
						pathname === '/platitudes' ? 'current' : ''
					}`}
				>
					Platitudes
				</Link>
				<Link
					to='/notes'
					className={`Header__link ${
						pathname === '/notes' ? 'current' : ''
					}`}
				>
					Notes
				</Link>
				<Link
					to='/countries'
					className={`Header__link ${
						pathname === '/countries' ? 'current' : ''
					}`}
				>
					Countries
				</Link>
				<Link
					to='/'
					className={`Header__link ${
						pathname === '/' ? 'current' : ''
					}`}
				>
					Home
				</Link>
			</div>
		</div>
	);
};

export default Header;
