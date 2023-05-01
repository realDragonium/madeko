import { EIFlatFileRowSection } from './ei_flat_file';

// https://www.vektis.nl/standaardisatie/standaarden/AW319-1.4 02
export class Patient {
	id_detail_record: string = '';
	bsn: string = '';
	uzovi: string = '';
	verzekerdennummber: string = '';
	patient_id: string = '';
	birth_day_string: string = '';
	gender: string = '';
	name_code_o1: string = '';
	name_o1: string = '';
	name_inbetween_o1: string = '';
	name_code_o2: string = '';
	name_o2: string = '';
	name_inbetween_o2: string = '';
	first_name_initial: string = '';
	name_code_o3: string = '';
	zip_code: string = '';
	international_zip_code: string = '';
	house_number: string = '';
	house_number_appendix: string = '';
	country_code: string = 'NL';
	debtor_number: string = '';
	did_patient_die: string = '';
	orginasation_code: string = '';
	client_number_orginasation: string = '';
	reserved: string = '';

	public static readString(textline: string): Patient {
		const obj = new Patient();
		textline.substring(0, 2);
		obj.id_detail_record = textline.substring(2, 14);
		obj.bsn = textline.substring(14, 23);
		obj.uzovi = textline.substring(23, 27);
		obj.verzekerdennummber = textline.substring(27, 42);
		obj.patient_id = textline.substring(42, 53);
		obj.birth_day_string = textline.substring(53, 61);
		obj.gender = textline.substring(61, 62);

		obj.name_code_o1 = textline.substring(62, 63); //www.vektis.nl/standaardisatie/codelijsten/COD829-NEN1
		obj.name_o1 = textline.substring(63, 88);
		obj.name_inbetween_o1 = textline.substring(88, 98);

		obj.name_code_o2 = textline.substring(98, 99); //www.vektis.nl/standaardisatie/codelijsten/COD829-NEN1
		obj.name_o2 = textline.substring(99, 124);
		obj.name_inbetween_o2 = textline.substring(124, 134);

		obj.first_name_initial = textline.substring(134, 140);
		obj.name_code_o3 = textline.substring(140, 141); //www.vektis.nl/standaardisatie/codelijsten/COD829-NEN1
		obj.zip_code = textline.substring(141, 147);
		obj.international_zip_code = textline.substring(147, 156);
		obj.house_number = textline.substring(156, 161);
		obj.house_number_appendix = textline.substring(161, 167);
		obj.country_code = textline.substring(167, 169); // https://www.vektis.nl/standaardisatie/codelijsten/COD032-NEN
		obj.debtor_number = textline.substring(169, 180);
		obj.did_patient_die = textline.substring(180, 181); // https://www.vektis.nl/standaardisatie/codelijsten/COD841-VEKT
		obj.orginasation_code = textline.substring(181, 185); //https://www.vektis.nl/standaardisatie/codelijsten/COD459-CIZ
		obj.client_number_orginasation = textline.substring(185, 205);
		obj.reserved = textline.substring(205, 310);
		return obj;
	}

	public get EIString(): string {
		const entries = [
			new EIFlatFileRowSection('02', 2, 'N'),
			new EIFlatFileRowSection(this.id_detail_record, 12, 'N'),
			new EIFlatFileRowSection(this.bsn, 9, 'N'),
			new EIFlatFileRowSection(this.uzovi, 4, 'N'),
			new EIFlatFileRowSection(this.verzekerdennummber, 15, 'AN'),
			new EIFlatFileRowSection(this.patient_id, 11, 'AN'),
			new EIFlatFileRowSection(this.birth_day_string, 8, 'N'),
			new EIFlatFileRowSection(this.gender, 1, 'N'),
			new EIFlatFileRowSection(this.name_code_o1, 1, 'N'),
			new EIFlatFileRowSection(this.name_o1, 25, 'AN'),
			new EIFlatFileRowSection(this.name_inbetween_o1, 10, 'AN'),
			new EIFlatFileRowSection(this.name_code_o2, 1, 'N'),
			new EIFlatFileRowSection(this.name_o2, 25, 'AN'),
			new EIFlatFileRowSection(this.name_inbetween_o2, 10, 'AN'),
			new EIFlatFileRowSection(this.first_name_initial, 6, 'AN'),
			new EIFlatFileRowSection(this.name_code_o3, 1, 'N'),
			new EIFlatFileRowSection(this.zip_code, 6, 'AN'),
			new EIFlatFileRowSection(this.international_zip_code, 9, 'AN'),
			new EIFlatFileRowSection(this.house_number, 5, 'N'),
			new EIFlatFileRowSection(this.house_number_appendix, 6, 'AN'),
			new EIFlatFileRowSection(this.country_code, 2, 'AN'),
			new EIFlatFileRowSection(this.debtor_number, 11, 'AN'),
			new EIFlatFileRowSection(this.did_patient_die, 1, 'N'),
			new EIFlatFileRowSection(this.orginasation_code, 4, 'N'),
			new EIFlatFileRowSection(this.client_number_orginasation, 20, 'AN'),
			new EIFlatFileRowSection(this.reserved, 105, 'AN')
		];

		return entries.map((entry) => entry.toString()).join('');
	}
}
