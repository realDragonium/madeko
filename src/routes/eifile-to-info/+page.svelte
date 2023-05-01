<script lang="ts">
	import PatientInformation from '$lib/PatientInformation.svelte';
	import { Patient } from '$lib/domain/patient';
	import { InvoiceMetadata } from '$lib/domain/invoice_metadata';
	import InvoiceMetatdataInformation from '$lib/InvoiceMetatdataInvoiceMetatdataInformation.svelte';
	import PrestatieInformation from '$lib/PrestatieInformation.svelte';
	import { PrestatieRecord } from '$lib/domain/prestatie_record';
	import InvoiceClosingRecord from '$lib/InvoiceClosingRecord.svelte';
	import { SluitRecord } from '$lib/domain/invoice_closing_data';

	let rows = [];

	function handleDrop(event) {
		event.preventDefault();

		const file = event.dataTransfer.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			const text = reader.result;
			createInfoFromText(text.split('\n'));
			let textArea = document.getElementById('ei-textarea');
			textArea.value = text;
		};
		reader.readAsText(file);
	}

	function createInfoFromText(lines: string[]) {
		lines.forEach((line) => {
			let data;
			if (line.startsWith('01')) {
				data = InvoiceMetadata.readString(line);
			}
			if (line.startsWith('02')) {
				data = Patient.readString(line);
			}
			if (line.startsWith('04')) {
				data = PrestatieRecord.readString(line);
			}
			if (line.startsWith('99')) {
				data = SluitRecord.readString(line);
			}
			rows = [...rows, data];
		});
	}

	function reverseFunc(event: Event) {
		event.preventDefault();
		rows = [];

		let textArea = document.getElementById('ei-textarea');
		createInfoFromText(textArea.value.split('\n'));
	}
</script>

<h2>Lees een bestand uit</h2>
<ul>
	<li>Plak hier inhoud van EI bestand</li>
	<li>Of sleep een EI bestand hier onder in het veld</li>
</ul>
<textarea
	id="ei-textarea"
	on:change={reverseFunc}
	on:dragover={(event) => event.preventDefault()}
	on:drop={handleDrop}
/>

<button on:click={reverseFunc}
	>Als er niks verandert na een verandering hierboven, druk dan op deze knop</button
>

<h2>Inhoud:</h2>
<p>
	<a href="https://www.vektis.nl/standaardisatie/standaarden/AW319-1.4" target="_blank">
		volgens AW319-1.4 betekend het dit (klik om naar vektis pagina te gaan hiervan)</a
	>
</p>

{#each rows as row}
	{#if row instanceof InvoiceMetadata}
		<InvoiceMetatdataInformation invoiceMetadata={row} disabled={true} />
	{:else if row instanceof Patient}
		<PatientInformation patient={row} disbaled={true} />
	{:else if row instanceof PrestatieRecord}
		<PrestatieInformation record={row} disabled={true} />
	{:else if row instanceof SluitRecord}
		<InvoiceClosingRecord record={row} disabled={true} />
	{/if}
{/each}

<style>
	textarea {
		width: 100%;
		white-space: pre;
		min-height: 250px;
	}
</style>
