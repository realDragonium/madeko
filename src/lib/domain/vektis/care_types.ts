import { VektisCode } from './code';

//https://www.vektis.nl/standaardisatie/codelijsten/COD163-CIZ
export const VektisCareType = [
	new VektisCode('190', '9VV A', 'Geriatrische revalidatiezorg'),
	new VektisCode('191', '9VV B', 'Herstelgerichte behandeling met verpleging en verzorging'),
	new VektisCode('750', '1VV', 'Beschut wonen met enige begeleiding'),
	new VektisCode('751', '2VV', 'Beschut wonen met begeleiding en verzorging'),
	new VektisCode('752', '3VV', 'Beschut wonen met begeleiding en intensieve verzorging'),
	new VektisCode('753', '4VV', 'Beschut wonen met intensieve begeleiding en uitgebreide verzorging'),
	new VektisCode('754', '5VV', 'Beschermd wonen met intensieve dementiezorg'),
	new VektisCode('755', '6VV', 'Beschermd wonen met intensieve verzorging en verpleging'),
	new VektisCode(
		'756',
		'7VV',
		'Beschermd wonen met zeer intensieve zorg, vanwege specifieke aandoeningen, met nadruk op begeleiding'
	),
	new VektisCode(
		'757',
		'8VV',
		'Beschermd wonen met zeer intensieve zorg, vanwege specifieke aandoeningen, met de nadruk op verzorging/verpleging'
	),
	new VektisCode('758', '9VV', 'Herstelgerichte behandeling met verpleging en verzorging'),
	new VektisCode('759', '10VV', 'Beschermd verblijf met intensieve palliatief-terminale zorg'),
	new VektisCode('760', '1GGZ C', 'Beschermd wonen met begeleiding'),
	new VektisCode('762', '2GGZ C', 'Gestructureerd beschermd wonen met uitgebreide begeleiding'),
	new VektisCode('764', '3GGZ C', 'Beschermd wonen met intensieve begeleiding'),
	new VektisCode('766', '4GGZ B', 'Voortgezet verblijf met intensieve begeleiding en verzorging'),
	new VektisCode(
		"768",
		'5GGZ B',
		'Voortgezet verblijf met intensieve begeleiding en gedragsregulering'
	),
	new VektisCode(
		"770",
		'6GGZ B',
		'Voortgezet verblijf met intensieve begeleiding en intensieve verpleging en verzorging'
	),
	new VektisCode(
		"772",
		'7GGZ B',
		'Beveiligd voortgezet verblijf vanwege extreme gedragsproblematiek met zeer intensieve begeleiding'
	),
	new VektisCode('780', '1LVG', 'Wonen met enige behandeling en begeleiding'),
	new VektisCode('781', '2LVG', 'Wonen met behandeling en begeleiding'),
	new VektisCode('782', '3LVG', 'Wonen met intensieve behandeling en begeleiding, kleine groep'),
	new VektisCode('783', '4LVG', 'Wonen met zeer intensieve behandeling en begeleiding'),
	new VektisCode('784', '5LVG', 'Besloten wonen met zeer intensieve behandeling en begeleiding'),
	new VektisCode('790', '1SGLVG', 'Behandeling in een SGLVG-behandelcentrum'),
	new VektisCode('800', '1VG', 'Wonen met enige begeleiding'),
	new VektisCode('802', '2VG', 'Wonen met begeleiding'),
	new VektisCode('804', '3VG', 'Wonen met begeleiding en verzorging'),
	new VektisCode('806', '4VG', 'Wonen met begeleiding en intensieve verzorging'),
	new VektisCode('808', '5VG', 'Wonen met begeleiding en zeer intensieve verzorging'),
	new VektisCode('810', '6VG', 'Wonen met intensieve begeleiding, verzorging en gedragsregulering'),
	new VektisCode(
		"812",
		'7VG',
		'(Besloten) wonen met zeer intensieve begeleiding, verzorging en gedragsregulering'
	),
	new VektisCode('814', '8VG', 'Wonen met begeleiding en volledige verzorging en verpleging'),
	new VektisCode('820', '1LG', 'Wonen met enige begeleiding en enige verzorging'),
	new VektisCode('822', '2LG', 'Wonen met begeleiding en enige verzorging'),
	new VektisCode('824', '3LG', 'Wonen met enige begeleiding en verzorging'),
	new VektisCode('826', '4LG', 'Wonen met begeleiding en verzorging'),
	new VektisCode('828', '5LG', 'Wonen met begeleiding en intensieve verzorging'),
	new VektisCode('830', '6LG', 'Wonen met intensieve begeleiding en intensieve verzorging'),
	new VektisCode('832', '7LG', 'Wonen met zeer intensieve begeleiding en zeer intensieve verzorging'),
	new VektisCode('840', '1ZGvis', 'Wonen met enige begeleiding en enige verzorging'),
	new VektisCode('842', '2ZGvis', 'Wonen met begeleiding en enige verzorging'),
	new VektisCode('844', '3ZGvis', 'Wonen met intensieve begeleiding en verzorging'),
	new VektisCode('846', '4ZGvis', 'Wonen met intensieve begeleiding en intensieve verzorging'),
	new VektisCode(
		"848",
		'5ZGvis',
		'Wonen met zeer intensieve begeleiding en zeer intensieve verzorging'
	),
	new VektisCode('850', '1ZGaud', 'Wonen met begeleiding en enige verzorging'),
	new VektisCode('852', '2ZGaud', 'Wonen met intensieve begeleiding en verzorging'),
	new VektisCode('854', '3ZGaud', 'Wonen met intensieve begeleiding en intensieve verzorging'),
	new VektisCode('856', '4ZGaud', 'Wonen met intensieve begeleiding en enige verzorging'),
	new VektisCode('860', '1GGZ B', 'Voortgezet verblijf met beleiding'),
	new VektisCode('862', '2GGZ B', 'Voortgezet verblijf met structuur en uitgebreide begeleiding'),
	new VektisCode('864', '3GGZ B', 'Voortgezet verblijf met intensieve begeleiding'),
	new VektisCode(
		"866",
		'4GGZ C',
		'Gestructureerd beschermd wonen met intensieve begeleiding en verzorging'
	),
	new VektisCode("868", '5GGZ C', 'Beschermd wonen met intensieve begeleiding en gedragsregulering'),
	new VektisCode(
		"870",
		'6GGZ C',
		'Beschermd wonen met intensieve begeleiding en intensieve verpleging en verzorging'
	),
	new VektisCode("880", '1GGZ W', 'Wonen met intensieve begeleiding'),
	new VektisCode("882", '2GGZ W', 'Wonen met intensieve begeleiding en verzorging'),
	new VektisCode("884", '3GGZ W', 'Wonen met intensieve begeleiding en gedragsregulering'),
	new VektisCode(
		"886",
		'4GGZ W',
		'Wonen met intensieve begeleiding en intensieve verpleging en verzorging'
	),
	new VektisCode(
		"888",
		'5GGZ W',
		'Beveiligd Wonen vanwege extreme gedragsproblematiek met zeer intensieve begeleiding'
	),
	new VektisCode("998", 'ZZPX', 'Onbepaald zorgzwaartepakket'),
	new VektisCode("999", 'ZZPO', 'Partnerverblijf')
];
