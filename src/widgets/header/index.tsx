'use client';
import React, { useCallback, useState } from 'react';
import { Logo } from './ui/logo';
import { Nav } from './ui/nav';
import style from './header.module.css';
import BurgerMenu from './ui/burgerMenu/burgerMenu';
import { useResize } from '@/shared/hooks';
import { SearchBar } from '@/features/search-bar/';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.topPart}>
				<Logo />
				<Nav />
			</div>

			<div className={style.middlePart}>
				<SearchBar />
			</div>
		</header>
	);
};

export default Header;
