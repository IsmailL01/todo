import React from 'react';
import { Text } from '../nav/config';
import style from './style.module.css';

const BurgerMenu = () => {
	return (
		<div className={style.container}>
			{Text.map((item) => {
				return <div key={item.text}>{item.text}</div>;
			})}
		</div>
	);
};

export default BurgerMenu;
