import { VektisCode } from './code';

//https://www.vektis.nl/standaardisatie/codelijsten/COD367-VEKT

export const VektisPrestationType = [
	new VektisCode(
		'001',
		'Zi-nummer (artikelnummer van G-standaard)(Zi = Z-index)',
		'Voorheen: KNMP-nummer.'
	),
	new VektisCode(
		'005',
		'Verpleegafdelingen ziekenhuizen (tariefklasse)',
		'Door Vektis gecodeerde lijst van tariefklassen ziekenhuizen, waarvoor het CTG een tariefbeschikking heeft afgegeven.'
	),
	new VektisCode('006', 'CTG-codelijst nevenverrichtingen', ''),
	new VektisCode(
		'007',
		'NZa-codelijst tarieven voor medisch specialisten (exclusief psychiaters)',
		'Betreft de tariefgroepen I t/m XI, goedgekeurd door NZA-beschikking.'
	),
	new VektisCode('008', 'Prestatiecodelijst huisartsenhulp (COD322-NZA)', ''),
	new VektisCode(
		'009',
		'Prestatiecodelijst thuiszorgprodukt (exclusief kraamzorg) (COD148-VEKT)',
		'Betreft door CTG-beschikkingen goedgekeurde prestaties.'
	),
	new VektisCode('010', 'Prestatiecodelijst mondzorg (COD981-VEKT)', ''),
	new VektisCode(
		'011',
		'Prestatiecodelijst kraamzorg (COD267-NZA)',
		'Betreft alleen/hoofdzakelijk door NZA-beschikking goedgekeurde prestaties.'
	),
	new VektisCode('012', 'Prestatiecodelijst paramedische hulp (COD192-VEK2)', ''),
	new VektisCode(
		'013',
		'Hoofdsoort zorgverlening GGZ (COD408-ZN)',
		'Betreft hoofdsoorten zorgverlening GGZ t.b.v. melden/machtigen. In beheer bij Zorgverzekeraars Nederland.'
	),
	new VektisCode(
		'014',
		'Soort zorgverlening GGZ',
		'Betreft soorten zorgverlening GGZ, CTG codelijst, GGZ Nederland.'
	),
	new VektisCode(
		'015',
		'CTG codelijst tarieven voor tandartsspecialisten mondziekten en kaakchirurgie',
		'Tariefbeschikking, ten behoeve van ziekenfondsverzekerden en niet ziekenfondsverzekerden'
	),
	new VektisCode(
		'016',
		'NZa Tarieflijst instellingen',
		'Opgave prestaties en tarieven voor niet-DBC-instellingen.'
	),
	new VektisCode(
		'017',
		'NZa codelijst intra- en semimurale zorg AWBZ (COD235-CTG)',
		'Codelijst gebaseerd op de indeling voor bekostigingscategorieën.'
	),
	new VektisCode('018', 'NZa  tarievenlijst psychiatrie', ''),
	new VektisCode(
		'019',
		'GGZ nederland codelijst overige soorten zorg GGZ (COD414-GGZ)',
		'Niet gebaseerd op een NZA-beleidsregel of -bekostigingscategorie.'
	),
	new VektisCode('020', 'BIO landelijke functiedefinities', ''),
	new VektisCode('021', 'Productenboek (2000) LVT', ''),
	new VektisCode('022', 'Arcares productenlijst', ''),
	new VektisCode(
		'023',
		'NVAB-artikelcodering voor hoortoestellen',
		'NVAB is de Nederlandse Vereniging voor Audiciens Bedrijven.'
	),
	new VektisCode('024', 'Generieke productcode hulpmiddelen (GPH)', ''),
	new VektisCode('025', 'Aanvullende generieke productcode hulpmiddelen (A-GPH)', ''),
	new VektisCode('026', 'BIO landelijke voorzieningen (COD545)', ''),
	new VektisCode('027', 'Arcares dienstencatalogus', ''),
	new VektisCode('028', 'Zrs productcode', ''),
	new VektisCode('029', 'Verstrekkingencode', ''),
	new VektisCode('030', 'Code bekostigingscategorieen', ''),
	new VektisCode('031', 'BIO landelijke productdefinities', ''),
	new VektisCode('032', 'Prestatiecodelijst verloskundige hulp (COD702-Vekt).', ''),
	new VektisCode('033', 'Tarievenlijst orthodontie', 'Voorheen COD182-CTS.'),
	new VektisCode('034', 'Codelijst AWBZ functiecode, VWS (COD732-VEKT)', ''),
	new VektisCode('035', 'Codelijst AWBZ activiteitcode, VWS (COD743-VEKT)', ''),
	new VektisCode(
		'036',
		'Hulpmiddelen in BeverOnline',
		'De Hulpmiddelendatabank van Nigella IT bevat artikelgegevens van diverse soorten hulpmiddelen. De Generieke Productcode Hulpmiddelen (GPH) is hierin opgenomen.'
	),
	new VektisCode(
		'037',
		'Codelijst AWBZ Zorgcode, NZA (COD806)',
		'Combinatie functie-prestatiecodes NZA en overige tariefcodes NZA extramuraal; NZA-codes intramuraal.'
	),
	new VektisCode('038', 'NZa tarievenlijst ambulancevervoer', ''),
	new VektisCode('039', 'Prestatiecodelijst zittend ziekenvervoer (COD155-VEKT)', ''),
	new VektisCode(
		'040',
		'Prestatiecodelijst psychotherapie (COD822-VEKT)',
		'Betreft hoofdzakelijk door NZA-beschikking goedgekeurde prestaties (met aanvulling van enkele Vektis codes).'
	),
	new VektisCode('041', 'NZa codelijst tarieven DBC, trajecten en O(V)P', ''),
	new VektisCode('042', 'Prestatiecodelijst kraamzorg, aanvullende verzekering, Vektis', ''),
	new VektisCode('043', 'Prestatiecodelijst bijzondere tandheelkunde', ''),
	new VektisCode('044', 'Prestatiecodelijst mondhygiëne', ''),
	new VektisCode('045', 'Prestatiecodelijst tandprothetische hulp', ''),
	new VektisCode('046', 'Prestatiecodelijst jeugdtandverzorging (door instellingen)', ''),
	new VektisCode('047', 'Generieke Productcode Hulpmiddelen (GPH)', ''),
	new VektisCode('048', 'Prestatiecodelijst eerstelijnspsychologische hulp (COD388-NZA)', ''),
	new VektisCode(
		'049',
		'Prestatiecodelijst paramedische hulp voor vrijgevestigde paramedici (COD975-VEKT)',
		'In beheer bij Vektis.'
	),
	new VektisCode('050', "NZa codelijst tarieven GGZ-DBC's, GGZ-O(V)P's en GGZ-ZZP's", ''),
	new VektisCode(
		'051',
		'Zorgverzekeraar Specifieke Prestatiecode farmaceutische hulp (ZSPC)',
		"Betreft bilaterale afspraken tussen zorgverzekeraars en apothekers. Het zijn diensten of iets anders. Het zijn geen 'lokale nummers'."
	),
	new VektisCode('052', "NZa codelijst tarieven DB(B)C's FZ (forensische zorg).", ''),
	new VektisCode('053', 'DBC-Onderhoud codelijst verblijf DB(B)C FZ (forensische zorg).', ''),
	new VektisCode('054', 'Prestatiecodelijst zorg overige sectoren', ''),
	new VektisCode('055', 'Prestatiecodelijst Wlz/AWBZ', ''),
	new VektisCode('056', 'Prestatiecodelijst Ketenzorg integrale bekostiging', ''),
	new VektisCode(
		'057',
		'Zorgzwaartepakketcode (COD163-CIZ)',
		'Codetabel met ZZP-codes vanaf AZR3.0.'
	),
	new VektisCode(
		'058',
		'Prestatiecodelijst farmaceutische zorg',
		'Betreft dienstverlening farmaceutische hulp, waarbij geen geneesmiddel wordt afgeleverd.'
	),
	new VektisCode(
		'059',
		'GTIN-code',
		'Betreft codering van GS1 (voorheen EAN), gebruikt voor geneesmiddelen.'
	),
	new VektisCode('060', 'WMG-tariefcode', 'Betreft farmaceutische zorg (dienstverlening).'),
	new VektisCode('061', 'NZa codelijst tarieven Overige producten FZ (forensische zorg)', ''),
	new VektisCode('062', 'CLIQ', ''),
	new VektisCode('063', 'NZa codelijst Basis GGZ', ''),
	new VektisCode(
		'064',
		'Prestatiecodelijst hulpmiddelenzorg',
		'Betreft alle aanvullende prestaties voor hulpmiddelenzorg.'
	),
	new VektisCode('065', 'Prestatiecodelijst wijkverpleging', ''),
	new VektisCode('066', 'Prestatiecodelijst zorg zintuiglijk gehandicapten', ''),
	new VektisCode('067', "NZa tarieflijst ZZP's en extramurale parameters FZ", ''),
	new VektisCode('068', 'Prestatiecodelijst eerstelijnsverblijf', ''),
	new VektisCode('069', 'Prestatiecodelijst integrale geboortezorg', ''),
	new VektisCode(
		'070',
		'Prestatiecodelijst geneeskundige zorg aan specifieke patiëntgroepen (GZSP)',
		''
	),
	new VektisCode(
		'071',
		'Prestatiecodelijst geestelijke gezondheidszorg en forensische zorg volgens ZPM',
		''
	),
	new VektisCode('072', 'Prestatiecodelijst Wet Zorg en Dwang', ''),
	new VektisCode('073', 'Prestatiecodelijst fysiotherapie', ''),
	new VektisCode('074', 'Prestatiecodelijst oefentherapie', ''),
	new VektisCode('075', 'Prestatiecodelijst huidtherapie', ''),
	new VektisCode('076', 'Prestatiecodelijst diëtetiek', ''),
	new VektisCode('077', 'Prestatiecodelijst ergotherapie', ''),
	new VektisCode('078', 'Prestatiecodeijst logopedie', ''),
	new VektisCode('079', 'Prestatiecodelijst gecombineerde leefstijlinterventie (GLI)', ''),
	new VektisCode('080', 'Prestatiecodelijst podotherapie', ''),
	new VektisCode(
		'990',
		'Lokaal/regionaal/bilateraal geldende code',
		'Voor farmaceutische hulp betreft het een lokale code vrije reeks Z-Index (niet landelijk beheerd), ook voor onderdelen apotheekbereidingen zonder ZI-nummer.'
	),
	new VektisCode(
		'999',
		'(Onderdeel van een) prestatie waarvoor geen code bestaat',
		'Voor farmaceutische hulp kan dit een totaalrecord apotheekbereiding (magistraal voorschrift) betreffen, waarvoor geen landelijke code bestaat. T/m versie 6 van AP304/AP305 kan het ook een bestanddeel van een apotheekbereiding zijn.'
	)
];
