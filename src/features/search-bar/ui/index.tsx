import React, { useEffect } from 'react';
import { useSearchParams, usePathname, useParams } from 'next/navigation';
import { useState } from 'react';
import { memo } from 'react';

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState('');

	const searchParams = useSearchParams();

	const search = searchParams?.get('q');

	const params = useParams();
	const path = usePathname();

	console.log('hello');
	return (
		<div>
			<input
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			{search}
			hello
		</div>
	);
};

export default SearchBar;
