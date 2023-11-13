import { baseApi } from '@/shared/api/';
import { Post } from './types';

export const taskApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		posts: build.query<Post, void>({
			query: () => ({
				url: '/posts',
			}),
		}),
	}),
});

export const { usePostsQuery } = taskApi;
