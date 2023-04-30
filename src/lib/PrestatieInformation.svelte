<script lang="ts">
	import type { PrestatieRecord } from '$lib/domain/prestatie_record';
	import TimestampInput from './TimestampInput.svelte';
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
	}
</script>

<section>
	<h2>04 - Prestatie informatie</h2>
	<form on:submit={handleOnSubmit}>
		<label>
			ID details
			<input type="text" bind:value={record.id_detail_record} disabled={freeze} required />
		</label>
		<label>
			Patient BSN
			<input type="text" bind:value={record.bsn_patient} disabled={freeze} required />
		</label>
		<label>
			Uzovi
			<input type="text" bind:value={record.uzovi} required disabled={freeze} />
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
			bind:id={record.doorsturen_allowed}
			collection={VektisForwarding}
			disabled={freeze}
			required
		/>
		<VektisCode
			label={'indicatieorgaan'}
			bind:id={record.code_indication_orgaan}
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
			bind:id={record.functie_code}
			collection={VektisActivityType}
			disabled={freeze}
		/>
		<VektisCode
			label={'Zorgzwaartepakketcode'}
			bind:id={record.zorg_zwaarte_pakket_code}
			collection={VektisCareType}
			disabled={freeze}
		/>
		<TimestampInput
			text="{'Begindatum (YYYYMMDD)'},"
			bind:data={record.start_data}
			{freeze}
			required
		/>
		<TimestampInput text="{'Enddatum (YYYYMMDD)'}," bind:data={record.end_date} {freeze} required />
		<VektisCode
			label={'Aanduiding prestatiecodelijst'}
			bind:id={record.aanduiding_presetatie_code_lijst}
			collection={VektisPrestationType}
			disabled={freeze}
			required
		/>
		<label>
			Prestatiecode
			<input type="text" bind:value={record.prestatie_code} required disabled={freeze} />
		</label>
		<label>
			aantal uitgevoerde prestaties
			<input type="text" bind:value={record.quantity_prestatie} required disabled={freeze} />
		</label>
		<VektisCode
			label={'Tijdseenheid zorgperiode'}
			bind:id={record.time_unit_per_prestatie}
			collection={VektisTimeUnit}
			disabled={freeze}
		/>
		<label>
			zorgverlenerscode behandelaar/uitvoerder
			<input type="text" bind:value={record.nurse_behandelaar_code} required disabled={freeze} />
		</label>
		<VektisCode
			label={'Specialisme behandelaar/uitvoerder'}
			bind:id={record.specialism_behandelaar_code}
			collection={VektisNurseSpecialism}
			disabled={freeze}
		/>
		<label>
			zorgverlenerscode voorschrijver/verwijzer
			<input type="text" bind:value={record.nurse_voorschrijver_code} disabled={freeze} />
		</label>
		<VektisCode
			label={'Specialisme voorschrijver/verwijzer'}
			bind:id={record.specialism_voorschrijver_code}
			collection={VektisNurseSpecialism}
			disabled={freeze}
		/>
		<label>
			verrekenpercentage
			<input type="text" bind:value={record.verreken_percentage} disabled={freeze} />
		</label>
		<label>
			tarief prestatie (inlc. btw)
			<input type="text" bind:value={record.tarief_prestatie} required disabled={freeze} />
		</label>
		<label>
			Berekend bedrag (inlc. btw)
			<input type="text" bind:value={record.calculated_sum_prestatie} required disabled={freeze} />
		</label>
		<VektisCode
			label={'Indicatie debet/credit O1'}
			bind:id={record.indicat_debit_or_credit}
			collection={VektisDebitOrCredit}
			disabled={freeze}
			required
		/>
		<label>
			btw percentage declaratiebedrag
			<input type="text" bind:value={record.btw_percentage} disabled={freeze} />
		</label>
		<label>
			declaratiebedrag (incl. btw)
			<input type="text" bind:value={record.declaration_sum} required disabled={freeze} />
		</label>
		<VektisCode
			label={'Indicatie debet/credit O2'}
			bind:id={record.indicat_debit_or_credit_02}
			collection={VektisDebitOrCredit}
			disabled={freeze}
			required
		/>
		<label>
			Referentienummer dit prestatierecord
			<input
				type="text"
				bind:value={record.refention_number_this_prestatie}
				required
				disabled={freeze}
			/>
		</label>
		<label>
			Referentienummer voorgaande gerelateerde prestatierecord
			<input
				type="text"
				bind:value={record.refention_number_previous_prestatie}
				disabled={freeze}
			/>
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
