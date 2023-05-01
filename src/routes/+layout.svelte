<script lang="ts">
	import { base } from '$app/paths';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="page">
	<div class="submenu">
		{#each data.sections as section}
			<a href="{base}/{section.slug}">{section.title}</a>
		{/each}
	</div>
	<slot />
</div>

<!-- Colors -->
<!-- #070F4E -->
<!-- #2772DB -->
<!-- #3AB1C8 -->

<!-- #F5EBEB -->
<style>
	a {
		padding: 16px;
		background-color: #2772db;
		border-radius: 10px;
		color: #fff;
		text-decoration: none;
	}
	.submenu {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 10px;
		font-size: 1.3rem;
	}

	.page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 15px;
	}
</style>
