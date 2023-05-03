import { EIFlatFileRowSection } from './ei_flat_file';

// https://www.vektis.nl/standaardisatie/standaarden/AW319-1.4 04
export class PrestatieRecord {
	id_detail_record: string = '';
	bsn_patient: string = '';
	uzovi: string = '';
	patient_insurance_number: string = '';
	machtingsnummer: string = '';
	doorsturen_allowed: string = '';
	code_indication_orgaan: string = '';
	client_number_indication_orgaan: string = '';
	indicatie_aanvraag_number: string = '';
	indicatie_aanvraag_response_number: string = '';
	functie_code: string = '';
	zorg_zwaarte_pakket_code: string = '';
	start_date: string = '';
	end_date: string = '';
	aanduiding_presetatie_code_lijst: string = '';
	prestatie_code: string = '';
	quantity_prestatie: string = '';
	time_unit_per_prestatie: string = '';
	nurse_behandelaar_code: string = '';
	specialism_behandelaar_code: string = '';
	nurse_voorschrijver_code: string = '';
	specialism_voorschrijver_code: string = '';
	verreken_percentage: string = '';
	tarief_prestatie: string = '';
	calculated_sum_prestatie: string = '';

	indicate_debit_or_credit: string = '';
	btw_percentage: string = '';
	declaration_sum: string = '';
	indicat_debit_or_credit_02: string = '';
	refention_number_this_prestatie: string = '';
	refention_number_previous_prestatie: string = '';

	reserved: string = '';

	public static readString(textline: string): PrestatieRecord {
		const obj = new PrestatieRecord();
		textline.substring(0, 2);
		obj.id_detail_record = textline.substring(2, 14);
		obj.bsn_patient = textline.substring(14, 23);
		obj.uzovi = textline.substring(23, 27);
		obj.patient_insurance_number = textline.substring(27, 42);
		obj.machtingsnummer = textline.substring(42, 57);
		obj.doorsturen_allowed = textline.substring(57, 58);
		obj.code_indication_orgaan = textline.substring(58, 62);
		obj.client_number_indication_orgaan = textline.substring(62, 82);
		obj.indicatie_aanvraag_number = textline.substring(82, 91);
		obj.indicatie_aanvraag_response_number = textline.substring(91, 100);
		obj.functie_code = textline.substring(100, 102);
		obj.zorg_zwaarte_pakket_code = textline.substring(102, 105);
		obj.start_date = textline.substring(105, 113);
		obj.end_date = textline.substring(113, 121);
		obj.aanduiding_presetatie_code_lijst = textline.substring(121, 124);
		obj.prestatie_code = textline.substring(124, 129);
		obj.quantity_prestatie = textline.substring(129, 133);
		obj.time_unit_per_prestatie = textline.substring(133, 135);
		obj.nurse_behandelaar_code = textline.substring(135, 143);
		obj.specialism_behandelaar_code = textline.substring(143, 147);
		obj.nurse_voorschrijver_code = textline.substring(147, 155);
		obj.specialism_voorschrijver_code = textline.substring(155, 159);
		obj.verreken_percentage = textline.substring(159, 164);
		obj.tarief_prestatie = textline.substring(164, 172);
		obj.calculated_sum_prestatie = textline.substring(172, 180);
		obj.indicate_debit_or_credit = textline.substring(180, 181);
		obj.btw_percentage = textline.substring(181, 184);
		obj.declaration_sum = textline.substring(184, 193);
		obj.indicat_debit_or_credit_02 = textline.substring(193, 194);
		obj.refention_number_this_prestatie = textline.substring(194, 214);
		obj.refention_number_previous_prestatie = textline.substring(214, 234);
		obj.reserved = textline.substring(234, 310);
		return obj;
	}

	public get EIString(): string {
		const entries = [
			new EIFlatFileRowSection('04', 2, 'N'),
			new EIFlatFileRowSection(this.id_detail_record, 12, 'N'),
			new EIFlatFileRowSection(this.bsn_patient, 9, 'N'),
			new EIFlatFileRowSection(this.uzovi, 4, 'N'),
			new EIFlatFileRowSection(this.patient_insurance_number, 15, 'AN'),
			new EIFlatFileRowSection(this.machtingsnummer, 15, 'AN'),
			new EIFlatFileRowSection(this.doorsturen_allowed, 1, 'N'),
			new EIFlatFileRowSection(this.code_indication_orgaan, 4, 'N'),
			new EIFlatFileRowSection(this.client_number_indication_orgaan, 20, 'AN'),
			new EIFlatFileRowSection(this.indicatie_aanvraag_number, 9, 'N'),
			new EIFlatFileRowSection(this.indicatie_aanvraag_response_number, 9, 'N'),
			new EIFlatFileRowSection(this.functie_code, 2, 'N'),
			new EIFlatFileRowSection(this.zorg_zwaarte_pakket_code, 3, 'N'),
			new EIFlatFileRowSection(this.start_date, 8, 'N'),
			new EIFlatFileRowSection(this.end_date, 8, 'N'),
			new EIFlatFileRowSection(this.aanduiding_presetatie_code_lijst, 3, 'N'),
			new EIFlatFileRowSection(this.prestatie_code, 5, 'AN'),
			new EIFlatFileRowSection(this.quantity_prestatie, 4, 'N'),
			new EIFlatFileRowSection(this.time_unit_per_prestatie, 2, 'N'),
			new EIFlatFileRowSection(this.nurse_behandelaar_code, 8, 'N'),
			new EIFlatFileRowSection(this.specialism_behandelaar_code, 4, 'N'),
			new EIFlatFileRowSection(this.nurse_voorschrijver_code, 8, 'N'),
			new EIFlatFileRowSection(this.specialism_voorschrijver_code, 4, 'N'),
			new EIFlatFileRowSection(this.verreken_percentage, 5, 'N'),
			new EIFlatFileRowSection(this.tarief_prestatie, 8, 'N'),
			new EIFlatFileRowSection(this.calculated_sum_prestatie, 8, 'N'),
			new EIFlatFileRowSection(this.indicate_debit_or_credit, 1, 'AN'),
			new EIFlatFileRowSection(this.btw_percentage, 4, 'N'),
			new EIFlatFileRowSection(this.declaration_sum, 8, 'N'),
			new EIFlatFileRowSection(this.indicat_debit_or_credit_02, 1, 'AN'),
			new EIFlatFileRowSection(this.refention_number_this_prestatie, 20, 'AN'),
			new EIFlatFileRowSection(this.refention_number_previous_prestatie, 20, 'AN'),
			new EIFlatFileRowSection(this.reserved, 76, 'AN')
		];

		return entries.map((entry) => entry.toString()).join('');
	}
}
