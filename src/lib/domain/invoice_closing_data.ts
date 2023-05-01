import { EIFlatFileRowSection } from './ei_flat_file';

// https://www.vektis.nl/standaardisatie/standaarden/AW319-1.4 98
export class SluitRecord {
	quantity_patients_records: string = '';
	quantity_debit_records: string = '';
	quantity_prestation_records: string = '';
	quantity_comment_records: string = '';
	total_quantity_detail_records: string = '';
	total_declaration_amount: string = '';
	indicatie_debet_or_credit: string = '';

	reserved: string = '';

	public static readString(textline: string): SluitRecord {
		const obj = new SluitRecord();
		textline.substring(0, 2);
		obj.quantity_patients_records = textline.substring(2, 8);
		obj.quantity_debit_records = textline.substring(8, 14);
		obj.quantity_prestation_records = textline.substring(14, 20);
		obj.quantity_comment_records = textline.substring(20, 26);
		obj.total_quantity_detail_records = textline.substring(26, 33);
		obj.total_declaration_amount = textline.substring(33, 44);
		obj.indicatie_debet_or_credit = textline.substring(44, 45);
		obj.reserved = textline.substring(45, 310);
		return obj;
	}

	public get EIString(): string {
		const entries = [
			new EIFlatFileRowSection('99',2, 'N'),
			new EIFlatFileRowSection(this.quantity_patients_records,6, 'N'),
			new EIFlatFileRowSection(this.quantity_debit_records,6, 'N'),
			new EIFlatFileRowSection(this.quantity_prestation_records,6, 'N'),
			new EIFlatFileRowSection(this.quantity_comment_records,6, 'N'),
			new EIFlatFileRowSection(this.total_quantity_detail_records,7, 'N'),
			new EIFlatFileRowSection(this.total_declaration_amount,11, 'N'),
			new EIFlatFileRowSection(this.indicatie_debet_or_credit,1, 'AN'),
			new EIFlatFileRowSection(this.reserved, 234, 'AN')
		];

		return entries.map((entry) => entry.toString()).join('');
	}
}
