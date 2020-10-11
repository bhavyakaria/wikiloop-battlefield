import { MwMailer } from '~/mailer/mw-mailer';

let main = async () => {
  console.log(`Start...`);
  const envPath = process.env.DOTENV_PATH || 'template.env';
  console.log(`DotEnv envPath = `, envPath, ' if you want to change it, restart and set DOTENV_PATH');

  require('dotenv').config({
    path: envPath
  });
  let mwMailer = new MwMailer();
  await mwMailer.init();
  let names = [
    'Xinbenlv',
    'A-NEUN',
    'AC5230',
    'AaPle',
    'Accidentalmeme',
    'Aced',
    'Adolf keemstar',
    'Ajraddatz',
    'Ajshul',
    'Alex Cohn',
    'AlexLeeCN',
    'Alexcalamaro',
    'Aligren',
    'Alpha 4615',
    'Alsee',
    'AnKo96X',
    'Anarchyte',
    'AnimaniacsFanatic',
    'Antimatter628',
    'AppleBsTime',
    'Augend',
    'AySz88',
    'BEANS X2',
    'Babymissfortune',
    'Bailo26',
    'BeamAlexander25',
    'BhaskaraPattelar',
    'Bhavyakaria',
    'Blackpeartree',
    'BloatedPotato',
    'Bluerasberry',
    'CAPTAIN MEDUSA',
    'CAPTAIN RAJU',
    'CAPTAIN_MEDUSA',
    'Caio!',
    'Can I Log In',
    'Cantons-de-l\'Est',
    'Carla.Abra',
    'CatcherStorm',
    'CentralTime301',
    'Chaoyuel',
    'ChenKB91',
    'ChipWolf',
    'Chrispainter0624',
    'ChromeGames923',
    'CircuitBoard1',
    'Cjquines10',
    'Clayoquot',
    'Cloud atlas',
    'Cmdrjameson',
    'CommanderWaterford',
    'Czar',
    'DESiegel',
    'Daask',
    'Danylstrype',
    'DarthFlappy',
    'DarwIn',
    'Darylgolden',
    'DeerJerky',
    'Deisenbe',
    'Demantle',
    'Dmitry Brant',
    'Dodger67',
    'Drummersbrother',
    'Dylsss',
    'Eatcha',
    'Eddie891',
    'Edgars2007',
    'Edi7*',
    'ElanHR',
    'Emperork',
    'Enterprise8472',
    'Envlh',
    'Enwebb',
    'EpochFail',
    'Etothepi',
    'Evanlihou',
    'Evolution and evolvability',
    'FULBERT',
    'Fake1',
    'Felix halim',
    'Finnianheart',
    'Firestarforever',
    'Framawiki',
    'Galendalia',
    'Ganbaruby',
    'Ganesha811',
    'Geraki',
    'Glen',
    'Gnangarra',
    'H200920452',
    'HaEr48',
    'Halfak',
    'Hanamanteo',
    'Hannah Banana99',
    'HawkAussie',
    'He7d3r',
    'Henry20090',
    'Hidayatsrf',
    'Hundifan33',
    'I dream of horses',
    'Ian E',
    'Id34',
    'Iluvatar',
    'Informationdude420',
    'Ivi104',
    'JaneciaTaylor',
    'Jarble',
    'JavaHurricane',
    'Jchmrt',
    'Jcthedj',
    'Jdcomix',
    'Jkatz (WMF)',
    'Johand199',
    'JohnnyBflat',
    'Johnshade2',
    'Jorm',
    'Josve05a',
    'Jschnur',
    'Jurbop',
    'Jxdn',
    'K6ka',
    'KenPR',
    'Ket',
    'Klbrain',
    'Knucmo2',
    'Kortsleting',
    'Kpf10',
    'Krazywrath',
    'Krikums',
    'L3X1',
    'LPS and MLP Fan',
    'Lars.Dormans',
    'Lee Vilenski',
    'Liam Townsley',
    'Liridon',
    'Logical Man 2000',
    'Maedacho',
    'Mark Schierbecker',
    'Markworthen',
    'Masjawad99',
    'Materialscientist',
    'Mathnerd314159',
    'Mcscuba8',
    'Md Maruf Parvez',
    'Mimihitam',
    'MisfitMaid',
    'Misiuji100',
    'MoltenOak',
    'Moonythedwarf',
    'MrConorAE',
    'MrJaroslavik',
    'Mufinmanlav',
    'Muhraz',
    'Nick Moyes',
    'Nickjacksonza',
    'Nizil Shah',
    'NonsensicalSystem',
    'NotJuggerNot',
    'Ocean Cabbage Delight',
    'Ohc on the move',
    'Ohconfucius',
    'Omtylo',
    'OnePt618',
    'Ononal',
    'Orphan Wiki',
    'Orphan_Wiki',
    'Outlander07',
    'OxonAlex',
    'PRRfan',
    'Palnatoke',
    'Paperworkorange',
    'Papuass',
    'Paradoxsociety',
    'Path slopu',
    'Pelirojopajaro',
    'Pindi1010',
    'ProManglementer',
    'Pythoncoder',
    'QueerEcofeminist',
    'Qwerq33',
    'Rachmat04',
    'RaphaelQS',
    'Rcsprinter123',
    'RealFakeKim',
    'RedRage132',
    'Rhododendrites',
    'Rich Smith',
    'Rioha',
    'RobinHood1624',
    'RonnieV',
    'Ruthless.Cutie',
    'S.Hinakawa',
    'Sadads',
    'Sakaerka',
    'SamHolt6',
    'Samuel.weinhardt',
    'Sanyam.wikime',
    'Scratched.puppet',
    'Sdkb',
    'Seligne',
    'SigmaB',
    'Sj',
    'Slywriter',
    'Smuckola',
    'SobekTonio',
    'Sohom data',
    'Sophiajoanne',
    'Spy-cicle',
    'Starkgate',
    'Stesmo',
    'Steve Quinn',
    'Strug',
    'Subwaymuncher',
    'Sunny00217',
    'SuperHamster',
    'THE IT',
    'Tantusar',
    'TechLich',
    'ThadeusOfNazereth',
    'Thadguidry',
    'The Lord of Math',
    'The creeper2007',
    'The4lines',
    'TheCubes',
    'TheDJ',
    'TheMightyWalrus',
    'ThePlatypusofDoom',
    'ThomasFrolov',
    'Tipeditor',
    'Titodutta',
    'ToBeFree',
    'TooheyEst',
    'Tow',
    'ToxiBoi',
    'Trogon',
    'TryKid',
    'Turrit hugger',
    'Ultimate-Robo',
    'Utcatdad',
    'Veracious',
    'Veverve',
    'Vluhd',
    'WMSR',
    'Ward614',
    'WarrenDoe',
    'Whisperjanes',
    'Wikiloop ID',
    'William Avery',
    'Wisnu Adi Nurcahyo',
    'Wyatt Tyrone Smith',
    'Wylie39',
    'Xinbenlv',
    'XinbenlvSandbox',
    'ZFaust',
    'Zarius',
    'Zhyrek',
    'Zoozaz1',
  ];
  names.map(async name => {
    await mwMailer.mail(`User_talk:${name}`,
      `==WikiLoop Battlefield new name vote==\nDear ${name}, \n\nThank you for your interest and contributions to WikiLoop Battlefield.
We are holding a voting for proposed new name. We would like to invite you to this voting. The voting
is held at [[:m:WikiProject_WikiLoop/New_name_vote]] and ends on July 13th 00:00 UTC. \n\n~~~~`);
  });

}

main().then(() => { console.log('complete!'); });
