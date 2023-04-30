<script lang="ts">
	import type { Patient } from '$lib/domain/patient';
	import VektisCode from './VektisCode.svelte';
	import { VektisClientDeceased, VektisGender } from './domain/vektis/code';
	import { VektisCountry } from './domain/vektis/countries';
	import { VektisGovernmentInstitutes } from './domain/vektis/govenment_institutes';

	export let patient: Patient;
	export let freeze = false;

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
			<input type="text" bind:value={patient.bsn} maxlength="9" disabled={freeze} />
		</label>
		<label>
			Uzovi
			<input type="text" bind:value={patient.uzovi} maxlength="4" disabled={freeze} />
		</label>
		<label>
			Birthday (YYYYMMDD)
			<input
				type="text"
				bind:value={patient.birth_day_string}
				maxlength="8"
				minlength="8"
				disabled={freeze}
				pattern="[0-9]&#123;8&#123;"
			/>
		</label>
		<VektisCode
			label={'Geslacht'}
			id={patient.gender}
			collection={VektisGender}
			disabled={freeze}
		/>
		<label>
			Naam verkerde
			<input type="text" bind:value={patient.name_o1} maxlength="25" disabled={freeze} />
		</label>
		<label>
			Tussenvoegsel verzekerde
			<input type="text" bind:value={patient.name_inbetween_o1} maxlength="25" disabled={freeze} />
		</label>
		<label>
			Initials verzekerde
			<input type="text" bind:value={patient.first_name_initial} maxlength="6" disabled={freeze} />
		</label>
		<label>
			Postcode
			<input type="text" bind:value={patient.zip_code} maxlength="6" disabled={freeze} />
		</label>

		<label>
			Huisnummer
			<input type="text" bind:value={patient.house_number} maxlength="5" disabled={freeze} />
		</label>
		<label>
			Huisnummer (suffix)
			<input
				type="text"
				bind:value={patient.house_number_appendix}
				maxlength="6"
				disabled={freeze}
			/>
		</label>
		<VektisCode
			label={'Land verzekerde'}
			id={patient.country_code}
			collection={VektisCountry}
			disabled={freeze}
		/>
		<VektisCode
			label={'Indicatie client overleden'}
			id={patient.did_patient_die}
			collection={VektisClientDeceased}
			disabled={freeze}
		/>
		<VektisCode
			label={'Indicatieorgaan'}
			id={patient.orginasation_code}
			collection={VektisGovernmentInstitutes}
			disabled={freeze}
		/>
		<label>
			Reserve
			<input type="text" bind:value={patient.reserved} disabled={freeze} />
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
