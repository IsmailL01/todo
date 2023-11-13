import { URL_ADDRESS } from './const';

const fetchUser = async () => {
	const res = await fetch(URL_ADDRESS);
	return res.json();
};

export { fetchUser };
