<script lang="ts">
	import type { PrestatieRecord } from '$lib/domain/prestatie_record';
	import VektisCode from './VektisCode.svelte';
	import { VektisCareType } from './domain/vektis/care_types';
	import {
		VektisActivityType,
		VektisDebitOrCredit,
		VektisForwarding,
		VektisTimeUnit
	} from './domain/vektis/code';
	import { VektisGovernmentInstitutes } from './domain/vektis/govenment_institutes';
	import { VektisNurseSpecialism } from './domain/vektis/nurse_specialisms';
	import { VektisPrestationType } from './domain/vektis/prestation_types';
	export let record: PrestatieRecord;
	export let freeze = false;

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
			<input type="text" bind:value={record.id_detail_record} disabled={freeze} />
		</label>
		<label>
			Patient BSN
			<input type="text" bind:value={record.bsn_patient} disabled={freeze} />
		</label>
		<label>
			Uzovi
			<input type="text" bind:value={record.uzovi} disabled={freeze} />
		</label>
		<label>
			Patient verzekeringsnummer
			<input type="text" bind:value={record.patient_insurance_number} disabled={freeze} />
		</label>
		<label>
			Machtingsnummer
			<input type="text" bind:value={record.machtingsnummer} disabled={freeze} />
		</label>
		<VektisCode
			label={'Doorsturen toegestaan'}
			id={record.doorsturen_allowed}
			collection={VektisForwarding}
			disabled={freeze}
		/>
		<VektisCode
			label={'indicatieorgaan'}
			id={record.code_indication_orgaan}
			collection={VektisGovernmentInstitutes}
			disabled={freeze}
		/>
		<label>
			client nummber indicatieorgaan
			<input type="text" bind:value={record.client_number_indication_orgaan} disabled={freeze} />
		</label>
		<label>
			indicatie-aanvraagnummer indicatieorgaan
			<input type="text" bind:value={record.indicatie_aanvraag_number} disabled={freeze} />
		</label>
		<label>
			indicatie besluit nummer indicatieorgaan
			<input type="text" bind:value={record.indicatie_aanvraag_response_number} disabled={freeze} />
		</label>
		<VektisCode
			label={'functie code'}
			id={record.functie_code}
			collection={VektisActivityType}
			disabled={freeze}
		/>
		<VektisCode
			label={'Zorgzwaartepakketcode'}
			id={record.zorg_zwaarte_pakket_code}
			collection={VektisCareType}
			disabled={freeze}
		/>
		<label>
			Begindatum (YYYYMMDD)
			<input
				type="text"
				bind:value={record.start_date}
				maxlength="8"
				minlength="8"
				pattern="[0-9]&#123;8&#123;"
				disabled={freeze}
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
				disabled={freeze}
			/>
		</label>
		<VektisCode
			label={'Aanduiding prestatiecodelijst'}
			id={record.aanduiding_presetatie_code_lijst}
			collection={VektisPrestationType}
			disabled={freeze}
		/>
		<label>
			Prestatiecode
			<input type="text" bind:value={record.prestatie_code} disabled={freeze} />
		</label>
		<label>
			aantal uitgevoerde prestaties
			<input type="text" bind:value={record.quantity_prestatie} disabled={freeze} />
		</label>
		<VektisCode
			label={'Tijdseenheid zorgperiode'}
			id={record.time_unit_per_prestatie}
			collection={VektisTimeUnit}
			disabled={freeze}
		/>
		<label>
			zorgverlenerscode behandelaar/uitvoerder
			<input type="text" bind:value={record.nurse_behandelaar_code} disabled={freeze} />
		</label>
		<VektisCode
			label={'Specialisme behandelaar/uitvoerder'}
			id={record.specialism_behandelaar_code}
			collection={VektisNurseSpecialism}
			disabled={freeze}
		/>
		<label>
			zorgverlenerscode voorschrijver/verwijzer
			<input type="text" bind:value={record.nurse_voorschrijver_code} disabled={freeze} />
		</label>
		<VektisCode
			label={'Specialisme voorschrijver/verwijzer'}
			id={record.specialism_voorschrijver_code}
			collection={VektisNurseSpecialism}
			disabled={freeze}
		/>
		<label>
			verrekenpercentage
			<input type="text" bind:value={record.verreken_percentage} disabled={freeze} />
		</label>
		<label>
			tarief prestatie (inlc. btw)
			<input type="text" bind:value={record.tarief_prestatie} disabled={freeze} />
		</label>
		<label>
			Berekend bedrag (inlc. btw)
			<input type="text" bind:value={record.calculated_sum_prestatie} disabled={freeze} />
		</label>
		<VektisCode
			label={'Indicatie debet/credit O1'}
			id={record.indicat_debit_or_credit}
			collection={VektisDebitOrCredit}
			disabled={freeze}
		/>
		<label>
			indicatie debet/credit (o1)
			<input type="text" bind:value={record.indicat_debit_or_credit} disabled={freeze} />
		</label>
		<label>
			btw percentage declaratiebedrag
			<input type="text" bind:value={record.btw_percentage} disabled={freeze} />
		</label>
		<label>
			declaratiebedrag (incl. btw)
			<input type="text" bind:value={record.declaration_sum} disabled={freeze} />
		</label>
		<VektisCode
			label={'Indicatie debet/credit O2'}
			id={record.indicat_debit_or_credit_02}
			collection={VektisDebitOrCredit}
			disabled={freeze}
		/>
		<label>
			Referentienummer dit prestatierecord
			<input type="text" bind:value={record.refention_number_this_prestatie} disabled={freeze} />
		</label>
		<label>
			Referentienummer voorgaande gerelateerde prestatierecord
			<input
				type="text"
				bind:value={record.refention_number_previous_prestatie}
				disabled={freeze}
			/>
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
