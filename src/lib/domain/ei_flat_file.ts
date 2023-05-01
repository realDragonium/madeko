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

	constructor(value: string, maxLength: number, fillChar = '0') {
		this.value = value.toString();
		this.maxLength = maxLength;
		this.fillChar = fillChar;
	}

	toString(): string {
		return this.value.padStart(this.maxLength, this.fillChar);
	}
}
