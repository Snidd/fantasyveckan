import type { inferAsyncReturnType } from '@trpc/server';
import * as trpc from '@trpc/server';
import trpcTransformer from 'trpc-transformer';
import users from './users';

export const createContext = async () => ({});

export const router = trpc
	.router<inferAsyncReturnType<typeof createContext>>()
	.transformer(trpcTransformer)
	.merge('users:', users);

export type Router = typeof router;
