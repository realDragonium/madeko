export enum Gender {
	unknown = 0,
	male = 1,
	female = 2,
	other = 9
}

export function mapGenderName(name: string): Gender {
	console.log(name);
	return (
		{
			unknown: Gender.unknown,
			male: Gender.male,
			female: Gender.female,
			other: Gender.other
		}[name] || Gender.unknown
	);
}

export function mapValueToGender(gender_number: number): string {
	return (
		{
			0: 'unknown',
			1: 'male',
			2: 'female',
			9: 'other'
		}[gender_number] || 'unknown'
	);
}
