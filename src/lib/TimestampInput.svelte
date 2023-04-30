<script lang="ts">
	export let text: string;
	export let data: string;
	export let disabled = false;
	export let required = false;
</script>

<label>
	{text}
	<input
		type="text"
		bind:value={data}
		maxlength="8"
		minlength="8"
		pattern="[0-9]&#123;8&#123;"
		{disabled}
		{required}
	/>
</label>

<style>
	input:valid {
		background-color: palegreen;
	}

	input:invalid {
		background-color: lightpink;
	}
</style>
