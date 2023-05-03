export class EIFlatFileRow {
	sections: EIFlatFileRowSection[];
	max_length = 310;

	public readTextline(text: string): void {
		const max_text = text.padEnd(this.max_length, ' ');

		for (const section of this.sections) {
			const substring = max_text.slice(0, section.maxLength);
			section.value = substring;
		}
	}

	constructor(sections: EIFlatFileRowSection[]) {
		this.sections = sections;
	}

	toString(): string {
		return this.sections.map((section) => section.toString()).join('');
	}
}

export class EIFlatFileRowSection {
	value: string;
	maxLength: number;
	fillChar: string;
	type: string;

	constructor(value: string, maxLength: number, type: string) {
		this.value = value.toString();
		this.maxLength = maxLength;
		this.type = type;

		if (type === 'N') {
			this.fillChar = '0';
		} else if (type === 'AN') {
			this.fillChar = ' ';
		} else {
			this.fillChar = ' ';
		}
	}

	toString(): string {
		if (this.value === '') {
			return ' '.repeat(this.maxLength);
		}
		if (this.type === 'N') {
			return this.value.padStart(this.maxLength, this.fillChar);
		} else {
			return this.value.padEnd(this.maxLength, this.fillChar);
		}
	}
}
