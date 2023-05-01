export class VektisCode {
	id: string;
	text: string;
	description?: string;

	constructor(id: string, text: string, description?: string) {
		this.id = id;
		this.text = text;
		this.description = description;
	}
}

export function findById<T extends VektisCode>(codes: T[], id: string): T | string {
	let res = codes.find((code) => code.id === id);
	if (res === undefined) {
		res = id;
	}
	return res;
}

//https://www.vektis.nl/standaardisatie/codelijsten/COD150-VEKT
export const VektisForwarding = [
	new VektisCode('1', 'Doorsturen naar zorgverzekeraar is toegestaan'),
	new VektisCode('2', 'Op verzoek van verzekerde niet doorsturen naar zorgverzekeraar'),
	new VektisCode('3', 'Op verzoek van zorgverlener niet doorsturen naar zorgverzekeraar'),
	new VektisCode(
		'4',
		'Op verzoek van verzekerde én zorgverlener niet doorsturen naar zorgverzekeraar'
	)
];

//https://www.vektis.nl/standaardisatie/codelijsten/COD856-VEKT
export const VektisMessageType = [
	new VektisCode('P', 'Productiebericht'),
	new VektisCode('T', 'Testbericht')
];

//https://www.vektis.nl/standaardisatie/codelijsten/COD833-VEKT
export const VektisPaymentTo = [
	new VektisCode('01', 'Servicebureau'),
	new VektisCode('02', 'Zorgverlener'),
	new VektisCode('03', 'Praktijk'),
	new VektisCode('04', 'Instelling'),
	new VektisCode('99', 'Onbekend')
];

//https://www.vektis.nl/standaardisatie/codelijsten/COD363-ISO
export const VektisValuta = [
	new VektisCode('ANG', 'Netherlands antillian guilder'),
	new VektisCode('AWG', 'Aruban guilder'),
	new VektisCode('EUR', 'Euro'),
	new VektisCode('GBP', 'Pound sterling'),
	new VektisCode('ITL', 'Italian lira	'),
	new VektisCode('LUF', 'Luxembourg franc'),
	new VektisCode('SRD', 'Surinam dollar'),
	new VektisCode('USD', 'Us dollar')
];

//https://www.vektis.nl/standaardisatie/codelijsten/COD046-NEN
export const VektisGender = [
	new VektisCode('0', 'Onbekend'),
	new VektisCode('1', 'Mannelijk'),
	new VektisCode('2', 'Vrouwelijk'),
	new VektisCode('9', 'Niet Gespecificeerd')
];

//https://www.vektis.nl/standaardisatie/codelijsten/COD700-NEN1
export const VektisNameUsage = [
	new VektisCode('0', 'Onbekend'),
	new VektisCode('1', 'Eigen naam'),
	new VektisCode('2', 'Naam echtgenoot of geregistreerd partner of alternatieve naam'),
	new VektisCode('3', 'Naam echtgenoot of geregistreerd partner gevolgd door eigen naam'),
	new VektisCode('4', 'Eigen naam gevolgd door naam echtgenoot of geregistreerd partner'),
	new VektisCode('5', 'Pseudoniem')
];

//https://www.vektis.nl/standaardisatie/codelijsten/COD841-VEKT
export const VektisClientDeceased = [
	new VektisCode('1', 'Cliënt is overleden'),
	new VektisCode('2', 'Cliënt is niet overleden')
];

//https://www.vektis.nl/standaardisatie/codelijsten/COD732-VEKT
export const VektisActivityType = [
	new VektisCode('21', 'HV: Huishoudelijke verzorging'),
	new VektisCode('31', 'PV: Persoonlijke verzorging'),
	new VektisCode('41', 'VP: Verpleging'),
	new VektisCode('61', 'BHALG: Behandeling algemeen (buiten verblijf in AWBZ-instelling'),
	new VektisCode('62', 'BHVBF: Behandeling met verblijf'),
	new VektisCode('63', 'BH-IND: Behandeling individueel'),
	new VektisCode('64', 'BH-GRP: Behandeling in groepsverband'),
	new VektisCode('71', 'VBTYD: Verblijf tijdelijk'),
	new VektisCode('81', 'BG-IND: Begeleiding individueel'),
	new VektisCode('82', 'BG-GRP: Begeleiding in groepsverband'),
	new VektisCode('91', 'ADL: ADL-assistentie')
];

//https://www.vektis.nl/standaardisatie/codelijsten/COD218-VEKT
export const VektisTimeUnit = [
	new VektisCode('01', 'Minuut'),
	new VektisCode('02', 'Kwartier'),
	new VektisCode('03', 'Half uur'),
	new VektisCode('04', 'Uur'),
	new VektisCode('06', 'Uren en minuten "uuumm'),
	new VektisCode('07', '5 minuten'),
	new VektisCode('08', '10 minuten'),
	new VektisCode('11', 'Overdag'),
	new VektisCode('12', 'Nacht'),
	new VektisCode('13', 'Halve dag'),
	new VektisCode('14', 'Etmaal (24 uur)	(dag + nacht)'),
	new VektisCode('15', 'Dagdeel (3 uur)'),
	new VektisCode('16', 'Dagdeel (4 uur)'),
	new VektisCode('21', 'Week'),
	new VektisCode('24', '4 weken'),
	new VektisCode('31', 'Maand'),
	new VektisCode('33', '3 maanden'),
	new VektisCode('36', '6 maanden'),
	new VektisCode('41', 'Jaar'),
	new VektisCode('49', 'Langer dan een jaar'),
	new VektisCode(
		'81',
		'Benodigde tijdsduur of tijdsonafhankelijk	Deze codering bijvoorbeeld invullen als er sprake is van een tarief/honorering onafhankelijk van de behandelingsduur (budget, enz.).'
	),
	new VektisCode(
		'82',
		'Stuks	Deze codering bijvoorbeeld invullen als er sprake is van een afspraak over het tarief: Euro per stuk/arrangement met een vaste prijs.'
	),
	new VektisCode('99', 'Onbekend')
];

//https://www.vektis.nl/standaardisatie/codelijsten/COD043-VEKT
export const VektisDebitOrCredit = [
	new VektisCode('C', 'Creditbedrag en aantal'),
	new VektisCode('D', 'Debetbedrag en aantal')
];
