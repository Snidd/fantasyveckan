<script lang="ts">
	import users from '$lib/server/trpc/users';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#each data.users as user}
	<p>{user.id}. {user.name}</p>
{/each}
