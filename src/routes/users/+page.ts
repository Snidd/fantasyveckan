import trpc from '$lib/client/trpc';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const users = await trpc(fetch).query('users:list');
	return { users: users };
};
