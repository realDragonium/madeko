<script lang="ts">
	import { findById, type VektisCode } from '$lib/domain/vektis/code';

	export let label: string;
	export let id: string;
	export let collection: VektisCode[];
	export let disabled = false;
	export let required = false;

	let obj = findById(collection, id);
	$: collection.sort((a, b) => a.text.localeCompare(b.text));
	$: foundObj = obj !== undefined;
</script>

<label>
	{label}
	<select bind:value={id} {disabled} {required}>
		{#each collection as item}
			<option value={item.id}>{item.text}</option>
		{/each}
	</select>
	<!-- <input type="text" value={obj?.text ?? id} /> -->
</label>

<style>
	label {
		display: block;
	}

	select {
		max-width: 250px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		display: inline-block;
	}

	option {
		text-overflow: ellipsis;
	}

	select:valid {
		background-color: palegreen;
	}

	select:invalid {
		background-color: lightpink;
	}
</style>
