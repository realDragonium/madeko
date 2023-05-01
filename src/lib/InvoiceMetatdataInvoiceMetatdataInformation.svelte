<script lang="ts">
	import type { InvoiceMetadata } from '$lib/domain/invoice_metadata';
	import { VektisIntegrationMessageTypes } from '$lib/domain/vektis/integration_message_types';
	import TimestampInput from './TimestampInput.svelte';
	import VektisCode from './VektisCode.svelte';
	import { VektisMessageType, VektisPaymentTo, VektisValuta } from './domain/vektis/code';
	import { VektisSoftwareProvidersCodes } from './domain/vektis/software_providers';

	export let invoiceMetadata: InvoiceMetadata;
	export let disabled = false;

	function handleOnSubmit(event: Event) {
		event.preventDefault();
	}
</script>

<section>
	<h2>01 - Factuur informatie</h2>
	<form on:submit={handleOnSubmit}>
		<VektisCode
			label={'Code externe-integratiebericht'}
			bind:id={invoiceMetadata.id_external_integration_message}
			collection={VektisIntegrationMessageTypes}
			{disabled}
			required
		/>
		<label>
			Standaardisatie versie
			<input type="text" bind:value={invoiceMetadata.version_standard} required disabled={true} />
		</label>
		<label>
			Standaardisatie sub versie
			<input type="text" bind:value={invoiceMetadata.sub_version_standard} disabled={true} />
		</label>
		<VektisCode
			label={'Soort bericht'}
			bind:id={invoiceMetadata.message_type}
			collection={VektisMessageType}
			{disabled}
			required
		/>
		<VektisCode
			label={'Code informatiesysteem softwareleverancier'}
			bind:id={invoiceMetadata.code_software_system}
			collection={VektisSoftwareProvidersCodes}
			{disabled}
		/>
		<label>
			Software system versie
			<input type="text" bind:value={invoiceMetadata.version_software_system} disabled={true} />
		</label>

		<label>
			Uzovi
			<input type="text" bind:value={invoiceMetadata.uzovi} {disabled} />
		</label>

		<label>
			servicebureau code
			<input type="text" bind:value={invoiceMetadata.service_provider_code} {disabled} />
		</label>
		<label>
			verzorger code
			<input type="text" bind:value={invoiceMetadata.nurse_code} {disabled} />
		</label>
		<label>
			praktijk code
			<input type="text" bind:value={invoiceMetadata.praktijk_code} {disabled} />
		</label>
		<label>
			instelling code
			<input type="text" bind:value={invoiceMetadata.instelling_code} {disabled} />
		</label>
		<VektisCode
			label={'Identificatiecode betaling aan'}
			bind:id={invoiceMetadata.id_payment_to}
			collection={VektisPaymentTo}
			{disabled}
			required
		/>
		<TimestampInput
			text={'Begindatum declaratieperiode (JJJJMMDD)'}
			required
			{disabled}
			bind:data={invoiceMetadata.start_date_invoice_period}
		/>
		<TimestampInput
			text={'Einddatum declaratieperiode (JJJJMMDD)'}
			required
			{disabled}
			bind:data={invoiceMetadata.end_date_invoice_period}
		/>
		<label>
			Factuurnummer declarant
			<input type="text" bind:value={invoiceMetadata.invoice_id} required {disabled} />
		</label>
		<TimestampInput
			text={'Dagtekening factuur (JJJJMMDD)'}
			required
			{disabled}
			bind:data={invoiceMetadata.invoice_date}
		/>
		<label>
			btw-id
			<input type="text" bind:value={invoiceMetadata.btw_id_code} {disabled} />
		</label>
		<VektisCode
			label={'Valuta'}
			bind:id={invoiceMetadata.valuta_code}
			collection={VektisValuta}
			{disabled}
			required
		/>
		<label>
			Reserve
			<input type="text" bind:value={invoiceMetadata.reserved} {disabled} />
		</label>
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
