class Patient {
	bsn: string;
	uzovi: string;
	id: string;
	birth_day_string: string;
	gender: string;
	name_code_o1: string;
	name_o1: string;
	initial_o1: string;

	name_code_o2: string;
	name_o2: string;
	initial_o2: string;

	first_name_initial: string;
	name_code_o3: string;

	zip_code: string;
	international_zip_code: string;
	house_number: string;
	house_number_appendix: string;
	country_code: string;
	debtor_number: string;
	did_patient_die: string;
	orginasation_code: string;
	client_number_orginasation: string;
	reserved: string;

	constructor(input: string) {
		input.substring(0, 2);
		input.substring(2, 14);
		this.bsn = input.substring(14, 23);
		this.uzovi = input.substring(23, 27);
		input.substring(27, 42);
		this.id = input.substring(42, 53);
		this.birth_day_string = input.substring(53, 61);
		this.gender = input.substring(61, 62);

		this.name_code_o1 = input.substring(62, 63); //www.vektis.nl/standaardisatie/codelijsten/COD829-NEN1
		this.name_o1 = input.substring(63, 88);
		this.initial_o1 = input.substring(88, 98);

		this.name_code_o2 = input.substring(98, 99); //www.vektis.nl/standaardisatie/codelijsten/COD829-NEN1
		this.name_o2 = input.substring(99, 124);
		this.initial_o2 = input.substring(124, 134);

		this.first_name_initial = input.substring(134, 140);
		this.name_code_o3 = input.substring(140, 141); //www.vektis.nl/standaardisatie/codelijsten/COD829-NEN1
		this.zip_code = input.substring(141, 147);
		this.international_zip_code = input.substring(147, 156);
		this.house_number = input.substring(156, 161);
		this.house_number_appendix = input.substring(161, 167);
		this.country_code = input.substring(167, 169); // https://www.vektis.nl/standaardisatie/codelijsten/COD032-NEN
		this.debtor_number = input.substring(169, 180);
		this.did_patient_die = input.substring(180, 181); // https://www.vektis.nl/standaardisatie/codelijsten/COD841-VEKT
		this.orginasation_code = input.substring(181, 185); //https://www.vektis.nl/standaardisatie/codelijsten/COD459-CIZ
		this.client_number_orginasation = input.substring(185, 205);
		this.reserved = input.substring(205, 310);
	}

	toEIString(): string {
		const entries = [
			new EIFlatFileRowSection('02', 2),
			new EIFlatFileRowSection('', 12),
			new EIFlatFileRowSection(this.bsn, 9),
			new EIFlatFileRowSection(this.uzovi, 4),
			new EIFlatFileRowSection('', 15),
			new EIFlatFileRowSection(this.id, 11),
			new EIFlatFileRowSection(this.birth_day_string, 8),
			new EIFlatFileRowSection(this.gender, 1),
			new EIFlatFileRowSection(this.name_code_o1, 1),
			new EIFlatFileRowSection(this.name_o1, 25),
			new EIFlatFileRowSection(this.initial_o1, 10),
			new EIFlatFileRowSection(this.name_code_o2, 1),
			new EIFlatFileRowSection(this.name_o2, 25),
			new EIFlatFileRowSection(this.initial_o2, 10),
			new EIFlatFileRowSection(this.first_name_initial, 6),
			new EIFlatFileRowSection(this.name_code_o3, 1),
			new EIFlatFileRowSection(this.zip_code, 6),
			new EIFlatFileRowSection(this.international_zip_code, 9),
			new EIFlatFileRowSection(this.house_number, 5),
			new EIFlatFileRowSection(this.house_number_appendix, 6),
			new EIFlatFileRowSection(this.country_code, 2),
			new EIFlatFileRowSection(this.debtor_number, 11),
			new EIFlatFileRowSection(this.did_patient_die, 1),
			new EIFlatFileRowSection(this.orginasation_code, 4),
			new EIFlatFileRowSection(this.client_number_orginasation, 20),
			new EIFlatFileRowSection(this.reserved, 105)
		];

		return entries.map((entry) => entry.toString()).join('');
	}
}

class EIFlatFileRowSection {
	value: string;
	maxLength: number;
	fillChar = '';

	constructor(value: string, maxLength: number, fillChar = ' ') {
		this.value = value;
		this.maxLength = maxLength;
		this.fillChar = fillChar;
	}

	toString(): string {
		return this.value.padEnd(this.maxLength, this.fillChar);
	}
}
