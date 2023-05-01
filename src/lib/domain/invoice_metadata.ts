import { EIFlatFileRowSection } from './ei_flat_file';

// https://www.vektis.nl/standaardisatie/standaarden/AW319-1.4 01
export class InvoiceMetadata {
	id_external_integration_message: string = '';
	version_standard: string = '';
	sub_version_standard: string = '';
	message_type: string = '';
	code_software_system: string = '';
	version_software_system: string = '';
	uzovi: string = '';
	service_provider_code: string = '';
	nurse_code: string = '';
	praktijk_code: string = '';
	instelling_code: string = '';
	id_payment_to: string = '';
	start_date_invoice_period: string = '';
	end_date_invoice_period: string = '';
	invoice_id: string = '';
	invoice_date: string = '';
	btw_id_code: string = '';
	valuta_code: string = '';

	reserved: string = '';

	public static readString(textline: string): InvoiceMetadata {
		const obj = new InvoiceMetadata();
		textline.substring(0, 2);
		obj.id_external_integration_message = textline.substring(2, 5);
		obj.version_standard = textline.substring(5, 7);
		obj.sub_version_standard = textline.substring(7, 9);
		obj.message_type = textline.substring(9, 10);

		obj.code_software_system = textline.substring(10, 16);
		obj.version_software_system = textline.substring(16, 26);

		obj.uzovi = textline.substring(26, 30);
		obj.service_provider_code = textline.substring(30, 38);
		obj.nurse_code = textline.substring(38, 46);
		obj.praktijk_code = textline.substring(46, 54);
		obj.instelling_code = textline.substring(54, 62);

		obj.id_payment_to = textline.substring(62, 64);
		obj.start_date_invoice_period = textline.substring(64, 72);
		obj.end_date_invoice_period = textline.substring(72, 80);
		obj.invoice_id = textline.substring(80, 92);
		obj.invoice_date = textline.substring(92, 100);
		obj.btw_id_code = textline.substring(100, 114);

		obj.valuta_code = textline.substring(114, 117);
		obj.reserved = textline.substring(118, 310);
		return obj;
	}

	public get EIString(): string {
		const entries = [
			new EIFlatFileRowSection('01', 2, 'N'),
			new EIFlatFileRowSection(this.id_external_integration_message, 3, 'N'),
			new EIFlatFileRowSection(this.version_standard, 2, 'N'),
			new EIFlatFileRowSection(this.sub_version_standard, 2, 'N'),
			new EIFlatFileRowSection(this.message_type, 1, 'AN'),
			new EIFlatFileRowSection(this.code_software_system, 6, 'N'),
			new EIFlatFileRowSection(this.version_software_system, 10, 'AN'),
			new EIFlatFileRowSection(this.uzovi, 4, 'N'),
			new EIFlatFileRowSection(this.service_provider_code, 8, 'N'),
			new EIFlatFileRowSection(this.nurse_code, 8, 'N'),
			new EIFlatFileRowSection(this.praktijk_code, 8, 'N'),
			new EIFlatFileRowSection(this.instelling_code, 8, 'N'),
			new EIFlatFileRowSection(this.id_payment_to, 2, 'N'),
			new EIFlatFileRowSection(this.start_date_invoice_period, 8, 'N'),
			new EIFlatFileRowSection(this.end_date_invoice_period, 8, 'N'),
			new EIFlatFileRowSection(this.invoice_id, 12, 'AN'),
			new EIFlatFileRowSection(this.invoice_date, 8, 'N'),
			new EIFlatFileRowSection(this.btw_id_code, 14, 'AN'),
			new EIFlatFileRowSection(this.valuta_code, 3, 'AN'),
			new EIFlatFileRowSection(this.reserved, 193, 'AN')
		];

		return entries.map((entry) => entry.toString()).join('');
	}
}
