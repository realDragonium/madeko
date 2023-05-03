<script lang="ts">
	import { onMount } from 'svelte';
	import PatientInformation from '$lib/PatientInformation.svelte';
	import { Patient } from '$lib/domain/patient';
	import { InvoiceMetadata } from '$lib/domain/invoice_metadata';
	import InvoiceMetatdataInformation from '$lib/InvoiceMetatdataInvoiceMetatdataInformation.svelte';
	import PrestatieInformation from '$lib/PrestatieInformation.svelte';
	import { PrestatieRecord } from '$lib/domain/prestatie_record';
	import InvoiceClosingRecord from '$lib/InvoiceClosingRecord.svelte';
	import { SluitRecord } from '$lib/domain/invoice_closing_data';

	let invoiceMetadata = new InvoiceMetadata();
	let patient = new Patient();
	let prestatieRecord = new PrestatieRecord();
	let closingRecord = new SluitRecord();

	let text = '';

	$: {
		closingRecord.total_declaration_amount = prestatieRecord.declaration_sum ?? '';

		text = '';
		text += invoiceMetadata.EIString + '\r\n';
		text += patient.EIString + '\r\n';
		text += prestatieRecord.EIString + '\r\n';
		text += closingRecord.EIString;
	}

	onMount(() => {
		invoiceMetadata.version_standard = '1';
		invoiceMetadata.sub_version_standard = '4';

		invoiceMetadata.code_software_system = '999801';
		invoiceMetadata.version_software_system = '0.0.0.1';
		invoiceMetadata.valuta_code = 'EUR';
		invoiceMetadata.message_type = 'P';
		invoiceMetadata.id_external_integration_message = '428';
		invoiceMetadata.invoice_date = new Date()
			.toISOString()
			.toString()
			.split('T')[0]
			.replaceAll('-', '');

		closingRecord.quantity_patients_records = '1';
		closingRecord.quantity_prestation_records = '1';
		closingRecord.total_quantity_detail_records = '2';
		closingRecord.quantity_comment_records = '0';
		closingRecord.quantity_debit_records = '0';
		closingRecord.indicatie_debet_or_credit = 'D';

		prestatieRecord.indicate_debit_or_credit = 'D';
		prestatieRecord.indicat_debit_or_credit_02 = 'D';
		prestatieRecord.id_detail_record = '2';
		prestatieRecord.aanduiding_presetatie_code_lijst = '065';
		prestatieRecord.btw_percentage = '0';
	});

	function downloadFile() {
		const blob = new Blob([text], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${prestatieRecord.refention_number_this_prestatie}.asc`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}
</script>

<h2>Informatie:</h2>
<p>
	<a href="https://www.vektis.nl/standaardisatie/standaarden/AW319-1.4" target="_blank">
		volgens AW319-1.4 betekend het dit (klik om naar vektis pagina te gaan hiervan)</a
	>
</p>
<ul>
	<li>Rode vakken zijn invoervelden waarin (nog) niet de juiste informatie staat</li>
	<li>
		Groene vakken zijn invoervelden die niet verplicht zijn of lijken te voldoen aan de eisen.
	</li>
	<li>Bedragen moeten worden opgeschreven in centen. Dus &euro;1,56 &rsaquo; 156</li>
	<li>
		Als 'Referentienummer dit prestatierecord' is het handig om hetzelfde id te geven als het
		factuur nummer
	</li>
</ul>

<InvoiceMetatdataInformation bind:invoiceMetadata />
<PatientInformation bind:patient />
<PrestatieInformation bind:record={prestatieRecord} />
<InvoiceClosingRecord bind:record={closingRecord} />

<h2>De inhoud van EI bestand</h2>
<textarea id="ei-textarea" value={text} disabled />
<div class="btnWrapper">
	<button class="storeButton" on:click={downloadFile}>Opslaan</button>
</div>

<style>
	textarea {
		width: 100%;
		white-space: pre;
		min-height: 250px;
	}
	.storeButton {
		margin-top: 10px;
		padding: 15px 25px;
		background-color: #2772db;
		color: white;
		border-radius: 25px;
		font-size: 1.5rem;
		font-weight: 600;
	}
	.btnWrapper {
		display: flex;
		justify-content: center;
	}
</style>
