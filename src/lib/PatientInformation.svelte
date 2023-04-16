<script lang="ts">
	import { Gender } from '$lib/domain/gender';
	import type { Patient } from '$lib/domain/patient';

	export let patient: Patient;

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
			<input type="text" bind:value={patient.bsn} maxlength="9" />
		</label>
		<label>
			Uzovi
			<input type="text" bind:value={patient.uzovi} maxlength="4" />
		</label>
		<label>
			Birthday (YYYYMMDD)
			<input
				type="text"
				bind:value={patient.birth_day_string}
				maxlength="8"
				minlength="8"
				pattern="[0-9]&#123;8&#123;"
			/>
		</label>
		<label>
			Geslacht
			<input type="text" value={Gender[parseInt(patient.gender)]} />
		</label>
		<label>
			Naam verkerde
			<input type="text" bind:value={patient.name_o1} maxlength="25" />
		</label>

		<label>
			Tussenvoegsel verzekerde
			<input type="text" bind:value={patient.name_inbetween_o1} maxlength="25" />
		</label>

		<label>
			Initials verzekerde
			<input type="text" bind:value={patient.first_name_initial} maxlength="6" />
		</label>

		<label>
			Postcode
			<input type="text" bind:value={patient.zip_code} maxlength="6" />
		</label>

		<label>
			Huisnummer
			<input type="text" bind:value={patient.house_number} maxlength="5" />
		</label>
		<label>
			Huisnummer (suffix)
			<input type="text" bind:value={patient.house_number_appendix} maxlength="6" />
		</label>
		<fieldset>
			<label>
				De patient is niet overleden
				<input type="radio" bind:group={patient.did_patient_die} value="2" />
			</label>
			<label>
				De patient is overleden
				<input type="radio" bind:group={patient.did_patient_die} value="1" />
			</label>
		</fieldset>
		<label>
			Reserve
			<input type="text" bind:value={patient.reserved} />
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
