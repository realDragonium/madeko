import { VektisCode } from './code';

//https://www.vektis.nl/standaardisatie/codelijsten/COD002-VEKT
export const VektisIntegrationMessageTypes = [
	new VektisCode('010', 'Melding'),
	new VektisCode('020', 'Aanvraag verlenging'),
	new VektisCode('030', 'Reactie melding'),
	new VektisCode('040', 'Afgifte verlenging'),
	new VektisCode('050', 'Bericht ontslagdiagnose'),
	new VektisCode('060', 'Bericht van ontslag'),
	new VektisCode('070', 'Bericht van opneming'),
	new VektisCode('080', 'Vrij bericht (1)'),
	new VektisCode('090', 'Wijziging tariefklasse'),
	new VektisCode('100', 'Wijziging verzekering'),
	new VektisCode(
		'101',
		'Declaraties medisch specialistische hulp & ziekenhuiszorg van ziekenhuis naar zorgverzekeraar'
	),
	new VektisCode(
		'102',
		'Retourinformatie declaraties medisch specialistische hulp & ziekenhuiszorg van zorgverzekeraar naar ziekenhuis'
	),
	new VektisCode(
		'103',
		'Declaraties medisch specialistische hulp van medisch specialist/ziekenhuis naar zorgverzekeraar'
	),
	new VektisCode(
		'104',
		'Retourinformatie declaraties medisch specialistische hulp van zorgverzekeraar naar medisch specialist/ziekenhuis'
	),
	new VektisCode(
		'105',
		'Declaraties tandheelkundige hulp van tandarts algemeen prakticus naar zorgverzekeraar'
	),
	new VektisCode('106', 'Declaratie farmaceutische hulp van apotheekhoudende naar zorgverzekeraar'),
	new VektisCode(
		'107',
		'Declaraties paramedische hulp van paramedicus naar zorgverzekeraar (met machtigingsgegevens)'
	),
	new VektisCode(
		'108',
		'Retourinformatie declaraties paramedische hulp van zorgverzekeraar naar paramedicus (met machtiging gegegevens)'
	),
	new VektisCode('109', 'Declaraties orthodontie van orthodontist naar zorgverzekeraar'),
	new VektisCode(
		'110',
		'Declaraties hulpmiddelen van leverancier hulpmiddelen naar zorgverzekeraar'
	),
	new VektisCode(
		'111',
		'Retourinformatie declaraties hulpmiddelen van zorgverzekeraar naar leverancier hulpmiddelen'
	),
	new VektisCode(
		'112',
		'Declaraties huisartsenhulp van huisarts/gezondheidscentrum naar zorgverzekeraar'
	),
	new VektisCode(
		'113',
		'Retourinformatie declaraties huisartsenhulp van zorgverzekeraar naar huisarts/gezondheidscentrum'
	),
	new VektisCode(
		'114',
		'Retourinformatie declaraties orthodontie van zorgverzekeraar naar orthodontist'
	),
	new VektisCode(
		'115',
		'Declaraties paramedische hulp van paramedicus naar zorgverzekeraar (met voorafgaande geautomatiseerde toestemming/machtiging)'
	),
	new VektisCode(
		'116',
		'Retourinformatie declaraties paramedische hulp van zorgverzekeraar naar paramedicus (met voorafgaande geautomatiseerde toestemming)'
	),
	new VektisCode(
		'117',
		'Declaraties vervoer (ambulance en taxi) van vervoerder naar zorgverzekeraar'
	),
	new VektisCode(
		'118',
		'Retourinformatie declaraties vervoer (ambulance en taxi) van zorgverzekeraar naar vervoerder'
	),
	new VektisCode(
		'119',
		'Retourinformatie declaraties tandheelkundige hulp van zorgverzekeraar naar tandarts algemeen prakticus'
	),
	new VektisCode(
		'120',
		'Factuurbericht hulpmiddelen van apotheekhoudende naar zorgverzekeraar m.b.t. de standaard e.i. factuurbericht farmaceutische hulp'
	),
	new VektisCode('121', 'Factuurbericht verpleging en verzorging (V&V)'),
	new VektisCode('122', 'EDI-factuurproces verpleging en verzorging (V&V; Vektis)'),
	new VektisCode('123', 'Factuurbericht farmaceutische hulp'),
	new VektisCode('124', 'Factuurbericht huisartsenhulp'),
	new VektisCode('125', 'Factuurbericht ziekenhuishulp'),
	new VektisCode('126', 'Factuurbericht specialistische hulp'),
	new VektisCode('127', 'Factuurbericht ziekenhuishulp/specialistische hulp'),
	new VektisCode('128', 'Retour factuurbericht farmaceutische hulp'),
	new VektisCode('129', 'Retour factuurbericht huisartsenhulp'),
	new VektisCode('130', 'Retour factuurbericht ziekenhuishulp/specialistische hulp'),
	new VektisCode('131', 'Retour factuurbericht specialistische hulp'),
	new VektisCode('132', 'Retour factuurbericht ziekenhuishulp'),
	new VektisCode('133', 'Declaraties kraamzorg van kraamcentrum naar zorgverzekeraar'),
	new VektisCode(
		'134',
		'Retourinformatie declaraties kraamzorg van zorgverzekeraar naar kraamcentrum'
	),
	new VektisCode('135', 'Factuurbericht laboratoria'),
	new VektisCode('136', 'Retour factuurbericht laboratoria'),
	new VektisCode('137', 'Factuurbericht GGZ'),
	new VektisCode('138', 'Retour factuurbericht GGZ'),
	new VektisCode('139', 'Creditfactuur GGZ-factuur'),
	new VektisCode('140', 'Retourbericht creditfactuur GGZ'),
	new VektisCode('141', 'Declaratiebericht verloskunde'),
	new VektisCode('142', 'Retour declaratiebericht verloskunde'),
	new VektisCode(
		'143',
		'Retourinformatie declaratie farmaceutische hulp van zorgverzekeraar naar apotheekhoudende'
	),
	new VektisCode(
		'144',
		'Retour factuurbericht hulpmiddelen van zorgverzekeraar naar apotheekhoudende m.b.v. de standaard e.i. retour factuurbericht farm. hulp'
	),
	new VektisCode('145', 'Declaraties tandprothetische hulp'),
	new VektisCode('146', 'Retourinformatie declaraties tandprothetische hulp'),
	new VektisCode(
		'147',
		'Declaraties thuiszorg 2e/3e compartiment van thuiszorginstelling naar zorgverzekeraar'
	),
	new VektisCode(
		'148',
		'Retourinformatie declaraties thuiszorg 2e/3e compartiment van zorgverzekeraar naar thuiszorginstelling'
	),
	new VektisCode('149', 'Vervallen'),
	new VektisCode(
		'150',
		'Declaraties kraamzorg van thuiszorginstelling/kraamcentrum naar zorgverzekeraar'
	),
	new VektisCode(
		'151',
		'Retourinformatie declaraties kraamzorg van zorgverzekeraar naar thuiszorginstelling/kraamcentrum'
	),
	new VektisCode(
		'152',
		'Declaraties thuiszorg 1e compartiment (AWBZ) van thuiszorginstelling naar verbindingskantoor (incl. produktiegegevens)'
	),
	new VektisCode(
		'153',
		'Retourinformatie declaraties thuiszorg 1e compartiment (AWBZ) van verbindingskantoor naar thuiszorginstelling (incl. productiegegevens)'
	),
	new VektisCode(
		'154',
		'Declaraties thuiszorg 2e/3e compartiment + kraamzorg van thuiszorginstelling naar zorgverzekeraar'
	),
	new VektisCode(
		'155',
		'Retourinformatie declaraties thuiszorg 2e/3e compartiment + kraamzorg van zorgverzekeraar naar thuiszorginstelling'
	),
	new VektisCode('156', 'Declaraties alléén ziekenhuiszorg van ziekenhuis naar zorgverzekeraar'),
	new VektisCode(
		'157',
		'Retourinformatie declaraties alléén ziekenhuiszorg van zorgverzekeraar naar ziekenhuis'
	),
	new VektisCode('158', 'Opgave productie GGZ'),
	new VektisCode('159', 'Retourinformatie opgave productie GGZ'),
	new VektisCode('160', 'Opgave productie paaz'),
	new VektisCode('161', 'Retourinformatie opgave productie paaz'),
	new VektisCode('162', '0pgave productie paaz incl. honorarium'),
	new VektisCode('163', 'Retourinformatie 0pgave productie paaz incl. honorarium'),
	new VektisCode('164', '0pgave productie V&V'),
	new VektisCode('165', 'Retourinformatie opgave productie V&V'),
	new VektisCode('168', 'Declaraties hulpmiddelen AWBZ'),
	new VektisCode('169', 'Retourinformatie Declaraties hulpmiddelen AWBZ'),
	new VektisCode('170', 'Declaraties tandheelkundige hulp AWBZ'),
	new VektisCode('171', 'Retourinformatie declaraties tandheelkundige hulp AWBZ'),
	new VektisCode('174', 'Declaraties vrijgevestigde psychotherapeuten en psychiaters'),
	new VektisCode(
		'175',
		'Retourinformatie declaraties vrijgevestigde psychotherapeuten en psychiaters'
	),
	new VektisCode('176', 'Declaratie mondzorg van zorgverleners mondzorg naar zorgverzekeraar'),
	new VektisCode(
		'177',
		'Retourinformatie declaratie mondzorg van zorgverzekeraar naar zorgverlener mondzorg.'
	),
	new VektisCode('178', 'Onderlinge verrekening zorgkosten'),
	new VektisCode('179', 'Declaratie zorg eerstelijnspsychologen'),
	new VektisCode('180', 'Retourinformatie declaratie zorg eerstelijnspsychologen'),
	new VektisCode('181', 'Declaratie DBC-zorg GGZ'),
	new VektisCode('182', 'Retourinformatie declaratie DBC-zorg GGZ'),
	new VektisCode('183', 'Declaratie forensische GGZ'),
	new VektisCode('184', 'Retourinformatie declaratie forensische GGZ'),
	new VektisCode('185', 'Declaratie zorg overige sectoren'),
	new VektisCode('186', 'Retourinformatie declaratie zorg overige sectoren'),
	new VektisCode('187', 'Declaratie Wlz/AWBZ-zorg'),
	new VektisCode('188', 'Retourinformatie declaratie Wlz/AWBZ-zorg'),
	new VektisCode('189', 'Onderhanden werk+ Ziekenhuiszorg/DBC'),
	new VektisCode('190', 'Retourinformatie Onderhanden werk+ Ziekenhuiszorg/DBC'),
	new VektisCode('191', '(E)125 formulieren'),
	new VektisCode('192', 'Retourinformatie (E)125 formulieren'),
	new VektisCode('193', 'Declaratie farmaceutische hulp en/of hulpmiddelen'),
	new VektisCode('194', 'Retourinformatie declaratie farmaceutische hulp en/of hulpmiddelen'),
	new VektisCode('195', 'Declaratie basis en gespecialiseerde GGZ'),
	new VektisCode('196', 'Retourinformatie declaratie basis en gespecialiseerde GGZ'),
	new VektisCode('197', 'Declaratie dure geneesmiddelen'),
	new VektisCode('198', 'Retourinformatie declaratie dure geneesmiddelen'),
	new VektisCode('201', 'Overzicht verzekerdengegevens van zorgverzekeraar naar zorgverlener'),
	new VektisCode('202', 'Verzekeringsverklaring-werkgever van werkgever naar zorgverzekeraar'),
	new VektisCode(
		'203',
		'Retourinformatie verzekeringsverklaring-werkgever van zorgverzekeraar naar werkgever'
	),
	new VektisCode('204', 'Verzekeringsgegevens'),
	new VektisCode('205', 'Vrij bericht (2)'),
	new VektisCode(
		'206',
		'Melding in/uitschrijving bejaarden bij ziekenfonds aan uitkeringsorgaan, van zorgverzekeraar naar SVB'
	),
	new VektisCode(
		'207',
		'Retourinformatie melding in/uitschrijving bejaarden bij ziekenfonds aan uitkeringsorgaan/SVB, van SVB naar zorgverzekeraar'
	),
	new VektisCode('210', 'Controle op verzekering (globaal)'),
	new VektisCode('211', 'Retourbericht controle op verzekering (globaal)'),
	new VektisCode('212', 'Opgave op naam ingeschrevenen (globaal)'),
	new VektisCode('213', 'Gegevens bewoners verzorgingshuizen (eenmalig)'),
	new VektisCode('214', 'Opgelegde eigen bijdrage AWBZ'),
	new VektisCode('215', 'Retourinformatie opgelegde eigen bijdrage AWBZ'),
	new VektisCode('216', 'In te houden eigen bijdrage AWBZ'),
	new VektisCode('217', 'Verwerkingsresultaat broninhouding eigen bijdrage AWBZ'),
	new VektisCode('218', 'Terugmelden broninhouding eigen bijdrage AWBZ'),
	new VektisCode('219', 'Retourinformatie terugmelden broninhouding eigen bijdrage AWBZ'),
	new VektisCode('220', '65+ ziekenfondsverzekerden'),
	new VektisCode('221', '(retour) 65+ ziekenfondsverzekerden'),
	new VektisCode(
		'222',
		'Afstemming verzekerde-/verzekeringsgegevens van zorgverlener naar zorgverzekeraar'
	),
	new VektisCode(
		'223',
		'Retourinformatie afstemming verzekerde-/verzekeringsgegevens van zorgverzekeraar naar zorgverlener'
	),
	new VektisCode('224', 'Stopzetten eigen bijdrage AWBZ'),
	new VektisCode('225', 'Retourinformatie stopzetten eigen bijdrage AWBZ'),
	new VektisCode('226', 'Terugmelden stopzetten eigen bijdrage AWBZ'),
	new VektisCode('227', 'Retourinformatie terugmelden stopzetten eigen bijdrage AWBZ'),
	new VektisCode('228', 'Opgelegde/stopgezette eigen bijdrage AWBZ'),
	new VektisCode('229', 'Retourinformatie opgelegde/stopgezette eigen bijdrage AWBZ'),
	new VektisCode('230', 'Melden broninhouding/stopzetten eigen bijdrage AWBZ'),
	new VektisCode('231', 'Retourinformatie melden broninhouding/stopzetten eigen bijdrage AWBZ'),
	new VektisCode(
		'232',
		'Nieuwe verzekerden van zorgverzekeraar naar centrale unit van zorgpasgroep'
	),
	new VektisCode('233', 'Zorgpas-status-mutatie (vervangen/blokkeren)'),
	new VektisCode('234', 'Intramurale eigen bijdrage AWBZ'),
	new VektisCode('235', 'Reactie intramurale eigen bijdrage AWBZ'),
	new VektisCode('236', 'Opvragen belastbaar inkomen AWBZ'),
	new VektisCode('237', 'Retourinformatie opvragen belastbaar inkomen AWBZ'),
	new VektisCode('238', 'Reactie opvragen belastbaar inkomen AWBZ'),
	new VektisCode('239', 'Retourbericht reactie opvragen belastbaar inkomen AWBZ'),
	new VektisCode('240', 'Aanvraag controle op verzekering'),
	new VektisCode('241', 'Reactie controle op verzekering'),
	new VektisCode('242', 'Aanlevering Verzekerden Gegevens (AVG)'),
	new VektisCode('243', 'Zorgverzekeringsgegevens RBVZ'),
	new VektisCode('244', 'Premieachterstandgegevens RBVZ'),
	new VektisCode('245', 'Retourinformatie aanlevering Verzekerden Gegevens (AVG)'),
	new VektisCode('246', 'Dossieroverdracht AWBZ-zorg'),
	new VektisCode('247', 'Aanlevering Verzekerden Gegevens (AVG) t.b.v. Informatie en Onderzoek'),
	new VektisCode('248', 'Verzekerde inschrijving op naam huisarts'),
	new VektisCode(
		'249',
		'Aanlevering Zorgvraagzwaarte Indicatoren (ZVZ-I) t.b.v. Informatie en Onderzoek'
	),
	new VektisCode('250', 'Declaratie mondzorg van zorgverleners mondzorg naar zorgkantoor'),
	new VektisCode(
		'251',
		'Retourinformatie declaratie mondzorg van zorgkantoor naar zorgverlener mondzorg.'
	),
	new VektisCode('252', 'Informatie over inschrijving - woonplaats Zvw-verzekerde (S073)'),
	new VektisCode(
		'253',
		'Retourinformatie informatie over inschrijving - woonplaats Zvw-verzekerde'
	),
	new VektisCode('254', 'Document, dat recht aantoont - woonplaats Zvw-verzekerde (S072)'),
	new VektisCode('255', 'Retourinformatie document dat recht aantoont - woonplaats'),
	new VektisCode(
		'256',
		'Verzoek om document, dat recht aantoont - woonplaats Zvw-verzekerde (S071)'
	),
	new VektisCode(
		'257',
		'Retourinformatie verzoek om document, dat recht aantoont - woonplaats Zvw-verzekerde'
	),
	new VektisCode('258', 'Intrekking document, dat recht aantoont Zvw-verzekerde (S016)'),
	new VektisCode('259', 'Retourinformatie intrekking document, dat recht aantoont Zvw-verzekerde'),
	new VektisCode(
		'260',
		'Antwoord op intrekking document, dat recht aantoont Zvw-verzekerde (S017)'
	),
	new VektisCode(
		'261',
		'Retourinformatie antwoord op intrekking document, dat recht aantoont Zvw-verzekerde'
	),
	new VektisCode('262', 'Intrekking inschrijving Zvw-verzekerde (S018)'),
	new VektisCode('263', 'Retourinformatie intrekking inschrijving Zvw-verzekerde'),
	new VektisCode('264', 'Antwoord op intrekking inschrijving Zvw-verzekerde (S019)'),
	new VektisCode('265', 'Retourinformatie antwoord op intrekking inschrijving Zvw-verzekerde'),
	new VektisCode('266', 'Informatie over inschrijving - woonplaats buitenlandverzekerde (S073)'),
	new VektisCode(
		'267',
		'Retourinformatie informatie over inschrijving - woonplaats buitenlandverzekerde'
	),
	new VektisCode('268', 'Document, dat recht aantoont - woonplaats buitenlandverzekerde (S072)'),
	new VektisCode('269', 'Retourinformatie document, dat recht aantoont - woonplaats'),
	new VektisCode(
		'270',
		'Verzoek om document, dat recht aantoont - woonplaats buitenlandverzekerde (S071)'
	),
	new VektisCode(
		'271',
		'Retourinformatie verzoek om document, dat recht aantoont - woonplaats buitenlandverzekerde'
	),
	new VektisCode('272', 'Intrekking document, dat recht aantoont buitenlandverzekerde (S016)'),
	new VektisCode(
		'273',
		'Retourinformatie intrekking document, dat recht aantoont buitenlandverzekerde'
	),
	new VektisCode(
		'274',
		'Antwoord op intrekking document, dat recht aantoont buitenlandverzekerde (S017)'
	),
	new VektisCode(
		'275',
		'Retourinformatie antwoord op intrekking document, dat recht aantoont buitenlandverzekerde'
	),
	new VektisCode('276', 'Intrekking inschrijving buitenlandverzekerde (S018)'),
	new VektisCode('277', 'Retourinformatie intrekking inschrijving buitenlandverzekerde'),
	new VektisCode('278', 'Antwoord op intrekking inschrijving buitenlandverzekerde (S019)'),
	new VektisCode(
		'279',
		'Retourinformatie antwoord op intrekking inschrijving buitenlandverzekerde'
	),
	new VektisCode('280', 'Betwisting (S050)'),
	new VektisCode('281', 'Retourinformatie betwisting'),
	new VektisCode('282', 'Portable Document (PD_S1)'),
	new VektisCode('283', 'Retourinformatie Portable Document (PD_S1)'),
	new VektisCode('301', 'Vervallen'),
	new VektisCode('302', 'Vervallen'),
	new VektisCode('303', 'Vervallen'),
	new VektisCode('304', 'Vervallen'),
	new VektisCode(
		'305',
		'Toestemmingsaanvraag paramedische hulp van paramedicus naar zorgverzekeraar'
	),
	new VektisCode('306', 'Toestemming paramedische hulp van zorgverzekeraar naar paramedicus'),
	new VektisCode(
		'307',
		'Machtigingsaanvraag tandheelkundige hulp van tandarts algemeen prakticus of orthodontist naar zorgverzekeraar'
	),
	new VektisCode(
		'308',
		'Machtiging/afwijzing tandheelkundige hulp van zorgverzekeraar naar tandarts algemeen prakticus of orthodontist'
	),
	new VektisCode(
		'310',
		'Aanvraag machtigingen hulpmiddelen van leverancier hulpmiddelen naar  zorgverzekeraar'
	),
	new VektisCode(
		'311',
		'Machtigingen hulpmiddelen van zorgverzekeraar naar leverancier hulpmiddelen'
	),
	new VektisCode('321', 'Eerste melding zorg verpleging en verzorging V&V'),
	new VektisCode('322', 'Reactie eerste melding zorg V&V'),
	new VektisCode('323', 'Tweede melding zorg V&V'),
	new VektisCode('324', 'Reactie tweede melding zorg V&V'),
	new VektisCode('325', 'Melding verlenging zorg V&V'),
	new VektisCode('326', 'Reactie melding verlenging zorg V&V'),
	new VektisCode('327', 'Einde zorg V&V'),
	new VektisCode('328', 'Wijziging zorg V&V'),
	new VektisCode('329', 'Reactie wijziging zorg V&V'),
	new VektisCode('330', 'Melding opname GGZ'),
	new VektisCode('331', 'Acceptatie melding opname GGZ'),
	new VektisCode('332', 'Aanvraag medische gegevens (steekproef) GGZ'),
	new VektisCode('333', 'Opgave medische gegevens (steekproef) GGZ'),
	new VektisCode('334', 'Melding/aanvraag machtiging RIBW'),
	new VektisCode('335', 'Aanvraag machtiging opname GGZ'),
	new VektisCode('336', 'Afgifte machtiging opname GGZ'),
	new VektisCode('337', 'Beeindiging verstrekking GGZ'),
	new VektisCode('338', 'Reactie beeindigingsbericht GGZ'),
	new VektisCode('339', 'Wijziging opgave zorgaanbieder GGZ'),
	new VektisCode('340', 'Retourbericht wijziging opgave zorgaanbieder GGZ'),
	new VektisCode('341', 'Wijziging opgave zorgverzekeraar GGZ'),
	new VektisCode('342', 'Retourbericht wijziging opgave zorgverzekeraar GGZ'),
	new VektisCode('343', 'Melding/aanvraag machtiging GGZ'),
	new VektisCode('344', 'Reactie melding/afgifte machtiging GGZ'),
	new VektisCode('345', 'Beeindiging GGZ zorg'),
	new VektisCode('346', 'Indicatiestelling V&V'),
	new VektisCode('347', 'Retourinformatie indicatiestelling V&V'),
	new VektisCode('348', 'Melding aanvang V&V'),
	new VektisCode('349', 'Retourinformatie melding aanvang V&V'),
	new VektisCode('350', 'Beschikbaar zorgaanbod AWBZ'),
	new VektisCode('351', 'Retourinformatie beschikbaar zorgaanbod AWBZ'),
	new VektisCode('352', 'Zorgtoewijzing AWBZ-zorg'),
	new VektisCode('353', 'Retourinformatie zorgtoewijzing AWBZ'),
	new VektisCode('354', 'Melding aanvang AWBZ-zorg'),
	new VektisCode('355', 'Retourinformatie melding aanvang AWBZ-zorg'),
	new VektisCode('356', 'Reactie melding aanvang AWBZ-zorg'),
	new VektisCode('357', 'Retourinformatie Reactie melding aanvang AWBZ-zorg'),
	new VektisCode('358', 'Beeindiging/mutatie AWBZ-zorg'),
	new VektisCode('359', 'Retourinformatie beëindiging/mutatie AWBZ-zorg'),
	new VektisCode('360', 'Opgave productie AWBZ-zorg'),
	new VektisCode('361', 'Retourinformatie opgave productie AWBZ-zorg'),
	new VektisCode('362', 'Indicatiestelling V&V zorgkantoren'),
	new VektisCode('363', 'Retourinformatie indicatiestelling V&V zorgkantoren'),
	new VektisCode('364', 'Beschikbaar zorgaanbod V&V zorgkantoren (capaciteit)'),
	new VektisCode('365', 'Retourinformatie beschikbaar zorgaabod V&V zorgkantoren'),
	new VektisCode('366', 'Melding aanvang V&V zorgkantoren'),
	new VektisCode('367', 'Retourinformatie melding aanvang V&V zorgkantoren'),
	new VektisCode('368', 'Mutaties V&V zorgkantoren'),
	new VektisCode('369', 'Retourinformatie mutaties V&V zorgkantoren'),
	new VektisCode('370', 'AZR-DWARS V&V'),
	new VektisCode('371', 'Melding aanvang GH'),
	new VektisCode('372', 'Retourinformatie melding aanvang GH'),
	new VektisCode('373', 'Zorgtoewijzing/-plaatsing GH'),
	new VektisCode('374', 'Retourinformatie zorgtoewijzing/-plaatsing GH'),
	new VektisCode('375', 'Reactie melding/afgifte machtiging GH'),
	new VektisCode('376', 'Retourinformatie reactie melding/afgifte machtiging GH'),
	new VektisCode('377', 'Aanvraag machtiging tandheelkundige hulp AWBZ'),
	new VektisCode('378', 'Retourinformatie aanvraag machtiging tandheelkundige hulp AWBZ'),
	new VektisCode('379', 'Afgifte machtiging tandheelkundige hulp AWBZ'),
	new VektisCode('380', 'Retourinformatie afgifte machtiging tandheelkundige hulp AWBZ'),
	new VektisCode('387', 'Wachttijden GGZ'),
	new VektisCode('388', 'Indicatiebesluit AWBZ-zorg'),
	new VektisCode('389', 'Retourinformatie indicatiebesluit AWBZ-zorg'),
	new VektisCode('390', 'Retourinformatie wachttijden GGZ'),
	new VektisCode('391', 'Indicatiebesluit AWBZ-zorg ZK-ZK'),
	new VektisCode('392', 'Retourinformatie Indicatiebesluit AWBZ-zorg ZK-ZK'),
	new VektisCode('393', 'Melding aanvang AWBZ-zorg ZK-ZK'),
	new VektisCode('394', 'Retourinformatie melding aanvang AWBZ-zorg ZK-ZK'),
	new VektisCode('395', 'Beëindiging/mutatie AWBZ-zorg ZK-ZK'),
	new VektisCode('396', 'Retourinformatie beëindiging/mutatie AWBZ-zorg ZK-ZK'),
	new VektisCode('397', 'Zorgtoewijzing AWBZ ZK-ZK'),
	new VektisCode('398', 'Retourinformatie zorgtoewijzing AWBZ ZK-ZK'),
	new VektisCode('399', 'AIS AWBZ-zorg'),
	new VektisCode('400', 'Retourinformatie AIS AWBZ-zorg'),
	new VektisCode('401', 'Vervallen'),
	new VektisCode('402', 'AWBZ-aanlevering CVZ'),
	new VektisCode('403', 'Retourinformatie AWBZ-aanlevering CVZ'),
	new VektisCode('404', 'Landelijke aanlevering zorgregistratie AWBZ'),
	new VektisCode('405', 'Retourinformatie Landelijke aanlevering Zorgregistratie AWBZ'),
	new VektisCode('406', 'Melding aanvang AWBZ-zorg ZK-CAK'),
	new VektisCode('407', 'Retourinformatie melding aanvang AWBZ-zorg ZK-CAK'),
	new VektisCode('408', 'Overheveling dossiers intramurale eigen bijdrage AWBZ ZK-CAK'),
	new VektisCode(
		'409',
		'Retourinformatie overheveling dossiers intramurale eigen bijdrage AWBZ ZK-CAK'
	),
	new VektisCode('410', 'Beëindiging/mutatie AWBZ-zorg ZK-CAK'),
	new VektisCode('411', 'Retourinformatie beëindiging/mutatie AWBZ-zorg ZK-CAK'),
	new VektisCode('412', 'Aanvraag indicatiebesluit'),
	new VektisCode('413', 'Retourinformatie aanvraag indicatiebesluit'),
	new VektisCode('414', 'Wmo-Toewijzing'),
	new VektisCode('415', 'Wmo-Toewijzing-Retour'),
	new VektisCode('416', 'Wmo-Declaratie'),
	new VektisCode('417', 'Wmo-Declaratie-Retour'),
	new VektisCode('418', 'Start Wmo-ondersteuning'),
	new VektisCode('419', 'Start Wmo-ondersteuning retour'),
	new VektisCode('420', 'Stop Wmo-ondersteuning'),
	new VektisCode('421', 'Stop Wmo-ondersteuning retour'),
	new VektisCode('422', 'Wmo-Wachtlijst'),
	new VektisCode('423', 'Wmo-Wachtlijst-Retour'),
	new VektisCode('424', 'Wmo-Indicatie'),
	new VektisCode('425', 'Wmo-Indicatie-Retour'),
	new VektisCode('426', 'Wmo-AanvraagIndicatie'),
	new VektisCode('427', 'Wmo-AanvraagIndicatie-Retour'),
	new VektisCode(
		'428',
		'Declaratie Wijkverpleging, Eerstelijnsverblijf, Geneeskundige Zorg aan Specifieke Patiëntgroepen en Wet zorg en Dwang'
	),
	new VektisCode(
		'429',
		'Retourinformatie declaratie Wijkverpleging, Eerstelijnsverblijf, Geneeskundige Zorg aan Specifieke Patiëntgroepen en Wet zorg en Dwang'
	),
	new VektisCode('430', 'Declaratie zorg zintuiglijk gehandicapten'),
	new VektisCode('431', 'Retourinformatie declaratie zorg zintuiglijk gehandicapten'),
	new VektisCode('432', 'Declaratie Jeugdhulp'),
	new VektisCode('433', 'Declaratie Jeugdhulp retour'),
	new VektisCode('434', 'Declaratie Jeugd-GGZ'),
	new VektisCode('435', 'Declaratie Jeugd-GGZ retour'),
	new VektisCode('436', 'Toewijzing Jeugd'),
	new VektisCode('437', 'Toewijzing Jeugd retour'),
	new VektisCode('438', 'Start Jeugdhulp'),
	new VektisCode('439', 'Start Jeugdhulp retour'),
	new VektisCode('440', 'Stop Jeugdhulp'),
	new VektisCode('441', 'Stop Jeugdhulp retour'),
	new VektisCode('442', 'Declaratie ZZP en extramurale parameters forensische zorg'),
	new VektisCode(
		'443',
		'Retourinformatie declaratie ZZP en extramurale parameters forensische zorg'
	),
	new VektisCode('444', 'Verzoek om toewijzing Wmo-ondersteuning'),
	new VektisCode('445', 'Verzoek om toewijzing Wmo-ondersteuning Retour'),
	new VektisCode('446', 'Verzoek om toewijzing Jeugdhulp'),
	new VektisCode('447', 'Verzoek om toewijzing Jeugdhulp Retour'),
	new VektisCode('448', 'Factuur Wmo-ondersteuning'),
	new VektisCode('449', 'Factuur Wmo-ondersteuning retour'),
	new VektisCode('450', 'Factuur Jeugdhulp'),
	new VektisCode('451', 'Factuur Jeugdhulp retour'),
	new VektisCode('452', 'Fraudesignaal'),
	new VektisCode('453', 'Retour fraudesignaal'),
	new VektisCode('454', 'Aanvullend bericht Wmo-ondersteuning'),
	new VektisCode('455', 'Aanvullend bericht Wmo-ondersteuning retour'),
	new VektisCode('456', 'Aanvullend bericht Jeugdhulp'),
	new VektisCode('457', 'Aanvullend bericht Jeugdhulp retour'),
	new VektisCode('458', 'Toekenning Pgb Wmo'),
	new VektisCode('459', 'Toekenning Pgb Wmo retour'),
	new VektisCode('460', 'Toekenning Pgb Jw'),
	new VektisCode('461', 'Toekenning Pgb Jw retour'),
	new VektisCode('462', 'Toekenning Pgb Wlz'),
	new VektisCode('463', 'Toekenning Pgb Wlz retour'),
	new VektisCode('464', 'Budgetafsluiting Pgb Wmo'),
	new VektisCode('465', 'Budgetafsluiting Pgb Wmo retour'),
	new VektisCode('466', 'Budgetafsluiting Pgb Jw'),
	new VektisCode('467', 'Budgetafsluiting Pgb Jw retour'),
	new VektisCode('468', 'Budgetafsluiting Pgb Wlz'),
	new VektisCode('469', 'Budgetafsluiting Pgb Wlz retour'),
	new VektisCode('470', 'Start Eigen Bijdrage'),
	new VektisCode('471', 'Start Eigen Bijdrage retour'),
	new VektisCode('472', 'Stop Eigen Bijdrage'),
	new VektisCode('473', 'Stop Eigen Bijdrage retour'),
	new VektisCode('474', 'Verantwoording forensische zorg voor DBBC'),
	new VektisCode('475', 'Retourinformatie verantwoording forensische zorg voor DBBC'),
	new VektisCode('476', 'Aanmelding Forensische Zorg'),
	new VektisCode('477', 'Retourinformatie Aanmelding Forensische Zorg'),
	new VektisCode('478', 'Plaatsing Forensische Zorg'),
	new VektisCode('479', 'Retourinformatie Plaatsing Forensische Zorg'),
	new VektisCode('480', 'Verzoek om Wijziging Wmo-ondersteuning'),
	new VektisCode('481', 'Verzoek om Wijziging Wmo-ondersteuning retour'),
	new VektisCode('482', 'Verzoek antwoord Wmo-ondersteuning'),
	new VektisCode('483', 'Verzoek antwoord Wmo-ondersteuning retour'),
	new VektisCode('484', 'Declaratie Wmo-ondersteuning (release 3.0)'),
	new VektisCode('485', 'Declaratie antwoord Wmo-ondersteuning'),
	new VektisCode('486', 'Verzoek om Wijziging Jeugdhulp'),
	new VektisCode('487', 'Verzoek om Wijziging Jeugdhulp retour'),
	new VektisCode('488', 'Verzoek antwoord Jeugdhulp'),
	new VektisCode('489', 'Verzoek antwoord Jeugdhulp retour'),
	new VektisCode('490', 'Declaratie Jeugdhulp (release 3.0)'),
	new VektisCode('491', 'Declaratie antwoord Jeugdhulp'),
	new VektisCode('492', 'Start Forensische Zorg'),
	new VektisCode('493', 'Retourinformatie Start Forensische Zorg'),
	new VektisCode('494', 'Mutatie Forensische Zorg'),
	new VektisCode('495', 'Retourinformatie Mutatie Forensische Zorg'),
	new VektisCode(
		'501',
		'Frequentiegegevens medisch specialistische hulp van zorgverzekeraar naar Vektis'
	),
	new VektisCode(
		'502',
		'Retourinformatie frequentiegegevens medisch specialistische hulp van vektis naar zorgverzekeraar'
	),
	new VektisCode(
		'503',
		'Ontslagdiagnosekode medisch specialistische hulp van medisch specialist/ziekenhuis naar zorgverzekeraar'
	),
	new VektisCode(
		'504',
		'Retourinformatie ontslagdiagnosekode medisch specialistische hulp van zorgverzekeraar naar medisch specialist/ziekenhuis'
	),
	new VektisCode(
		'505',
		'Prescriptiegegevens fto (regionaal farmacotherapeutisch overleg) van zorgverzekeraar/fto-regio naar ZN/Vektis'
	),
	new VektisCode(
		'506',
		'Prescriptiegegevens fto (regionaal farmacotherapeutisch overleg) van ZN/Vektis naar zorgverzekeraar/fto-regio'
	),
	new VektisCode('507', 'Productiegegevens thuiszorg van thuiszorginstelling naar zorgverzekeraar'),
	new VektisCode('508', 'Aanlevering ELIS Huisartsenzorg'),
	new VektisCode('509', 'Aanlevering ELIS Paramedische zorg'),
	new VektisCode('510', 'Aanlevering ELIS Mondzorg'),
	new VektisCode('511', 'Aanlevering ELIS Eerstelijnspsychologische zorg'),
	new VektisCode('512', 'Aanlevering DBC GGZ'),
	new VektisCode('513', 'Aanlevering Farmacie Informatiesysteem'),
	new VektisCode('514', 'Aanlevering Detailinformatiesysteem Hulpmiddelen'),
	new VektisCode('515', 'Schadelast Wlz/AWBZ-zorg van zorgkantoren'),
	new VektisCode('516', 'Aanleverspecificaties schadelast informatie DBC/ziekenhuiszorg'),
	new VektisCode('517', 'Retourinformatie schadelast Wlz/AWBZ-zorg van zorgkantoren'),
	new VektisCode(
		'518',
		'Retourinformatie aanleverspecificaties schadelast informatie DBC/ziekenhuiszorg'
	),
	new VektisCode('519', 'Retourinformatie aanlevering DBC GGZ'),
	new VektisCode('520', 'Retourinformatie aanleverspecificaties schadelastinformatie Hulpmiddelen'),
	new VektisCode('521', 'Schadelast basis en gespecialiseerde GGZ'),
	new VektisCode('522', 'Retourinformatie schadelast basis en gespecialiseerde GGZ'),
	new VektisCode(
		'523',
		'Schadelast Wijkverpleging, Eerstelijnsverblijf, Zorg zintuiglijk gehandicapten, GZSP en WZD van zorgverzekeraars'
	),
	new VektisCode(
		'524',
		'Retourinformatie schadelast Wijkverpleging, Eerstelijnsverblijf, Zorg zintuiglijk gehandicapten, GZSP en WZD van zorgverzekeraars'
	),
	new VektisCode('525', 'Schadelast kraamzorg'),
	new VektisCode('526', 'Retourinformatie schadelast kraamzorg'),
	new VektisCode('527', 'Schadelast verloskundige hulp'),
	new VektisCode('528', 'Retourinformatie schadelast verloskundige hulp'),
	new VektisCode('529', 'Samenloop Wlz-Zvw van zorgkantoren'),
	new VektisCode('530', 'Samenloop Wlz-Zvw naar zorgverzekeraars'),
	new VektisCode('531', 'Aanleverspecificaties schadelast informatie dure geneesmiddelen'),
	new VektisCode(
		'532',
		'Retourinformatie aanleverspecificaties schadelast informatie dure geneesmiddelen'
	),
	new VektisCode('533', 'Retour samenloop Wlz-Zvw controle'),
	new VektisCode('534', 'Retour samenloop Wlz-Zvw verrijking'),
	new VektisCode('535', 'Indicatie Wlz'),
	new VektisCode('536', 'Retour Indicatie Wlz'),
	new VektisCode('537', 'Betaalopdracht mondzorg in de Wlz'),
	new VektisCode('538', 'Retourbericht betaalopdracht mondzorg in de Wlz'),
	new VektisCode('539', 'Clienten MPT (primair) CAK naar Vektis'),
	new VektisCode('540', 'Retour clienten MPT (primair) Vektis naar CAK'),
	new VektisCode(
		'541',
		'Aanleverspecificaties behandelindex fysiotherapie van zorgverzekeraar naar Vektis.'
	),
	new VektisCode('542', 'Aanleverspecificaties schadelastinformatie vervoer'),
	new VektisCode('543', 'Retourinformatie aanleverspecificaties schadelastinformatie vervoer'),
	new VektisCode('544', 'Onderlinge dienstverlening ziekenhuizen (ODZ)'),
	new VektisCode('545', 'Retourinformatie onderlinge dienstverlening ziekenhuizen (ODZ)'),
	new VektisCode('546', 'Indiening declaratie Sickness (S084)'),
	new VektisCode('547', 'Retourinformatie/bevestiging indiening declaratie Sickness'),
	new VektisCode('548', 'Betwisting declaratie Sickness (S082)'),
	new VektisCode('549', 'Retourinformatie betwisting declaratie Sickness'),
	new VektisCode('550', 'Antwoord op betwisting declaratie Sickness (S084)'),
	new VektisCode('551', 'Retourinformatie/bevestiging antwoord op betwisting declaratie Sickness'),
	new VektisCode('552', 'Creditering Sickness (S085)'),
	new VektisCode('553', 'Retourinformatie creditering Sickness'),
	new VektisCode('554', 'Betwisting creditering Sickness (S087)'),
	new VektisCode('555', 'Retourinformatie betwisting creditering Sickness'),
	new VektisCode('556', 'Antwoord op betwisting creditering Sickness (S088)'),
	new VektisCode('557', 'Retourinformatie/bevestiging antwoord op betwisting creditering Sickness'),
	new VektisCode('558', 'Indiening declaratie AWOD (DA010)'),
	new VektisCode('559', 'Retourinformatie/bevestiging indiening declaratie AWOD'),
	new VektisCode('560', 'Betwisting declaratie AWOD (DA016)'),
	new VektisCode('561', 'Retourinformatie betwisting declaratie AWOD'),
	new VektisCode('562', 'Antwoord op betwisting declaratie AWOD (DA017)'),
	new VektisCode('563', 'Retourinformatie/bevestiging antwoord op betwisting declaratie AWOD'),
	new VektisCode('564', 'Creditering AWOD (DA012)'),
	new VektisCode('565', 'Retourinformatie creditering AWOD'),
	new VektisCode('566', 'Betwisting creditering AWOD (DA012C)'),
	new VektisCode('567', 'Retourinformatie betwisting creditering AWOD'),
	new VektisCode('568', 'Antwoord op betwisting creditering AWOD (DA012R)'),
	new VektisCode('569', 'Retourinformatie/bevestiging antwoord op betwisting creditering AWOD'),
	new VektisCode('570', 'Retourinformatie aanleverspecificaties schadelastinformatie farmacie'),
	new VektisCode('571', 'Verantwoording forensische zorg voor ZZP/EVP/VPT'),
	new VektisCode('572', 'Retourinformatie verantwoording forensische zorg voor ZZP/EVP/VPT'),
	new VektisCode('573', 'Generieke Declaratie Standaard'),
	new VektisCode('574', 'Retourinformatie Generieke Declaratie Standaard'),
	new VektisCode('575', 'TOVER-signaleringen'),
	new VektisCode('576', 'Retourinformatie TOVER-signaleringen'),
	new VektisCode('577', 'TOVER-signaleringen per UZOVI'),
	new VektisCode('578', 'Eigenbijdrage abonnementstarief WMO-ondersteuning'),
	new VektisCode('579', 'Retourinformatie Eigenbijdrage abonnementstarief WMO-ondersteuning'),
	new VektisCode('580', 'Eigenbijdrage beschermd wonen WMO-ondersteuning'),
	new VektisCode('581', 'Retourinformatie Eigenbijdrage beschermd wonen WMO-ondersteuning'),
	new VektisCode('582', 'Aanlevering schadelast informatie generiek'),
	new VektisCode('583', 'Retourinformatie aanlevering schadelast informatie generiek'),
	new VektisCode('601', 'Nieuwe AGB-gegevens van zorgverzekeraar naar Vektis'),
	new VektisCode('602', 'Retourinformatie nieuwe AGB-gegevens van Vektis naar zorgverzekeraar'),
	new VektisCode('603', 'AGB-wijzigingsgegevens van zorgverzekeraar naar Vektis'),
	new VektisCode('604', 'Retourinformatie AGB-wijzigingsgegevens van Vektis naar zorgverzekeraar'),
	new VektisCode('605', 'Afvoer AGB-gegevens van zorgverzekeraar naar Vektis'),
	new VektisCode('606', 'Retourinformatie afvoer AGB-gegevens van Vektis naar zorgverzekeraar'),
	new VektisCode('607', 'Referentiegegevens werkgevers'),
	new VektisCode('608', 'Mutaties referentiegegevens werkgevers')
];
