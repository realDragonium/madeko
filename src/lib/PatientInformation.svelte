<script lang="ts">
	import type { Patient } from '$lib/domain/patient';
	import TimestampInput from './TimestampInput.svelte';
	import VektisCode from './VektisCode.svelte';
	import { VektisClientDeceased, VektisGender, VektisNameUsage } from './domain/vektis/code';
	import { VektisCountry } from './domain/vektis/countries';
	import { VektisGovernmentInstitutes } from './domain/vektis/govenment_institutes';

	export let patient: Patient;
	export let disbaled = false;

	function handleOnSubmit(event: Event) {
		event.preventDefault();
		console.log('Validated?!');
	}
</script>

<section>
	<h2>02 - Verzekerde informatie</h2>
	<form on:submit={handleOnSubmit}>
		<label>
			BSN
			<input type="text" bind:value={patient.bsn} maxlength="9" required disabled={disbaled} />
		</label>
		<label>
			Uzovi
			<input type="text" bind:value={patient.uzovi} maxlength="4" required disabled={disbaled} />
		</label>
		<TimestampInput
			text={'Birthday (JJJJMMDD)'}
			disabled={disbaled}
			required
			bind:data={patient.birth_day_string}
		/>
		<VektisCode
			label={'Geslacht'}
			bind:id={patient.gender}
			collection={VektisGender}
			disabled={disbaled}
			required
		/>
		<VektisCode
			label={'Naamcode/Naamgebruik (01)'}
			bind:id={patient.name_code_o1}
			collection={VektisNameUsage}
			disabled={disbaled}
			required
		/>
		<label>
			Naam verkerde
			<input type="text" bind:value={patient.name_o1} maxlength="25" required disabled={disbaled} />
		</label>
		<label>
			Tussenvoegsel verzekerde
			<input
				type="text"
				bind:value={patient.name_inbetween_o1}
				maxlength="25"
				disabled={disbaled}
			/>
		</label>
		<label>
			Voorletters verzekerde
			<input
				type="text"
				bind:value={patient.first_name_initial}
				maxlength="6"
				required
				disabled={disbaled}
			/>
		</label>
		<label>
			Postcode
			<input type="text" bind:value={patient.zip_code} maxlength="6" disabled={disbaled} />
		</label>

		<label>
			Huisnummer
			<input type="text" bind:value={patient.house_number} maxlength="5" disabled={disbaled} />
		</label>
		<label>
			Huisnummer (suffix)
			<input
				type="text"
				bind:value={patient.house_number_appendix}
				maxlength="6"
				disabled={disbaled}
			/>
		</label>
		<VektisCode
			label={'Land verzekerde'}
			bind:id={patient.country_code}
			collection={VektisCountry}
			disabled={disbaled}
		/>
		<VektisCode
			label={'Indicatie client overleden'}
			bind:id={patient.did_patient_die}
			collection={VektisClientDeceased}
			disabled={disbaled}
			required
		/>
		<VektisCode
			label={'Indicatieorgaan'}
			bind:id={patient.orginasation_code}
			collection={VektisGovernmentInstitutes}
			disabled={disbaled}
		/>
		<label>
			Reserve
			<input type="text" bind:value={patient.reserved} disabled={disbaled} />
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
