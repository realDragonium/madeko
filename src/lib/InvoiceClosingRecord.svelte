<script lang="ts">
	import type { SluitRecord } from '$lib/domain/invoice_closing_data';
	import VektisCode from './VektisCode.svelte';
	import { VektisDebitOrCredit } from './domain/vektis/code';

	export let record: SluitRecord;
	export let disabled = false;

	function handleOnSubmit(event: Event) {
		event.preventDefault();
	}
</script>

<section>
	<h2>99 - Factuur sluiting informatie</h2>
	<form on:submit={handleOnSubmit}>
		<label>
			Aantal verzekerdenrecords
			<input type="text" bind:value={record.quantity_patients_records} {disabled} />
		</label>
		<label>
			aantal debiteurrecords
			<input type="text" bind:value={record.quantity_debit_records} {disabled} />
		</label>
		<label>
			Aantal prestatierecords
			<input type="text" bind:value={record.quantity_prestation_records} {disabled} />
		</label>
		<label>
			Aantal Commentaarrecords
			<input type="text" bind:value={record.quantity_comment_records} {disabled} />
		</label>
		<label>
			Totaal aantal detailrecords
			<input type="text" bind:value={record.total_quantity_detail_records} {disabled} />
		</label>
		<label>
			Totaal declaratie bedrag
			<input type="text" bind:value={record.total_declaration_amount} {disabled} />
		</label>
		<VektisCode
			label={'Indicatie debet/credit'}
			bind:id={record.indicatie_debet_or_credit}
			collection={VektisDebitOrCredit}
			{disabled}
			required
		/>
		<label>
			Reserve
			<input type="text" bind:value={record.reserved} {disabled} />
		</label>
		<!-- <button style="grid-column: span 2; width: 50%;">Check</button> -->
	</form>
</section>

<style>
	label {
		display: block;
	}

	section {
		background-color: #f0f0f0;
		padding: 16px;
		border-radius: 15px;
	}

	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		row-gap: 1rem;
	}

	input:valid {
		background-color: palegreen;
	}

	input:invalid {
		background-color: lightpink;
	}
	section {
		padding: 15px;
		margin: 15px;
	}
</style>
