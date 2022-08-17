import prismaClient from '$lib/server/prismaClient';
import * as trpc from '@trpc/server';
import { z } from 'zod';

export default trpc
	.router()
	.query('list', {
		resolve: () =>
			prismaClient.users.findMany({
				select: { id: true, name: true },
				orderBy: [{ name: 'asc' }]
			})
	})
	.mutation('save', {
		input: z.object({
			id: z.number().nullable(),
			name: z.string().min(2).max(70)
		}),
		resolve: ({ input: { id, ...data } }) =>
			id
				? prismaClient.users.update({ data, where: { id }, select: { id: true } })
				: prismaClient.users.create({ data, select: { id: true } })
	})
	.mutation('delete', {
		input: z.number(),
		resolve: ({ input: id }) => prismaClient.users.delete({ where: { id } }).then(() => undefined)
	});
