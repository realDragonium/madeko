<script lang="ts">
	import type { PrestatieRecord } from '$lib/domain/prestatie_record';
	export let record: PrestatieRecord;

	function handleOnSubmit(event: Event) {
		event.preventDefault();
		console.log('Validated?!');
	}
</script>

<section>
	<h2>04 - Prestatie informatie</h2>
	<form on:submit={handleOnSubmit}>
		<label>
			ID details
			<input type="text" bind:value={record.id_detail_record} />
		</label>
		<label>
			Patient BSN
			<input type="text" bind:value={record.bsn_patient} />
		</label>
		<label>
			Uzovi
			<input type="text" bind:value={record.uzovi} />
		</label>
		<label>
			Patient verzekeringsnummer
			<input type="text" bind:value={record.patient_insurance_number} />
		</label>
		<label>
			Machtingsnummer
			<input type="text" bind:value={record.machtingsnummer} />
		</label>
		<label>
			Doorsturen toegestaan
			<input type="text" bind:value={record.doorsturen_allowed} />
		</label>
		<label>
			Code indicatieorgaan
			<input type="text" bind:value={record.code_indication_orgaan} />
		</label>
		<label>
			client nummber indicatieorgaan
			<input type="text" bind:value={record.client_number_indication_orgaan} />
		</label>
		<label>
			indicatie-aanvraagnummer indicatieorgaan
			<input type="text" bind:value={record.indicatie_aanvraag_number} />
		</label>
		<label>
			indicatie besluit nummer indicatieorgaan
			<input type="text" bind:value={record.indicatie_aanvraag_response_number} />
		</label>
		<label>
			functie code
			<input type="text" bind:value={record.functie_code} />
		</label>
		<label>
			Zorgzwaartepakketcode
			<input type="text" bind:value={record.zorg_zwaarte_pakket_code} />
		</label>
		<label>
			Begindatum (YYYYMMDD)
			<input
				type="text"
				bind:value={record.start_date}
				maxlength="8"
				minlength="8"
				pattern="[0-9]&#123;8&#123;"
			/>
		</label>
		<label>
			Enddatum (YYYYMMDD)
			<input
				type="text"
				bind:value={record.end_date}
				maxlength="8"
				minlength="8"
				pattern="[0-9]&#123;8&#123;"
			/>
		</label>
		<label>
			Aanduiding prestatiecodelijst
			<input type="text" bind:value={record.aanduiding_presetatie_code_lijst} />
		</label>
		<label>
			prestatiecode
			<input type="text" bind:value={record.prestatie_code} />
		</label>
		<label>
			aantal uitgevoerde prestaties
			<input type="text" bind:value={record.quantity_prestatie} />
		</label>
		<label>
			tijdseenheid zorgperiode
			<input type="text" bind:value={record.time_unit_per_prestatie} />
		</label>
		<label>
			zorgverlenerscode behandelaar/uitvoerder
			<input type="text" bind:value={record.nurse_behandelaar_code} />
		</label>
		<label>
			Specialisme behandelaar/uitvoerder
			<input type="text" bind:value={record.specialism_behandelaar_code} />
		</label>
		<label>
			zorgverlenerscode voorschrijver/verwijzer
			<input type="text" bind:value={record.nurse_voorschrijver_code} />
		</label>
		<label>
			Specialisme voorschrijver/verwijzer
			<input type="text" bind:value={record.specialism_voorschrijver_code} />
		</label>
		<label>
			verrekenpercentage
			<input type="text" bind:value={record.verreken_percentage} />
		</label>
		<label>
			tarief prestatie (inlc. btw)
			<input type="text" bind:value={record.tarief_prestatie} />
		</label>
		<label>
			Berekend bedrag (inlc. btw)
			<input type="text" bind:value={record.calculated_sum_prestatie} />
		</label>
		<label>
			indicatie debet/credit (o1)
			<input type="text" bind:value={record.indicat_debit_or_credit} />
		</label>
		<label>
			btw percentage declaratiebedrag
			<input type="text" bind:value={record.btw_percentage} />
		</label>
		<label>
			declaratiebedrag (incl. btw)
			<input type="text" bind:value={record.declaration_sum} />
		</label>
		<label>
			indicatie debet/credit (o2)
			<input type="text" bind:value={record.indicat_debit_or_credit_02} />
		</label>
		<label>
			Referentienummer dit prestatierecord
			<input type="text" bind:value={record.refention_number_this_prestatie} />
		</label>
		<label>
			Referentienummer voorgaande gerelateerde prestatierecord
			<input type="text" bind:value={record.refention_number_previous_prestatie} />
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
