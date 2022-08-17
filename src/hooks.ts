// src/hooks.ts
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { createContext, router } from '$lib/server/trpc';
// create your tRPC router...

export const handle: Handle = async ({ event, resolve }) => {
	const response = await createTRPCHandle({
		// 👈 add this handle
		router,
		createContext,
		event,
		resolve
	});

	return response;
};
