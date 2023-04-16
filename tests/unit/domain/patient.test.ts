import { test, expect } from 'vitest';
import { Patient } from '$lib/domain/patient';

test('can convert textline to internal values', () => {
	const obj = Patient.readString(
		'020000000000014000005200201                          1992110421Haar                               0                                   A     02312GG         00000      NL           20000                                                                                                                             '
	);
	expect(obj).toBeInstanceOf(Patient);

	expect(obj.bsn).toBe('400000520');
	expect(obj.birth_day_string).toBe('19921104');
	expect(obj.gender).toBe('2');
	expect(obj.zip_code).toBe('2312GG');
});

test('can convert internal values to textline', () => {
	const obj = new Patient();

	expect(obj.toEIString().length).toBe(310);
	expect(obj.toEIString()).toBe(
		'02                                                                                                                                                                                                                                                                                                                    '
	);
});
