<script lang="ts">
	import type { InvoiceMetadata } from '$lib/domain/invoice_metadata';

	export let invoiceMetadata: InvoiceMetadata;

	function handleOnSubmit(event: Event) {
		event.preventDefault();
		console.log('Validated?!');
	}
</script>

<section>
	<h2>01 - Factuur informatie</h2>
	<form on:submit={handleOnSubmit}>
		<label>
			Code externe-integratiebericht
			<input type="text" bind:value={invoiceMetadata.id_extneral_integration_message} />
		</label>

		<label>
			Standaardisatie versie
			<input type="text" bind:value={invoiceMetadata.version_standard} />
		</label>
		<label>
			Standaardisatie sub versie
			<input type="text" bind:value={invoiceMetadata.version_standard} />
		</label>

		<label>
			Softwaresystem id
			<input type="text" bind:value={invoiceMetadata.code_software_system} />
		</label>
		<label>
			Software system versie
			<input type="text" bind:value={invoiceMetadata.version_software_system} />
		</label>

		<label>
			Uzovi
			<input type="text" bind:value={invoiceMetadata.uzovi} />
		</label>

		<label>
			servicebureau code
			<input type="text" bind:value={invoiceMetadata.service_provider_code} />
		</label>
		<label>
			verzorger code
			<input type="text" bind:value={invoiceMetadata.nurse_code} />
		</label>
		<label>
			praktijk code
			<input type="text" bind:value={invoiceMetadata.praktijk_code} />
		</label>
		<label>
			instelling code
			<input type="text" bind:value={invoiceMetadata.instelling_code} />
		</label>
		<label>
			Begin date invoice period (YYYYMMDD)
			<input
				type="text"
				bind:value={invoiceMetadata.start_date_invoice_period}
				maxlength="8"
				minlength="8"
				pattern="[0-9]&#123;8&#123;"
			/>
		</label>
		<label>
			End date invoice period (YYYYMMDD)
			<input
				type="text"
				bind:value={invoiceMetadata.end_date_invoice_period}
				maxlength="8"
				minlength="8"
				pattern="[0-9]&#123;8&#123;"
			/>
		</label>
		<label>
			invoice-id
			<input type="text" bind:value={invoiceMetadata.invoice_id} />
		</label>
		<label>
			invoice date (YYYYMMDD)
			<input
				type="text"
				bind:value={invoiceMetadata.invoice_date}
				maxlength="8"
				minlength="8"
				pattern="[0-9]&#123;8&#123;"
			/>
		</label>
		<label>
			btw-id
			<input type="text" bind:value={invoiceMetadata.btw_id_code} />
		</label>
		<label>
			Valuta
			<input type="text" bind:value={invoiceMetadata.valuta_code} />
		</label>
		<label>
			Reserve
			<input type="text" bind:value={invoiceMetadata.reserved} />
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
