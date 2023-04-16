<script lang="ts">
	import PatientInformation from '$lib/PatientInformation.svelte';
	import { Patient } from '$lib/domain/patient';
	import { InvoiceMetadata } from '$lib/domain/invoice_metadata';
	import InvoiceMetatdataInformation from '$lib/InvoiceMetatdataInvoiceMetatdataInformation.svelte';
	import PrestatieInformation from '$lib/PrestatieInformation.svelte';
	import { PrestatieRecord } from '$lib/domain/prestatie_record';
	import InvoiceClosingRecord from '$lib/InvoiceClosingRecord.svelte';
	import { SluitRecord } from '$lib/domain/invoice_closing_data';

	let patient = new Patient();
	let invoiceMetadata = new InvoiceMetadata();
	let record = new PrestatieRecord();
	let closingRecord = new SluitRecord();

	function copy() {
		navigator.clipboard.writeText(patient.toEIString());
	}

	function reverseFunc(event: Event) {
		event.preventDefault();

		let textArea = document.getElementById('ei-textarea');
		const lines: string[] = textArea.value.split('\n');

		lines.forEach((line) => {
			if (line.startsWith('01')) {
				invoiceMetadata = InvoiceMetadata.readString(line);
			}
			if (line.startsWith('02')) {
				patient = Patient.readString(line);
			}
			if (line.startsWith('04')) {
				record = PrestatieRecord.readString(line);
			}
			if (line.startsWith('99')) {
				closingRecord = SluitRecord.readString(line);
			}
		});
	}
</script>

<h2>Plak hier inhoud van EI bestand</h2>
<textarea id="ei-textarea" on:change={reverseFunc} />
<button on:click={reverseFunc}
	>Als er niks verandert na een verandering hierboven, druk dan op deze knop</button
>

<h2>Inhoud:</h2>
<p>
	<a href="https://www.vektis.nl/standaardisatie/standaarden/AW319-1.4">
		volgens AW319-1.4 betekend het dit (klik om naar vektis pagina te gaan hiervan)</a
	>
</p>
<InvoiceMetatdataInformation {invoiceMetadata} />
<PatientInformation {patient} />
<PrestatieInformation {record} />
<InvoiceClosingRecord record={closingRecord} />

<!-- <button on:click={copy}>kopieer naar klembord</button> -->

<!-- <ul>
	<li>Maak een nieuwe text bestand aan</li>
	<li>Plak inhoud van hierboven in zojuist aangemaakte tekst bestand</li>
	<li>Hernoem bestand naar een terug vindbare naam en zorg ervoor dat het eindigt op '.asc'</li>
</ul> -->
<style>
	textarea {
		width: 100%;
		/* overflow: auto; */
		/* overflow-x: scroll; */
		white-space: pre;
		min-height: 250px;
	}
</style>
