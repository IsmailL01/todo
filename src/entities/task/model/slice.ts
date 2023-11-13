import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../api';

interface Posts {
	posts: Post[];
}

const initialState = { posts: [] } as Posts;

const PostSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		open() {},
	},
});

export {};
