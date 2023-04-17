<script lang="ts">
	import { findById, type VektisCode } from '$lib/domain/vektis/code';

	export let label: string;
	export let id: string;
	export let collection: VektisCode[];

	let obj = findById(collection, id);
	$: foundObj = obj !== undefined;
</script>

<label>
	{label}
	<input type="text" value={obj?.text ?? id} />
</label>

<style>
	label {
		display: block;
	}

	input:valid {
		background-color: palegreen;
	}

	input:invalid {
		background-color: lightpink;
	}
</style>
