import React, { useCallback, useState } from 'react';
import { Text } from './config';
import style from './nav.module.css';
import BurgerMenu from '../burgerMenu/burgerMenu';
import Link from 'next/link';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const showBurgerMenu = useCallback(() => {
		setIsOpen((prevState: boolean) => {
			return !prevState;
		});
	}, [isOpen]);

	return (
		<div className={style.nav}>
			{Text.map(({ text }) => {
				return <div key={text}>{text}</div>;
			})}
			<button onClick={showBurgerMenu}>click</button>
			<Link href={'/cart'}>Cart</Link>
		</div>
	);
};

export { Nav };
