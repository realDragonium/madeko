<script lang="ts">
	import PatientInformation from '$lib/PatientInformation.svelte';
	import { Patient } from '$lib/domain/patient';
	import { InvoiceMetadata } from '$lib/domain/invoice_metadata';
	import InvoiceMetatdataInformation from '$lib/InvoiceMetatdataInvoiceMetatdataInformation.svelte';
	import PrestatieInformation from '$lib/PrestatieInformation.svelte';
	import { PrestatieRecord } from '$lib/domain/prestatie_record';
	import InvoiceClosingRecord from '$lib/InvoiceClosingRecord.svelte';
	import { SluitRecord } from '$lib/domain/invoice_closing_data';

	let rows = [new InvoiceMetadata(), new Patient(), new PrestatieRecord(), new SluitRecord()];

	function copy() {
		let text = '';
		rows.forEach((row) => (text += row.toEIString() + '\n'));
		navigator.clipboard.writeText(text);
	}
</script>

<h2>Plak hier inhoud van EI bestand</h2>
<textarea id="ei-textarea" />

<h2>Inhoud:</h2>
<p>
	<a href="https://www.vektis.nl/standaardisatie/standaarden/AW319-1.4" target="_blank">
		volgens AW319-1.4 betekend het dit (klik om naar vektis pagina te gaan hiervan)</a
	>
</p>

{#each rows as row}
	{#if row instanceof InvoiceMetadata}
		<InvoiceMetatdataInformation invoiceMetadata={row} />
	{:else if row instanceof Patient}
		<PatientInformation patient={row} />
	{:else if row instanceof PrestatieRecord}
		<PrestatieInformation record={row} />
	{:else if row instanceof SluitRecord}
		<InvoiceClosingRecord record={row} />
	{/if}
{/each}

<button on:click={copy}>kopieer naar klembord</button> -->

<ul>
	<li>Maak een nieuwe text bestand aan</li>
	<li>Plak inhoud van hierboven in zojuist aangemaakte tekst bestand</li>
	<li>Hernoem bestand naar een terug vindbare naam en zorg ervoor dat het eindigt op '.asc'</li>
</ul>

<style>
	textarea {
		width: 100%;
		/* overflow: auto; */
		/* overflow-x: scroll; */
		white-space: pre;
		min-height: 250px;
	}
</style>
