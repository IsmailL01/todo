import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_ADDRESS } from './const';
import { type BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { type FetchArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

const baseQuery: BaseQueryFn<string | FetchArgs> = fetchBaseQuery({
	baseUrl: URL_ADDRESS,
});

export { baseQuery };
