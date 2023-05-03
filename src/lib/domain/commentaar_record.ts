import { EIFlatFileRowSection } from './ei_flat_file';

// https://www.vektis.nl/standaardisatie/standaarden/AW319-1.4 98
export class CommentaarRecord {
	id_detail_record: string = '';
	line_numbers_text: string = '';
	text: string = '';
	reserved: string = '';

	public static readString(textline: string): CommentaarRecord {
		const obj = new CommentaarRecord();
		textline.substring(0, 2);
		obj.id_detail_record = textline.substring(2, 14);
		obj.line_numbers_text = textline.substring(14, 18);
		obj.text = textline.substring(18, 158);
		obj.reserved = textline.substring(158, 310);
		return obj;
	}

	public get EIString(): string {
		const entries = [
			new EIFlatFileRowSection('98', 2, 'N'),
			new EIFlatFileRowSection(this.id_detail_record, 12, 'N'),
			new EIFlatFileRowSection(this.line_numbers_text, 4, 'N'),
			new EIFlatFileRowSection(this.text, 140, 'AN'),
			new EIFlatFileRowSection(this.reserved, 152, 'AN')
		];

		return entries.map((entry) => entry.toString()).join('');
	}
}
