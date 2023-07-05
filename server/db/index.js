const conn = require('./conn');
const User = require('./User');
const Fighter = require('./Fighter');
// const { UFC_API_KEY } = require('../../.env');
const axios = require('axios');
require('dotenv').config()

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  
  const options = {
    method: 'GET',
    url: 'https://mma-stats.p.rapidapi.com/May_13_2023',
    params: {offset: '0', limit: '15'},
    headers: {
      'X-RapidAPI-Key': process.env.UFC_API_KEY,
      'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
    }
  };

  const options1 = {
    method: 'GET',
    url: `https://api.sportsdata.io/v3/mma/scores/json/Event/301?key=${process.env.UFC_IO_API_KEY}`,
  };

  const dernHillOptions = {
    method: 'GET',
    url: `https://api.sportsdata.io/v3/mma/scores/json/Event/303?key=${process.env.UFC_IO_API_KEY}`,
  }

  const optionsMay20 = {
    method: 'GET',
    url: 'https://mma-stats.p.rapidapi.com/May_20_2023',
    params: {offset: '0', limit: '15'},
    headers: {
      'X-RapidAPI-Key': process.env.UFC_API_KEY,
      'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
    }
  };

  const optionsJune3 = {
    method: 'GET',
    url: 'https://mma-stats.p.rapidapi.com/June_03_2023',
    params: {offset: '0', limit: '15'},
    headers: {
      'X-RapidAPI-Key': process.env.UFC_API_KEY,
      'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
    }
  };

  const optionsJune10 = {
    method: 'GET',
    url: 'https://mma-stats.p.rapidapi.com/June_10_2023',
    params: {offset: '0', limit: '15'},
    headers: {
      'X-RapidAPI-Key': process.env.UFC_API_KEY,
      'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
    }
  };

  const optionsJune17 = {
    method: 'GET',
    url: 'https://mma-stats.p.rapidapi.com/June_17_2023',
    params: {offset: '0', limit: '15'},
    headers: {
      'X-RapidAPI-Key': process.env.UFC_API_KEY,
      'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
    }
  };

  const optionsJune24 = {
    method: 'GET',
    url: 'https://mma-stats.p.rapidapi.com/June_24_2023',
    params: {offset: '0', limit: '15'},
    headers: {
      'X-RapidAPI-Key': process.env.UFC_API_KEY,
      'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
    }
  };

  const optionsJuly1 = {
    method: 'GET',
    url: 'https://mma-stats.p.rapidapi.com/July_01_2023',
    params: {offset: '0', limit: '15'},
    headers: {
      'X-RapidAPI-Key': process.env.UFC_API_KEY,
      'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
    }
  };

  const optionsJuly8 = {
    method: 'GET',
    url: 'https://mma-stats.p.rapidapi.com/July_08_2023',
    params: {offset: '0', limit: '15'},
    headers: {
      'X-RapidAPI-Key': process.env.UFC_API_KEY,
      'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
    }
  };

  
    const response1 = await axios.request(options1);
    const response = await axios.request(options);
    const dernHillResponse = await axios.request(dernHillOptions);
    const responseMay20 = await axios.request(optionsMay20);
    const responseJune3 = await axios.request(optionsJune3);
    const responseJune10 = await axios.request(optionsJune10);
    const responseJune17 = await axios.request(optionsJune17);
    const responseJune24 = await axios.request(optionsJune24);
    const responseJuly1 = await axios.request(optionsJuly1);
    const responseJuly8 = await axios.request(optionsJuly8);
    console.log(responseJuly8.data)
  
    const f1 = response.data[0].matchup[0]
    const f2 = response.data[0].matchup[1]
    const f3 = response.data[1].matchup[0] //Levy
    const f4 = response.data[1].matchup[1]
    const f5 = response.data[2].matchup[0]
    const f6 = response.data[2].matchup[1]
    const f7 = response.data[3].matchup[0]
    const f8 = response.data[3].matchup[1]
    const f9 = response.data[4].matchup[0]
    const f10 = response.data[4].matchup[1]
    const f11 = response.data[5].matchup[0]
    const f12 = response.data[5].matchup[1]
    const f13 = response.data[6].matchup[0]
    const f14 = response.data[6].matchup[1]
    const f15 = response.data[7].matchup[0]
    const f16 = response.data[7].matchup[1]
    const f17 = response.data[8].matchup[0]
    const f18 = response.data[8].matchup[1]
    const f19 = response.data[9].matchup[0]
    const f20 = response.data[9].matchup[1]
    const f21 = response.data[10].matchup[0]
    const f22 = response.data[10].matchup[1]
    const f23 = response.data[11].matchup[0]
    const f24 = response.data[11].matchup[1]
    const f25 = responseMay20.data[0].matchup[0] //Mackenzie Dern
    const f26 = responseMay20.data[0].matchup[1] //Angela Hill
    const f27 = responseMay20.data[1].matchup[0] //Edmen Shahbazyan
    const f28 = responseMay20.data[1].matchup[1] //Anthony Hernandez
    const f29 = responseMay20.data[2].matchup[0] //Emily Ducote
    const f30 = responseMay20.data[2].matchup[1]//Loopy Godinez
    const f31 = responseMay20.data[3].matchup[0]//Andre Fialho
    const f32 = responseMay20.data[3].matchup[1]//Joaquin Buckley
    const f33 = responseMay20.data[4].matchup[0]//Diego Ferreira
    const f34 = responseMay20.data[4].matchup[1]//Michael Johnson
    const f35 = responseMay20.data[5].matchup[0]//Maheshate
    const f36 = responseMay20.data[5].matchup[1]//Viacheslav Borshchev
    const f37 = responseMay20.data[6].matchup[0]//Karolina Kowalkiewicz
    const f38 = responseMay20.data[6].matchup[1]//Vanessa Demopoulos
    const f39 = responseMay20.data[7].matchup[0]//Orion Cosce
    const f40 = responseMay20.data[7].matchup[1]//Gilbert Urbina
    const f41 = responseMay20.data[8].matchup[0]//Ilir Latifi
    const f42 = responseMay20.data[8].matchup[1]//Rodrigo Nascimento
    const f43 = responseMay20.data[9].matchup[0]//Chase Hooper
    const f44 = responseMay20.data[9].matchup[1]//Nick Fiore
    const f45 = responseMay20.data[10].matchup[0]//Natalia Silva
    const f46 = responseMay20.data[10].matchup[1]//Victoria Leonardo
    const f47 = responseMay20.data[11].matchup[0]//Takashi Sato
    const f48 = responseMay20.data[11].matchup[1]//Themba Gorimbo
    const f49 = responseJune3.data[0].matchup[0] //Kai Kara-France
    const f50 = responseJune3.data[0].matchup[1] //Amir Albazi
    const f51 = responseJune3.data[1].matchup[0] //Alex Caceres
    const f52 = responseJune3.data[1].matchup[1] //Daniel Pineda
    const f53 = responseJune3.data[2].matchup[0] //Jim Miller
    const f54 = responseJune3.data[2].matchup[1]//Jared Gordon
    const f55 = responseJune3.data[3].matchup[0]//Tim Elliott
    const f56 = responseJune3.data[3].matchup[1]//Victor Altamirano
    const f57 = responseJune3.data[4].matchup[0]//Karine Silva
    const f58 = responseJune3.data[4].matchup[1]//Ketlen Vieira
    const f59 = responseJune3.data[5].matchup[0]//Jamie Mullarkey
    const f60 = responseJune3.data[5].matchup[1]//Guram Kutateladze
    const f61 = responseJune3.data[6].matchup[0]//Abubakar Nurmagomedov
    const f62 = responseJune3.data[6].matchup[1]//Elizeu Zaleski dos Santos
    const f63 = responseJune3.data[7].matchup[0]//John Castaneda
    const f64 = responseJune3.data[7].matchup[1]//Mateus Mendonca
    const f65 = responseJune3.data[8].matchup[0]//Andrei Arlovski
    const f66 = responseJune3.data[8].matchup[1]//Don'Tale Mayes
    const f67 = responseJune3.data[9].matchup[0]//Daniel Santos
    const f68 = responseJune3.data[9].matchup[1]//Johnny Munoz
    const f69 = responseJune3.data[10].matchup[0]//Elise Reed
    const f70 = responseJune3.data[10].matchup[1]//Jinh Yu Frey
    const f71 = responseJune3.data[11].matchup[0]//Da'Mon Blackshear
    const f72 = responseJune3.data[11].matchup[1]//Luan Lacerda
    const f73 = responseJune3.data[12].matchup[0]//Philipe Lins
    const f74 = responseJune3.data[12].matchup[1]//Maxim Grishin
    const f75 = responseJune10.data[0].matchup[0] //Amanda Nunes
    const f76 = responseJune10.data[0].matchup[1] //Irene Aldana
    const f77 = responseJune10.data[1].matchup[0] //Charles Oliveira
    const f78 = responseJune10.data[1].matchup[1] //Beneil Dariush
    const f79 = responseJune10.data[2].matchup[0] //Mike Malott
    const f80 = responseJune10.data[2].matchup[1]//Adam Fugitt
    const f81 = responseJune10.data[3].matchup[0]//Dan Ige
    const f82 = responseJune10.data[3].matchup[1]//Nate Landwehr
    const f83 = responseJune10.data[4].matchup[0]//Marc-Andre Barriault
    const f84 = responseJune10.data[4].matchup[1]//Eryk Anders
    const f85 = responseJune10.data[5].matchup[0]//Nassourdine Imavov
    const f86 = responseJune10.data[5].matchup[1]//Chris Curtis
    const f87 = responseJune10.data[6].matchup[0]//Miranda Maverick
    const f88 = responseJune10.data[6].matchup[1]//Jasmine Jasudavicius
    const f89 = responseJune10.data[7].matchup[0]//Aiemann Zahabi
    const f90 = responseJune10.data[7].matchup[1]//Aoriqileng
    const f91 = responseJune10.data[8].matchup[0]//Kyle Nelson
    const f92 = responseJune10.data[8].matchup[1]//Blake Bilder
    const f93 = responseJune10.data[9].matchup[0]//David Dvorak
    const f94 = responseJune10.data[9].matchup[1]//Stephen Erceg
    const f95 = responseJune10.data[10].matchup[0]//Diana Belbita
    const f96 = responseJune10.data[10].matchup[1]//Maria Oliveira
    // const f97 = responseJune17.data[0].matchup[0] //Marvin Vettori
    // const f98 = responseJune17.data[0].matchup[1] //Jared Cannonier
    // const f99 = responseJune17.data[1].matchup[0] //Arman Tsarukyan
    // const f100 = responseJune17.data[1].matchup[1] //Joaquim Silva
    // const f101 = responseJune17.data[2].matchup[0] //Armen Petrosyan
    // const f102 = responseJune17.data[2].matchup[1]//Christian Duncan
    // const f103 = responseJune17.data[3].matchup[0]//Pat Sabatini
    // const f104 = responseJune17.data[3].matchup[1]//Lucas Almeida
    // const f105 = responseJune17.data[4].matchup[0]//Manuel Torres
    // const f106 = responseJune17.data[4].matchup[1]//Nikolas Motta
    // const f107 = responseJune17.data[5].matchup[0]//Nicolas Dalby
    // const f108 = responseJune17.data[5].matchup[1]//Muslim Salikhov
    // const f109 = responseJune17.data[6].matchup[0]//Raoni Barcelos
    // const f110 = responseJune17.data[6].matchup[1]//Miles Johns
    // const f111 = responseJune17.data[7].matchup[0]//Jimmy Flick
    // const f112 = responseJune17.data[7].matchup[1]//Alessandro Costa
    // const f113 = responseJune17.data[8].matchup[0]//Kyung Ho Kang
    // const f114 = responseJune17.data[8].matchup[1]//Cristian Quinonez
    // const f115 = responseJune17.data[9].matchup[0]//Carlos Hernandez
    // const f116 = responseJune17.data[9].matchup[1]//Denys Bondar
    // const f117 = responseJune17.data[10].matchup[0]//Zhalgas Zhumagulov
    // const f118 = responseJune17.data[10].matchup[1]//Felipe Bunes
    // const f119 = responseJune17.data[11].matchup[0]//Tereza Bleda
    // const f120 = responseJune17.data[11].matchup[1]//Gabriella Fernandes
    // const f121 = responseJune17.data[12].matchup[0]//Dan Argueta
    // const f122 = responseJune17.data[12].matchup[1]//Ronnie Lawrence
    // const f123 = responseJune17.data[13].matchup[0]//Zac Pauga
    // const f124 = responseJune17.data[13].matchup[1]//Modestas Bukauskas
    const f125 = responseJune24.data[0].matchup[0] //Josh Emmett
    const f126 = responseJune24.data[0].matchup[1] //Ilia Topuria
    const f127 = responseJune24.data[1].matchup[0] //Amanda Ribas
    const f128 = responseJune24.data[1].matchup[1] //Maycee Barber
    const f129 = responseJune24.data[2].matchup[0] //Cody Brundage
    const f130 = responseJune24.data[2].matchup[1]//Sedriques Dumas
    const f131 = responseJune24.data[3].matchup[0]//David Onama
    const f132 = responseJune24.data[3].matchup[1]//Gabriel Santos
    const f133 = responseJune24.data[4].matchup[0]//Brendan Allen
    const f134 = responseJune24.data[4].matchup[1]//Bruno Silva
    const f135 = responseJune24.data[5].matchup[0]//Neil Magny
    const f136 = responseJune24.data[5].matchup[1]//Phil Rowe
    const f137 = responseJune24.data[6].matchup[0]//Zhalgas Zhumagulov
    const f138 = responseJune24.data[6].matchup[1]//Joshua Van
    const f139 = responseJune24.data[7].matchup[0]//Austen Lane
    const f140 = responseJune24.data[7].matchup[1]//Justin Tafa
    const f141 = responseJune24.data[8].matchup[0]//Randy Brown
    const f142 = responseJune24.data[8].matchup[1]//Wellington Turman
    const f143 = responseJune24.data[9].matchup[0]//Mateusz Rebecki
    const f144 = responseJune24.data[9].matchup[1]//Loik Radzhabov
    const f145 = responseJune24.data[10].matchup[0]//Tabatha Ricci
    const f146 = responseJune24.data[10].matchup[1]//Gillian Robertson
    const f147 = responseJune24.data[11].matchup[0]//Trevor Peek
    const f148 = responseJune24.data[11].matchup[1]//Chepe Mariscal
    const f149 = responseJune24.data[12].matchup[0]//Jamall Emmers
    const f150 = responseJune24.data[12].matchup[1]//Jack Jenkins
    const f151 = responseJune24.data[13].matchup[0]//Tatsuro Taira
    const f152 = responseJune24.data[13].matchup[1]//Kleydson Rodrigues
    const f153 = responseJuly1.data[0].matchup[0] //Sean Strickland
    const f154 = responseJuly1.data[0].matchup[1] //Abus Magomedov
    const f155 = responseJuly1.data[1].matchup[0] //Damir Ismagulov
    const f156 = responseJuly1.data[1].matchup[1] //Grant Dawson
    const f157 = responseJuly1.data[2].matchup[0] //Max Griffin
    const f158 = responseJuly1.data[2].matchup[1]//Michael Morales
    const f159 = responseJuly1.data[3].matchup[0]//Ariane Lipski
    const f160 = responseJuly1.data[3].matchup[1]//Melissa Gatto
    const f161 = responseJuly1.data[4].matchup[0]//Ismael Bonfim
    const f162 = responseJuly1.data[4].matchup[1]//Benoit Saint Denis
    const f163 = responseJuly1.data[5].matchup[0]//Abdul Razak Alhassan
    const f164 = responseJuly1.data[5].matchup[1]//Brunno Ferreira
    const f165 = responseJuly1.data[6].matchup[0]//Kevin Lee
    const f166 = responseJuly1.data[6].matchup[1]//Rinat Fakhretdinov
    const f167 = responseJuly1.data[7].matchup[0]//Yana Santos
    const f168 = responseJuly1.data[7].matchup[1]//Macy Chiasson
    const f169 = responseJuly1.data[8].matchup[0]//Ivana Petrovic
    const f170 = responseJuly1.data[8].matchup[1]//Luana Carolina
    const f171 = responseJuly1.data[9].matchup[0]//Alexandr Romanov
    const f172 = responseJuly1.data[9].matchup[1]//Blagoy Ivanov
    const f173 = responseJuly1.data[10].matchup[0]//Guram Kutateladze
    const f174 = responseJuly1.data[10].matchup[1]//Elves Brener
    const f175 = responseJuly8.data[0].matchup[0] //Volk
    const f176 = responseJuly8.data[0].matchup[1] //Yair Rodriguez
    const f177 = responseJuly8.data[1].matchup[0] //Brandon Moreno
    const f178 = responseJuly8.data[1].matchup[1] //Alexandre Pantoja
    const f179 = responseJuly8.data[2].matchup[0] //Robert Whittaker
    const f180 = responseJuly8.data[2].matchup[1]//Dricus Du Plessis
    const f181 = responseJuly8.data[3].matchup[0]//Jalin Turner
    const f182 = responseJuly8.data[3].matchup[1]//Dan Hooker
    const f183 = responseJuly8.data[4].matchup[0]//Bo Nickal
    const f184 = responseJuly8.data[4].matchup[1]//Tresean Gore
    const f185 = responseJuly8.data[5].matchup[0]//Robbie Lawler
    const f186 = responseJuly8.data[5].matchup[1]//Niko Price
    const f187 = responseJuly8.data[6].matchup[0]//Sean Brady
    const f188 = responseJuly8.data[6].matchup[1]//Jack Della Maddalena
    const f189 = responseJuly8.data[7].matchup[0]//Yazmin Jauregui
    const f190 = responseJuly8.data[7].matchup[1]//Denise Gomes
    const f191 = responseJuly8.data[8].matchup[0]//Jimmy Crute
    const f192 = responseJuly8.data[8].matchup[1]//Alonzo Menifield
    const f193 = responseJuly8.data[9].matchup[0]//Vitor Petrino
    const f194 = responseJuly8.data[9].matchup[1]//Marcin Prachnio
    const f195 = responseJuly8.data[10].matchup[0]//Cameron Saaiman
    const f196 = responseJuly8.data[10].matchup[1]//Terrence Mitchell
    const f197 = responseJuly8.data[11].matchup[0]//Shannon Ross
    const f198 = responseJuly8.data[11].matchup[1]//Jesus Aguilar
    const f199 = responseJuly8.data[12].matchup[0]//Kamuela Kirk
    const f200 = responseJuly8.data[12].matchup[1]//Esteban Ribovics

    // const f201 = responseJuly8.data[13].matchup[0]//Tatsuro Taira
    // const f202 = responseJuly8.data[13].matchup[1]//Kleydson Rodrigues
    // const f203 = responseJuly8.data[14].matchup[0]//Tatsuro Taira
    // const f204 = responseJuly8.data[14].matchup[1]//Kleydson Rodrigues
    

   

  const angelaHill = dernHillResponse.data.Fights[1].Fighters[0] //sr:competitor:542071
  //   const angelaHillID = 'sr:competitor:542071'
  //   const angelaHillRadarOptions = {
  //     method: 'GET',
  //     url: `http://api.sportradar.us/mma/trial/v2/en/competitors/sr:competitor:542071/summaries.json?api_key=${process.env.SPORT_RADAR_API_KEY}`
  //   }
  //   const angelaHillRadarResponse = await axios.request(angelaHillRadarOptions);
  //   //console.log(angelaHillRadarResponse.data['summaries'][0]['sport_event']['statistics'])
  //   //console.log(angelaHillRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][0]['statistics'])
  //   const angelaHillLastFightSS = angelaHillRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['significant_strikes']
  //   const angelaHillLastFightTD = angelaHillRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['takedowns']
  //   const angelaHillLastFightTDD = angelaHillRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][0]['statistics']['takedowns_attempted'] - angelaHillRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][0]['statistics']['takedowns']
  //   const angelaHillLastFightKD = angelaHillRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['knockdowns']
  //   const angelaHillLastFightSA = angelaHillRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['submission_attempts']
  //   const angelaHillLastFightFS = (angelaHillLastFightSS * .6 + angelaHillLastFightTD * 6 + angelaHillLastFightTDD * 3 + angelaHillLastFightKD * 12 + angelaHillLastFightSA * 3)
  //  // console.log(angelaHillLastFightFS)

  const mackenzieDern = dernHillResponse.data.Fights[1].Fighters[1] //sr:competitor:399233

   
    const anthonyHernandez = dernHillResponse.data.Fights[2].Fighters[0] //


     const edmenShahbazyan = dernHillResponse.data.Fights[2].Fighters[1] //sr:competitor:462119


   // console.log(dernHillResponse.data.Fights[2].Fighters[0], edmenShahbazyan['MoneyLine'])
    const emilyDucote = dernHillResponse.data.Fights[4].Fighters[0] //sr:competitor:303206
    const loopyGodinez = dernHillResponse.data.Fights[4].Fighters[1] //sr:competitor:786758
    const andreFialho = dernHillResponse.data.Fights[5].Fighters[0] //sr:competitor:257527
    const joaquinBuckley = dernHillResponse.data.Fights[5].Fighters[1] //sr:competitor:430935
    const michaelJohnson = dernHillResponse.data.Fights[6].Fighters[0] //sr:competitor:237654
    const diegoFerreira = dernHillResponse.data.Fights[6].Fighters[1] //sr:competitor:413417
    const viacheslavBorshchev = dernHillResponse.data.Fights[7].Fighters[0] //sr:competitor:878383
    const mahashate = dernHillResponse.data.Fights[7].Fighters[1] //sr:competitor:847506
    const karolinaKowalkiewicz = dernHillResponse.data.Fights[8].Fighters[0] //sr:competitor:237726
    const vanessaDemopoulos = dernHillResponse.data.Fights[8].Fighters[1] //sr:competitor:733467
    const gilbertUrbina = dernHillResponse.data.Fights[9].Fighters[0] //sr:competitor:828866
    const orionCosce = dernHillResponse.data.Fights[9].Fighters[1] //sr:competitor:734247
    const ilirLatifi = dernHillResponse.data.Fights[10].Fighters[0] //sr:competitor:246027
    const rodrigoNascimento = dernHillResponse.data.Fights[10].Fighters[1] //sr:competitor:570415
    const chaseHooper = dernHillResponse.data.Fights[11].Fighters[0] //sr:competitor:463619
    const nickFiore = dernHillResponse.data.Fights[11].Fighters[1] //sr:competitor:511380
    const nataliaSilva = dernHillResponse.data.Fights[12].Fighters[0] //sr:competitor:890667
    const victoriaLeonardo = dernHillResponse.data.Fights[12].Fighters[1] // sr:competitor:497596
    const clayCarpenter = dernHillResponse.data.Fights[13].Fighters[0] //sr:competitor:909469
    const stephenErceg = dernHillResponse.data.Fights[13].Fighters[1] //sr:competitor:909471
    const takashiSato = dernHillResponse.data.Fights[14].Fighters[0] //sr:competitor:564642
    const thembaGorimbo = dernHillResponse.data.Fights[14].Fighters[1] //sr:competitor:563388
    // console.log(dernHillResponse.data.Fights[0].Fighters[0]['Moneyline'])
    console.log(mackenzieDern['Moneyline'])


  const [moe, lucy, larry, ethyl, fighter1, fighter2, fighter3, fighter4,fighter5, fighter6,fighter7, fighter8,fighter9, fighter10,
    fighter11, fighter12, fighter13, fighter14,fighter15, fighter16,fighter17, fighter18,fighter19, fighter20,fighter21,fighter22,fighter23,fighter24,fighter25, fighter26,fighter27, fighter28,fighter29, fighter30,
    fighter31, fighter32, fighter33, fighter34,fighter35, fighter36,fighter37, fighter38,fighter39, fighter40,fighter41,fighter42,fighter43,fighter44] = await Promise.all([
    User.create({ username: 'moe', password: '123'}),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
    
    Fighter.create({
      //Jarzinho Rosentstruik
      name: response.data[0].matchup[0],
      defense: response.data[0].tale_of_the_tape.Defense[f1],
      reach: response.data[0].tale_of_the_tape.Reach[f1],
      strikesAbsorbedPerMin: response.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f1],
      strikesLandedPerMin: response.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f1],
      avgFightTime: response.data[0].tale_of_the_tape['Average Fight Time'][f1],
      avgSubPer15: response.data[0].tale_of_the_tape['Submission Average/15 min.'][f1],
      takedownAcc: response.data[0].tale_of_the_tape['Takedown Accuracy'][f1],
      takedownDef: response.data[0].tale_of_the_tape['Takedown Defense'][f1],
      avgTakedownsPer15: response.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f1],
      dob: response.data[0].tale_of_the_tape.DOB[f1],
      height: response.data[0].tale_of_the_tape.Height[f1],
      id: 1,
      matchupId: 1,
      record: response.data[0].tale_of_the_tape['Wins/Losses/Draws'][f1], 
      moneyLine: response1.data.Fights[0].Fighters[0]['Moneyline']
    }),
    Fighter.create({
      //Jailton Almeida
        name: response.data[0].matchup[1],
        defense: response.data[0].tale_of_the_tape.Defense[f2],
        reach: response.data[0].tale_of_the_tape.Reach[f2],
        strikesAbsorbedPerMin: response.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f2],
        strikesLandedPerMin: response.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f2],
        avgFightTime: response.data[0].tale_of_the_tape['Average Fight Time'][f2],
        avgSubPer15: response.data[0].tale_of_the_tape['Submission Average/15 min.'][f2],
        takedownAcc: response.data[0].tale_of_the_tape['Takedown Accuracy'][f2],
        takedownDef: response.data[0].tale_of_the_tape['Takedown Defense'][f2],
        avgTakedownsPer15: response.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f2],
        dob: response.data[0].tale_of_the_tape.DOB[f2],
        height: response.data[0].tale_of_the_tape.Height[f2],
        id: 2,
        matchupId: 1,                        
        record: response.data[0].tale_of_the_tape['Wins/Losses/Draws'][f2],
        moneyLine: response1.data.Fights[0].Fighters[1]['Moneyline']
    }),
      Fighter.create({
        //natan Levy
        name: response.data[1].matchup[0],
        defense: response.data[1].tale_of_the_tape.Defense[f3],
        reach: response.data[1].tale_of_the_tape.Reach[f3],
        strikesAbsorbedPerMin: response.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f3],
        strikesLandedPerMin: response.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f3],
        avgFightTime: response.data[1].tale_of_the_tape['Average Fight Time'][f3],
        avgSubPer15: response.data[1].tale_of_the_tape['Submission Average/15 min.'][f3],
        takedownAcc: response.data[1].tale_of_the_tape['Takedown Accuracy'][f3],
        takedownDef: response.data[1].tale_of_the_tape['Takedown Defense'][f3],
        avgTakedownsPer15: response.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f3],
        dob: response.data[1].tale_of_the_tape.DOB[f3],
        height: response.data[1].tale_of_the_tape.Height[f3],
        id: 23,
        matchupId: 12,
        record: response.data[1].tale_of_the_tape['Wins/Losses/Draws'][f3],
             
      }),
      Fighter.create({
        //Pete Rodriguez
          name: response.data[1].matchup[1],
          defense: response.data[1].tale_of_the_tape.Defense[f4],
          reach: response.data[1].tale_of_the_tape.Reach[f4],
          strikesAbsorbedPerMin: response.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f4],
          strikesLandedPerMin: response.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f4],
          avgFightTime: response.data[1].tale_of_the_tape['Average Fight Time'][f4],
          avgSubPer15: response.data[1].tale_of_the_tape['Submission Average/15 min.'][f4],
          takedownAcc: response.data[1].tale_of_the_tape['Takedown Accuracy'][f4],
          takedownDef: response.data[1].tale_of_the_tape['Takedown Defense'][f4],
          avgTakedownsPer15: response.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f4],
          dob: response.data[1].tale_of_the_tape.DOB[f4],
          height: response.data[1].tale_of_the_tape.Height[f4],
          id: 24,
          matchupId: 12,
          record: response.data[1].tale_of_the_tape['Wins/Losses/Draws'][f4]        
      }),
        Fighter.create({
          //carlos Ulberg
          name: response.data[2].matchup[0],
          defense: response.data[2].tale_of_the_tape.Defense[f5],
          reach: response.data[2].tale_of_the_tape.Reach[f5],
          strikesAbsorbedPerMin: response.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f5],
          strikesLandedPerMin: response.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f5],
          avgFightTime: response.data[2].tale_of_the_tape['Average Fight Time'][f5],
          avgSubPer15: response.data[2].tale_of_the_tape['Submission Average/15 min.'][f5],
          takedownAcc: response.data[2].tale_of_the_tape['Takedown Accuracy'][f5],
          takedownDef: response.data[2].tale_of_the_tape['Takedown Defense'][f5],
          avgTakedownsPer15: response.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f5],
          dob: response.data[2].tale_of_the_tape.DOB[f5],
          height: response.data[2].tale_of_the_tape.Height[f5],
          id: 7,
          matchupId: 4,
          record: response.data[2].tale_of_the_tape['Wins/Losses/Draws'][f5],
          moneyLine: response1.data.Fights[3].Fighters[0]['Moneyline']
        }),
        Fighter.create({
          //ihor potieria
            name: response.data[2].matchup[1],
            defense: response.data[2].tale_of_the_tape.Defense[f6],
            reach: response.data[2].tale_of_the_tape.Reach[f6],
            strikesAbsorbedPerMin: response.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f6],
            strikesLandedPerMin: response.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f6],
            avgFightTime: response.data[2].tale_of_the_tape['Average Fight Time'][f6],
            avgSubPer15: response.data[2].tale_of_the_tape['Submission Average/15 min.'][f6],
            takedownAcc: response.data[2].tale_of_the_tape['Takedown Accuracy'][f6],
            takedownDef: response.data[2].tale_of_the_tape['Takedown Defense'][f6],
            avgTakedownsPer15: response.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f6],
            dob: response.data[2].tale_of_the_tape.DOB[f6],
            height: response.data[2].tale_of_the_tape.Height[f6],
            id: 8,
            matchupId: 4,
            record: response.data[2].tale_of_the_tape['Wins/Losses/Draws'][f6],
            moneyLine: response1.data.Fights[3].Fighters[1]['Moneyline']     
        }),
          Fighter.create({
            //Karl Williams
            name: response.data[3].matchup[0],
            defense: response.data[3].tale_of_the_tape.Defense[f7],
            reach: response.data[3].tale_of_the_tape.Reach[f7],
            strikesAbsorbedPerMin: response.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f7],
            strikesLandedPerMin: response.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f7],
            avgFightTime: response.data[3].tale_of_the_tape['Average Fight Time'][f7],
            avgSubPer15: response.data[3].tale_of_the_tape['Submission Average/15 min.'][f7],
            takedownAcc: response.data[3].tale_of_the_tape['Takedown Accuracy'][f7],
            takedownDef: response.data[3].tale_of_the_tape['Takedown Defense'][f7],
            avgTakedownsPer15: response.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f7],
            dob: response.data[3].tale_of_the_tape.DOB[f7],
            height: response.data[3].tale_of_the_tape.Height[f7],
            id: 13,
            matchupId: 7,
            record: response.data[3].tale_of_the_tape['Wins/Losses/Draws'][f7],
            moneyLine: response1.data.Fights[7].Fighters[0]['Moneyline']         
          }),
          Fighter.create({
            //Chase sherman
              name: response.data[3].matchup[1],
              defense: response.data[3].tale_of_the_tape.Defense[f8],
              reach: response.data[3].tale_of_the_tape.Reach[f8],
              strikesAbsorbedPerMin: response.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f8],
              strikesLandedPerMin: response.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f8],
              avgFightTime: response.data[3].tale_of_the_tape['Average Fight Time'][f8],
              avgSubPer15: response.data[3].tale_of_the_tape['Submission Average/15 min.'][f8],
              takedownAcc: response.data[3].tale_of_the_tape['Takedown Accuracy'][f8],
              takedownDef: response.data[3].tale_of_the_tape['Takedown Defense'][f8],
              avgTakedownsPer15: response.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f8],
              dob: response.data[3].tale_of_the_tape.DOB[f8],
              height: response.data[3].tale_of_the_tape.Height[f8],
              id: 14,
              matchupId: 7,
              record: response.data[3].tale_of_the_tape['Wins/Losses/Draws'][f8],
              moneyLine: response1.data.Fights[7].Fighters[1]['Moneyline']    
          }),
            Fighter.create({
              //cody stamann
              name: response.data[4].matchup[0],
              defense: response.data[4].tale_of_the_tape.Defense[f9],
              reach: response.data[4].tale_of_the_tape.Reach[f9],
              strikesAbsorbedPerMin: response.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f9],
              strikesLandedPerMin: response.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f9],
              avgFightTime: response.data[4].tale_of_the_tape['Average Fight Time'][f9],
              avgSubPer15: response.data[4].tale_of_the_tape['Submission Average/15 min.'][f9],
              takedownAcc: response.data[4].tale_of_the_tape['Takedown Accuracy'][f9],
              takedownDef: response.data[4].tale_of_the_tape['Takedown Defense'][f9],
              avgTakedownsPer15: response.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f9],
              dob: response.data[4].tale_of_the_tape.DOB[f9],
              height: response.data[4].tale_of_the_tape.Height[f9],
              id: 15,
              matchupId: 8,
              record: response.data[4].tale_of_the_tape['Wins/Losses/Draws'][f9],
              moneyLine: response1.data.Fights[8].Fighters[1]['Moneyline']   
            }),
            Fighter.create({
              //douglas silva de andrade
                name: response.data[4].matchup[1],
                defense: response.data[4].tale_of_the_tape.Defense[f10],
                reach: response.data[4].tale_of_the_tape.Reach[f10],
                strikesAbsorbedPerMin: response.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f10],
                strikesLandedPerMin: response.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f10],
                avgFightTime: response.data[4].tale_of_the_tape['Average Fight Time'][f10],
                avgSubPer15: response.data[4].tale_of_the_tape['Submission Average/15 min.'][f10],
                takedownAcc: response.data[4].tale_of_the_tape['Takedown Accuracy'][f10],
                takedownDef: response.data[4].tale_of_the_tape['Takedown Defense'][f10],
                avgTakedownsPer15: response.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f10],
                dob: response.data[4].tale_of_the_tape.DOB[f10],
                height: response.data[4].tale_of_the_tape.Height[f10],
                id: 16,
                matchupId: 8,
                record: response.data[4].tale_of_the_tape['Wins/Losses/Draws'][f10],
                moneyLine: response1.data.Fights[8].Fighters[0]['Moneyline']             
            }),
              Fighter.create({
                //Matt Brown
                name: response.data[5].matchup[0],
                defense: response.data[5].tale_of_the_tape.Defense[f11],
                reach: response.data[5].tale_of_the_tape.Reach[f11],
                strikesAbsorbedPerMin: response.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f11],
                strikesLandedPerMin: response.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f11],
                avgFightTime: response.data[5].tale_of_the_tape['Average Fight Time'][f11],
                avgSubPer15: response.data[5].tale_of_the_tape['Submission Average/15 min.'][f11],
                takedownAcc: response.data[5].tale_of_the_tape['Takedown Accuracy'][f11],
                takedownDef: response.data[5].tale_of_the_tape['Takedown Defense'][f11],
                avgTakedownsPer15: response.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f11],
                dob: response.data[5].tale_of_the_tape.DOB[f11],
                height: response.data[5].tale_of_the_tape.Height[f11],
                id: 11,
                matchupId: 6,
                record: response.data[5].tale_of_the_tape['Wins/Losses/Draws'][f11],
                moneyLine: response1.data.Fights[6].Fighters[1]['Moneyline']              
              }),
              Fighter.create({
                //Court Mcgee
                  name: response.data[5].matchup[1],
                  defense: response.data[5].tale_of_the_tape.Defense[f12],
                  reach: response.data[5].tale_of_the_tape.Reach[f12],
                  strikesAbsorbedPerMin: response.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f12],
                  strikesLandedPerMin: response.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f12],
                  avgFightTime: response.data[5].tale_of_the_tape['Average Fight Time'][f12],
                  avgSubPer15: response.data[5].tale_of_the_tape['Submission Average/15 min.'][f12],
                  takedownAcc: response.data[5].tale_of_the_tape['Takedown Accuracy'][f12],
                  takedownDef: response.data[5].tale_of_the_tape['Takedown Defense'][f12],
                  avgTakedownsPer15: response.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f12],
                  dob: response.data[5].tale_of_the_tape.DOB[f12],
                  height: response.data[5].tale_of_the_tape.Height[f12],
                  id: 12,
                  matchupId: 6,
                  record: response.data[5].tale_of_the_tape['Wins/Losses/Draws'][f12],
                  moneyLine: response1.data.Fights[6].Fighters[0]['Moneyline']
              }),
                Fighter.create({
                  //Ji Yeon Kim
                  name: response.data[6].matchup[0],
                  defense: response.data[6].tale_of_the_tape.Defense[f13],
                  reach: response.data[6].tale_of_the_tape.Reach[f13],
                  strikesAbsorbedPerMin: response.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f13],
                  strikesLandedPerMin: response.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f13],
                  avgFightTime: response.data[6].tale_of_the_tape['Average Fight Time'][f13],
                  avgSubPer15: response.data[6].tale_of_the_tape['Submission Average/15 min.'][f13],
                  takedownAcc: response.data[6].tale_of_the_tape['Takedown Accuracy'][f13],
                  takedownDef: response.data[6].tale_of_the_tape['Takedown Defense'][f13],
                  avgTakedownsPer15: response.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f13],
                  dob: response.data[6].tale_of_the_tape.DOB[f13],
                  height: response.data[6].tale_of_the_tape.Height[f13],
                  id: 17,
                  matchupId: 9,
                  record: response.data[6].tale_of_the_tape['Wins/Losses/Draws'][f13],
                  moneyLine: response1.data.Fights[9].Fighters[0]['Moneyline']     
                }),
                Fighter.create({
                  //Mandy Bohm
                    name: response.data[6].matchup[1],
                    defense: response.data[6].tale_of_the_tape.Defense[f14],
                    reach: response.data[6].tale_of_the_tape.Reach[f14],
                    strikesAbsorbedPerMin: response.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f14],
                    strikesLandedPerMin: response.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f14],
                    avgFightTime: response.data[6].tale_of_the_tape['Average Fight Time'][f14],
                    avgSubPer15: response.data[6].tale_of_the_tape['Submission Average/15 min.'][f14],
                    takedownAcc: response.data[6].tale_of_the_tape['Takedown Accuracy'][f14],
                    takedownDef: response.data[6].tale_of_the_tape['Takedown Defense'][f14],
                    avgTakedownsPer15: response.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f14],
                    dob: response.data[6].tale_of_the_tape.DOB[f14],
                    height: response.data[6].tale_of_the_tape.Height[f14],
                    id: 18,
                    matchupId: 9,
                    record: response.data[6].tale_of_the_tape['Wins/Losses/Draws'][f14],
                    moneyLine: response1.data.Fights[9].Fighters[1]['Moneyline']       
                }),
                  Fighter.create({
                    //Bryan Battle
                    name: response.data[7].matchup[0],
                    defense: response.data[7].tale_of_the_tape.Defense[f15],
                    reach: response.data[7].tale_of_the_tape.Reach[f15],
                    strikesAbsorbedPerMin: response.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f15],
                    strikesLandedPerMin: response.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f15],
                    avgFightTime: response.data[7].tale_of_the_tape['Average Fight Time'][f15],
                    avgSubPer15: response.data[7].tale_of_the_tape['Submission Average/15 min.'][f15],
                    takedownAcc: response.data[7].tale_of_the_tape['Takedown Accuracy'][f15],
                    takedownDef: response.data[7].tale_of_the_tape['Takedown Defense'][f15],
                    avgTakedownsPer15: response.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f15],
                    dob: response.data[7].tale_of_the_tape.DOB[f15],
                    height: response.data[7].tale_of_the_tape.Height[f15],
                    id: 19,
                    matchupId: 10,
                    record: response.data[7].tale_of_the_tape['Wins/Losses/Draws'][f15],
                    moneyLine: response1.data.Fights[11].Fighters[1]['Moneyline']
                }),
                  Fighter.create({
                    //Gabe Green
                      name: response.data[7].matchup[1],
                      defense: response.data[7].tale_of_the_tape.Defense[f16],
                      reach: response.data[7].tale_of_the_tape.Reach[f16],
                      strikesAbsorbedPerMin: response.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f16],
                      strikesLandedPerMin: response.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f16],
                      avgFightTime: response.data[7].tale_of_the_tape['Average Fight Time'][f16],
                      avgSubPer15: response.data[7].tale_of_the_tape['Submission Average/15 min.'][f16],
                      takedownAcc: response.data[7].tale_of_the_tape['Takedown Accuracy'][f16],
                      takedownDef: response.data[7].tale_of_the_tape['Takedown Defense'][f16],
                      avgTakedownsPer15: response.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f16],
                      dob: response.data[7].tale_of_the_tape.DOB[f16],
                      height: response.data[7].tale_of_the_tape.Height[f16],
                      id: 20,
                      matchupId: 10,
                      record: response.data[7].tale_of_the_tape['Wins/Losses/Draws'][f16],
                      moneyLine: response1.data.Fights[11].Fighters[0]['Moneyline']
                  }),
                    Fighter.create({
                      //Jessica-Rose Clark
                      name: response.data[8].matchup[0],
                      defense: response.data[8].tale_of_the_tape.Defense[f17],
                      reach: response.data[8].tale_of_the_tape.Reach[f17],
                      strikesAbsorbedPerMin: response.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f17],
                      strikesLandedPerMin: response.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f17],
                      avgFightTime: response.data[8].tale_of_the_tape['Average Fight Time'][f17],
                      avgSubPer15: response.data[8].tale_of_the_tape['Submission Average/15 min.'][f17],
                      takedownAcc: response.data[8].tale_of_the_tape['Takedown Accuracy'][f17],
                      takedownDef: response.data[8].tale_of_the_tape['Takedown Defense'][f17],
                      avgTakedownsPer15: response.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f17],
                      dob: response.data[8].tale_of_the_tape.DOB[f17],
                      height: response.data[8].tale_of_the_tape.Height[f17],
                      id: 21,
                      matchupId: 11,
                      record: response.data[8].tale_of_the_tape['Wins/Losses/Draws'][f17],
                      moneyLine: response1.data.Fights[12].Fighters[0]['Moneyline']  
                    }),
                    Fighter.create({
                      //Tainara Lisboa
                        name: response.data[8].matchup[1],
                        defense: response.data[8].tale_of_the_tape.Defense[f18],
                        reach: response.data[8].tale_of_the_tape.Reach[f18],
                        strikesAbsorbedPerMin: response.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f18],
                        strikesLandedPerMin: response.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f18],
                        avgFightTime: response.data[8].tale_of_the_tape['Average Fight Time'][f18],
                        avgSubPer15: response.data[8].tale_of_the_tape['Submission Average/15 min.'][f18],
                        takedownAcc: response.data[8].tale_of_the_tape['Takedown Accuracy'][f18],
                        takedownDef: response.data[8].tale_of_the_tape['Takedown Defense'][f18],
                        avgTakedownsPer15: response.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f18],
                        dob: response.data[8].tale_of_the_tape.DOB[f18],
                        height: response.data[8].tale_of_the_tape.Height[f18],
                        id: 22,
                        matchupId: 11,
                        record: response.data[8].tale_of_the_tape['Wins/Losses/Draws'][f18],
                        moneyLine: response1.data.Fights[12].Fighters[1]['Moneyline'] 
                    }),
                      Fighter.create({
                        //Tim Means
                        name: response.data[9].matchup[0],
                        defense: response.data[9].tale_of_the_tape.Defense[f19],
                        reach: response.data[9].tale_of_the_tape.Reach[f19],
                        strikesAbsorbedPerMin: response.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f19],
                        strikesLandedPerMin: response.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f19],
                        avgFightTime: response.data[9].tale_of_the_tape['Average Fight Time'][f19],
                        avgSubPer15: response.data[9].tale_of_the_tape['Submission Average/15 min.'][f19],
                        takedownAcc: response.data[9].tale_of_the_tape['Takedown Accuracy'][f19],
                        takedownDef: response.data[9].tale_of_the_tape['Takedown Defense'][f19],
                        avgTakedownsPer15: response.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f19],
                        dob: response.data[9].tale_of_the_tape.DOB[f19],
                        height: response.data[9].tale_of_the_tape.Height[f19],
                        id: 9,
                        matchupId: 5,
                        record: response.data[9].tale_of_the_tape['Wins/Losses/Draws'][f19],
                        moneyLine: response1.data.Fights[5].Fighters[0]['Moneyline']
                      }),
                      Fighter.create({
                        //Alex Morono
                          name: response.data[9].matchup[1],
                          defense: response.data[9].tale_of_the_tape.Defense[f20],
                          reach: response.data[9].tale_of_the_tape.Reach[f20],
                          strikesAbsorbedPerMin: response.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f20],
                          strikesLandedPerMin: response.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f20],
                          avgFightTime: response.data[9].tale_of_the_tape['Average Fight Time'][f20],
                          avgSubPer15: response.data[9].tale_of_the_tape['Submission Average/15 min.'][f20],
                          takedownAcc: response.data[9].tale_of_the_tape['Takedown Accuracy'][f20],
                          takedownDef: response.data[9].tale_of_the_tape['Takedown Defense'][f20],
                          avgTakedownsPer15: response.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f20],
                          dob: response.data[9].tale_of_the_tape.DOB[f20],
                          height: response.data[9].tale_of_the_tape.Height[f20],
                          id: 10,
                          matchupId: 5,
                          record: response.data[9].tale_of_the_tape['Wins/Losses/Draws'][f20],
                          moneyLine: response1.data.Fights[5].Fighters[1]['Moneyline']
                        }),
                        Fighter.create({
                          //Daniel Rodriguez
                          name: response.data[10].matchup[0],
                          defense: response.data[10].tale_of_the_tape.Defense[f21],
                          reach: response.data[10].tale_of_the_tape.Reach[f21],
                          strikesAbsorbedPerMin: response.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f21],
                          strikesLandedPerMin: response.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f21],
                          avgFightTime: response.data[10].tale_of_the_tape['Average Fight Time'][f21],
                          avgSubPer15: response.data[10].tale_of_the_tape['Submission Average/15 min.'][f21],
                          takedownAcc: response.data[10].tale_of_the_tape['Takedown Accuracy'][f21],
                          takedownDef: response.data[10].tale_of_the_tape['Takedown Defense'][f21],
                          avgTakedownsPer15: response.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f21],
                          dob: response.data[10].tale_of_the_tape.DOB[f21],
                          height: response.data[10].tale_of_the_tape.Height[f21],
                          id: 5,
                          matchupId: 3,
                          record: response.data[10].tale_of_the_tape['Wins/Losses/Draws'][f21],
                          moneyLine: response1.data.Fights[2].Fighters[0]['Moneyline']
                        }),
                        Fighter.create({
                          //Ian Garry
                            name: response.data[10].matchup[1],
                            defense: response.data[10].tale_of_the_tape.Defense[f22],
                            reach: response.data[10].tale_of_the_tape.Reach[f22],
                            strikesAbsorbedPerMin: response.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f22],
                            strikesLandedPerMin: response.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f22],
                            avgFightTime: response.data[10].tale_of_the_tape['Average Fight Time'][f22],
                            avgSubPer15: response.data[10].tale_of_the_tape['Submission Average/15 min.'][f22],
                            takedownAcc: response.data[10].tale_of_the_tape['Takedown Accuracy'][f22],
                            takedownDef: response.data[10].tale_of_the_tape['Takedown Defense'][f22],
                            avgTakedownsPer15: response.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f22],
                            dob: response.data[10].tale_of_the_tape.DOB[f22],
                            height: response.data[10].tale_of_the_tape.Height[f22],
                            id: 6,
                            matchupId: 3,
                            record: response.data[10].tale_of_the_tape['Wins/Losses/Draws'][f22],
                            moneyLine: response1.data.Fights[2].Fighters[1]['Moneyline']
                        }),
                          Fighter.create({
                            //Anthony Smith
                            name: response.data[11].matchup[0],
                            defense: response.data[11].tale_of_the_tape.Defense[f23],
                            reach: response.data[11].tale_of_the_tape.Reach[f23],
                            strikesAbsorbedPerMin: response.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f23],
                            strikesLandedPerMin: response.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f23],
                            avgFightTime: response.data[11].tale_of_the_tape['Average Fight Time'][f23],
                            avgSubPer15: response.data[11].tale_of_the_tape['Submission Average/15 min.'][f23],
                            takedownAcc: response.data[11].tale_of_the_tape['Takedown Accuracy'][f23],
                            takedownDef: response.data[11].tale_of_the_tape['Takedown Defense'][f23],
                            avgTakedownsPer15: response.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f23],
                            dob: response.data[11].tale_of_the_tape.DOB[f23],
                            height: response.data[11].tale_of_the_tape.Height[f23],
                            id: 3,
                            matchupId: 2,
                            record: response.data[11].tale_of_the_tape['Wins/Losses/Draws'][f23],
                            moneyLine: response1.data.Fights[1].Fighters[0]['Moneyline']
                          }),
                          Fighter.create({
                           // Johnny Walker
                              name: response.data[11].matchup[1],
                              defense: response.data[11].tale_of_the_tape.Defense[f24],
                              reach: response.data[11].tale_of_the_tape.Reach[f24],
                              strikesAbsorbedPerMin: response.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f24],
                              strikesLandedPerMin: response.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f24],
                              avgFightTime: response.data[11].tale_of_the_tape['Average Fight Time'][f24],
                              avgSubPer15: response.data[11].tale_of_the_tape['Submission Average/15 min.'][f24],
                              takedownAcc: response.data[11].tale_of_the_tape['Takedown Accuracy'][f24],
                              takedownDef: response.data[11].tale_of_the_tape['Takedown Defense'][f24],
                              avgTakedownsPer15: response.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f24],
                              dob: response.data[11].tale_of_the_tape.DOB[f24],
                              height: response.data[11].tale_of_the_tape.Height[f24],
                              id: 4,
                              matchupId: 2,
                              record: response.data[11].tale_of_the_tape['Wins/Losses/Draws'][f24],
                              moneyLine: response1.data.Fights[1].Fighters[1]['Moneyline']
                            }),
                            Fighter.create({
                              //Mackenzie Dern
                              name: responseMay20.data[0].matchup[0],
                              defense: responseMay20.data[0].tale_of_the_tape.Defense[f25],
                              reach: responseMay20.data[0].tale_of_the_tape.Reach[f25],
                              strikesAbsorbedPerMin: responseMay20.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f25],
                              strikesLandedPerMin: responseMay20.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f25],
                              avgFightTime: responseMay20.data[0].tale_of_the_tape['Average Fight Time'][f25],
                              avgSubPer15: responseMay20.data[0].tale_of_the_tape['Submission Average/15 min.'][f25],
                              takedownAcc: responseMay20.data[0].tale_of_the_tape['Takedown Accuracy'][f25],
                              takedownDef: responseMay20.data[0].tale_of_the_tape['Takedown Defense'][f25],
                              avgTakedownsPer15: responseMay20.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f25],
                              dob: responseMay20.data[0].tale_of_the_tape.DOB[f25],
                              height: responseMay20.data[0].tale_of_the_tape.Height[f25],
                              id: 25,
                              matchupId: 13,
                              record: responseMay20.data[0].tale_of_the_tape['Wins/Losses/Draws'][f25], 
                              moneyLine: mackenzieDern['Moneyline']
                            }),
                            Fighter.create({
                              //Angela Hill
                                name: responseMay20.data[0].matchup[1],
                                defense: responseMay20.data[0].tale_of_the_tape.Defense[f26],
                                reach: responseMay20.data[0].tale_of_the_tape.Reach[f26],
                                strikesAbsorbedPerMin: responseMay20.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f26],
                                strikesLandedPerMin: responseMay20.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f26],
                                avgFightTime: responseMay20.data[0].tale_of_the_tape['Average Fight Time'][f26],
                                avgSubPer15: responseMay20.data[0].tale_of_the_tape['Submission Average/15 min.'][f26],
                                takedownAcc: responseMay20.data[0].tale_of_the_tape['Takedown Accuracy'][f26],
                                takedownDef: responseMay20.data[0].tale_of_the_tape['Takedown Defense'][f26],
                                avgTakedownsPer15: responseMay20.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f26],
                                dob: responseMay20.data[0].tale_of_the_tape.DOB[f26],
                                height: responseMay20.data[0].tale_of_the_tape.Height[f26],
                                id: 26,
                                matchupId: 13,                        
                                record: responseMay20.data[0].tale_of_the_tape['Wins/Losses/Draws'][f26],
                                moneyLine: angelaHill['Moneyline']
                            }),
                              Fighter.create({
                                //Edmen Shahbazyan
                                name: responseMay20.data[1].matchup[0],
                                defense: responseMay20.data[1].tale_of_the_tape.Defense[f27],
                                reach: responseMay20.data[1].tale_of_the_tape.Reach[f27],
                                strikesAbsorbedPerMin: responseMay20.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f27],
                                strikesLandedPerMin: responseMay20.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f27],
                                avgFightTime: responseMay20.data[1].tale_of_the_tape['Average Fight Time'][f27],
                                avgSubPer15: responseMay20.data[1].tale_of_the_tape['Submission Average/15 min.'][f27],
                                takedownAcc: responseMay20.data[1].tale_of_the_tape['Takedown Accuracy'][f27],
                                takedownDef: responseMay20.data[1].tale_of_the_tape['Takedown Defense'][f27],
                                avgTakedownsPer15: responseMay20.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f27],
                                dob: responseMay20.data[1].tale_of_the_tape.DOB[f27],
                                height: responseMay20.data[1].tale_of_the_tape.Height[f27],
                                id: 27,
                                matchupId: 14,
                                record: responseMay20.data[1].tale_of_the_tape['Wins/Losses/Draws'][f27],
                                moneyLine: edmenShahbazyan['MoneyLine']
                              }),
                              Fighter.create({
                                //Anthony Hernandez
                                  name: responseMay20.data[1].matchup[1],
                                  defense: responseMay20.data[1].tale_of_the_tape.Defense[f28],
                                  reach: responseMay20.data[1].tale_of_the_tape.Reach[f28],
                                  strikesAbsorbedPerMin: responseMay20.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f28],
                                  strikesLandedPerMin: responseMay20.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f28],
                                  avgFightTime: responseMay20.data[1].tale_of_the_tape['Average Fight Time'][f28],
                                  avgSubPer15: responseMay20.data[1].tale_of_the_tape['Submission Average/15 min.'][f28],
                                  takedownAcc: responseMay20.data[1].tale_of_the_tape['Takedown Accuracy'][f28],
                                  takedownDef: responseMay20.data[1].tale_of_the_tape['Takedown Defense'][f28],
                                  avgTakedownsPer15: responseMay20.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f28],
                                  dob: responseMay20.data[1].tale_of_the_tape.DOB[f28],
                                  height: responseMay20.data[1].tale_of_the_tape.Height[f28],
                                  id: 28,
                                  matchupId: 14,
                                  record: responseMay20.data[1].tale_of_the_tape['Wins/Losses/Draws'][f28],
                                  moneyLine: anthonyHernandez['MoneyLine']        
                              }),
                                Fighter.create({
                                  //Emily Ducote
                                  name: responseMay20.data[2].matchup[0],
                                  defense: responseMay20.data[2].tale_of_the_tape.Defense[f29],
                                  reach: responseMay20.data[2].tale_of_the_tape.Reach[f29],
                                  strikesAbsorbedPerMin: responseMay20.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f29],
                                  strikesLandedPerMin: responseMay20.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f29],
                                  avgFightTime: responseMay20.data[2].tale_of_the_tape['Average Fight Time'][f29],
                                  avgSubPer15: responseMay20.data[2].tale_of_the_tape['Submission Average/15 min.'][f29],
                                  takedownAcc: responseMay20.data[2].tale_of_the_tape['Takedown Accuracy'][f29],
                                  takedownDef: responseMay20.data[2].tale_of_the_tape['Takedown Defense'][f29],
                                  avgTakedownsPer15: responseMay20.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f29],
                                  dob: responseMay20.data[2].tale_of_the_tape.DOB[f29],
                                  height: responseMay20.data[2].tale_of_the_tape.Height[f29],
                                  id: 29,
                                  matchupId: 15,
                                  record: responseMay20.data[2].tale_of_the_tape['Wins/Losses/Draws'][f29],
                                  moneyLine: emilyDucote['Moneyline']
                                }),
                                Fighter.create({
                                  //Loopy Godinez
                                    name: responseMay20.data[2].matchup[1],
                                    defense: responseMay20.data[2].tale_of_the_tape.Defense[f30],
                                    reach: responseMay20.data[2].tale_of_the_tape.Reach[f30],
                                    strikesAbsorbedPerMin: responseMay20.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f30],
                                    strikesLandedPerMin: responseMay20.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f30],
                                    avgFightTime: responseMay20.data[2].tale_of_the_tape['Average Fight Time'][f30],
                                    avgSubPer15: responseMay20.data[2].tale_of_the_tape['Submission Average/15 min.'][f30],
                                    takedownAcc: responseMay20.data[2].tale_of_the_tape['Takedown Accuracy'][f30],
                                    takedownDef: responseMay20.data[2].tale_of_the_tape['Takedown Defense'][f30],
                                    avgTakedownsPer15: responseMay20.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f30],
                                    dob: responseMay20.data[2].tale_of_the_tape.DOB[f30],
                                    height: responseMay20.data[2].tale_of_the_tape.Height[f30],
                                    id: 30,
                                    matchupId: 15,
                                    record: responseMay20.data[2].tale_of_the_tape['Wins/Losses/Draws'][f30],
                                    moneyLine: loopyGodinez['Moneyline']     
                                }),
                                  Fighter.create({
                                    //Andre Fialho
                                    name: responseMay20.data[3].matchup[0],
                                    defense: responseMay20.data[3].tale_of_the_tape.Defense[f31],
                                    reach: responseMay20.data[3].tale_of_the_tape.Reach[f31],
                                    strikesAbsorbedPerMin: responseMay20.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f31],
                                    strikesLandedPerMin: responseMay20.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f31],
                                    avgFightTime: responseMay20.data[3].tale_of_the_tape['Average Fight Time'][f31],
                                    avgSubPer15: responseMay20.data[3].tale_of_the_tape['Submission Average/15 min.'][f31],
                                    takedownAcc: responseMay20.data[3].tale_of_the_tape['Takedown Accuracy'][f31],
                                    takedownDef: responseMay20.data[3].tale_of_the_tape['Takedown Defense'][f31],
                                    avgTakedownsPer15: responseMay20.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f31],
                                    dob: responseMay20.data[3].tale_of_the_tape.DOB[f31],
                                    height: responseMay20.data[3].tale_of_the_tape.Height[f31],
                                    id: 31,
                                    matchupId: 16,
                                    record: responseMay20.data[3].tale_of_the_tape['Wins/Losses/Draws'][f31],
                                    moneyLine: andreFialho['Moneyline']         
                                  }),
                                  Fighter.create({
                                    //Joaquin Buckley
                                      name: responseMay20.data[3].matchup[1],
                                      defense: responseMay20.data[3].tale_of_the_tape.Defense[f32],
                                      reach: responseMay20.data[3].tale_of_the_tape.Reach[f32],
                                      strikesAbsorbedPerMin: responseMay20.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f32],
                                      strikesLandedPerMin: responseMay20.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f32],
                                      avgFightTime: responseMay20.data[3].tale_of_the_tape['Average Fight Time'][f32],
                                      avgSubPer15: responseMay20.data[3].tale_of_the_tape['Submission Average/15 min.'][f32],
                                      takedownAcc: responseMay20.data[3].tale_of_the_tape['Takedown Accuracy'][f32],
                                      takedownDef: responseMay20.data[3].tale_of_the_tape['Takedown Defense'][f32],
                                      avgTakedownsPer15: responseMay20.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f32],
                                      dob: responseMay20.data[3].tale_of_the_tape.DOB[f32],
                                      height: responseMay20.data[3].tale_of_the_tape.Height[f32],
                                      id: 32,
                                      matchupId: 16,
                                      record: responseMay20.data[3].tale_of_the_tape['Wins/Losses/Draws'][f32],
                                      moneyLine: joaquinBuckley['Moneyline']    
                                  }),
                                    Fighter.create({
                                      //Diego Ferreira
                                      name: responseMay20.data[4].matchup[0],
                                      defense: responseMay20.data[4].tale_of_the_tape.Defense[f33],
                                      reach: responseMay20.data[4].tale_of_the_tape.Reach[f33],
                                      strikesAbsorbedPerMin: responseMay20.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f33],
                                      strikesLandedPerMin: responseMay20.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f33],
                                      avgFightTime: responseMay20.data[4].tale_of_the_tape['Average Fight Time'][f33],
                                      avgSubPer15: responseMay20.data[4].tale_of_the_tape['Submission Average/15 min.'][f33],
                                      takedownAcc: responseMay20.data[4].tale_of_the_tape['Takedown Accuracy'][f33],
                                      takedownDef: responseMay20.data[4].tale_of_the_tape['Takedown Defense'][f33],
                                      avgTakedownsPer15: responseMay20.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f33],
                                      dob: responseMay20.data[4].tale_of_the_tape.DOB[f33],
                                      height: responseMay20.data[4].tale_of_the_tape.Height[f33],
                                      id: 33,
                                      matchupId: 17,
                                      record: responseMay20.data[4].tale_of_the_tape['Wins/Losses/Draws'][f33],
                                      moneyLine: diegoFerreira['Moneyline']   
                                    }),
                                    Fighter.create({
                                      //Michael Johnson
                                        name: responseMay20.data[4].matchup[1],
                                        defense: responseMay20.data[4].tale_of_the_tape.Defense[f34],
                                        reach: responseMay20.data[4].tale_of_the_tape.Reach[f34],
                                        strikesAbsorbedPerMin: responseMay20.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f34],
                                        strikesLandedPerMin: responseMay20.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f34],
                                        avgFightTime: responseMay20.data[4].tale_of_the_tape['Average Fight Time'][f34],
                                        avgSubPer15: responseMay20.data[4].tale_of_the_tape['Submission Average/15 min.'][f34],
                                        takedownAcc: responseMay20.data[4].tale_of_the_tape['Takedown Accuracy'][f34],
                                        takedownDef: responseMay20.data[4].tale_of_the_tape['Takedown Defense'][f34],
                                        avgTakedownsPer15: responseMay20.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f34],
                                        dob: responseMay20.data[4].tale_of_the_tape.DOB[f34],
                                        height: responseMay20.data[4].tale_of_the_tape.Height[f34],
                                        id: 34,
                                        matchupId: 17,
                                        record: responseMay20.data[4].tale_of_the_tape['Wins/Losses/Draws'][f34],
                                        moneyLine: michaelJohnson['Moneyline']             
                                    }),
                                      Fighter.create({
                                        //Maheshate
                                        name: responseMay20.data[5].matchup[0],
                                        defense: responseMay20.data[5].tale_of_the_tape.Defense[f35],
                                        reach: responseMay20.data[5].tale_of_the_tape.Reach[f35],
                                        strikesAbsorbedPerMin: responseMay20.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f35],
                                        strikesLandedPerMin: responseMay20.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f35],
                                        avgFightTime: responseMay20.data[5].tale_of_the_tape['Average Fight Time'][f35],
                                        avgSubPer15: responseMay20.data[5].tale_of_the_tape['Submission Average/15 min.'][f35],
                                        takedownAcc: responseMay20.data[5].tale_of_the_tape['Takedown Accuracy'][f35],
                                        takedownDef: responseMay20.data[5].tale_of_the_tape['Takedown Defense'][f35],
                                        avgTakedownsPer15: responseMay20.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f35],
                                        dob: responseMay20.data[5].tale_of_the_tape.DOB[f35],
                                        height: responseMay20.data[5].tale_of_the_tape.Height[f35],
                                        id: 35,
                                        matchupId: 18,
                                        record: responseMay20.data[5].tale_of_the_tape['Wins/Losses/Draws'][f35],
                                        moneyLine: mahashate['Moneyline']              
                                      }),
                                      Fighter.create({
                                        //Viacheslav Borshchev
                                          name: responseMay20.data[5].matchup[1],
                                          defense: responseMay20.data[5].tale_of_the_tape.Defense[f36],
                                          reach: responseMay20.data[5].tale_of_the_tape.Reach[f36],
                                          strikesAbsorbedPerMin: responseMay20.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f36],
                                          strikesLandedPerMin: responseMay20.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f36],
                                          avgFightTime: responseMay20.data[5].tale_of_the_tape['Average Fight Time'][f36],
                                          avgSubPer15: responseMay20.data[5].tale_of_the_tape['Submission Average/15 min.'][f36],
                                          takedownAcc: responseMay20.data[5].tale_of_the_tape['Takedown Accuracy'][f36],
                                          takedownDef: responseMay20.data[5].tale_of_the_tape['Takedown Defense'][f36],
                                          avgTakedownsPer15: responseMay20.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f36],
                                          dob: responseMay20.data[5].tale_of_the_tape.DOB[f36],
                                          height: responseMay20.data[5].tale_of_the_tape.Height[f36],
                                          id: 36,
                                          matchupId: 18,
                                          record: responseMay20.data[5].tale_of_the_tape['Wins/Losses/Draws'][f36],
                                          moneyLine: viacheslavBorshchev['Moneyline']
                                      }),
                                        Fighter.create({
                                          //Karolina Kowalkiewicz
                                          name: responseMay20.data[6].matchup[0],
                                          defense: responseMay20.data[6].tale_of_the_tape.Defense[f37],
                                          reach: responseMay20.data[6].tale_of_the_tape.Reach[f37],
                                          strikesAbsorbedPerMin: responseMay20.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f37],
                                          strikesLandedPerMin: responseMay20.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f37],
                                          avgFightTime: responseMay20.data[6].tale_of_the_tape['Average Fight Time'][f37],
                                          avgSubPer15: responseMay20.data[6].tale_of_the_tape['Submission Average/15 min.'][f37],
                                          takedownAcc: responseMay20.data[6].tale_of_the_tape['Takedown Accuracy'][f37],
                                          takedownDef: responseMay20.data[6].tale_of_the_tape['Takedown Defense'][f37],
                                          avgTakedownsPer15: responseMay20.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f37],
                                          dob: responseMay20.data[6].tale_of_the_tape.DOB[f37],
                                          height: responseMay20.data[6].tale_of_the_tape.Height[f37],
                                          id: 37,
                                          matchupId: 19,
                                          record: responseMay20.data[6].tale_of_the_tape['Wins/Losses/Draws'][f37],
                                          moneyLine: karolinaKowalkiewicz['Moneyline']     
                                        }),
                                        Fighter.create({
                                          //Vanessa Demopoulos
                                            name: responseMay20.data[6].matchup[1],
                                            defense: responseMay20.data[6].tale_of_the_tape.Defense[f38],
                                            reach: responseMay20.data[6].tale_of_the_tape.Reach[f38],
                                            strikesAbsorbedPerMin: responseMay20.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f38],
                                            strikesLandedPerMin: responseMay20.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f38],
                                            avgFightTime: responseMay20.data[6].tale_of_the_tape['Average Fight Time'][f38],
                                            avgSubPer15: responseMay20.data[6].tale_of_the_tape['Submission Average/15 min.'][f38],
                                            takedownAcc: responseMay20.data[6].tale_of_the_tape['Takedown Accuracy'][f38],
                                            takedownDef: responseMay20.data[6].tale_of_the_tape['Takedown Defense'][f38],
                                            avgTakedownsPer15: responseMay20.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f38],
                                            dob: responseMay20.data[6].tale_of_the_tape.DOB[f38],
                                            height: responseMay20.data[6].tale_of_the_tape.Height[f38],
                                            id: 38,
                                            matchupId: 19,
                                            record: responseMay20.data[6].tale_of_the_tape['Wins/Losses/Draws'][f38],
                                            moneyLine: vanessaDemopoulos['Moneyline']       
                                        }),
                                          Fighter.create({
                                            //Orion Cosce
                                            name: responseMay20.data[7].matchup[0],
                                            defense: responseMay20.data[7].tale_of_the_tape.Defense[f39],
                                            reach: responseMay20.data[7].tale_of_the_tape.Reach[f39],
                                            strikesAbsorbedPerMin: responseMay20.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f39],
                                            strikesLandedPerMin: responseMay20.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f39],
                                            avgFightTime: responseMay20.data[7].tale_of_the_tape['Average Fight Time'][f39],
                                            avgSubPer15: responseMay20.data[7].tale_of_the_tape['Submission Average/15 min.'][f39],
                                            takedownAcc: responseMay20.data[7].tale_of_the_tape['Takedown Accuracy'][f39],
                                            takedownDef: responseMay20.data[7].tale_of_the_tape['Takedown Defense'][f39],
                                            avgTakedownsPer15: responseMay20.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f39],
                                            dob: responseMay20.data[7].tale_of_the_tape.DOB[f39],
                                            height: responseMay20.data[7].tale_of_the_tape.Height[f39],
                                            id: 39,
                                            matchupId: 20,
                                            record: responseMay20.data[7].tale_of_the_tape['Wins/Losses/Draws'][f39],
                                            moneyLine: orionCosce['Moneyline']
                                        }),
                                          Fighter.create({
                                            //Gilbert Urbina
                                              name: responseMay20.data[7].matchup[1],
                                              defense: responseMay20.data[7].tale_of_the_tape.Defense[f40],
                                              reach: responseMay20.data[7].tale_of_the_tape.Reach[f40],
                                              strikesAbsorbedPerMin: responseMay20.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f40],
                                              strikesLandedPerMin: responseMay20.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f40],
                                              avgFightTime: responseMay20.data[7].tale_of_the_tape['Average Fight Time'][f40],
                                              avgSubPer15: responseMay20.data[7].tale_of_the_tape['Submission Average/15 min.'][f40],
                                              takedownAcc: responseMay20.data[7].tale_of_the_tape['Takedown Accuracy'][f40],
                                              takedownDef: responseMay20.data[7].tale_of_the_tape['Takedown Defense'][f40],
                                              avgTakedownsPer15: responseMay20.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f40],
                                              dob: responseMay20.data[7].tale_of_the_tape.DOB[f40],
                                              height: responseMay20.data[7].tale_of_the_tape.Height[f40],
                                              id: 40,
                                              matchupId: 20,
                                              record: responseMay20.data[7].tale_of_the_tape['Wins/Losses/Draws'][f40],
                                              moneyLine: gilbertUrbina['Moneyline']
                                          }),
                                            Fighter.create({
                                              //Ilir Latifi
                                              name: responseMay20.data[8].matchup[0],
                                              defense: responseMay20.data[8].tale_of_the_tape.Defense[f41],
                                              reach: responseMay20.data[8].tale_of_the_tape.Reach[f41],
                                              strikesAbsorbedPerMin: responseMay20.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f41],
                                              strikesLandedPerMin: responseMay20.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f41],
                                              avgFightTime: responseMay20.data[8].tale_of_the_tape['Average Fight Time'][f41],
                                              avgSubPer15: responseMay20.data[8].tale_of_the_tape['Submission Average/15 min.'][f41],
                                              takedownAcc: responseMay20.data[8].tale_of_the_tape['Takedown Accuracy'][f41],
                                              takedownDef: responseMay20.data[8].tale_of_the_tape['Takedown Defense'][f41],
                                              avgTakedownsPer15: responseMay20.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f41],
                                              dob: responseMay20.data[8].tale_of_the_tape.DOB[f41],
                                              height: responseMay20.data[8].tale_of_the_tape.Height[f41],
                                              id: 41,
                                              matchupId: 21,
                                              record: responseMay20.data[8].tale_of_the_tape['Wins/Losses/Draws'][f41],
                                              moneyLine: ilirLatifi['Moneyline']  
                                            }),
                                            Fighter.create({
                                              //Rodrigo Nascimento
                                                name: responseMay20.data[8].matchup[1],
                                                defense: responseMay20.data[8].tale_of_the_tape.Defense[f42],
                                                reach: responseMay20.data[8].tale_of_the_tape.Reach[f42],
                                                strikesAbsorbedPerMin: responseMay20.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f42],
                                                strikesLandedPerMin: responseMay20.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f42],
                                                avgFightTime: responseMay20.data[8].tale_of_the_tape['Average Fight Time'][f42],
                                                avgSubPer15: responseMay20.data[8].tale_of_the_tape['Submission Average/15 min.'][f42],
                                                takedownAcc: responseMay20.data[8].tale_of_the_tape['Takedown Accuracy'][f42],
                                                takedownDef: responseMay20.data[8].tale_of_the_tape['Takedown Defense'][f42],
                                                avgTakedownsPer15: responseMay20.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f42],
                                                dob: responseMay20.data[8].tale_of_the_tape.DOB[f42],
                                                height: responseMay20.data[8].tale_of_the_tape.Height[f42],
                                                id: 42,
                                                matchupId: 21,
                                                record: responseMay20.data[8].tale_of_the_tape['Wins/Losses/Draws'][f42],
                                                moneyLine: rodrigoNascimento['Moneyline'] 
                                            }),
                                              Fighter.create({
                                                //Chase Hooper
                                                name: responseMay20.data[9].matchup[0],
                                                defense: responseMay20.data[9].tale_of_the_tape.Defense[f43],
                                                reach: responseMay20.data[9].tale_of_the_tape.Reach[f43],
                                                strikesAbsorbedPerMin: responseMay20.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f43],
                                                strikesLandedPerMin: responseMay20.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f43],
                                                avgFightTime: responseMay20.data[9].tale_of_the_tape['Average Fight Time'][f43],
                                                avgSubPer15: responseMay20.data[9].tale_of_the_tape['Submission Average/15 min.'][f43],
                                                takedownAcc: responseMay20.data[9].tale_of_the_tape['Takedown Accuracy'][f43],
                                                takedownDef: responseMay20.data[9].tale_of_the_tape['Takedown Defense'][f43],
                                                avgTakedownsPer15: responseMay20.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f43],
                                                dob: responseMay20.data[9].tale_of_the_tape.DOB[f43],
                                                height: responseMay20.data[9].tale_of_the_tape.Height[f43],
                                                id: 43,
                                                matchupId: 22,
                                                record: responseMay20.data[9].tale_of_the_tape['Wins/Losses/Draws'][f43],
                                                moneyLine: chaseHooper['Moneyline']
                                              }),
                                              Fighter.create({
                                                //Nick Fiore
                                                  name: responseMay20.data[9].matchup[1],
                                                  defense: responseMay20.data[9].tale_of_the_tape.Defense[f44],
                                                  reach: responseMay20.data[9].tale_of_the_tape.Reach[f44],
                                                  strikesAbsorbedPerMin: responseMay20.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f44],
                                                  strikesLandedPerMin: responseMay20.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f44],
                                                  avgFightTime: responseMay20.data[9].tale_of_the_tape['Average Fight Time'][f44],
                                                  avgSubPer15: responseMay20.data[9].tale_of_the_tape['Submission Average/15 min.'][f44],
                                                  takedownAcc: responseMay20.data[9].tale_of_the_tape['Takedown Accuracy'][f44],
                                                  takedownDef: responseMay20.data[9].tale_of_the_tape['Takedown Defense'][f44],
                                                  avgTakedownsPer15: responseMay20.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f44],
                                                  dob: responseMay20.data[9].tale_of_the_tape.DOB[f44],
                                                  height: responseMay20.data[9].tale_of_the_tape.Height[f44],
                                                  id: 44,
                                                  matchupId: 22,
                                                  record: responseMay20.data[9].tale_of_the_tape['Wins/Losses/Draws'][f44],
                                                  moneyLine: nickFiore['Moneyline']
                                                }),
                                                Fighter.create({
                                                  //Natalia Silva
                                                  name: responseMay20.data[10].matchup[0],
                                                  defense: responseMay20.data[10].tale_of_the_tape.Defense[f45],
                                                  reach: responseMay20.data[10].tale_of_the_tape.Reach[f45],
                                                  strikesAbsorbedPerMin: responseMay20.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f45],
                                                  strikesLandedPerMin: responseMay20.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f45],
                                                  avgFightTime: responseMay20.data[10].tale_of_the_tape['Average Fight Time'][f45],
                                                  avgSubPer15: responseMay20.data[10].tale_of_the_tape['Submission Average/15 min.'][f45],
                                                  takedownAcc: responseMay20.data[10].tale_of_the_tape['Takedown Accuracy'][f45],
                                                  takedownDef: responseMay20.data[10].tale_of_the_tape['Takedown Defense'][f45],
                                                  avgTakedownsPer15: responseMay20.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f45],
                                                  dob: responseMay20.data[10].tale_of_the_tape.DOB[f45],
                                                  height: responseMay20.data[10].tale_of_the_tape.Height[f45],
                                                  id: 45,
                                                  matchupId: 23,
                                                  record: responseMay20.data[10].tale_of_the_tape['Wins/Losses/Draws'][f45],
                                                  moneyLine: nataliaSilva['Moneyline']
                                                }),
                                                Fighter.create({
                                                  //Victoria Leonardo
                                                    name: responseMay20.data[10].matchup[1],
                                                    defense: responseMay20.data[10].tale_of_the_tape.Defense[f46],
                                                    reach: responseMay20.data[10].tale_of_the_tape.Reach[f46],
                                                    strikesAbsorbedPerMin: responseMay20.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f46],
                                                    strikesLandedPerMin: responseMay20.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f46],
                                                    avgFightTime: responseMay20.data[10].tale_of_the_tape['Average Fight Time'][f46],
                                                    avgSubPer15: responseMay20.data[10].tale_of_the_tape['Submission Average/15 min.'][f46],
                                                    takedownAcc: responseMay20.data[10].tale_of_the_tape['Takedown Accuracy'][f46],
                                                    takedownDef: responseMay20.data[10].tale_of_the_tape['Takedown Defense'][f46],
                                                    avgTakedownsPer15: responseMay20.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f46],
                                                    dob: responseMay20.data[10].tale_of_the_tape.DOB[f46],
                                                    height: responseMay20.data[10].tale_of_the_tape.Height[f46],
                                                    id: 46,
                                                    matchupId: 23,
                                                    record: responseMay20.data[10].tale_of_the_tape['Wins/Losses/Draws'][f46],
                                                    moneyLine: victoriaLeonardo['Moneyline']
                                                }),
                                                  Fighter.create({
                                                    //Takashi Sato
                                                    name: responseMay20.data[11].matchup[0],
                                                    defense: responseMay20.data[11].tale_of_the_tape.Defense[f47],
                                                    reach: responseMay20.data[11].tale_of_the_tape.Reach[f47],
                                                    strikesAbsorbedPerMin: responseMay20.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f47],
                                                    strikesLandedPerMin: responseMay20.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f47],
                                                    avgFightTime: responseMay20.data[11].tale_of_the_tape['Average Fight Time'][f47],
                                                    avgSubPer15: responseMay20.data[11].tale_of_the_tape['Submission Average/15 min.'][f47],
                                                    takedownAcc: responseMay20.data[11].tale_of_the_tape['Takedown Accuracy'][f47],
                                                    takedownDef: responseMay20.data[11].tale_of_the_tape['Takedown Defense'][f47],
                                                    avgTakedownsPer15: responseMay20.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f47],
                                                    dob: responseMay20.data[11].tale_of_the_tape.DOB[f47],
                                                    height: responseMay20.data[11].tale_of_the_tape.Height[f47],
                                                    id: 47,
                                                    matchupId: 24,
                                                    record: responseMay20.data[11].tale_of_the_tape['Wins/Losses/Draws'][f47],
                                                    moneyLine: takashiSato['Moneyline']
                                                  }),
                                                  Fighter.create({
                                                   // Themba Gorimbo
                                                      name: responseMay20.data[11].matchup[1],
                                                      defense: responseMay20.data[11].tale_of_the_tape.Defense[f48],
                                                      reach: responseMay20.data[11].tale_of_the_tape.Reach[f48],
                                                      strikesAbsorbedPerMin: responseMay20.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f48],
                                                      strikesLandedPerMin: responseMay20.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f48],
                                                      avgFightTime: responseMay20.data[11].tale_of_the_tape['Average Fight Time'][f48],
                                                      avgSubPer15: responseMay20.data[11].tale_of_the_tape['Submission Average/15 min.'][f48],
                                                      takedownAcc: responseMay20.data[11].tale_of_the_tape['Takedown Accuracy'][f48],
                                                      takedownDef: responseMay20.data[11].tale_of_the_tape['Takedown Defense'][f48],
                                                      avgTakedownsPer15: responseMay20.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f48],
                                                      dob: responseMay20.data[11].tale_of_the_tape.DOB[f48],
                                                      height: responseMay20.data[11].tale_of_the_tape.Height[f48],
                                                      id: 48,
                                                      matchupId: 24,
                                                      record: responseMay20.data[11].tale_of_the_tape['Wins/Losses/Draws'][f48],
                                                      moneyLine: thembaGorimbo['Moneyline']
                                                    }),
                                                    Fighter.create({
                                                      //Kai Kara-France
                                                      name: responseJune3.data[0].matchup[0],
                                                      defense: responseJune3.data[0].tale_of_the_tape.Defense[f49],
                                                      reach: responseJune3.data[0].tale_of_the_tape.Reach[f49],
                                                      strikesAbsorbedPerMin: responseJune3.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f49],
                                                      strikesLandedPerMin: responseJune3.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f49],
                                                      avgFightTime: responseJune3.data[0].tale_of_the_tape['Average Fight Time'][f49],
                                                      avgSubPer15: responseJune3.data[0].tale_of_the_tape['Submission Average/15 min.'][f49],
                                                      takedownAcc: responseJune3.data[0].tale_of_the_tape['Takedown Accuracy'][f49],
                                                      takedownDef: responseJune3.data[0].tale_of_the_tape['Takedown Defense'][f49],
                                                      avgTakedownsPer15: responseJune3.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f49],
                                                      dob: responseJune3.data[0].tale_of_the_tape.DOB[f49],
                                                      height: responseJune3.data[0].tale_of_the_tape.Height[f49],
                                                      id: 49,
                                                      matchupId: 25,
                                                      record: responseJune3.data[0].tale_of_the_tape['Wins/Losses/Draws'][f49], 
                                                      
                                                    }),
                                                    Fighter.create({
                                                      //Amir Albazi
                                                        name: responseJune3.data[0].matchup[1],
                                                        defense: responseJune3.data[0].tale_of_the_tape.Defense[f50],
                                                        reach: responseJune3.data[0].tale_of_the_tape.Reach[f50],
                                                        strikesAbsorbedPerMin: responseJune3.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f50],
                                                        strikesLandedPerMin: responseJune3.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f50],
                                                        avgFightTime: responseJune3.data[0].tale_of_the_tape['Average Fight Time'][f50],
                                                        avgSubPer15: responseJune3.data[0].tale_of_the_tape['Submission Average/15 min.'][f50],
                                                        takedownAcc: responseJune3.data[0].tale_of_the_tape['Takedown Accuracy'][f50],
                                                        takedownDef: responseJune3.data[0].tale_of_the_tape['Takedown Defense'][f50],
                                                        avgTakedownsPer15: responseJune3.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f50],
                                                        dob: responseJune3.data[0].tale_of_the_tape.DOB[f50],
                                                        height: responseJune3.data[0].tale_of_the_tape.Height[f50],
                                                        id: 50,
                                                        matchupId: 25,                        
                                                        record: responseJune3.data[0].tale_of_the_tape['Wins/Losses/Draws'][f50],
                                                       
                                                    }),
                                                      Fighter.create({
                                                        //Alex Caceres
                                                        name: responseJune3.data[1].matchup[0],
                                                        defense: responseJune3.data[1].tale_of_the_tape.Defense[f51],
                                                        reach: responseJune3.data[1].tale_of_the_tape.Reach[f51],
                                                        strikesAbsorbedPerMin: responseJune3.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f51],
                                                        strikesLandedPerMin: responseJune3.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f51],
                                                        avgFightTime: responseJune3.data[1].tale_of_the_tape['Average Fight Time'][f51],
                                                        avgSubPer15: responseJune3.data[1].tale_of_the_tape['Submission Average/15 min.'][f51],
                                                        takedownAcc: responseJune3.data[1].tale_of_the_tape['Takedown Accuracy'][f51],
                                                        takedownDef: responseJune3.data[1].tale_of_the_tape['Takedown Defense'][f51],
                                                        avgTakedownsPer15: responseJune3.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f51],
                                                        dob: responseJune3.data[1].tale_of_the_tape.DOB[f51],
                                                        height: responseJune3.data[1].tale_of_the_tape.Height[f51],
                                                        id: 51,
                                                        matchupId: 26,
                                                        record: responseJune3.data[1].tale_of_the_tape['Wins/Losses/Draws'][f51],
                                                      }),
                                                      Fighter.create({
                                                        //Daniel Pineda
                                                          name: responseJune3.data[1].matchup[1],
                                                          defense: responseJune3.data[1].tale_of_the_tape.Defense[f52],
                                                          reach: responseJune3.data[1].tale_of_the_tape.Reach[f52],
                                                          strikesAbsorbedPerMin: responseJune3.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f52],
                                                          strikesLandedPerMin: responseJune3.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f52],
                                                          avgFightTime: responseJune3.data[1].tale_of_the_tape['Average Fight Time'][f52],
                                                          avgSubPer15: responseJune3.data[1].tale_of_the_tape['Submission Average/15 min.'][f52],
                                                          takedownAcc: responseJune3.data[1].tale_of_the_tape['Takedown Accuracy'][f52],
                                                          takedownDef: responseJune3.data[1].tale_of_the_tape['Takedown Defense'][f52],
                                                          avgTakedownsPer15: responseJune3.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f52],
                                                          dob: responseJune3.data[1].tale_of_the_tape.DOB[f52],
                                                          height: responseJune3.data[1].tale_of_the_tape.Height[f52],
                                                          id: 52,
                                                          matchupId: 26,
                                                          record: responseJune3.data[1].tale_of_the_tape['Wins/Losses/Draws'][f52],   
                                                      }),
                                                        Fighter.create({
                                                          //Jim Miller
                                                          name: responseJune3.data[2].matchup[0],
                                                          defense: responseJune3.data[2].tale_of_the_tape.Defense[f53],
                                                          reach: responseJune3.data[2].tale_of_the_tape.Reach[f53],
                                                          strikesAbsorbedPerMin: responseJune3.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f53],
                                                          strikesLandedPerMin: responseJune3.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f53],
                                                          avgFightTime: responseJune3.data[2].tale_of_the_tape['Average Fight Time'][f53],
                                                          avgSubPer15: responseJune3.data[2].tale_of_the_tape['Submission Average/15 min.'][f53],
                                                          takedownAcc: responseJune3.data[2].tale_of_the_tape['Takedown Accuracy'][f53],
                                                          takedownDef: responseJune3.data[2].tale_of_the_tape['Takedown Defense'][f53],
                                                          avgTakedownsPer15: responseJune3.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f53],
                                                          dob: responseJune3.data[2].tale_of_the_tape.DOB[f53],
                                                          height: responseJune3.data[2].tale_of_the_tape.Height[f53],
                                                          id: 53,
                                                          matchupId: 27,
                                                          record: responseJune3.data[2].tale_of_the_tape['Wins/Losses/Draws'][f53],
                                                        }),
                                                        Fighter.create({
                                                          //Jared Gordon
                                                            name: responseJune3.data[2].matchup[1],
                                                            defense: responseJune3.data[2].tale_of_the_tape.Defense[f54],
                                                            reach: responseJune3.data[2].tale_of_the_tape.Reach[f54],
                                                            strikesAbsorbedPerMin: responseJune3.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f54],
                                                            strikesLandedPerMin: responseJune3.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f54],
                                                            avgFightTime: responseJune3.data[2].tale_of_the_tape['Average Fight Time'][f54],
                                                            avgSubPer15: responseJune3.data[2].tale_of_the_tape['Submission Average/15 min.'][f54],
                                                            takedownAcc: responseJune3.data[2].tale_of_the_tape['Takedown Accuracy'][f54],
                                                            takedownDef: responseJune3.data[2].tale_of_the_tape['Takedown Defense'][f54],
                                                            avgTakedownsPer15: responseJune3.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f54],
                                                            dob: responseJune3.data[2].tale_of_the_tape.DOB[f54],
                                                            height: responseJune3.data[2].tale_of_the_tape.Height[f54],
                                                            id: 54,
                                                            matchupId: 27,
                                                            record: responseJune3.data[2].tale_of_the_tape['Wins/Losses/Draws'][f54],
                                                        }),
                                                          Fighter.create({
                                                            //Tim Elliott
                                                            name: responseJune3.data[3].matchup[0],
                                                            defense: responseJune3.data[3].tale_of_the_tape.Defense[f55],
                                                            reach: responseJune3.data[3].tale_of_the_tape.Reach[f55],
                                                            strikesAbsorbedPerMin: responseJune3.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f55],
                                                            strikesLandedPerMin: responseJune3.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f55],
                                                            avgFightTime: responseJune3.data[3].tale_of_the_tape['Average Fight Time'][f55],
                                                            avgSubPer15: responseJune3.data[3].tale_of_the_tape['Submission Average/15 min.'][f55],
                                                            takedownAcc: responseJune3.data[3].tale_of_the_tape['Takedown Accuracy'][f55],
                                                            takedownDef: responseJune3.data[3].tale_of_the_tape['Takedown Defense'][f55],
                                                            avgTakedownsPer15: responseJune3.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f55],
                                                            dob: responseJune3.data[3].tale_of_the_tape.DOB[f55],
                                                            height: responseJune3.data[3].tale_of_the_tape.Height[f55],
                                                            id: 55,
                                                            matchupId: 28,
                                                            record: responseJune3.data[3].tale_of_the_tape['Wins/Losses/Draws'][f55],     
                                                          }),
                                                          Fighter.create({
                                                            //Victor Altamirano
                                                              name: responseJune3.data[3].matchup[1],
                                                              defense: responseJune3.data[3].tale_of_the_tape.Defense[f56],
                                                              reach: responseJune3.data[3].tale_of_the_tape.Reach[f56],
                                                              strikesAbsorbedPerMin: responseJune3.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f56],
                                                              strikesLandedPerMin: responseJune3.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f56],
                                                              avgFightTime: responseJune3.data[3].tale_of_the_tape['Average Fight Time'][f56],
                                                              avgSubPer15: responseJune3.data[3].tale_of_the_tape['Submission Average/15 min.'][f56],
                                                              takedownAcc: responseJune3.data[3].tale_of_the_tape['Takedown Accuracy'][f56],
                                                              takedownDef: responseJune3.data[3].tale_of_the_tape['Takedown Defense'][f56],
                                                              avgTakedownsPer15: responseJune3.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f56],
                                                              dob: responseJune3.data[3].tale_of_the_tape.DOB[f56],
                                                              height: responseJune3.data[3].tale_of_the_tape.Height[f56],
                                                              id: 56,
                                                              matchupId: 28,
                                                              record: responseJune3.data[3].tale_of_the_tape['Wins/Losses/Draws'][f56],                                                          
                                                          }),
                                                            Fighter.create({
                                                              //Karine Silva
                                                              name: responseJune3.data[4].matchup[0],
                                                              defense: responseJune3.data[4].tale_of_the_tape.Defense[f57],
                                                              reach: responseJune3.data[4].tale_of_the_tape.Reach[f57],
                                                              strikesAbsorbedPerMin: responseJune3.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f57],
                                                              strikesLandedPerMin: responseJune3.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f57],
                                                              avgFightTime: responseJune3.data[4].tale_of_the_tape['Average Fight Time'][f57],
                                                              avgSubPer15: responseJune3.data[4].tale_of_the_tape['Submission Average/15 min.'][f57],
                                                              takedownAcc: responseJune3.data[4].tale_of_the_tape['Takedown Accuracy'][f57],
                                                              takedownDef: responseJune3.data[4].tale_of_the_tape['Takedown Defense'][f57],
                                                              avgTakedownsPer15: responseJune3.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f57],
                                                              dob: responseJune3.data[4].tale_of_the_tape.DOB[f57],
                                                              height: responseJune3.data[4].tale_of_the_tape.Height[f57],
                                                              id: 57,
                                                              matchupId: 29,
                                                              record: responseJune3.data[4].tale_of_the_tape['Wins/Losses/Draws'][f57],                                                          
                                                            }),
                                                            Fighter.create({
                                                              //Ketlen Vieira
                                                                name: responseJune3.data[4].matchup[1],
                                                                defense: responseJune3.data[4].tale_of_the_tape.Defense[f58],
                                                                reach: responseJune3.data[4].tale_of_the_tape.Reach[f58],
                                                                strikesAbsorbedPerMin: responseJune3.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f58],
                                                                strikesLandedPerMin: responseJune3.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f58],
                                                                avgFightTime: responseJune3.data[4].tale_of_the_tape['Average Fight Time'][f58],
                                                                avgSubPer15: responseJune3.data[4].tale_of_the_tape['Submission Average/15 min.'][f58],
                                                                takedownAcc: responseJune3.data[4].tale_of_the_tape['Takedown Accuracy'][f58],
                                                                takedownDef: responseJune3.data[4].tale_of_the_tape['Takedown Defense'][f58],
                                                                avgTakedownsPer15: responseJune3.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f58],
                                                                dob: responseJune3.data[4].tale_of_the_tape.DOB[f58],
                                                                height: responseJune3.data[4].tale_of_the_tape.Height[f58],
                                                                id: 58,
                                                                matchupId: 29,
                                                                record: responseJune3.data[4].tale_of_the_tape['Wins/Losses/Draws'][f58],                                                                    
                                                            }),
                                                              Fighter.create({
                                                                //Jamie Mullarkey
                                                                name: responseJune3.data[5].matchup[0],
                                                                defense: responseJune3.data[5].tale_of_the_tape.Defense[f59],
                                                                reach: responseJune3.data[5].tale_of_the_tape.Reach[f59],
                                                                strikesAbsorbedPerMin: responseJune3.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f59],
                                                                strikesLandedPerMin: responseJune3.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f59],
                                                                avgFightTime: responseJune3.data[5].tale_of_the_tape['Average Fight Time'][f59],
                                                                avgSubPer15: responseJune3.data[5].tale_of_the_tape['Submission Average/15 min.'][f59],
                                                                takedownAcc: responseJune3.data[5].tale_of_the_tape['Takedown Accuracy'][f59],
                                                                takedownDef: responseJune3.data[5].tale_of_the_tape['Takedown Defense'][f59],
                                                                avgTakedownsPer15: responseJune3.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f59],
                                                                dob: responseJune3.data[5].tale_of_the_tape.DOB[f59],
                                                                height: responseJune3.data[5].tale_of_the_tape.Height[f59],
                                                                id: 59,
                                                                matchupId: 30,
                                                                record: responseJune3.data[5].tale_of_the_tape['Wins/Losses/Draws'][f59],                                                                      
                                                              }),
                                                              Fighter.create({
                                                                //Guram Kutateladze
                                                                  name: responseJune3.data[5].matchup[1],
                                                                  defense: responseJune3.data[5].tale_of_the_tape.Defense[f60],
                                                                  reach: responseJune3.data[5].tale_of_the_tape.Reach[f60],
                                                                  strikesAbsorbedPerMin: responseJune3.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f60],
                                                                  strikesLandedPerMin: responseJune3.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f60],
                                                                  avgFightTime: responseJune3.data[5].tale_of_the_tape['Average Fight Time'][f60],
                                                                  avgSubPer15: responseJune3.data[5].tale_of_the_tape['Submission Average/15 min.'][f60],
                                                                  takedownAcc: responseJune3.data[5].tale_of_the_tape['Takedown Accuracy'][f60],
                                                                  takedownDef: responseJune3.data[5].tale_of_the_tape['Takedown Defense'][f60],
                                                                  avgTakedownsPer15: responseJune3.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f60],
                                                                  dob: responseJune3.data[5].tale_of_the_tape.DOB[f60],
                                                                  height: responseJune3.data[5].tale_of_the_tape.Height[f60],
                                                                  id: 60,
                                                                  matchupId: 30,
                                                                  record: responseJune3.data[5].tale_of_the_tape['Wins/Losses/Draws'][f60],                                                                 
                                                              }),
                                                                Fighter.create({
                                                                  //Abubakar Nurmagomedov
                                                                  name: responseJune3.data[6].matchup[0],
                                                                  defense: responseJune3.data[6].tale_of_the_tape.Defense[f61],
                                                                  reach: responseJune3.data[6].tale_of_the_tape.Reach[f61],
                                                                  strikesAbsorbedPerMin: responseJune3.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f61],
                                                                  strikesLandedPerMin: responseJune3.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f61],
                                                                  avgFightTime: responseJune3.data[6].tale_of_the_tape['Average Fight Time'][f61],
                                                                  avgSubPer15: responseJune3.data[6].tale_of_the_tape['Submission Average/15 min.'][f61],
                                                                  takedownAcc: responseJune3.data[6].tale_of_the_tape['Takedown Accuracy'][f61],
                                                                  takedownDef: responseJune3.data[6].tale_of_the_tape['Takedown Defense'][f61],
                                                                  avgTakedownsPer15: responseJune3.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f61],
                                                                  dob: responseJune3.data[6].tale_of_the_tape.DOB[f61],
                                                                  height: responseJune3.data[6].tale_of_the_tape.Height[f61],
                                                                  id: 61,
                                                                  matchupId: 31,
                                                                  record: responseJune3.data[6].tale_of_the_tape['Wins/Losses/Draws'][f61],                                                             
                                                                }),
                                                                Fighter.create({
                                                                  //Elizeu Zaleski dos Santos
                                                                    name: responseJune3.data[6].matchup[1],
                                                                    defense: responseJune3.data[6].tale_of_the_tape.Defense[f62],
                                                                    reach: responseJune3.data[6].tale_of_the_tape.Reach[f62],
                                                                    strikesAbsorbedPerMin: responseJune3.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f62],
                                                                    strikesLandedPerMin: responseJune3.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f62],
                                                                    avgFightTime: responseJune3.data[6].tale_of_the_tape['Average Fight Time'][f62],
                                                                    avgSubPer15: responseJune3.data[6].tale_of_the_tape['Submission Average/15 min.'][f62],
                                                                    takedownAcc: responseJune3.data[6].tale_of_the_tape['Takedown Accuracy'][f62],
                                                                    takedownDef: responseJune3.data[6].tale_of_the_tape['Takedown Defense'][f62],
                                                                    avgTakedownsPer15: responseJune3.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f62],
                                                                    dob: responseJune3.data[6].tale_of_the_tape.DOB[f62],
                                                                    height: responseJune3.data[6].tale_of_the_tape.Height[f62],
                                                                    id: 62,
                                                                    matchupId: 31,
                                                                    record: responseJune3.data[6].tale_of_the_tape['Wins/Losses/Draws'][f62],                                                                       
                                                                }),
                                                                  Fighter.create({
                                                                    //John Castaneda
                                                                    name: responseJune3.data[7].matchup[0],
                                                                    defense: responseJune3.data[7].tale_of_the_tape.Defense[f63],
                                                                    reach: responseJune3.data[7].tale_of_the_tape.Reach[f63],
                                                                    strikesAbsorbedPerMin: responseJune3.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f63],
                                                                    strikesLandedPerMin: responseJune3.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f63],
                                                                    avgFightTime: responseJune3.data[7].tale_of_the_tape['Average Fight Time'][f63],
                                                                    avgSubPer15: responseJune3.data[7].tale_of_the_tape['Submission Average/15 min.'][f63],
                                                                    takedownAcc: responseJune3.data[7].tale_of_the_tape['Takedown Accuracy'][f63],
                                                                    takedownDef: responseJune3.data[7].tale_of_the_tape['Takedown Defense'][f63],
                                                                    avgTakedownsPer15: responseJune3.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f63],
                                                                    dob: responseJune3.data[7].tale_of_the_tape.DOB[f63],
                                                                    height: responseJune3.data[7].tale_of_the_tape.Height[f63],
                                                                    id: 63,
                                                                    matchupId: 32,
                                                                    record: responseJune3.data[7].tale_of_the_tape['Wins/Losses/Draws'][f63],                                                                
                                                                }),
                                                                  Fighter.create({
                                                                    //Mateus Mendonca
                                                                      name: responseJune3.data[7].matchup[1],
                                                                      defense: responseJune3.data[7].tale_of_the_tape.Defense[f64],
                                                                      reach: responseJune3.data[7].tale_of_the_tape.Reach[f64],
                                                                      strikesAbsorbedPerMin: responseJune3.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f64],
                                                                      strikesLandedPerMin: responseJune3.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f64],
                                                                      avgFightTime: responseJune3.data[7].tale_of_the_tape['Average Fight Time'][f64],
                                                                      avgSubPer15: responseJune3.data[7].tale_of_the_tape['Submission Average/15 min.'][f64],
                                                                      takedownAcc: responseJune3.data[7].tale_of_the_tape['Takedown Accuracy'][f64],
                                                                      takedownDef: responseJune3.data[7].tale_of_the_tape['Takedown Defense'][f64],
                                                                      avgTakedownsPer15: responseJune3.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f64],
                                                                      dob: responseJune3.data[7].tale_of_the_tape.DOB[f64],
                                                                      height: responseJune3.data[7].tale_of_the_tape.Height[f64],
                                                                      id: 64,
                                                                      matchupId: 32,
                                                                      record: responseJune3.data[7].tale_of_the_tape['Wins/Losses/Draws'][f64],                                                                   
                                                                  }),
                                                                    Fighter.create({
                                                                      //Andrei Arlovski
                                                                      name: responseJune3.data[8].matchup[0],
                                                                      defense: responseJune3.data[8].tale_of_the_tape.Defense[f65],
                                                                      reach: responseJune3.data[8].tale_of_the_tape.Reach[f65],
                                                                      strikesAbsorbedPerMin: responseJune3.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f65],
                                                                      strikesLandedPerMin: responseJune3.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f65],
                                                                      avgFightTime: responseJune3.data[8].tale_of_the_tape['Average Fight Time'][f65],
                                                                      avgSubPer15: responseJune3.data[8].tale_of_the_tape['Submission Average/15 min.'][f65],
                                                                      takedownAcc: responseJune3.data[8].tale_of_the_tape['Takedown Accuracy'][f65],
                                                                      takedownDef: responseJune3.data[8].tale_of_the_tape['Takedown Defense'][f65],
                                                                      avgTakedownsPer15: responseJune3.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f65],
                                                                      dob: responseJune3.data[8].tale_of_the_tape.DOB[f65],
                                                                      height: responseJune3.data[8].tale_of_the_tape.Height[f65],
                                                                      id: 65,
                                                                      matchupId: 33,
                                                                      record: responseJune3.data[8].tale_of_the_tape['Wins/Losses/Draws'][f65],                                                                    
                                                                    }),
                                                                    Fighter.create({
                                                                      //Don'Tale Mayes
                                                                        name: responseJune3.data[8].matchup[1],
                                                                        defense: responseJune3.data[8].tale_of_the_tape.Defense[f66],
                                                                        reach: responseJune3.data[8].tale_of_the_tape.Reach[f66],
                                                                        strikesAbsorbedPerMin: responseJune3.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f66],
                                                                        strikesLandedPerMin: responseJune3.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f66],
                                                                        avgFightTime: responseJune3.data[8].tale_of_the_tape['Average Fight Time'][f66],
                                                                        avgSubPer15: responseJune3.data[8].tale_of_the_tape['Submission Average/15 min.'][f66],
                                                                        takedownAcc: responseJune3.data[8].tale_of_the_tape['Takedown Accuracy'][f66],
                                                                        takedownDef: responseJune3.data[8].tale_of_the_tape['Takedown Defense'][f66],
                                                                        avgTakedownsPer15: responseJune3.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f66],
                                                                        dob: responseJune3.data[8].tale_of_the_tape.DOB[f66],
                                                                        height: responseJune3.data[8].tale_of_the_tape.Height[f66],
                                                                        id: 66,
                                                                        matchupId: 33,
                                                                        record: responseJune3.data[8].tale_of_the_tape['Wins/Losses/Draws'][f66],
                                                                        moneyLine: rodrigoNascimento['Moneyline'] 
                                                                    }),
                                                                      Fighter.create({
                                                                        //Daniel Santos
                                                                        name: responseJune3.data[9].matchup[0],
                                                                        defense: responseJune3.data[9].tale_of_the_tape.Defense[f67],
                                                                        reach: responseJune3.data[9].tale_of_the_tape.Reach[f67],
                                                                        strikesAbsorbedPerMin: responseJune3.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f67],
                                                                        strikesLandedPerMin: responseJune3.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f67],
                                                                        avgFightTime: responseJune3.data[9].tale_of_the_tape['Average Fight Time'][f67],
                                                                        avgSubPer15: responseJune3.data[9].tale_of_the_tape['Submission Average/15 min.'][f67],
                                                                        takedownAcc: responseJune3.data[9].tale_of_the_tape['Takedown Accuracy'][f67],
                                                                        takedownDef: responseJune3.data[9].tale_of_the_tape['Takedown Defense'][f67],
                                                                        avgTakedownsPer15: responseJune3.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f67],
                                                                        dob: responseJune3.data[9].tale_of_the_tape.DOB[f67],
                                                                        height: responseJune3.data[9].tale_of_the_tape.Height[f67],
                                                                        id: 67,
                                                                        matchupId: 34,
                                                                        record: responseJune3.data[9].tale_of_the_tape['Wins/Losses/Draws'][f67],                                                                    
                                                                      }),
                                                                      Fighter.create({
                                                                        //Johnny Munoz
                                                                          name: responseJune3.data[9].matchup[1],
                                                                          defense: responseJune3.data[9].tale_of_the_tape.Defense[f68],
                                                                          reach: responseJune3.data[9].tale_of_the_tape.Reach[f68],
                                                                          strikesAbsorbedPerMin: responseJune3.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f68],
                                                                          strikesLandedPerMin: responseJune3.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f68],
                                                                          avgFightTime: responseJune3.data[9].tale_of_the_tape['Average Fight Time'][f68],
                                                                          avgSubPer15: responseJune3.data[9].tale_of_the_tape['Submission Average/15 min.'][f68],
                                                                          takedownAcc: responseJune3.data[9].tale_of_the_tape['Takedown Accuracy'][f68],
                                                                          takedownDef: responseJune3.data[9].tale_of_the_tape['Takedown Defense'][f68],
                                                                          avgTakedownsPer15: responseJune3.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f68],
                                                                          dob: responseJune3.data[9].tale_of_the_tape.DOB[f68],
                                                                          height: responseJune3.data[9].tale_of_the_tape.Height[f68],
                                                                          id: 68,
                                                                          matchupId: 34,
                                                                          record: responseJune3.data[9].tale_of_the_tape['Wins/Losses/Draws'][f68],                                                                       
                                                                        }),
                                                                        Fighter.create({
                                                                          //Elise Reed
                                                                          name: responseJune3.data[10].matchup[0],
                                                                          defense: responseJune3.data[10].tale_of_the_tape.Defense[f69],
                                                                          reach: responseJune3.data[10].tale_of_the_tape.Reach[f69],
                                                                          strikesAbsorbedPerMin: responseJune3.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f69],
                                                                          strikesLandedPerMin: responseJune3.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f69],
                                                                          avgFightTime: responseJune3.data[10].tale_of_the_tape['Average Fight Time'][f69],
                                                                          avgSubPer15: responseJune3.data[10].tale_of_the_tape['Submission Average/15 min.'][f69],
                                                                          takedownAcc: responseJune3.data[10].tale_of_the_tape['Takedown Accuracy'][f69],
                                                                          takedownDef: responseJune3.data[10].tale_of_the_tape['Takedown Defense'][f69],
                                                                          avgTakedownsPer15: responseJune3.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f69],
                                                                          dob: responseJune3.data[10].tale_of_the_tape.DOB[f69],
                                                                          height: responseJune3.data[10].tale_of_the_tape.Height[f69],
                                                                          id: 69,
                                                                          matchupId: 35,
                                                                          record: responseJune3.data[10].tale_of_the_tape['Wins/Losses/Draws'][f69],                                                                      
                                                                        }),
                                                                        Fighter.create({
                                                                          //Jinh Yu Frey
                                                                            name: responseJune3.data[10].matchup[1],
                                                                            defense: responseJune3.data[10].tale_of_the_tape.Defense[f70],
                                                                            reach: responseJune3.data[10].tale_of_the_tape.Reach[f70],
                                                                            strikesAbsorbedPerMin: responseJune3.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f70],
                                                                            strikesLandedPerMin: responseJune3.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f70],
                                                                            avgFightTime: responseJune3.data[10].tale_of_the_tape['Average Fight Time'][f70],
                                                                            avgSubPer15: responseJune3.data[10].tale_of_the_tape['Submission Average/15 min.'][f70],
                                                                            takedownAcc: responseJune3.data[10].tale_of_the_tape['Takedown Accuracy'][f70],
                                                                            takedownDef: responseJune3.data[10].tale_of_the_tape['Takedown Defense'][f70],
                                                                            avgTakedownsPer15: responseJune3.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f70],
                                                                            dob: responseJune3.data[10].tale_of_the_tape.DOB[f70],
                                                                            height: responseJune3.data[10].tale_of_the_tape.Height[f70],
                                                                            id: 70,
                                                                            matchupId: 35,
                                                                            record: responseJune3.data[10].tale_of_the_tape['Wins/Losses/Draws'][f70],                                                                           
                                                                        }),
                                                                          Fighter.create({
                                                                            //Da'Mon Blackshear
                                                                            name: responseJune3.data[11].matchup[0],
                                                                            defense: responseJune3.data[11].tale_of_the_tape.Defense[f71],
                                                                            reach: responseJune3.data[11].tale_of_the_tape.Reach[f71],
                                                                            strikesAbsorbedPerMin: responseJune3.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f71],
                                                                            strikesLandedPerMin: responseJune3.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f71],
                                                                            avgFightTime: responseJune3.data[11].tale_of_the_tape['Average Fight Time'][f71],
                                                                            avgSubPer15: responseJune3.data[11].tale_of_the_tape['Submission Average/15 min.'][f71],
                                                                            takedownAcc: responseJune3.data[11].tale_of_the_tape['Takedown Accuracy'][f71],
                                                                            takedownDef: responseJune3.data[11].tale_of_the_tape['Takedown Defense'][f71],
                                                                            avgTakedownsPer15: responseJune3.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f71],
                                                                            dob: responseJune3.data[11].tale_of_the_tape.DOB[f71],
                                                                            height: responseJune3.data[11].tale_of_the_tape.Height[f71],
                                                                            id: 71,
                                                                            matchupId: 36,
                                                                            record: responseJune3.data[11].tale_of_the_tape['Wins/Losses/Draws'][f71],                                                                          
                                                                          }),
                                                                          Fighter.create({
                                                                           // Luan Lacerda
                                                                              name: responseJune3.data[11].matchup[1],
                                                                              defense: responseJune3.data[11].tale_of_the_tape.Defense[f72],
                                                                              reach: responseJune3.data[11].tale_of_the_tape.Reach[f72],
                                                                              strikesAbsorbedPerMin: responseJune3.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f72],
                                                                              strikesLandedPerMin: responseJune3.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f72],
                                                                              avgFightTime: responseJune3.data[11].tale_of_the_tape['Average Fight Time'][f72],
                                                                              avgSubPer15: responseJune3.data[11].tale_of_the_tape['Submission Average/15 min.'][f72],
                                                                              takedownAcc: responseJune3.data[11].tale_of_the_tape['Takedown Accuracy'][f72],
                                                                              takedownDef: responseJune3.data[11].tale_of_the_tape['Takedown Defense'][f72],
                                                                              avgTakedownsPer15: responseJune3.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f72],
                                                                              dob: responseJune3.data[11].tale_of_the_tape.DOB[f72],
                                                                              height: responseJune3.data[11].tale_of_the_tape.Height[f72],
                                                                              id: 72,
                                                                              matchupId: 36,
                                                                              record: responseJune3.data[11].tale_of_the_tape['Wins/Losses/Draws'][f72],                                                                            
                                                                            }),
                                                                            Fighter.create({
                                                                              //Philipe Lins
                                                                              name: responseJune3.data[12].matchup[0],
                                                                              defense: responseJune3.data[12].tale_of_the_tape.Defense[f73],
                                                                              reach: responseJune3.data[12].tale_of_the_tape.Reach[f73],
                                                                              strikesAbsorbedPerMin: responseJune3.data[12].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f73],
                                                                              strikesLandedPerMin: responseJune3.data[12].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f73],
                                                                              avgFightTime: responseJune3.data[12].tale_of_the_tape['Average Fight Time'][f73],
                                                                              avgSubPer15: responseJune3.data[12].tale_of_the_tape['Submission Average/15 min.'][f73],
                                                                              takedownAcc: responseJune3.data[12].tale_of_the_tape['Takedown Accuracy'][f73],
                                                                              takedownDef: responseJune3.data[12].tale_of_the_tape['Takedown Defense'][f73],
                                                                              avgTakedownsPer15: responseJune3.data[12].tale_of_the_tape['Takedowns Average/15 min.'][f73],
                                                                              dob: responseJune3.data[12].tale_of_the_tape.DOB[f73],
                                                                              height: responseJune3.data[12].tale_of_the_tape.Height[f73],
                                                                              id: 73,
                                                                              matchupId: 37,
                                                                              record: responseJune3.data[12].tale_of_the_tape['Wins/Losses/Draws'][f73],                                                                             
                                                                           }),
                                                                            Fighter.create({
                                                                             // Maxim Grishin
                                                                                name: responseJune3.data[12].matchup[1],
                                                                                defense: responseJune3.data[12].tale_of_the_tape.Defense[f74],
                                                                                reach: responseJune3.data[12].tale_of_the_tape.Reach[f74],
                                                                                strikesAbsorbedPerMin: responseJune3.data[12].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f74],
                                                                                strikesLandedPerMin: responseJune3.data[12].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f74],
                                                                                avgFightTime: responseJune3.data[12].tale_of_the_tape['Average Fight Time'][f74],
                                                                                avgSubPer15: responseJune3.data[12].tale_of_the_tape['Submission Average/15 min.'][f74],
                                                                                takedownAcc: responseJune3.data[12].tale_of_the_tape['Takedown Accuracy'][f74],
                                                                                takedownDef: responseJune3.data[12].tale_of_the_tape['Takedown Defense'][f74],
                                                                                avgTakedownsPer15: responseJune3.data[12].tale_of_the_tape['Takedowns Average/15 min.'][f74],
                                                                                dob: responseJune3.data[12].tale_of_the_tape.DOB[f74],
                                                                                height: responseJune3.data[12].tale_of_the_tape.Height[f74],
                                                                                id: 74,
                                                                                matchupId: 37,
                                                                                record: responseJune3.data[12].tale_of_the_tape['Wins/Losses/Draws'][f74],                                                                             
                                                                              }),
                                                                              Fighter.create({
                                                                                //Amanda Nunes
                                                                                name: responseJune10.data[0].matchup[0],
                                                                                defense: responseJune10.data[0].tale_of_the_tape.Defense[f75],
                                                                                reach: responseJune10.data[0].tale_of_the_tape.Reach[f75],
                                                                                strikesAbsorbedPerMin: responseJune10.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f75],
                                                                                strikesLandedPerMin: responseJune10.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f75],
                                                                                avgFightTime: responseJune10.data[0].tale_of_the_tape['Average Fight Time'][f75],
                                                                                avgSubPer15: responseJune10.data[0].tale_of_the_tape['Submission Average/15 min.'][f75],
                                                                                takedownAcc: responseJune10.data[0].tale_of_the_tape['Takedown Accuracy'][f75],
                                                                                takedownDef: responseJune10.data[0].tale_of_the_tape['Takedown Defense'][f75],
                                                                                avgTakedownsPer15: responseJune10.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f75],
                                                                                dob: responseJune10.data[0].tale_of_the_tape.DOB[f75],
                                                                                height: responseJune10.data[0].tale_of_the_tape.Height[f75],
                                                                                id: 75,
                                                                                matchupId: 38,
                                                                                record: responseJune10.data[0].tale_of_the_tape['Wins/Losses/Draws'][f75], 
                                                                                
                                                                              }),
                                                                              Fighter.create({
                                                                                //Irene Aldana
                                                                                  name: responseJune10.data[0].matchup[1],
                                                                                  defense: responseJune10.data[0].tale_of_the_tape.Defense[f76],
                                                                                  reach: responseJune10.data[0].tale_of_the_tape.Reach[f76],
                                                                                  strikesAbsorbedPerMin: responseJune10.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f76],
                                                                                  strikesLandedPerMin: responseJune10.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f76],
                                                                                  avgFightTime: responseJune10.data[0].tale_of_the_tape['Average Fight Time'][f76],
                                                                                  avgSubPer15: responseJune10.data[0].tale_of_the_tape['Submission Average/15 min.'][f76],
                                                                                  takedownAcc: responseJune10.data[0].tale_of_the_tape['Takedown Accuracy'][f76],
                                                                                  takedownDef: responseJune10.data[0].tale_of_the_tape['Takedown Defense'][f76],
                                                                                  avgTakedownsPer15: responseJune10.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f76],
                                                                                  dob: responseJune10.data[0].tale_of_the_tape.DOB[f76],
                                                                                  height: responseJune10.data[0].tale_of_the_tape.Height[f76],
                                                                                  id: 76,
                                                                                  matchupId: 38,                        
                                                                                  record: responseJune10.data[0].tale_of_the_tape['Wins/Losses/Draws'][f76],
                                                                                 
                                                                              }),
                                                                                Fighter.create({
                                                                                  //Charles Oliveira
                                                                                  name: responseJune10.data[1].matchup[0],
                                                                                  defense: responseJune10.data[1].tale_of_the_tape.Defense[f77],
                                                                                  reach: responseJune10.data[1].tale_of_the_tape.Reach[f77],
                                                                                  strikesAbsorbedPerMin: responseJune10.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f77],
                                                                                  strikesLandedPerMin: responseJune10.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f77],
                                                                                  avgFightTime: responseJune10.data[1].tale_of_the_tape['Average Fight Time'][f77],
                                                                                  avgSubPer15: responseJune10.data[1].tale_of_the_tape['Submission Average/15 min.'][f77],
                                                                                  takedownAcc: responseJune10.data[1].tale_of_the_tape['Takedown Accuracy'][f77],
                                                                                  takedownDef: responseJune10.data[1].tale_of_the_tape['Takedown Defense'][f77],
                                                                                  avgTakedownsPer15: responseJune10.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f77],
                                                                                  dob: responseJune10.data[1].tale_of_the_tape.DOB[f77],
                                                                                  height: responseJune10.data[1].tale_of_the_tape.Height[f77],
                                                                                  id: 77,
                                                                                  matchupId: 39,
                                                                                  record: responseJune10.data[1].tale_of_the_tape['Wins/Losses/Draws'][f77],
                                                                                }),
                                                                                Fighter.create({
                                                                                  //Beneil Dariush
                                                                                    name: responseJune10.data[1].matchup[1],
                                                                                    defense: responseJune10.data[1].tale_of_the_tape.Defense[f78],
                                                                                    reach: responseJune10.data[1].tale_of_the_tape.Reach[f78],
                                                                                    strikesAbsorbedPerMin: responseJune10.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f78],
                                                                                    strikesLandedPerMin: responseJune10.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f78],
                                                                                    avgFightTime: responseJune10.data[1].tale_of_the_tape['Average Fight Time'][f78],
                                                                                    avgSubPer15: responseJune10.data[1].tale_of_the_tape['Submission Average/15 min.'][f78],
                                                                                    takedownAcc: responseJune10.data[1].tale_of_the_tape['Takedown Accuracy'][f78],
                                                                                    takedownDef: responseJune10.data[1].tale_of_the_tape['Takedown Defense'][f78],
                                                                                    avgTakedownsPer15: responseJune10.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f78],
                                                                                    dob: responseJune10.data[1].tale_of_the_tape.DOB[f78],
                                                                                    height: responseJune10.data[1].tale_of_the_tape.Height[f78],
                                                                                    id: 78,
                                                                                    matchupId: 39,
                                                                                    record: responseJune10.data[1].tale_of_the_tape['Wins/Losses/Draws'][f78],   
                                                                                }),
                                                                                  Fighter.create({
                                                                                    //Mike Malott
                                                                                    name: responseJune10.data[2].matchup[0],
                                                                                    defense: responseJune10.data[2].tale_of_the_tape.Defense[f79],
                                                                                    reach: responseJune10.data[2].tale_of_the_tape.Reach[f79],
                                                                                    strikesAbsorbedPerMin: responseJune10.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f79],
                                                                                    strikesLandedPerMin: responseJune10.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f79],
                                                                                    avgFightTime: responseJune10.data[2].tale_of_the_tape['Average Fight Time'][f79],
                                                                                    avgSubPer15: responseJune10.data[2].tale_of_the_tape['Submission Average/15 min.'][f79],
                                                                                    takedownAcc: responseJune10.data[2].tale_of_the_tape['Takedown Accuracy'][f79],
                                                                                    takedownDef: responseJune10.data[2].tale_of_the_tape['Takedown Defense'][f79],
                                                                                    avgTakedownsPer15: responseJune10.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f79],
                                                                                    dob: responseJune10.data[2].tale_of_the_tape.DOB[f79],
                                                                                    height: responseJune10.data[2].tale_of_the_tape.Height[f79],
                                                                                    id: 79,
                                                                                    matchupId: 40,
                                                                                    record: responseJune10.data[2].tale_of_the_tape['Wins/Losses/Draws'][f79],
                                                                                  }),
                                                                                  Fighter.create({
                                                                                    //Adam Fugitt
                                                                                      name: responseJune10.data[2].matchup[1],
                                                                                      defense: responseJune10.data[2].tale_of_the_tape.Defense[f80],
                                                                                      reach: responseJune10.data[2].tale_of_the_tape.Reach[f80],
                                                                                      strikesAbsorbedPerMin: responseJune10.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f80],
                                                                                      strikesLandedPerMin: responseJune10.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f80],
                                                                                      avgFightTime: responseJune10.data[2].tale_of_the_tape['Average Fight Time'][f80],
                                                                                      avgSubPer15: responseJune10.data[2].tale_of_the_tape['Submission Average/15 min.'][f80],
                                                                                      takedownAcc: responseJune10.data[2].tale_of_the_tape['Takedown Accuracy'][f80],
                                                                                      takedownDef: responseJune10.data[2].tale_of_the_tape['Takedown Defense'][f80],
                                                                                      avgTakedownsPer15: responseJune10.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f80],
                                                                                      dob: responseJune10.data[2].tale_of_the_tape.DOB[f80],
                                                                                      height: responseJune10.data[2].tale_of_the_tape.Height[f80],
                                                                                      id: 80,
                                                                                      matchupId: 40,
                                                                                      record: responseJune10.data[2].tale_of_the_tape['Wins/Losses/Draws'][f80],
                                                                                  }),
                                                                                    Fighter.create({
                                                                                      //Dan Ige
                                                                                      name: responseJune10.data[3].matchup[0],
                                                                                      defense: responseJune10.data[3].tale_of_the_tape.Defense[f81],
                                                                                      reach: responseJune10.data[3].tale_of_the_tape.Reach[f81],
                                                                                      strikesAbsorbedPerMin: responseJune10.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f81],
                                                                                      strikesLandedPerMin: responseJune10.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f81],
                                                                                      avgFightTime: responseJune10.data[3].tale_of_the_tape['Average Fight Time'][f81],
                                                                                      avgSubPer15: responseJune10.data[3].tale_of_the_tape['Submission Average/15 min.'][f81],
                                                                                      takedownAcc: responseJune10.data[3].tale_of_the_tape['Takedown Accuracy'][f81],
                                                                                      takedownDef: responseJune10.data[3].tale_of_the_tape['Takedown Defense'][f81],
                                                                                      avgTakedownsPer15: responseJune10.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f81],
                                                                                      dob: responseJune10.data[3].tale_of_the_tape.DOB[f81],
                                                                                      height: responseJune10.data[3].tale_of_the_tape.Height[f81],
                                                                                      id: 81,
                                                                                      matchupId: 41,
                                                                                      record: responseJune10.data[3].tale_of_the_tape['Wins/Losses/Draws'][f81],     
                                                                                    }),
                                                                                    Fighter.create({
                                                                                      //Nate Landwehr
                                                                                        name: responseJune10.data[3].matchup[1],
                                                                                        defense: responseJune10.data[3].tale_of_the_tape.Defense[f82],
                                                                                        reach: responseJune10.data[3].tale_of_the_tape.Reach[f82],
                                                                                        strikesAbsorbedPerMin: responseJune10.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f82],
                                                                                        strikesLandedPerMin: responseJune10.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f82],
                                                                                        avgFightTime: responseJune10.data[3].tale_of_the_tape['Average Fight Time'][f82],
                                                                                        avgSubPer15: responseJune10.data[3].tale_of_the_tape['Submission Average/15 min.'][f82],
                                                                                        takedownAcc: responseJune10.data[3].tale_of_the_tape['Takedown Accuracy'][f82],
                                                                                        takedownDef: responseJune10.data[3].tale_of_the_tape['Takedown Defense'][f82],
                                                                                        avgTakedownsPer15: responseJune10.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f82],
                                                                                        dob: responseJune10.data[3].tale_of_the_tape.DOB[f82],
                                                                                        height: responseJune10.data[3].tale_of_the_tape.Height[f82],
                                                                                        id: 82,
                                                                                        matchupId: 41,
                                                                                        record: responseJune10.data[3].tale_of_the_tape['Wins/Losses/Draws'][f82],                                                          
                                                                                    }),
                                                                                      Fighter.create({
                                                                                        //Marc-Andre Barriault
                                                                                        name: responseJune10.data[4].matchup[0],
                                                                                        defense: responseJune10.data[4].tale_of_the_tape.Defense[f83],
                                                                                        reach: responseJune10.data[4].tale_of_the_tape.Reach[f83],
                                                                                        strikesAbsorbedPerMin: responseJune10.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f83],
                                                                                        strikesLandedPerMin: responseJune10.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f83],
                                                                                        avgFightTime: responseJune10.data[4].tale_of_the_tape['Average Fight Time'][f83],
                                                                                        avgSubPer15: responseJune10.data[4].tale_of_the_tape['Submission Average/15 min.'][f83],
                                                                                        takedownAcc: responseJune10.data[4].tale_of_the_tape['Takedown Accuracy'][f83],
                                                                                        takedownDef: responseJune10.data[4].tale_of_the_tape['Takedown Defense'][f83],
                                                                                        avgTakedownsPer15: responseJune10.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f83],
                                                                                        dob: responseJune10.data[4].tale_of_the_tape.DOB[f83],
                                                                                        height: responseJune10.data[4].tale_of_the_tape.Height[f83],
                                                                                        id: 83,
                                                                                        matchupId: 42,
                                                                                        record: responseJune10.data[4].tale_of_the_tape['Wins/Losses/Draws'][f83],                                                          
                                                                                      }),
                                                                                      Fighter.create({
                                                                                        //Eryk Anders
                                                                                          name: responseJune10.data[4].matchup[1],
                                                                                          defense: responseJune10.data[4].tale_of_the_tape.Defense[f84],
                                                                                          reach: responseJune10.data[4].tale_of_the_tape.Reach[f84],
                                                                                          strikesAbsorbedPerMin: responseJune10.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f84],
                                                                                          strikesLandedPerMin: responseJune10.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f84],
                                                                                          avgFightTime: responseJune10.data[4].tale_of_the_tape['Average Fight Time'][f84],
                                                                                          avgSubPer15: responseJune10.data[4].tale_of_the_tape['Submission Average/15 min.'][f84],
                                                                                          takedownAcc: responseJune10.data[4].tale_of_the_tape['Takedown Accuracy'][f84],
                                                                                          takedownDef: responseJune10.data[4].tale_of_the_tape['Takedown Defense'][f84],
                                                                                          avgTakedownsPer15: responseJune10.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f84],
                                                                                          dob: responseJune10.data[4].tale_of_the_tape.DOB[f84],
                                                                                          height: responseJune10.data[4].tale_of_the_tape.Height[f84],
                                                                                          id: 84,
                                                                                          matchupId: 42,
                                                                                          record: responseJune10.data[4].tale_of_the_tape['Wins/Losses/Draws'][f84],                                                                    
                                                                                      }),
                                                                                        Fighter.create({
                                                                                          //Nassourdine Imavov
                                                                                          name: responseJune10.data[5].matchup[0],
                                                                                          defense: responseJune10.data[5].tale_of_the_tape.Defense[f85],
                                                                                          reach: responseJune10.data[5].tale_of_the_tape.Reach[f85],
                                                                                          strikesAbsorbedPerMin: responseJune10.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f85],
                                                                                          strikesLandedPerMin: responseJune10.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f85],
                                                                                          avgFightTime: responseJune10.data[5].tale_of_the_tape['Average Fight Time'][f85],
                                                                                          avgSubPer15: responseJune10.data[5].tale_of_the_tape['Submission Average/15 min.'][f85],
                                                                                          takedownAcc: responseJune10.data[5].tale_of_the_tape['Takedown Accuracy'][f85],
                                                                                          takedownDef: responseJune10.data[5].tale_of_the_tape['Takedown Defense'][f85],
                                                                                          avgTakedownsPer15: responseJune10.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f85],
                                                                                          dob: responseJune10.data[5].tale_of_the_tape.DOB[f85],
                                                                                          height: responseJune10.data[5].tale_of_the_tape.Height[f85],
                                                                                          id: 85,
                                                                                          matchupId: 43,
                                                                                          record: responseJune10.data[5].tale_of_the_tape['Wins/Losses/Draws'][f85],                                                                      
                                                                                        }),
                                                                                        Fighter.create({
                                                                                          //Chris Curtis
                                                                                            name: responseJune10.data[5].matchup[1],
                                                                                            defense: responseJune10.data[5].tale_of_the_tape.Defense[f86],
                                                                                            reach: responseJune10.data[5].tale_of_the_tape.Reach[f86],
                                                                                            strikesAbsorbedPerMin: responseJune10.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f86],
                                                                                            strikesLandedPerMin: responseJune10.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f86],
                                                                                            avgFightTime: responseJune10.data[5].tale_of_the_tape['Average Fight Time'][f86],
                                                                                            avgSubPer15: responseJune10.data[5].tale_of_the_tape['Submission Average/15 min.'][f86],
                                                                                            takedownAcc: responseJune10.data[5].tale_of_the_tape['Takedown Accuracy'][f86],
                                                                                            takedownDef: responseJune10.data[5].tale_of_the_tape['Takedown Defense'][f86],
                                                                                            avgTakedownsPer15: responseJune10.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f86],
                                                                                            dob: responseJune10.data[5].tale_of_the_tape.DOB[f86],
                                                                                            height: responseJune10.data[5].tale_of_the_tape.Height[f86],
                                                                                            id: 86,
                                                                                            matchupId: 43,
                                                                                            record: responseJune10.data[5].tale_of_the_tape['Wins/Losses/Draws'][f86],                                                                 
                                                                                        }),
                                                                                          Fighter.create({
                                                                                            //Miranda Maverick
                                                                                            name: responseJune10.data[6].matchup[0],
                                                                                            defense: responseJune10.data[6].tale_of_the_tape.Defense[f87],
                                                                                            reach: responseJune10.data[6].tale_of_the_tape.Reach[f87],
                                                                                            strikesAbsorbedPerMin: responseJune10.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f87],
                                                                                            strikesLandedPerMin: responseJune10.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f87],
                                                                                            avgFightTime: responseJune10.data[6].tale_of_the_tape['Average Fight Time'][f87],
                                                                                            avgSubPer15: responseJune10.data[6].tale_of_the_tape['Submission Average/15 min.'][f87],
                                                                                            takedownAcc: responseJune10.data[6].tale_of_the_tape['Takedown Accuracy'][f87],
                                                                                            takedownDef: responseJune10.data[6].tale_of_the_tape['Takedown Defense'][f87],
                                                                                            avgTakedownsPer15: responseJune10.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f87],
                                                                                            dob: responseJune10.data[6].tale_of_the_tape.DOB[f87],
                                                                                            height: responseJune10.data[6].tale_of_the_tape.Height[f87],
                                                                                            id: 87,
                                                                                            matchupId: 44,
                                                                                            record: responseJune10.data[6].tale_of_the_tape['Wins/Losses/Draws'][f87],                                                             
                                                                                          }),
                                                                                          Fighter.create({
                                                                                            //Jasmine Jasudavicius
                                                                                              name: responseJune10.data[6].matchup[1],
                                                                                              defense: responseJune10.data[6].tale_of_the_tape.Defense[f88],
                                                                                              reach: responseJune10.data[6].tale_of_the_tape.Reach[f88],
                                                                                              strikesAbsorbedPerMin: responseJune10.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f88],
                                                                                              strikesLandedPerMin: responseJune10.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f88],
                                                                                              avgFightTime: responseJune10.data[6].tale_of_the_tape['Average Fight Time'][f88],
                                                                                              avgSubPer15: responseJune10.data[6].tale_of_the_tape['Submission Average/15 min.'][f88],
                                                                                              takedownAcc: responseJune10.data[6].tale_of_the_tape['Takedown Accuracy'][f88],
                                                                                              takedownDef: responseJune10.data[6].tale_of_the_tape['Takedown Defense'][f88],
                                                                                              avgTakedownsPer15: responseJune10.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f88],
                                                                                              dob: responseJune10.data[6].tale_of_the_tape.DOB[f88],
                                                                                              height: responseJune10.data[6].tale_of_the_tape.Height[f88],
                                                                                              id: 88,
                                                                                              matchupId: 44,
                                                                                              record: responseJune10.data[6].tale_of_the_tape['Wins/Losses/Draws'][f88],                                                                       
                                                                                          }),
                                                                                            Fighter.create({
                                                                                              //Aiemann Zahabi
                                                                                              name: responseJune10.data[7].matchup[0],
                                                                                              defense: responseJune10.data[7].tale_of_the_tape.Defense[f89],
                                                                                              reach: responseJune10.data[7].tale_of_the_tape.Reach[f89],
                                                                                              strikesAbsorbedPerMin: responseJune10.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f89],
                                                                                              strikesLandedPerMin: responseJune10.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f89],
                                                                                              avgFightTime: responseJune10.data[7].tale_of_the_tape['Average Fight Time'][f89],
                                                                                              avgSubPer15: responseJune10.data[7].tale_of_the_tape['Submission Average/15 min.'][f89],
                                                                                              takedownAcc: responseJune10.data[7].tale_of_the_tape['Takedown Accuracy'][f89],
                                                                                              takedownDef: responseJune10.data[7].tale_of_the_tape['Takedown Defense'][f89],
                                                                                              avgTakedownsPer15: responseJune10.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f89],
                                                                                              dob: responseJune10.data[7].tale_of_the_tape.DOB[f89],
                                                                                              height: responseJune10.data[7].tale_of_the_tape.Height[f89],
                                                                                              id: 89,
                                                                                              matchupId: 45,
                                                                                              record: responseJune10.data[7].tale_of_the_tape['Wins/Losses/Draws'][f89],                                                                
                                                                                          }),
                                                                                            Fighter.create({
                                                                                              //Aoriqileng
                                                                                                name: responseJune10.data[7].matchup[1],
                                                                                                defense: responseJune10.data[7].tale_of_the_tape.Defense[f90],
                                                                                                reach: responseJune10.data[7].tale_of_the_tape.Reach[f90],
                                                                                                strikesAbsorbedPerMin: responseJune10.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f90],
                                                                                                strikesLandedPerMin: responseJune10.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f90],
                                                                                                avgFightTime: responseJune10.data[7].tale_of_the_tape['Average Fight Time'][f90],
                                                                                                avgSubPer15: responseJune10.data[7].tale_of_the_tape['Submission Average/15 min.'][f90],
                                                                                                takedownAcc: responseJune10.data[7].tale_of_the_tape['Takedown Accuracy'][f90],
                                                                                                takedownDef: responseJune10.data[7].tale_of_the_tape['Takedown Defense'][f90],
                                                                                                avgTakedownsPer15: responseJune10.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f90],
                                                                                                dob: responseJune10.data[7].tale_of_the_tape.DOB[f90],
                                                                                                height: responseJune10.data[7].tale_of_the_tape.Height[f90],
                                                                                                id: 90,
                                                                                                matchupId: 45,
                                                                                                record: responseJune10.data[7].tale_of_the_tape['Wins/Losses/Draws'][f90],                                                                   
                                                                                            }),
                                                                                              Fighter.create({
                                                                                                //Kyle Nelson
                                                                                                name: responseJune10.data[8].matchup[0],
                                                                                                defense: responseJune10.data[8].tale_of_the_tape.Defense[f91],
                                                                                                reach: responseJune10.data[8].tale_of_the_tape.Reach[f91],
                                                                                                strikesAbsorbedPerMin: responseJune10.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f91],
                                                                                                strikesLandedPerMin: responseJune10.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f91],
                                                                                                avgFightTime: responseJune10.data[8].tale_of_the_tape['Average Fight Time'][f91],
                                                                                                avgSubPer15: responseJune10.data[8].tale_of_the_tape['Submission Average/15 min.'][f91],
                                                                                                takedownAcc: responseJune10.data[8].tale_of_the_tape['Takedown Accuracy'][f91],
                                                                                                takedownDef: responseJune10.data[8].tale_of_the_tape['Takedown Defense'][f91],
                                                                                                avgTakedownsPer15: responseJune10.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f91],
                                                                                                dob: responseJune10.data[8].tale_of_the_tape.DOB[f91],
                                                                                                height: responseJune10.data[8].tale_of_the_tape.Height[f91],
                                                                                                id: 91,
                                                                                                matchupId: 46,
                                                                                                record: responseJune10.data[8].tale_of_the_tape['Wins/Losses/Draws'][f91],                                                                    
                                                                                              }),
                                                                                              Fighter.create({
                                                                                                //Blake Bilder
                                                                                                  name: responseJune10.data[8].matchup[1],
                                                                                                  defense: responseJune10.data[8].tale_of_the_tape.Defense[f92],
                                                                                                  reach: responseJune10.data[8].tale_of_the_tape.Reach[f92],
                                                                                                  strikesAbsorbedPerMin: responseJune10.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f92],
                                                                                                  strikesLandedPerMin: responseJune10.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f92],
                                                                                                  avgFightTime: responseJune10.data[8].tale_of_the_tape['Average Fight Time'][f92],
                                                                                                  avgSubPer15: responseJune10.data[8].tale_of_the_tape['Submission Average/15 min.'][f92],
                                                                                                  takedownAcc: responseJune10.data[8].tale_of_the_tape['Takedown Accuracy'][f92],
                                                                                                  takedownDef: responseJune10.data[8].tale_of_the_tape['Takedown Defense'][f92],
                                                                                                  avgTakedownsPer15: responseJune10.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f92],
                                                                                                  dob: responseJune10.data[8].tale_of_the_tape.DOB[f92],
                                                                                                  height: responseJune10.data[8].tale_of_the_tape.Height[f92],
                                                                                                  id: 92,
                                                                                                  matchupId: 46,
                                                                                                  record: responseJune10.data[8].tale_of_the_tape['Wins/Losses/Draws'][f92],
                                                                                                  moneyLine: rodrigoNascimento['Moneyline'] 
                                                                                              }),
                                                                                                Fighter.create({
                                                                                                  //David Dvorak
                                                                                                  name: responseJune10.data[9].matchup[0],
                                                                                                  defense: responseJune10.data[9].tale_of_the_tape.Defense[f93],
                                                                                                  reach: responseJune10.data[9].tale_of_the_tape.Reach[f93],
                                                                                                  strikesAbsorbedPerMin: responseJune10.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f93],
                                                                                                  strikesLandedPerMin: responseJune10.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f93],
                                                                                                  avgFightTime: responseJune10.data[9].tale_of_the_tape['Average Fight Time'][f93],
                                                                                                  avgSubPer15: responseJune10.data[9].tale_of_the_tape['Submission Average/15 min.'][f93],
                                                                                                  takedownAcc: responseJune10.data[9].tale_of_the_tape['Takedown Accuracy'][f93],
                                                                                                  takedownDef: responseJune10.data[9].tale_of_the_tape['Takedown Defense'][f93],
                                                                                                  avgTakedownsPer15: responseJune10.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f93],
                                                                                                  dob: responseJune10.data[9].tale_of_the_tape.DOB[f93],
                                                                                                  height: responseJune10.data[9].tale_of_the_tape.Height[f93],
                                                                                                  id: 93,
                                                                                                  matchupId: 47,
                                                                                                  record: responseJune10.data[9].tale_of_the_tape['Wins/Losses/Draws'][f93],                                                                    
                                                                                                }),
                                                                                                Fighter.create({
                                                                                                  //Stephen Erceg
                                                                                                    name: responseJune10.data[9].matchup[1],
                                                                                                    defense: responseJune10.data[9].tale_of_the_tape.Defense[f94],
                                                                                                    reach: responseJune10.data[9].tale_of_the_tape.Reach[f94],
                                                                                                    strikesAbsorbedPerMin: responseJune10.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f94],
                                                                                                    strikesLandedPerMin: responseJune10.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f94],
                                                                                                    avgFightTime: responseJune10.data[9].tale_of_the_tape['Average Fight Time'][f94],
                                                                                                    avgSubPer15: responseJune10.data[9].tale_of_the_tape['Submission Average/15 min.'][f94],
                                                                                                    takedownAcc: responseJune10.data[9].tale_of_the_tape['Takedown Accuracy'][f94],
                                                                                                    takedownDef: responseJune10.data[9].tale_of_the_tape['Takedown Defense'][f94],
                                                                                                    avgTakedownsPer15: responseJune10.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f94],
                                                                                                    dob: responseJune10.data[9].tale_of_the_tape.DOB[f94],
                                                                                                    height: responseJune10.data[9].tale_of_the_tape.Height[f94],
                                                                                                    id: 94,
                                                                                                    matchupId: 47,
                                                                                                    record: responseJune10.data[9].tale_of_the_tape['Wins/Losses/Draws'][f94],                                                                       
                                                                                                  }),
                                                                                                  Fighter.create({
                                                                                                    //Diana Belbita
                                                                                                    name: responseJune10.data[10].matchup[0],
                                                                                                    defense: responseJune10.data[10].tale_of_the_tape.Defense[f95],
                                                                                                    reach: responseJune10.data[10].tale_of_the_tape.Reach[f95],
                                                                                                    strikesAbsorbedPerMin: responseJune10.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f95],
                                                                                                    strikesLandedPerMin: responseJune10.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f95],
                                                                                                    avgFightTime: responseJune10.data[10].tale_of_the_tape['Average Fight Time'][f95],
                                                                                                    avgSubPer15: responseJune10.data[10].tale_of_the_tape['Submission Average/15 min.'][f95],
                                                                                                    takedownAcc: responseJune10.data[10].tale_of_the_tape['Takedown Accuracy'][f95],
                                                                                                    takedownDef: responseJune10.data[10].tale_of_the_tape['Takedown Defense'][f95],
                                                                                                    avgTakedownsPer15: responseJune10.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f95],
                                                                                                    dob: responseJune10.data[10].tale_of_the_tape.DOB[f95],
                                                                                                    height: responseJune10.data[10].tale_of_the_tape.Height[f95],
                                                                                                    id: 95,
                                                                                                    matchupId: 48,
                                                                                                    record: responseJune10.data[10].tale_of_the_tape['Wins/Losses/Draws'][f95],                                                                      
                                                                                                  }),
                                                                                                  Fighter.create({
                                                                                                    //Maria Oliveira
                                                                                                      name: responseJune10.data[10].matchup[1],
                                                                                                      defense: responseJune10.data[10].tale_of_the_tape.Defense[f96],
                                                                                                      reach: responseJune10.data[10].tale_of_the_tape.Reach[f96],
                                                                                                      strikesAbsorbedPerMin: responseJune10.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f96],
                                                                                                      strikesLandedPerMin: responseJune10.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f96],
                                                                                                      avgFightTime: responseJune10.data[10].tale_of_the_tape['Average Fight Time'][f96],
                                                                                                      avgSubPer15: responseJune10.data[10].tale_of_the_tape['Submission Average/15 min.'][f96],
                                                                                                      takedownAcc: responseJune10.data[10].tale_of_the_tape['Takedown Accuracy'][f96],
                                                                                                      takedownDef: responseJune10.data[10].tale_of_the_tape['Takedown Defense'][f96],
                                                                                                      avgTakedownsPer15: responseJune10.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f96],
                                                                                                      dob: responseJune10.data[10].tale_of_the_tape.DOB[f96],
                                                                                                      height: responseJune10.data[10].tale_of_the_tape.Height[f96],
                                                                                                      id: 96,
                                                                                                      matchupId: 48,
                                                                                                      record: responseJune10.data[10].tale_of_the_tape['Wins/Losses/Draws'][f96],                                                                           
                                                                                                  }),
                                                                                                  // Fighter.create({
                                                                                                  //   //Marvin Vettori
                                                                                                  //   name: responseJune17.data[0].matchup[0],
                                                                                                  //   defense: responseJune17.data[0].tale_of_the_tape.Defense[f97],
                                                                                                  //   reach: responseJune17.data[0].tale_of_the_tape.Reach[f97],
                                                                                                  //   strikesAbsorbedPerMin: responseJune17.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f97],
                                                                                                  //   strikesLandedPerMin: responseJune17.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f97],
                                                                                                  //   avgFightTime: responseJune17.data[0].tale_of_the_tape['Average Fight Time'][f97],
                                                                                                  //   avgSubPer15: responseJune17.data[0].tale_of_the_tape['Submission Average/15 min.'][f97],
                                                                                                  //   takedownAcc: responseJune17.data[0].tale_of_the_tape['Takedown Accuracy'][f97],
                                                                                                  //   takedownDef: responseJune17.data[0].tale_of_the_tape['Takedown Defense'][f97],
                                                                                                  //   avgTakedownsPer15: responseJune17.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f97],
                                                                                                  //   dob: responseJune17.data[0].tale_of_the_tape.DOB[f97],
                                                                                                  //   height: responseJune17.data[0].tale_of_the_tape.Height[f97],
                                                                                                  //   id: 97,
                                                                                                  //   matchupId: 49,
                                                                                                  //   record: responseJune17.data[0].tale_of_the_tape['Wins/Losses/Draws'][f97], 
                                                                                                    
                                                                                                  // }),
                                                                                                  // Fighter.create({
                                                                                                  //   //Jared Cannonier
                                                                                                  //     name: responseJune17.data[0].matchup[1],
                                                                                                  //     defense: responseJune17.data[0].tale_of_the_tape.Defense[f98],
                                                                                                  //     reach: responseJune17.data[0].tale_of_the_tape.Reach[f98],
                                                                                                  //     strikesAbsorbedPerMin: responseJune17.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f98],
                                                                                                  //     strikesLandedPerMin: responseJune17.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f98],
                                                                                                  //     avgFightTime: responseJune17.data[0].tale_of_the_tape['Average Fight Time'][f98],
                                                                                                  //     avgSubPer15: responseJune17.data[0].tale_of_the_tape['Submission Average/15 min.'][f98],
                                                                                                  //     takedownAcc: responseJune17.data[0].tale_of_the_tape['Takedown Accuracy'][f98],
                                                                                                  //     takedownDef: responseJune17.data[0].tale_of_the_tape['Takedown Defense'][f98],
                                                                                                  //     avgTakedownsPer15: responseJune17.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f98],
                                                                                                  //     dob: responseJune17.data[0].tale_of_the_tape.DOB[f98],
                                                                                                  //     height: responseJune17.data[0].tale_of_the_tape.Height[f98],
                                                                                                  //     id: 98,
                                                                                                  //     matchupId: 49,                        
                                                                                                  //     record: responseJune17.data[0].tale_of_the_tape['Wins/Losses/Draws'][f98],
                                                                                                     
                                                                                                  // }),
                                                                                                  //   Fighter.create({
                                                                                                  //     //Arman Tsarukyan
                                                                                                  //     name: responseJune17.data[1].matchup[0],
                                                                                                  //     defense: responseJune17.data[1].tale_of_the_tape.Defense[f99],
                                                                                                  //     reach: responseJune17.data[1].tale_of_the_tape.Reach[f99],
                                                                                                  //     strikesAbsorbedPerMin: responseJune17.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f99],
                                                                                                  //     strikesLandedPerMin: responseJune17.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f99],
                                                                                                  //     avgFightTime: responseJune17.data[1].tale_of_the_tape['Average Fight Time'][f99],
                                                                                                  //     avgSubPer15: responseJune17.data[1].tale_of_the_tape['Submission Average/15 min.'][f99],
                                                                                                  //     takedownAcc: responseJune17.data[1].tale_of_the_tape['Takedown Accuracy'][f99],
                                                                                                  //     takedownDef: responseJune17.data[1].tale_of_the_tape['Takedown Defense'][f99],
                                                                                                  //     avgTakedownsPer15: responseJune17.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f99],
                                                                                                  //     dob: responseJune17.data[1].tale_of_the_tape.DOB[f99],
                                                                                                  //     height: responseJune17.data[1].tale_of_the_tape.Height[f99],
                                                                                                  //     id: 99,
                                                                                                  //     matchupId: 50,
                                                                                                  //     record: responseJune17.data[1].tale_of_the_tape['Wins/Losses/Draws'][f99],
                                                                                                  //   }),
                                                                                                  //   Fighter.create({
                                                                                                  //     //Joaquim Silva
                                                                                                  //       name: responseJune17.data[1].matchup[1],
                                                                                                  //       defense: responseJune17.data[1].tale_of_the_tape.Defense[f100],
                                                                                                  //       reach: responseJune17.data[1].tale_of_the_tape.Reach[f100],
                                                                                                  //       strikesAbsorbedPerMin: responseJune17.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f100],
                                                                                                  //       strikesLandedPerMin: responseJune17.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f100],
                                                                                                  //       avgFightTime: responseJune17.data[1].tale_of_the_tape['Average Fight Time'][f100],
                                                                                                  //       avgSubPer15: responseJune17.data[1].tale_of_the_tape['Submission Average/15 min.'][f100],
                                                                                                  //       takedownAcc: responseJune17.data[1].tale_of_the_tape['Takedown Accuracy'][f100],
                                                                                                  //       takedownDef: responseJune17.data[1].tale_of_the_tape['Takedown Defense'][f100],
                                                                                                  //       avgTakedownsPer15: responseJune17.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f100],
                                                                                                  //       dob: responseJune17.data[1].tale_of_the_tape.DOB[f100],
                                                                                                  //       height: responseJune17.data[1].tale_of_the_tape.Height[f100],
                                                                                                  //       id: 100,
                                                                                                  //       matchupId: 50,
                                                                                                  //       record: responseJune17.data[1].tale_of_the_tape['Wins/Losses/Draws'][f100],   
                                                                                                  //   }),
                                                                                                  //     Fighter.create({
                                                                                                  //       //Armen Petrosyan
                                                                                                  //       name: responseJune17.data[2].matchup[0],
                                                                                                  //       defense: responseJune17.data[2].tale_of_the_tape.Defense[f101],
                                                                                                  //       reach: responseJune17.data[2].tale_of_the_tape.Reach[f101],
                                                                                                  //       strikesAbsorbedPerMin: responseJune17.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f101],
                                                                                                  //       strikesLandedPerMin: responseJune17.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f101],
                                                                                                  //       avgFightTime: responseJune17.data[2].tale_of_the_tape['Average Fight Time'][f101],
                                                                                                  //       avgSubPer15: responseJune17.data[2].tale_of_the_tape['Submission Average/15 min.'][f101],
                                                                                                  //       takedownAcc: responseJune17.data[2].tale_of_the_tape['Takedown Accuracy'][f101],
                                                                                                  //       takedownDef: responseJune17.data[2].tale_of_the_tape['Takedown Defense'][f101],
                                                                                                  //       avgTakedownsPer15: responseJune17.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f101],
                                                                                                  //       dob: responseJune17.data[2].tale_of_the_tape.DOB[f101],
                                                                                                  //       height: responseJune17.data[2].tale_of_the_tape.Height[f101],
                                                                                                  //       id: 101,
                                                                                                  //       matchupId: 51,
                                                                                                  //       record: responseJune17.data[2].tale_of_the_tape['Wins/Losses/Draws'][f101],
                                                                                                  //     }),
                                                                                                  //     Fighter.create({
                                                                                                  //       //Christian Duncan
                                                                                                  //         name: responseJune17.data[2].matchup[1],
                                                                                                  //         defense: responseJune17.data[2].tale_of_the_tape.Defense[f102],
                                                                                                  //         reach: responseJune17.data[2].tale_of_the_tape.Reach[f102],
                                                                                                  //         strikesAbsorbedPerMin: responseJune17.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f102],
                                                                                                  //         strikesLandedPerMin: responseJune17.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f102],
                                                                                                  //         avgFightTime: responseJune17.data[2].tale_of_the_tape['Average Fight Time'][f102],
                                                                                                  //         avgSubPer15: responseJune17.data[2].tale_of_the_tape['Submission Average/15 min.'][f102],
                                                                                                  //         takedownAcc: responseJune17.data[2].tale_of_the_tape['Takedown Accuracy'][f102],
                                                                                                  //         takedownDef: responseJune17.data[2].tale_of_the_tape['Takedown Defense'][f102],
                                                                                                  //         avgTakedownsPer15: responseJune17.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f102],
                                                                                                  //         dob: responseJune17.data[2].tale_of_the_tape.DOB[f102],
                                                                                                  //         height: responseJune17.data[2].tale_of_the_tape.Height[f102],
                                                                                                  //         id: 102,
                                                                                                  //         matchupId: 51,
                                                                                                  //         record: responseJune17.data[2].tale_of_the_tape['Wins/Losses/Draws'][f102],
                                                                                                  //     }),
                                                                                                  //       Fighter.create({
                                                                                                  //         //Pat Sabatini
                                                                                                  //         name: responseJune17.data[3].matchup[0],
                                                                                                  //         defense: responseJune17.data[3].tale_of_the_tape.Defense[f103],
                                                                                                  //         reach: responseJune17.data[3].tale_of_the_tape.Reach[f103],
                                                                                                  //         strikesAbsorbedPerMin: responseJune17.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f103],
                                                                                                  //         strikesLandedPerMin: responseJune17.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f103],
                                                                                                  //         avgFightTime: responseJune17.data[3].tale_of_the_tape['Average Fight Time'][f103],
                                                                                                  //         avgSubPer15: responseJune17.data[3].tale_of_the_tape['Submission Average/15 min.'][f103],
                                                                                                  //         takedownAcc: responseJune17.data[3].tale_of_the_tape['Takedown Accuracy'][f103],
                                                                                                  //         takedownDef: responseJune17.data[3].tale_of_the_tape['Takedown Defense'][f103],
                                                                                                  //         avgTakedownsPer15: responseJune17.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f103],
                                                                                                  //         dob: responseJune17.data[3].tale_of_the_tape.DOB[f103],
                                                                                                  //         height: responseJune17.data[3].tale_of_the_tape.Height[f103],
                                                                                                  //         id: 103,
                                                                                                  //         matchupId: 52,
                                                                                                  //         record: responseJune17.data[3].tale_of_the_tape['Wins/Losses/Draws'][f103],     
                                                                                                  //       }),
                                                                                                  //       Fighter.create({
                                                                                                  //         //Lucas Almeida
                                                                                                  //           name: responseJune17.data[3].matchup[1],
                                                                                                  //           defense: responseJune17.data[3].tale_of_the_tape.Defense[f104],
                                                                                                  //           reach: responseJune17.data[3].tale_of_the_tape.Reach[f104],
                                                                                                  //           strikesAbsorbedPerMin: responseJune17.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f104],
                                                                                                  //           strikesLandedPerMin: responseJune17.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f104],
                                                                                                  //           avgFightTime: responseJune17.data[3].tale_of_the_tape['Average Fight Time'][f104],
                                                                                                  //           avgSubPer15: responseJune17.data[3].tale_of_the_tape['Submission Average/15 min.'][f104],
                                                                                                  //           takedownAcc: responseJune17.data[3].tale_of_the_tape['Takedown Accuracy'][f104],
                                                                                                  //           takedownDef: responseJune17.data[3].tale_of_the_tape['Takedown Defense'][f104],
                                                                                                  //           avgTakedownsPer15: responseJune17.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f104],
                                                                                                  //           dob: responseJune17.data[3].tale_of_the_tape.DOB[f104],
                                                                                                  //           height: responseJune17.data[3].tale_of_the_tape.Height[f104],
                                                                                                  //           id: 104,
                                                                                                  //           matchupId: 52,
                                                                                                  //           record: responseJune17.data[3].tale_of_the_tape['Wins/Losses/Draws'][f104],                                                          
                                                                                                  //       }),
                                                                                                  //         Fighter.create({
                                                                                                  //           //Manuel Torres
                                                                                                  //           name: responseJune17.data[4].matchup[0],
                                                                                                  //           defense: responseJune17.data[4].tale_of_the_tape.Defense[f105],
                                                                                                  //           reach: responseJune17.data[4].tale_of_the_tape.Reach[f105],
                                                                                                  //           strikesAbsorbedPerMin: responseJune17.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f105],
                                                                                                  //           strikesLandedPerMin: responseJune17.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f105],
                                                                                                  //           avgFightTime: responseJune17.data[4].tale_of_the_tape['Average Fight Time'][f105],
                                                                                                  //           avgSubPer15: responseJune17.data[4].tale_of_the_tape['Submission Average/15 min.'][f105],
                                                                                                  //           takedownAcc: responseJune17.data[4].tale_of_the_tape['Takedown Accuracy'][f105],
                                                                                                  //           takedownDef: responseJune17.data[4].tale_of_the_tape['Takedown Defense'][f105],
                                                                                                  //           avgTakedownsPer15: responseJune17.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f105],
                                                                                                  //           dob: responseJune17.data[4].tale_of_the_tape.DOB[f105],
                                                                                                  //           height: responseJune17.data[4].tale_of_the_tape.Height[f105],
                                                                                                  //           id: 105,
                                                                                                  //           matchupId: 53,
                                                                                                  //           record: responseJune17.data[4].tale_of_the_tape['Wins/Losses/Draws'][f105],                                                          
                                                                                                  //         }),
                                                                                                  //         Fighter.create({
                                                                                                  //           //Nikolas Motta
                                                                                                  //             name: responseJune17.data[4].matchup[1],
                                                                                                  //             defense: responseJune17.data[4].tale_of_the_tape.Defense[f106],
                                                                                                  //             reach: responseJune17.data[4].tale_of_the_tape.Reach[f106],
                                                                                                  //             strikesAbsorbedPerMin: responseJune17.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f106],
                                                                                                  //             strikesLandedPerMin: responseJune17.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f106],
                                                                                                  //             avgFightTime: responseJune17.data[4].tale_of_the_tape['Average Fight Time'][f106],
                                                                                                  //             avgSubPer15: responseJune17.data[4].tale_of_the_tape['Submission Average/15 min.'][f106],
                                                                                                  //             takedownAcc: responseJune17.data[4].tale_of_the_tape['Takedown Accuracy'][f106],
                                                                                                  //             takedownDef: responseJune17.data[4].tale_of_the_tape['Takedown Defense'][f106],
                                                                                                  //             avgTakedownsPer15: responseJune17.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f106],
                                                                                                  //             dob: responseJune17.data[4].tale_of_the_tape.DOB[f106],
                                                                                                  //             height: responseJune17.data[4].tale_of_the_tape.Height[f106],
                                                                                                  //             id: 106,
                                                                                                  //             matchupId: 53,
                                                                                                  //             record: responseJune17.data[4].tale_of_the_tape['Wins/Losses/Draws'][f106],                                                                    
                                                                                                  //         }),
                                                                                                  //           Fighter.create({
                                                                                                  //             //Nicolas Dalby
                                                                                                  //             name: responseJune17.data[5].matchup[0],
                                                                                                  //             defense: responseJune17.data[5].tale_of_the_tape.Defense[f107],
                                                                                                  //             reach: responseJune17.data[5].tale_of_the_tape.Reach[f107],
                                                                                                  //             strikesAbsorbedPerMin: responseJune17.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f107],
                                                                                                  //             strikesLandedPerMin: responseJune17.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f107],
                                                                                                  //             avgFightTime: responseJune17.data[5].tale_of_the_tape['Average Fight Time'][f107],
                                                                                                  //             avgSubPer15: responseJune17.data[5].tale_of_the_tape['Submission Average/15 min.'][f107],
                                                                                                  //             takedownAcc: responseJune17.data[5].tale_of_the_tape['Takedown Accuracy'][f107],
                                                                                                  //             takedownDef: responseJune17.data[5].tale_of_the_tape['Takedown Defense'][f107],
                                                                                                  //             avgTakedownsPer15: responseJune17.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f107],
                                                                                                  //             dob: responseJune17.data[5].tale_of_the_tape.DOB[f107],
                                                                                                  //             height: responseJune17.data[5].tale_of_the_tape.Height[f107],
                                                                                                  //             id: 107,
                                                                                                  //             matchupId: 54,
                                                                                                  //             record: responseJune17.data[5].tale_of_the_tape['Wins/Losses/Draws'][f107],                                                                      
                                                                                                  //           }),
                                                                                                  //           Fighter.create({
                                                                                                  //             //Muslim Salikhov
                                                                                                  //               name: responseJune17.data[5].matchup[1],
                                                                                                  //               defense: responseJune17.data[5].tale_of_the_tape.Defense[f108],
                                                                                                  //               reach: responseJune17.data[5].tale_of_the_tape.Reach[f108],
                                                                                                  //               strikesAbsorbedPerMin: responseJune17.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f108],
                                                                                                  //               strikesLandedPerMin: responseJune17.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f108],
                                                                                                  //               avgFightTime: responseJune17.data[5].tale_of_the_tape['Average Fight Time'][f108],
                                                                                                  //               avgSubPer15: responseJune17.data[5].tale_of_the_tape['Submission Average/15 min.'][f108],
                                                                                                  //               takedownAcc: responseJune17.data[5].tale_of_the_tape['Takedown Accuracy'][f108],
                                                                                                  //               takedownDef: responseJune17.data[5].tale_of_the_tape['Takedown Defense'][f108],
                                                                                                  //               avgTakedownsPer15: responseJune17.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f108],
                                                                                                  //               dob: responseJune17.data[5].tale_of_the_tape.DOB[f108],
                                                                                                  //               height: responseJune17.data[5].tale_of_the_tape.Height[f108],
                                                                                                  //               id: 108,
                                                                                                  //               matchupId: 54,
                                                                                                  //               record: responseJune17.data[5].tale_of_the_tape['Wins/Losses/Draws'][f108],                                                                 
                                                                                                  //           }),
                                                                                                  //             Fighter.create({
                                                                                                  //               //Raoni Barcelos
                                                                                                  //               name: responseJune17.data[6].matchup[0],
                                                                                                  //               defense: responseJune17.data[6].tale_of_the_tape.Defense[f109],
                                                                                                  //               reach: responseJune17.data[6].tale_of_the_tape.Reach[f109],
                                                                                                  //               strikesAbsorbedPerMin: responseJune17.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f109],
                                                                                                  //               strikesLandedPerMin: responseJune17.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f109],
                                                                                                  //               avgFightTime: responseJune17.data[6].tale_of_the_tape['Average Fight Time'][f109],
                                                                                                  //               avgSubPer15: responseJune17.data[6].tale_of_the_tape['Submission Average/15 min.'][f109],
                                                                                                  //               takedownAcc: responseJune17.data[6].tale_of_the_tape['Takedown Accuracy'][f109],
                                                                                                  //               takedownDef: responseJune17.data[6].tale_of_the_tape['Takedown Defense'][f109],
                                                                                                  //               avgTakedownsPer15: responseJune17.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f109],
                                                                                                  //               dob: responseJune17.data[6].tale_of_the_tape.DOB[f109],
                                                                                                  //               height: responseJune17.data[6].tale_of_the_tape.Height[f109],
                                                                                                  //               id: 109,
                                                                                                  //               matchupId: 55,
                                                                                                  //               record: responseJune17.data[6].tale_of_the_tape['Wins/Losses/Draws'][f109],                                                             
                                                                                                  //             }),
                                                                                                  //             Fighter.create({
                                                                                                  //               //Miles Johns
                                                                                                  //                 name: responseJune17.data[6].matchup[1],
                                                                                                  //                 defense: responseJune17.data[6].tale_of_the_tape.Defense[f110],
                                                                                                  //                 reach: responseJune17.data[6].tale_of_the_tape.Reach[f110],
                                                                                                  //                 strikesAbsorbedPerMin: responseJune17.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f110],
                                                                                                  //                 strikesLandedPerMin: responseJune17.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f110],
                                                                                                  //                 avgFightTime: responseJune17.data[6].tale_of_the_tape['Average Fight Time'][f110],
                                                                                                  //                 avgSubPer15: responseJune17.data[6].tale_of_the_tape['Submission Average/15 min.'][f110],
                                                                                                  //                 takedownAcc: responseJune17.data[6].tale_of_the_tape['Takedown Accuracy'][f110],
                                                                                                  //                 takedownDef: responseJune17.data[6].tale_of_the_tape['Takedown Defense'][f110],
                                                                                                  //                 avgTakedownsPer15: responseJune17.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f110],
                                                                                                  //                 dob: responseJune17.data[6].tale_of_the_tape.DOB[f110],
                                                                                                  //                 height: responseJune17.data[6].tale_of_the_tape.Height[f110],
                                                                                                  //                 id: 110,
                                                                                                  //                 matchupId: 55,
                                                                                                  //                 record: responseJune17.data[6].tale_of_the_tape['Wins/Losses/Draws'][f110],                                                                       
                                                                                                  //             }),
                                                                                                  //               Fighter.create({
                                                                                                  //                 //Jimmy Flick
                                                                                                  //                 name: responseJune17.data[7].matchup[0],
                                                                                                  //                 defense: responseJune17.data[7].tale_of_the_tape.Defense[f111],
                                                                                                  //                 reach: responseJune17.data[7].tale_of_the_tape.Reach[f111],
                                                                                                  //                 strikesAbsorbedPerMin: responseJune17.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f111],
                                                                                                  //                 strikesLandedPerMin: responseJune17.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f111],
                                                                                                  //                 avgFightTime: responseJune17.data[7].tale_of_the_tape['Average Fight Time'][f111],
                                                                                                  //                 avgSubPer15: responseJune17.data[7].tale_of_the_tape['Submission Average/15 min.'][f111],
                                                                                                  //                 takedownAcc: responseJune17.data[7].tale_of_the_tape['Takedown Accuracy'][f111],
                                                                                                  //                 takedownDef: responseJune17.data[7].tale_of_the_tape['Takedown Defense'][f111],
                                                                                                  //                 avgTakedownsPer15: responseJune17.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f111],
                                                                                                  //                 dob: responseJune17.data[7].tale_of_the_tape.DOB[f111],
                                                                                                  //                 height: responseJune17.data[7].tale_of_the_tape.Height[f111],
                                                                                                  //                 id: 111,
                                                                                                  //                 matchupId: 56,
                                                                                                  //                 record: responseJune17.data[7].tale_of_the_tape['Wins/Losses/Draws'][f111],                                                                
                                                                                                  //             }),
                                                                                                  //               Fighter.create({
                                                                                                  //                 //Alessandro Costa
                                                                                                  //                   name: responseJune17.data[7].matchup[1],
                                                                                                  //                   defense: responseJune17.data[7].tale_of_the_tape.Defense[f112],
                                                                                                  //                   reach: responseJune17.data[7].tale_of_the_tape.Reach[f112],
                                                                                                  //                   strikesAbsorbedPerMin: responseJune17.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f112],
                                                                                                  //                   strikesLandedPerMin: responseJune17.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f112],
                                                                                                  //                   avgFightTime: responseJune17.data[7].tale_of_the_tape['Average Fight Time'][f112],
                                                                                                  //                   avgSubPer15: responseJune17.data[7].tale_of_the_tape['Submission Average/15 min.'][f112],
                                                                                                  //                   takedownAcc: responseJune17.data[7].tale_of_the_tape['Takedown Accuracy'][f112],
                                                                                                  //                   takedownDef: responseJune17.data[7].tale_of_the_tape['Takedown Defense'][f112],
                                                                                                  //                   avgTakedownsPer15: responseJune17.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f112],
                                                                                                  //                   dob: responseJune17.data[7].tale_of_the_tape.DOB[f112],
                                                                                                  //                   height: responseJune17.data[7].tale_of_the_tape.Height[f112],
                                                                                                  //                   id: 112,
                                                                                                  //                   matchupId: 56,
                                                                                                  //                   record: responseJune17.data[7].tale_of_the_tape['Wins/Losses/Draws'][f112],                                                                   
                                                                                                  //               }),
                                                                                                  //                 Fighter.create({
                                                                                                  //                   //Kyung Ho Kang
                                                                                                  //                   name: responseJune17.data[8].matchup[0],
                                                                                                  //                   defense: responseJune17.data[8].tale_of_the_tape.Defense[f113],
                                                                                                  //                   reach: responseJune17.data[8].tale_of_the_tape.Reach[f113],
                                                                                                  //                   strikesAbsorbedPerMin: responseJune17.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f113],
                                                                                                  //                   strikesLandedPerMin: responseJune17.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f113],
                                                                                                  //                   avgFightTime: responseJune17.data[8].tale_of_the_tape['Average Fight Time'][f113],
                                                                                                  //                   avgSubPer15: responseJune17.data[8].tale_of_the_tape['Submission Average/15 min.'][f113],
                                                                                                  //                   takedownAcc: responseJune17.data[8].tale_of_the_tape['Takedown Accuracy'][f113],
                                                                                                  //                   takedownDef: responseJune17.data[8].tale_of_the_tape['Takedown Defense'][f113],
                                                                                                  //                   avgTakedownsPer15: responseJune17.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f113],
                                                                                                  //                   dob: responseJune17.data[8].tale_of_the_tape.DOB[f113],
                                                                                                  //                   height: responseJune17.data[8].tale_of_the_tape.Height[f113],
                                                                                                  //                   id: 113,
                                                                                                  //                   matchupId: 57,
                                                                                                  //                   record: responseJune17.data[8].tale_of_the_tape['Wins/Losses/Draws'][f113],                                                                    
                                                                                                  //                 }),
                                                                                                  //                 Fighter.create({
                                                                                                  //                   //Cristian Quinonez
                                                                                                  //                     name: responseJune17.data[8].matchup[1],
                                                                                                  //                     defense: responseJune17.data[8].tale_of_the_tape.Defense[f114],
                                                                                                  //                     reach: responseJune17.data[8].tale_of_the_tape.Reach[f114],
                                                                                                  //                     strikesAbsorbedPerMin: responseJune17.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f114],
                                                                                                  //                     strikesLandedPerMin: responseJune17.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f114],
                                                                                                  //                     avgFightTime: responseJune17.data[8].tale_of_the_tape['Average Fight Time'][f114],
                                                                                                  //                     avgSubPer15: responseJune17.data[8].tale_of_the_tape['Submission Average/15 min.'][f114],
                                                                                                  //                     takedownAcc: responseJune17.data[8].tale_of_the_tape['Takedown Accuracy'][f114],
                                                                                                  //                     takedownDef: responseJune17.data[8].tale_of_the_tape['Takedown Defense'][f114],
                                                                                                  //                     avgTakedownsPer15: responseJune17.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f114],
                                                                                                  //                     dob: responseJune17.data[8].tale_of_the_tape.DOB[f114],
                                                                                                  //                     height: responseJune17.data[8].tale_of_the_tape.Height[f114],
                                                                                                  //                     id: 114,
                                                                                                  //                     matchupId: 57,
                                                                                                  //                     record: responseJune17.data[8].tale_of_the_tape['Wins/Losses/Draws'][f114],
                                                                                                  //                 }),
                                                                                                  //                   Fighter.create({
                                                                                                  //                     //Carlos Hernandez
                                                                                                  //                     name: responseJune17.data[9].matchup[0],
                                                                                                  //                     defense: responseJune17.data[9].tale_of_the_tape.Defense[f115],
                                                                                                  //                     reach: responseJune17.data[9].tale_of_the_tape.Reach[f115],
                                                                                                  //                     strikesAbsorbedPerMin: responseJune17.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f115],
                                                                                                  //                     strikesLandedPerMin: responseJune17.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f115],
                                                                                                  //                     avgFightTime: responseJune17.data[9].tale_of_the_tape['Average Fight Time'][f115],
                                                                                                  //                     avgSubPer15: responseJune17.data[9].tale_of_the_tape['Submission Average/15 min.'][f115],
                                                                                                  //                     takedownAcc: responseJune17.data[9].tale_of_the_tape['Takedown Accuracy'][f115],
                                                                                                  //                     takedownDef: responseJune17.data[9].tale_of_the_tape['Takedown Defense'][f115],
                                                                                                  //                     avgTakedownsPer15: responseJune17.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f115],
                                                                                                  //                     dob: responseJune17.data[9].tale_of_the_tape.DOB[f115],
                                                                                                  //                     height: responseJune17.data[9].tale_of_the_tape.Height[f115],
                                                                                                  //                     id: 115,
                                                                                                  //                     matchupId: 58,
                                                                                                  //                     record: responseJune17.data[9].tale_of_the_tape['Wins/Losses/Draws'][f115],                                                                    
                                                                                                  //                   }),
                                                                                                  //                   Fighter.create({
                                                                                                  //                     //Denys Bondar
                                                                                                  //                       name: responseJune17.data[9].matchup[1],
                                                                                                  //                       defense: responseJune17.data[9].tale_of_the_tape.Defense[f116],
                                                                                                  //                       reach: responseJune17.data[9].tale_of_the_tape.Reach[f116],
                                                                                                  //                       strikesAbsorbedPerMin: responseJune17.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f116],
                                                                                                  //                       strikesLandedPerMin: responseJune17.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f116],
                                                                                                  //                       avgFightTime: responseJune17.data[9].tale_of_the_tape['Average Fight Time'][f116],
                                                                                                  //                       avgSubPer15: responseJune17.data[9].tale_of_the_tape['Submission Average/15 min.'][f116],
                                                                                                  //                       takedownAcc: responseJune17.data[9].tale_of_the_tape['Takedown Accuracy'][f116],
                                                                                                  //                       takedownDef: responseJune17.data[9].tale_of_the_tape['Takedown Defense'][f116],
                                                                                                  //                       avgTakedownsPer15: responseJune17.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f116],
                                                                                                  //                       dob: responseJune17.data[9].tale_of_the_tape.DOB[f116],
                                                                                                  //                       height: responseJune17.data[9].tale_of_the_tape.Height[f116],
                                                                                                  //                       id: 116,
                                                                                                  //                       matchupId: 58,
                                                                                                  //                       record: responseJune17.data[9].tale_of_the_tape['Wins/Losses/Draws'][f116],                                                                       
                                                                                                  //                     }),
                                                                                                  //                     Fighter.create({
                                                                                                  //                       //Zhalgas Zhumagulov
                                                                                                  //                       name: responseJune17.data[10].matchup[0],
                                                                                                  //                       defense: responseJune17.data[10].tale_of_the_tape.Defense[f117],
                                                                                                  //                       reach: responseJune17.data[10].tale_of_the_tape.Reach[f117],
                                                                                                  //                       strikesAbsorbedPerMin: responseJune17.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f117],
                                                                                                  //                       strikesLandedPerMin: responseJune17.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f117],
                                                                                                  //                       avgFightTime: responseJune17.data[10].tale_of_the_tape['Average Fight Time'][f117],
                                                                                                  //                       avgSubPer15: responseJune17.data[10].tale_of_the_tape['Submission Average/15 min.'][f117],
                                                                                                  //                       takedownAcc: responseJune17.data[10].tale_of_the_tape['Takedown Accuracy'][f117],
                                                                                                  //                       takedownDef: responseJune17.data[10].tale_of_the_tape['Takedown Defense'][f117],
                                                                                                  //                       avgTakedownsPer15: responseJune17.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f117],
                                                                                                  //                       dob: responseJune17.data[10].tale_of_the_tape.DOB[f117],
                                                                                                  //                       height: responseJune17.data[10].tale_of_the_tape.Height[f117],
                                                                                                  //                       id: 117,
                                                                                                  //                       matchupId: 59,
                                                                                                  //                       record: responseJune17.data[10].tale_of_the_tape['Wins/Losses/Draws'][f117],                                                                      
                                                                                                  //                     }),
                                                                                                  //                     Fighter.create({
                                                                                                  //                       //Felipe Bunes
                                                                                                  //                         name: responseJune17.data[10].matchup[1],
                                                                                                  //                         defense: responseJune17.data[10].tale_of_the_tape.Defense[f118],
                                                                                                  //                         reach: responseJune17.data[10].tale_of_the_tape.Reach[f118],
                                                                                                  //                         strikesAbsorbedPerMin: responseJune17.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f118],
                                                                                                  //                         strikesLandedPerMin: responseJune17.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f118],
                                                                                                  //                         avgFightTime: responseJune17.data[10].tale_of_the_tape['Average Fight Time'][f118],
                                                                                                  //                         avgSubPer15: responseJune17.data[10].tale_of_the_tape['Submission Average/15 min.'][f118],
                                                                                                  //                         takedownAcc: responseJune17.data[10].tale_of_the_tape['Takedown Accuracy'][f118],
                                                                                                  //                         takedownDef: responseJune17.data[10].tale_of_the_tape['Takedown Defense'][f118],
                                                                                                  //                         avgTakedownsPer15: responseJune17.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f118],
                                                                                                  //                         dob: responseJune17.data[10].tale_of_the_tape.DOB[f118],
                                                                                                  //                         height: responseJune17.data[10].tale_of_the_tape.Height[f118],
                                                                                                  //                         id: 118,
                                                                                                  //                         matchupId: 59,
                                                                                                  //                         record: responseJune17.data[10].tale_of_the_tape['Wins/Losses/Draws'][f118],                                                                           
                                                                                                  //                     }),
                                                                                                  //                     Fighter.create({
                                                                                                  //                       //Tereza Bleda
                                                                                                  //                       name: responseJune17.data[11].matchup[0],
                                                                                                  //                       defense: responseJune17.data[11].tale_of_the_tape.Defense[f119],
                                                                                                  //                       reach: responseJune17.data[11].tale_of_the_tape.Reach[f119],
                                                                                                  //                       strikesAbsorbedPerMin: responseJune17.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f119],
                                                                                                  //                       strikesLandedPerMin: responseJune17.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f119],
                                                                                                  //                       avgFightTime: responseJune17.data[11].tale_of_the_tape['Average Fight Time'][f119],
                                                                                                  //                       avgSubPer15: responseJune17.data[11].tale_of_the_tape['Submission Average/15 min.'][f119],
                                                                                                  //                       takedownAcc: responseJune17.data[11].tale_of_the_tape['Takedown Accuracy'][f119],
                                                                                                  //                       takedownDef: responseJune17.data[11].tale_of_the_tape['Takedown Defense'][f119],
                                                                                                  //                       avgTakedownsPer15: responseJune17.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f119],
                                                                                                  //                       dob: responseJune17.data[11].tale_of_the_tape.DOB[f119],
                                                                                                  //                       height: responseJune17.data[11].tale_of_the_tape.Height[f119],
                                                                                                  //                       id: 119,
                                                                                                  //                       matchupId: 60,
                                                                                                  //                       record: responseJune17.data[11].tale_of_the_tape['Wins/Losses/Draws'][f119],                                                                    
                                                                                                  //                     }),
                                                                                                  //                     Fighter.create({
                                                                                                  //                       //Gabriella Fernandes
                                                                                                  //                         name: responseJune17.data[11].matchup[1],
                                                                                                  //                         defense: responseJune17.data[11].tale_of_the_tape.Defense[f120],
                                                                                                  //                         reach: responseJune17.data[11].tale_of_the_tape.Reach[f120],
                                                                                                  //                         strikesAbsorbedPerMin: responseJune17.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f120],
                                                                                                  //                         strikesLandedPerMin: responseJune17.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f120],
                                                                                                  //                         avgFightTime: responseJune17.data[11].tale_of_the_tape['Average Fight Time'][f120],
                                                                                                  //                         avgSubPer15: responseJune17.data[11].tale_of_the_tape['Submission Average/15 min.'][f120],
                                                                                                  //                         takedownAcc: responseJune17.data[11].tale_of_the_tape['Takedown Accuracy'][f120],
                                                                                                  //                         takedownDef: responseJune17.data[11].tale_of_the_tape['Takedown Defense'][f120],
                                                                                                  //                         avgTakedownsPer15: responseJune17.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f120],
                                                                                                  //                         dob: responseJune17.data[11].tale_of_the_tape.DOB[f120],
                                                                                                  //                         height: responseJune17.data[11].tale_of_the_tape.Height[f120],
                                                                                                  //                         id: 120,
                                                                                                  //                         matchupId: 60,
                                                                                                  //                         record: responseJune17.data[11].tale_of_the_tape['Wins/Losses/Draws'][f120],
                                                                                                                          
                                                                                                  //                     }),
                                                                                                  //                       Fighter.create({
                                                                                                  //                         //Dan Argueta
                                                                                                  //                         name: responseJune17.data[12].matchup[0],
                                                                                                  //                         defense: responseJune17.data[12].tale_of_the_tape.Defense[f121],
                                                                                                  //                         reach: responseJune17.data[12].tale_of_the_tape.Reach[f121],
                                                                                                  //                         strikesAbsorbedPerMin: responseJune17.data[12].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f121],
                                                                                                  //                         strikesLandedPerMin: responseJune17.data[12].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f121],
                                                                                                  //                         avgFightTime: responseJune17.data[12].tale_of_the_tape['Average Fight Time'][f121],
                                                                                                  //                         avgSubPer21: responseJune17.data[12].tale_of_the_tape['Submission Average/15 min.'][f121],
                                                                                                  //                         takedownAcc: responseJune17.data[12].tale_of_the_tape['Takedown Accuracy'][f121],
                                                                                                  //                         takedownDef: responseJune17.data[12].tale_of_the_tape['Takedown Defense'][f121],
                                                                                                  //                         avgTakedownsPer21: responseJune17.data[12].tale_of_the_tape['Takedowns Average/15 min.'][f121],
                                                                                                  //                         dob: responseJune17.data[12].tale_of_the_tape.DOB[f121],
                                                                                                  //                         height: responseJune17.data[12].tale_of_the_tape.Height[f121],
                                                                                                  //                         id: 121,
                                                                                                  //                         matchupId: 61,
                                                                                                  //                         record: responseJune17.data[12].tale_of_the_tape['Wins/Losses/Draws'][f121],                                                                    
                                                                                                  //                       }),
                                                                                                  //                       Fighter.create({
                                                                                                  //                         //Ronnie Lawrence
                                                                                                  //                           name: responseJune17.data[12].matchup[1],
                                                                                                  //                           defense: responseJune17.data[12].tale_of_the_tape.Defense[f122],
                                                                                                  //                           reach: responseJune17.data[12].tale_of_the_tape.Reach[f122],
                                                                                                  //                           strikesAbsorbedPerMin: responseJune17.data[12].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f122],
                                                                                                  //                           strikesLandedPerMin: responseJune17.data[12].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f122],
                                                                                                  //                           avgFightTime: responseJune17.data[12].tale_of_the_tape['Average Fight Time'][f122],
                                                                                                  //                           avgSubPer15: responseJune17.data[12].tale_of_the_tape['Submission Average/15 min.'][f122],
                                                                                                  //                           takedownAcc: responseJune17.data[12].tale_of_the_tape['Takedown Accuracy'][f122],
                                                                                                  //                           takedownDef: responseJune17.data[12].tale_of_the_tape['Takedown Defense'][f122],
                                                                                                  //                           avgTakedownsPer15: responseJune17.data[12].tale_of_the_tape['Takedowns Average/15 min.'][f122],
                                                                                                  //                           dob: responseJune17.data[12].tale_of_the_tape.DOB[f122],
                                                                                                  //                           height: responseJune17.data[12].tale_of_the_tape.Height[f122],
                                                                                                  //                           id: 122,
                                                                                                  //                           matchupId: 61,
                                                                                                  //                           record: responseJune17.data[12].tale_of_the_tape['Wins/Losses/Draws'][f122],                                                                       
                                                                                                  //                         }),
                                                                                                  //                         Fighter.create({
                                                                                                  //                           //Zac Pauga
                                                                                                  //                           name: responseJune17.data[13].matchup[0],
                                                                                                  //                           defense: responseJune17.data[13].tale_of_the_tape.Defense[f123],
                                                                                                  //                           reach: responseJune17.data[13].tale_of_the_tape.Reach[f123],
                                                                                                  //                           strikesAbsorbedPerMin: responseJune17.data[13].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f123],
                                                                                                  //                           strikesLandedPerMin: responseJune17.data[13].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f123],
                                                                                                  //                           avgFightTime: responseJune17.data[13].tale_of_the_tape['Average Fight Time'][f123],
                                                                                                  //                           avgSubPer15: responseJune17.data[13].tale_of_the_tape['Submission Average/15 min.'][f123],
                                                                                                  //                           takedownAcc: responseJune17.data[13].tale_of_the_tape['Takedown Accuracy'][f123],
                                                                                                  //                           takedownDef: responseJune17.data[13].tale_of_the_tape['Takedown Defense'][f123],
                                                                                                  //                           avgTakedownsPer15: responseJune17.data[13].tale_of_the_tape['Takedowns Average/15 min.'][f123],
                                                                                                  //                           dob: responseJune17.data[13].tale_of_the_tape.DOB[f123],
                                                                                                  //                           height: responseJune17.data[13].tale_of_the_tape.Height[f123],
                                                                                                  //                           id: 123,
                                                                                                  //                           matchupId: 62,
                                                                                                  //                           record: responseJune17.data[13].tale_of_the_tape['Wins/Losses/Draws'][f123],                                                                      
                                                                                                  //                         }),
                                                                                                  //                         Fighter.create({
                                                                                                  //                           //Modestas Bukauskas
                                                                                                  //                             name: responseJune17.data[13].matchup[1],
                                                                                                  //                             defense: responseJune17.data[13].tale_of_the_tape.Defense[f124],
                                                                                                  //                             reach: responseJune17.data[13].tale_of_the_tape.Reach[f124],
                                                                                                  //                             strikesAbsorbedPerMin: responseJune17.data[13].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f124],
                                                                                                  //                             strikesLandedPerMin: responseJune17.data[13].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f124],
                                                                                                  //                             avgFightTime: responseJune17.data[13].tale_of_the_tape['Average Fight Time'][f124],
                                                                                                  //                             avgSubPer15: responseJune17.data[13].tale_of_the_tape['Submission Average/15 min.'][f124],
                                                                                                  //                             takedownAcc: responseJune17.data[13].tale_of_the_tape['Takedown Accuracy'][f124],
                                                                                                  //                             takedownDef: responseJune17.data[13].tale_of_the_tape['Takedown Defense'][f124],
                                                                                                  //                             avgTakedownsPer15: responseJune17.data[13].tale_of_the_tape['Takedowns Average/15 min.'][f124],
                                                                                                  //                             dob: responseJune17.data[13].tale_of_the_tape.DOB[f124],
                                                                                                  //                             height: responseJune17.data[13].tale_of_the_tape.Height[f124],
                                                                                                  //                             id: 124,
                                                                                                  //                             matchupId: 62,
                                                                                                  //                             record: responseJune17.data[13].tale_of_the_tape['Wins/Losses/Draws'][f124],                                                                           
                                                                                                  //                         }),
                                                                                                                          Fighter.create({
                                                                                                                            //Josh Emmett
                                                                                                                            name: responseJune24.data[0].matchup[0],
                                                                                                                            defense: responseJune24.data[0].tale_of_the_tape.Defense[f125],
                                                                                                                            reach: responseJune24.data[0].tale_of_the_tape.Reach[f125],
                                                                                                                            strikesAbsorbedPerMin: responseJune24.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f125],
                                                                                                                            strikesLandedPerMin: responseJune24.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f125],
                                                                                                                            avgFightTime: responseJune24.data[0].tale_of_the_tape['Average Fight Time'][f125],
                                                                                                                            avgSubPer15: responseJune24.data[0].tale_of_the_tape['Submission Average/15 min.'][f125],
                                                                                                                            takedownAcc: responseJune24.data[0].tale_of_the_tape['Takedown Accuracy'][f125],
                                                                                                                            takedownDef: responseJune24.data[0].tale_of_the_tape['Takedown Defense'][f125],
                                                                                                                            avgTakedownsPer15: responseJune24.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f125],
                                                                                                                            dob: responseJune24.data[0].tale_of_the_tape.DOB[f125],
                                                                                                                            height: responseJune24.data[0].tale_of_the_tape.Height[f125],
                                                                                                                            id: 125,
                                                                                                                            matchupId: 63,
                                                                                                                            record: responseJune24.data[0].tale_of_the_tape['Wins/Losses/Draws'][f125], 
                                                                                                                            
                                                                                                                          }),
                                                                                                                          Fighter.create({
                                                                                                                            //Ilia Topuria
                                                                                                                              name: responseJune24.data[0].matchup[1],
                                                                                                                              defense: responseJune24.data[0].tale_of_the_tape.Defense[f126],
                                                                                                                              reach: responseJune24.data[0].tale_of_the_tape.Reach[f126],
                                                                                                                              strikesAbsorbedPerMin: responseJune24.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f126],
                                                                                                                              strikesLandedPerMin: responseJune24.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f126],
                                                                                                                              avgFightTime: responseJune24.data[0].tale_of_the_tape['Average Fight Time'][f126],
                                                                                                                              avgSubPer15: responseJune24.data[0].tale_of_the_tape['Submission Average/15 min.'][f126],
                                                                                                                              takedownAcc: responseJune24.data[0].tale_of_the_tape['Takedown Accuracy'][f126],
                                                                                                                              takedownDef: responseJune24.data[0].tale_of_the_tape['Takedown Defense'][f126],
                                                                                                                              avgTakedownsPer15: responseJune24.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f126],
                                                                                                                              dob: responseJune24.data[0].tale_of_the_tape.DOB[f126],
                                                                                                                              height: responseJune24.data[0].tale_of_the_tape.Height[f126],
                                                                                                                              id: 126,
                                                                                                                              matchupId: 63,                        
                                                                                                                              record: responseJune24.data[0].tale_of_the_tape['Wins/Losses/Draws'][f126],
                                                                                                                             
                                                                                                                          }),
                                                                                                                            Fighter.create({
                                                                                                                              //Amanda Ribas
                                                                                                                              name: responseJune24.data[1].matchup[0],
                                                                                                                              defense: responseJune24.data[1].tale_of_the_tape.Defense[f127],
                                                                                                                              reach: responseJune24.data[1].tale_of_the_tape.Reach[f127],
                                                                                                                              strikesAbsorbedPerMin: responseJune24.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f127],
                                                                                                                              strikesLandedPerMin: responseJune24.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f127],
                                                                                                                              avgFightTime: responseJune24.data[1].tale_of_the_tape['Average Fight Time'][f127],
                                                                                                                              avgSubPer15: responseJune24.data[1].tale_of_the_tape['Submission Average/15 min.'][f127],
                                                                                                                              takedownAcc: responseJune24.data[1].tale_of_the_tape['Takedown Accuracy'][f127],
                                                                                                                              takedownDef: responseJune24.data[1].tale_of_the_tape['Takedown Defense'][f127],
                                                                                                                              avgTakedownsPer15: responseJune24.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f127],
                                                                                                                              dob: responseJune24.data[1].tale_of_the_tape.DOB[f127],
                                                                                                                              height: responseJune24.data[1].tale_of_the_tape.Height[f127],
                                                                                                                              id: 127,
                                                                                                                              matchupId: 64,
                                                                                                                              record: responseJune24.data[1].tale_of_the_tape['Wins/Losses/Draws'][f127],
                                                                                                                            }),
                                                                                                                            Fighter.create({
                                                                                                                              //Maycee Barber
                                                                                                                                name: responseJune24.data[1].matchup[1],
                                                                                                                                defense: responseJune24.data[1].tale_of_the_tape.Defense[f128],
                                                                                                                                reach: responseJune24.data[1].tale_of_the_tape.Reach[f128],
                                                                                                                                strikesAbsorbedPerMin: responseJune24.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f128],
                                                                                                                                strikesLandedPerMin: responseJune24.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f128],
                                                                                                                                avgFightTime: responseJune24.data[1].tale_of_the_tape['Average Fight Time'][f128],
                                                                                                                                avgSubPer15: responseJune24.data[1].tale_of_the_tape['Submission Average/15 min.'][f128],
                                                                                                                                takedownAcc: responseJune24.data[1].tale_of_the_tape['Takedown Accuracy'][f128],
                                                                                                                                takedownDef: responseJune24.data[1].tale_of_the_tape['Takedown Defense'][f128],
                                                                                                                                avgTakedownsPer15: responseJune24.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f128],
                                                                                                                                dob: responseJune24.data[1].tale_of_the_tape.DOB[f128],
                                                                                                                                height: responseJune24.data[1].tale_of_the_tape.Height[f128],
                                                                                                                                id: 128,
                                                                                                                                matchupId: 64,
                                                                                                                                record: responseJune24.data[1].tale_of_the_tape['Wins/Losses/Draws'][f128],   
                                                                                                                            }),
                                                                                                                              Fighter.create({
                                                                                                                                //Cody Brundage
                                                                                                                                name: responseJune24.data[2].matchup[0],
                                                                                                                                defense: responseJune24.data[2].tale_of_the_tape.Defense[f129],
                                                                                                                                reach: responseJune24.data[2].tale_of_the_tape.Reach[f129],
                                                                                                                                strikesAbsorbedPerMin: responseJune24.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f129],
                                                                                                                                strikesLandedPerMin: responseJune24.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f129],
                                                                                                                                avgFightTime: responseJune24.data[2].tale_of_the_tape['Average Fight Time'][f129],
                                                                                                                                avgSubPer15: responseJune24.data[2].tale_of_the_tape['Submission Average/15 min.'][f129],
                                                                                                                                takedownAcc: responseJune24.data[2].tale_of_the_tape['Takedown Accuracy'][f129],
                                                                                                                                takedownDef: responseJune24.data[2].tale_of_the_tape['Takedown Defense'][f129],
                                                                                                                                avgTakedownsPer15: responseJune24.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f129],
                                                                                                                                dob: responseJune24.data[2].tale_of_the_tape.DOB[f129],
                                                                                                                                height: responseJune24.data[2].tale_of_the_tape.Height[f129],
                                                                                                                                id: 129,
                                                                                                                                matchupId: 65,
                                                                                                                                record: responseJune24.data[2].tale_of_the_tape['Wins/Losses/Draws'][f129],
                                                                                                                              }),
                                                                                                                              Fighter.create({
                                                                                                                                //Sedriques Dumas
                                                                                                                                  name: responseJune24.data[2].matchup[1],
                                                                                                                                  defense: responseJune24.data[2].tale_of_the_tape.Defense[f130],
                                                                                                                                  reach: responseJune24.data[2].tale_of_the_tape.Reach[f130],
                                                                                                                                  strikesAbsorbedPerMin: responseJune24.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f130],
                                                                                                                                  strikesLandedPerMin: responseJune24.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f130],
                                                                                                                                  avgFightTime: responseJune24.data[2].tale_of_the_tape['Average Fight Time'][f130],
                                                                                                                                  avgSubPer15: responseJune24.data[2].tale_of_the_tape['Submission Average/15 min.'][f130],
                                                                                                                                  takedownAcc: responseJune24.data[2].tale_of_the_tape['Takedown Accuracy'][f130],
                                                                                                                                  takedownDef: responseJune24.data[2].tale_of_the_tape['Takedown Defense'][f130],
                                                                                                                                  avgTakedownsPer15: responseJune24.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f130],
                                                                                                                                  dob: responseJune24.data[2].tale_of_the_tape.DOB[f130],
                                                                                                                                  height: responseJune24.data[2].tale_of_the_tape.Height[f130],
                                                                                                                                  id: 130,
                                                                                                                                  matchupId: 65,
                                                                                                                                  record: responseJune24.data[2].tale_of_the_tape['Wins/Losses/Draws'][f130],
                                                                                                                              }),
                                                                                                                                Fighter.create({
                                                                                                                                  //David Onama
                                                                                                                                  name: responseJune24.data[3].matchup[0],
                                                                                                                                  defense: responseJune24.data[3].tale_of_the_tape.Defense[f131],
                                                                                                                                  reach: responseJune24.data[3].tale_of_the_tape.Reach[f131],
                                                                                                                                  strikesAbsorbedPerMin: responseJune24.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f131],
                                                                                                                                  strikesLandedPerMin: responseJune24.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f131],
                                                                                                                                  avgFightTime: responseJune24.data[3].tale_of_the_tape['Average Fight Time'][f131],
                                                                                                                                  avgSubPer15: responseJune24.data[3].tale_of_the_tape['Submission Average/15 min.'][f131],
                                                                                                                                  takedownAcc: responseJune24.data[3].tale_of_the_tape['Takedown Accuracy'][f131],
                                                                                                                                  takedownDef: responseJune24.data[3].tale_of_the_tape['Takedown Defense'][f131],
                                                                                                                                  avgTakedownsPer15: responseJune24.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f131],
                                                                                                                                  dob: responseJune24.data[3].tale_of_the_tape.DOB[f131],
                                                                                                                                  height: responseJune24.data[3].tale_of_the_tape.Height[f131],
                                                                                                                                  id: 131,
                                                                                                                                  matchupId: 66,
                                                                                                                                  record: responseJune24.data[3].tale_of_the_tape['Wins/Losses/Draws'][f131],     
                                                                                                                                }),
                                                                                                                                Fighter.create({
                                                                                                                                  //Gabriel Santos
                                                                                                                                    name: responseJune24.data[3].matchup[1],
                                                                                                                                    defense: responseJune24.data[3].tale_of_the_tape.Defense[f132],
                                                                                                                                    reach: responseJune24.data[3].tale_of_the_tape.Reach[f132],
                                                                                                                                    strikesAbsorbedPerMin: responseJune24.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f132],
                                                                                                                                    strikesLandedPerMin: responseJune24.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f132],
                                                                                                                                    avgFightTime: responseJune24.data[3].tale_of_the_tape['Average Fight Time'][f132],
                                                                                                                                    avgSubPer15: responseJune24.data[3].tale_of_the_tape['Submission Average/15 min.'][f132],
                                                                                                                                    takedownAcc: responseJune24.data[3].tale_of_the_tape['Takedown Accuracy'][f132],
                                                                                                                                    takedownDef: responseJune24.data[3].tale_of_the_tape['Takedown Defense'][f132],
                                                                                                                                    avgTakedownsPer15: responseJune24.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f132],
                                                                                                                                    dob: responseJune24.data[3].tale_of_the_tape.DOB[f132],
                                                                                                                                    height: responseJune24.data[3].tale_of_the_tape.Height[f132],
                                                                                                                                    id: 132,
                                                                                                                                    matchupId: 66,
                                                                                                                                    record: responseJune24.data[3].tale_of_the_tape['Wins/Losses/Draws'][f132],                                                          
                                                                                                                                }),
                                                                                                                                  Fighter.create({
                                                                                                                                    //Brendan Allen
                                                                                                                                    name: responseJune24.data[4].matchup[0],
                                                                                                                                    defense: responseJune24.data[4].tale_of_the_tape.Defense[f133],
                                                                                                                                    reach: responseJune24.data[4].tale_of_the_tape.Reach[f133],
                                                                                                                                    strikesAbsorbedPerMin: responseJune24.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f133],
                                                                                                                                    strikesLandedPerMin: responseJune24.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f133],
                                                                                                                                    avgFightTime: responseJune24.data[4].tale_of_the_tape['Average Fight Time'][f133],
                                                                                                                                    avgSubPer15: responseJune24.data[4].tale_of_the_tape['Submission Average/15 min.'][f133],
                                                                                                                                    takedownAcc: responseJune24.data[4].tale_of_the_tape['Takedown Accuracy'][f133],
                                                                                                                                    takedownDef: responseJune24.data[4].tale_of_the_tape['Takedown Defense'][f133],
                                                                                                                                    avgTakedownsPer15: responseJune24.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f133],
                                                                                                                                    dob: responseJune24.data[4].tale_of_the_tape.DOB[f133],
                                                                                                                                    height: responseJune24.data[4].tale_of_the_tape.Height[f133],
                                                                                                                                    id: 133,
                                                                                                                                    matchupId: 67,
                                                                                                                                    record: responseJune24.data[4].tale_of_the_tape['Wins/Losses/Draws'][f133],                                                          
                                                                                                                                  }),
                                                                                                                                  Fighter.create({
                                                                                                                                    //Bruno Silva
                                                                                                                                      name: responseJune24.data[4].matchup[1],
                                                                                                                                      defense: responseJune24.data[4].tale_of_the_tape.Defense[f134],
                                                                                                                                      reach: responseJune24.data[4].tale_of_the_tape.Reach[f134],
                                                                                                                                      strikesAbsorbedPerMin: responseJune24.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f134],
                                                                                                                                      strikesLandedPerMin: responseJune24.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f134],
                                                                                                                                      avgFightTime: responseJune24.data[4].tale_of_the_tape['Average Fight Time'][f134],
                                                                                                                                      avgSubPer15: responseJune24.data[4].tale_of_the_tape['Submission Average/15 min.'][f134],
                                                                                                                                      takedownAcc: responseJune24.data[4].tale_of_the_tape['Takedown Accuracy'][f134],
                                                                                                                                      takedownDef: responseJune24.data[4].tale_of_the_tape['Takedown Defense'][f134],
                                                                                                                                      avgTakedownsPer15: responseJune24.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f134],
                                                                                                                                      dob: responseJune24.data[4].tale_of_the_tape.DOB[f134],
                                                                                                                                      height: responseJune24.data[4].tale_of_the_tape.Height[f134],
                                                                                                                                      id: 134,
                                                                                                                                      matchupId: 67,
                                                                                                                                      record: responseJune24.data[4].tale_of_the_tape['Wins/Losses/Draws'][f134],                                                                    
                                                                                                                                  }),
                                                                                                                                    Fighter.create({
                                                                                                                                      //Neil Magny
                                                                                                                                      name: responseJune24.data[5].matchup[0],
                                                                                                                                      defense: responseJune24.data[5].tale_of_the_tape.Defense[f135],
                                                                                                                                      reach: responseJune24.data[5].tale_of_the_tape.Reach[f135],
                                                                                                                                      strikesAbsorbedPerMin: responseJune24.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f135],
                                                                                                                                      strikesLandedPerMin: responseJune24.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f135],
                                                                                                                                      avgFightTime: responseJune24.data[5].tale_of_the_tape['Average Fight Time'][f135],
                                                                                                                                      avgSubPer15: responseJune24.data[5].tale_of_the_tape['Submission Average/15 min.'][f135],
                                                                                                                                      takedownAcc: responseJune24.data[5].tale_of_the_tape['Takedown Accuracy'][f135],
                                                                                                                                      takedownDef: responseJune24.data[5].tale_of_the_tape['Takedown Defense'][f135],
                                                                                                                                      avgTakedownsPer15: responseJune24.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f135],
                                                                                                                                      dob: responseJune24.data[5].tale_of_the_tape.DOB[f135],
                                                                                                                                      height: responseJune24.data[5].tale_of_the_tape.Height[f135],
                                                                                                                                      id: 135,
                                                                                                                                      matchupId: 68,
                                                                                                                                      record: responseJune24.data[5].tale_of_the_tape['Wins/Losses/Draws'][f135],                                                                      
                                                                                                                                    }),
                                                                                                                                    Fighter.create({
                                                                                                                                      //Phil Rowe
                                                                                                                                        name: responseJune24.data[5].matchup[1],
                                                                                                                                        defense: responseJune24.data[5].tale_of_the_tape.Defense[f136],
                                                                                                                                        reach: responseJune24.data[5].tale_of_the_tape.Reach[f136],
                                                                                                                                        strikesAbsorbedPerMin: responseJune24.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f136],
                                                                                                                                        strikesLandedPerMin: responseJune24.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f136],
                                                                                                                                        avgFightTime: responseJune24.data[5].tale_of_the_tape['Average Fight Time'][f136],
                                                                                                                                        avgSubPer15: responseJune24.data[5].tale_of_the_tape['Submission Average/15 min.'][f136],
                                                                                                                                        takedownAcc: responseJune24.data[5].tale_of_the_tape['Takedown Accuracy'][f136],
                                                                                                                                        takedownDef: responseJune24.data[5].tale_of_the_tape['Takedown Defense'][f136],
                                                                                                                                        avgTakedownsPer15: responseJune24.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f136],
                                                                                                                                        dob: responseJune24.data[5].tale_of_the_tape.DOB[f136],
                                                                                                                                        height: responseJune24.data[5].tale_of_the_tape.Height[f136],
                                                                                                                                        id: 136,
                                                                                                                                        matchupId: 68,
                                                                                                                                        record: responseJune24.data[5].tale_of_the_tape['Wins/Losses/Draws'][f136],                                                                 
                                                                                                                                    }),
                                                                                                                                      Fighter.create({
                                                                                                                                        //Zhalgas Zhumagulov
                                                                                                                                        name: responseJune24.data[6].matchup[0],
                                                                                                                                        defense: responseJune24.data[6].tale_of_the_tape.Defense[f137],
                                                                                                                                        reach: responseJune24.data[6].tale_of_the_tape.Reach[f137],
                                                                                                                                        strikesAbsorbedPerMin: responseJune24.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f137],
                                                                                                                                        strikesLandedPerMin: responseJune24.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f137],
                                                                                                                                        avgFightTime: responseJune24.data[6].tale_of_the_tape['Average Fight Time'][f137],
                                                                                                                                        avgSubPer15: responseJune24.data[6].tale_of_the_tape['Submission Average/15 min.'][f137],
                                                                                                                                        takedownAcc: responseJune24.data[6].tale_of_the_tape['Takedown Accuracy'][f137],
                                                                                                                                        takedownDef: responseJune24.data[6].tale_of_the_tape['Takedown Defense'][f137],
                                                                                                                                        avgTakedownsPer15: responseJune24.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f137],
                                                                                                                                        dob: responseJune24.data[6].tale_of_the_tape.DOB[f137],
                                                                                                                                        height: responseJune24.data[6].tale_of_the_tape.Height[f137],
                                                                                                                                        id: 137,
                                                                                                                                        matchupId: 69,
                                                                                                                                        record: responseJune24.data[6].tale_of_the_tape['Wins/Losses/Draws'][f137],                                                             
                                                                                                                                      }),
                                                                                                                                      Fighter.create({
                                                                                                                                        //Joshua Van
                                                                                                                                          name: responseJune24.data[6].matchup[1],
                                                                                                                                          defense: responseJune24.data[6].tale_of_the_tape.Defense[f138],
                                                                                                                                          reach: responseJune24.data[6].tale_of_the_tape.Reach[f138],
                                                                                                                                          strikesAbsorbedPerMin: responseJune24.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f138],
                                                                                                                                          strikesLandedPerMin: responseJune24.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f138],
                                                                                                                                          avgFightTime: responseJune24.data[6].tale_of_the_tape['Average Fight Time'][f138],
                                                                                                                                          avgSubPer15: responseJune24.data[6].tale_of_the_tape['Submission Average/15 min.'][f138],
                                                                                                                                          takedownAcc: responseJune24.data[6].tale_of_the_tape['Takedown Accuracy'][f138],
                                                                                                                                          takedownDef: responseJune24.data[6].tale_of_the_tape['Takedown Defense'][f138],
                                                                                                                                          avgTakedownsPer15: responseJune24.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f138],
                                                                                                                                          dob: responseJune24.data[6].tale_of_the_tape.DOB[f138],
                                                                                                                                          height: responseJune24.data[6].tale_of_the_tape.Height[f138],
                                                                                                                                          id: 138,
                                                                                                                                          matchupId: 69,
                                                                                                                                          record: responseJune24.data[6].tale_of_the_tape['Wins/Losses/Draws'][f138],                                                                       
                                                                                                                                      }),
                                                                                                                                        Fighter.create({
                                                                                                                                          //Austen Lane
                                                                                                                                          name: responseJune24.data[7].matchup[0],
                                                                                                                                          defense: responseJune24.data[7].tale_of_the_tape.Defense[f139],
                                                                                                                                          reach: responseJune24.data[7].tale_of_the_tape.Reach[f139],
                                                                                                                                          strikesAbsorbedPerMin: responseJune24.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f139],
                                                                                                                                          strikesLandedPerMin: responseJune24.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f139],
                                                                                                                                          avgFightTime: responseJune24.data[7].tale_of_the_tape['Average Fight Time'][f139],
                                                                                                                                          avgSubPer15: responseJune24.data[7].tale_of_the_tape['Submission Average/15 min.'][f139],
                                                                                                                                          takedownAcc: responseJune24.data[7].tale_of_the_tape['Takedown Accuracy'][f139],
                                                                                                                                          takedownDef: responseJune24.data[7].tale_of_the_tape['Takedown Defense'][f139],
                                                                                                                                          avgTakedownsPer15: responseJune24.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f139],
                                                                                                                                          dob: responseJune24.data[7].tale_of_the_tape.DOB[f139],
                                                                                                                                          height: responseJune24.data[7].tale_of_the_tape.Height[f139],
                                                                                                                                          id: 139,
                                                                                                                                          matchupId: 70,
                                                                                                                                          record: responseJune24.data[7].tale_of_the_tape['Wins/Losses/Draws'][f139],                                                                
                                                                                                                                      }),
                                                                                                                                        Fighter.create({
                                                                                                                                          //Justin Tafa
                                                                                                                                            name: responseJune24.data[7].matchup[1],
                                                                                                                                            defense: responseJune24.data[7].tale_of_the_tape.Defense[f140],
                                                                                                                                            reach: responseJune24.data[7].tale_of_the_tape.Reach[f140],
                                                                                                                                            strikesAbsorbedPerMin: responseJune24.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f140],
                                                                                                                                            strikesLandedPerMin: responseJune24.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f140],
                                                                                                                                            avgFightTime: responseJune24.data[7].tale_of_the_tape['Average Fight Time'][f140],
                                                                                                                                            avgSubPer15: responseJune24.data[7].tale_of_the_tape['Submission Average/15 min.'][f140],
                                                                                                                                            takedownAcc: responseJune24.data[7].tale_of_the_tape['Takedown Accuracy'][f140],
                                                                                                                                            takedownDef: responseJune24.data[7].tale_of_the_tape['Takedown Defense'][f140],
                                                                                                                                            avgTakedownsPer15: responseJune24.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f140],
                                                                                                                                            dob: responseJune24.data[7].tale_of_the_tape.DOB[f140],
                                                                                                                                            height: responseJune24.data[7].tale_of_the_tape.Height[f140],
                                                                                                                                            id: 140,
                                                                                                                                            matchupId: 70,
                                                                                                                                            record: responseJune24.data[7].tale_of_the_tape['Wins/Losses/Draws'][f140],                                                                   
                                                                                                                                        }),
                                                                                                                                          Fighter.create({
                                                                                                                                            //Randy Brown
                                                                                                                                            name: responseJune24.data[8].matchup[0],
                                                                                                                                            defense: responseJune24.data[8].tale_of_the_tape.Defense[f141],
                                                                                                                                            reach: responseJune24.data[8].tale_of_the_tape.Reach[f141],
                                                                                                                                            strikesAbsorbedPerMin: responseJune24.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f141],
                                                                                                                                            strikesLandedPerMin: responseJune24.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f141],
                                                                                                                                            avgFightTime: responseJune24.data[8].tale_of_the_tape['Average Fight Time'][f141],
                                                                                                                                            avgSubPer15: responseJune24.data[8].tale_of_the_tape['Submission Average/15 min.'][f141],
                                                                                                                                            takedownAcc: responseJune24.data[8].tale_of_the_tape['Takedown Accuracy'][f141],
                                                                                                                                            takedownDef: responseJune24.data[8].tale_of_the_tape['Takedown Defense'][f141],
                                                                                                                                            avgTakedownsPer15: responseJune24.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f141],
                                                                                                                                            dob: responseJune24.data[8].tale_of_the_tape.DOB[f141],
                                                                                                                                            height: responseJune24.data[8].tale_of_the_tape.Height[f141],
                                                                                                                                            id: 141,
                                                                                                                                            matchupId: 71,
                                                                                                                                            record: responseJune24.data[8].tale_of_the_tape['Wins/Losses/Draws'][f141],                                                                    
                                                                                                                                          }),
                                                                                                                                          Fighter.create({
                                                                                                                                            //Wellington Turman
                                                                                                                                              name: responseJune24.data[8].matchup[1],
                                                                                                                                              defense: responseJune24.data[8].tale_of_the_tape.Defense[f142],
                                                                                                                                              reach: responseJune24.data[8].tale_of_the_tape.Reach[f142],
                                                                                                                                              strikesAbsorbedPerMin: responseJune24.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f142],
                                                                                                                                              strikesLandedPerMin: responseJune24.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f142],
                                                                                                                                              avgFightTime: responseJune24.data[8].tale_of_the_tape['Average Fight Time'][f142],
                                                                                                                                              avgSubPer15: responseJune24.data[8].tale_of_the_tape['Submission Average/15 min.'][f142],
                                                                                                                                              takedownAcc: responseJune24.data[8].tale_of_the_tape['Takedown Accuracy'][f142],
                                                                                                                                              takedownDef: responseJune24.data[8].tale_of_the_tape['Takedown Defense'][f142],
                                                                                                                                              avgTakedownsPer15: responseJune24.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f142],
                                                                                                                                              dob: responseJune24.data[8].tale_of_the_tape.DOB[f142],
                                                                                                                                              height: responseJune24.data[8].tale_of_the_tape.Height[f142],
                                                                                                                                              id: 142,
                                                                                                                                              matchupId: 71,
                                                                                                                                              record: responseJune24.data[8].tale_of_the_tape['Wins/Losses/Draws'][f142],
                                                                                                                                          }),
                                                                                                                                            Fighter.create({
                                                                                                                                              //Mateusz Rebecki
                                                                                                                                              name: responseJune24.data[9].matchup[0],
                                                                                                                                              defense: responseJune24.data[9].tale_of_the_tape.Defense[f143],
                                                                                                                                              reach: responseJune24.data[9].tale_of_the_tape.Reach[f143],
                                                                                                                                              strikesAbsorbedPerMin: responseJune24.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f143],
                                                                                                                                              strikesLandedPerMin: responseJune24.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f143],
                                                                                                                                              avgFightTime: responseJune24.data[9].tale_of_the_tape['Average Fight Time'][f143],
                                                                                                                                              avgSubPer15: responseJune24.data[9].tale_of_the_tape['Submission Average/15 min.'][f143],
                                                                                                                                              takedownAcc: responseJune24.data[9].tale_of_the_tape['Takedown Accuracy'][f143],
                                                                                                                                              takedownDef: responseJune24.data[9].tale_of_the_tape['Takedown Defense'][f143],
                                                                                                                                              avgTakedownsPer15: responseJune24.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f143],
                                                                                                                                              dob: responseJune24.data[9].tale_of_the_tape.DOB[f143],
                                                                                                                                              height: responseJune24.data[9].tale_of_the_tape.Height[f143],
                                                                                                                                              id: 143,
                                                                                                                                              matchupId: 72,
                                                                                                                                              record: responseJune24.data[9].tale_of_the_tape['Wins/Losses/Draws'][f143],                                                                    
                                                                                                                                            }),
                                                                                                                                            Fighter.create({
                                                                                                                                              //Loik Radzhabov
                                                                                                                                                name: responseJune24.data[9].matchup[1],
                                                                                                                                                defense: responseJune24.data[9].tale_of_the_tape.Defense[f144],
                                                                                                                                                reach: responseJune24.data[9].tale_of_the_tape.Reach[f144],
                                                                                                                                                strikesAbsorbedPerMin: responseJune24.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f144],
                                                                                                                                                strikesLandedPerMin: responseJune24.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f144],
                                                                                                                                                avgFightTime: responseJune24.data[9].tale_of_the_tape['Average Fight Time'][f144],
                                                                                                                                                avgSubPer15: responseJune24.data[9].tale_of_the_tape['Submission Average/15 min.'][f144],
                                                                                                                                                takedownAcc: responseJune24.data[9].tale_of_the_tape['Takedown Accuracy'][f144],
                                                                                                                                                takedownDef: responseJune24.data[9].tale_of_the_tape['Takedown Defense'][f144],
                                                                                                                                                avgTakedownsPer15: responseJune24.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f144],
                                                                                                                                                dob: responseJune24.data[9].tale_of_the_tape.DOB[f144],
                                                                                                                                                height: responseJune24.data[9].tale_of_the_tape.Height[f144],
                                                                                                                                                id: 144,
                                                                                                                                                matchupId: 72,
                                                                                                                                                record: responseJune24.data[9].tale_of_the_tape['Wins/Losses/Draws'][f144],                                                                       
                                                                                                                                              }),
                                                                                                                                              Fighter.create({
                                                                                                                                                //Tabatha Ricci
                                                                                                                                                name: responseJune24.data[10].matchup[0],
                                                                                                                                                defense: responseJune24.data[10].tale_of_the_tape.Defense[f145],
                                                                                                                                                reach: responseJune24.data[10].tale_of_the_tape.Reach[f145],
                                                                                                                                                strikesAbsorbedPerMin: responseJune24.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f145],
                                                                                                                                                strikesLandedPerMin: responseJune24.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f145],
                                                                                                                                                avgFightTime: responseJune24.data[10].tale_of_the_tape['Average Fight Time'][f145],
                                                                                                                                                avgSubPer15: responseJune24.data[10].tale_of_the_tape['Submission Average/15 min.'][f145],
                                                                                                                                                takedownAcc: responseJune24.data[10].tale_of_the_tape['Takedown Accuracy'][f145],
                                                                                                                                                takedownDef: responseJune24.data[10].tale_of_the_tape['Takedown Defense'][f145],
                                                                                                                                                avgTakedownsPer15: responseJune24.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f145],
                                                                                                                                                dob: responseJune24.data[10].tale_of_the_tape.DOB[f145],
                                                                                                                                                height: responseJune24.data[10].tale_of_the_tape.Height[f145],
                                                                                                                                                id: 145,
                                                                                                                                                matchupId: 73,
                                                                                                                                                record: responseJune24.data[10].tale_of_the_tape['Wins/Losses/Draws'][f145],                                                                      
                                                                                                                                              }),
                                                                                                                                              Fighter.create({
                                                                                                                                                //Gillian Robertson
                                                                                                                                                  name: responseJune24.data[10].matchup[1],
                                                                                                                                                  defense: responseJune24.data[10].tale_of_the_tape.Defense[f146],
                                                                                                                                                  reach: responseJune24.data[10].tale_of_the_tape.Reach[f146],
                                                                                                                                                  strikesAbsorbedPerMin: responseJune24.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f146],
                                                                                                                                                  strikesLandedPerMin: responseJune24.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f146],
                                                                                                                                                  avgFightTime: responseJune24.data[10].tale_of_the_tape['Average Fight Time'][f146],
                                                                                                                                                  avgSubPer15: responseJune24.data[10].tale_of_the_tape['Submission Average/15 min.'][f146],
                                                                                                                                                  takedownAcc: responseJune24.data[10].tale_of_the_tape['Takedown Accuracy'][f146],
                                                                                                                                                  takedownDef: responseJune24.data[10].tale_of_the_tape['Takedown Defense'][f146],
                                                                                                                                                  avgTakedownsPer15: responseJune24.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f146],
                                                                                                                                                  dob: responseJune24.data[10].tale_of_the_tape.DOB[f146],
                                                                                                                                                  height: responseJune24.data[10].tale_of_the_tape.Height[f146],
                                                                                                                                                  id: 146,
                                                                                                                                                  matchupId: 73,
                                                                                                                                                  record: responseJune24.data[10].tale_of_the_tape['Wins/Losses/Draws'][f146],                                                                           
                                                                                                                                              }),
                                                                                                                                              Fighter.create({
                                                                                                                                                //Trevor Peek
                                                                                                                                                name: responseJune24.data[11].matchup[0],
                                                                                                                                                defense: responseJune24.data[11].tale_of_the_tape.Defense[f147],
                                                                                                                                                reach: responseJune24.data[11].tale_of_the_tape.Reach[f147],
                                                                                                                                                strikesAbsorbedPerMin: responseJune24.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f147],
                                                                                                                                                strikesLandedPerMin: responseJune24.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f147],
                                                                                                                                                avgFightTime: responseJune24.data[11].tale_of_the_tape['Average Fight Time'][f147],
                                                                                                                                                avgSubPer15: responseJune24.data[11].tale_of_the_tape['Submission Average/15 min.'][f147],
                                                                                                                                                takedownAcc: responseJune24.data[11].tale_of_the_tape['Takedown Accuracy'][f147],
                                                                                                                                                takedownDef: responseJune24.data[11].tale_of_the_tape['Takedown Defense'][f147],
                                                                                                                                                avgTakedownsPer15: responseJune24.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f147],
                                                                                                                                                dob: responseJune24.data[11].tale_of_the_tape.DOB[f147],
                                                                                                                                                height: responseJune24.data[11].tale_of_the_tape.Height[f147],
                                                                                                                                                id: 147,
                                                                                                                                                matchupId: 74,
                                                                                                                                                record: responseJune24.data[11].tale_of_the_tape['Wins/Losses/Draws'][f147],                                                                    
                                                                                                                                              }),
                                                                                                                                              Fighter.create({
                                                                                                                                                //Chepe Mariscal
                                                                                                                                                  name: responseJune24.data[11].matchup[1],
                                                                                                                                                  defense: responseJune24.data[11].tale_of_the_tape.Defense[f148],
                                                                                                                                                  reach: responseJune24.data[11].tale_of_the_tape.Reach[f148],
                                                                                                                                                  strikesAbsorbedPerMin: responseJune24.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f148],
                                                                                                                                                  strikesLandedPerMin: responseJune24.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f148],
                                                                                                                                                  avgFightTime: responseJune24.data[11].tale_of_the_tape['Average Fight Time'][f148],
                                                                                                                                                  avgSubPer15: responseJune24.data[11].tale_of_the_tape['Submission Average/15 min.'][f148],
                                                                                                                                                  takedownAcc: responseJune24.data[11].tale_of_the_tape['Takedown Accuracy'][f148],
                                                                                                                                                  takedownDef: responseJune24.data[11].tale_of_the_tape['Takedown Defense'][f148],
                                                                                                                                                  avgTakedownsPer15: responseJune24.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f148],
                                                                                                                                                  dob: responseJune24.data[11].tale_of_the_tape.DOB[f148],
                                                                                                                                                  height: responseJune24.data[11].tale_of_the_tape.Height[f148],
                                                                                                                                                  id: 148,
                                                                                                                                                  matchupId: 74,
                                                                                                                                                  record: responseJune24.data[11].tale_of_the_tape['Wins/Losses/Draws'][f148],
                                                                                                                                                  
                                                                                                                                              }),
                                                                                                                                                Fighter.create({
                                                                                                                                                  //Jamall Emmers
                                                                                                                                                  name: responseJune24.data[12].matchup[0],
                                                                                                                                                  defense: responseJune24.data[12].tale_of_the_tape.Defense[f149],
                                                                                                                                                  reach: responseJune24.data[12].tale_of_the_tape.Reach[f149],
                                                                                                                                                  strikesAbsorbedPerMin: responseJune24.data[12].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f149],
                                                                                                                                                  strikesLandedPerMin: responseJune24.data[12].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f149],
                                                                                                                                                  avgFightTime: responseJune24.data[12].tale_of_the_tape['Average Fight Time'][f149],
                                                                                                                                                  avgSubPer21: responseJune24.data[12].tale_of_the_tape['Submission Average/15 min.'][f149],
                                                                                                                                                  takedownAcc: responseJune24.data[12].tale_of_the_tape['Takedown Accuracy'][f149],
                                                                                                                                                  takedownDef: responseJune24.data[12].tale_of_the_tape['Takedown Defense'][f149],
                                                                                                                                                  avgTakedownsPer21: responseJune24.data[12].tale_of_the_tape['Takedowns Average/15 min.'][f149],
                                                                                                                                                  dob: responseJune24.data[12].tale_of_the_tape.DOB[f149],
                                                                                                                                                  height: responseJune24.data[12].tale_of_the_tape.Height[f149],
                                                                                                                                                  id: 149,
                                                                                                                                                  matchupId: 75,
                                                                                                                                                  record: responseJune24.data[12].tale_of_the_tape['Wins/Losses/Draws'][f149],                                                                    
                                                                                                                                                }),
                                                                                                                                                Fighter.create({
                                                                                                                                                  //Jack Jenkins
                                                                                                                                                    name: responseJune24.data[12].matchup[1],
                                                                                                                                                    defense: responseJune24.data[12].tale_of_the_tape.Defense[f150],
                                                                                                                                                    reach: responseJune24.data[12].tale_of_the_tape.Reach[f150],
                                                                                                                                                    strikesAbsorbedPerMin: responseJune24.data[12].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f150],
                                                                                                                                                    strikesLandedPerMin: responseJune24.data[12].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f150],
                                                                                                                                                    avgFightTime: responseJune24.data[12].tale_of_the_tape['Average Fight Time'][f150],
                                                                                                                                                    avgSubPer15: responseJune24.data[12].tale_of_the_tape['Submission Average/15 min.'][f150],
                                                                                                                                                    takedownAcc: responseJune24.data[12].tale_of_the_tape['Takedown Accuracy'][f150],
                                                                                                                                                    takedownDef: responseJune24.data[12].tale_of_the_tape['Takedown Defense'][f150],
                                                                                                                                                    avgTakedownsPer15: responseJune24.data[12].tale_of_the_tape['Takedowns Average/15 min.'][f150],
                                                                                                                                                    dob: responseJune24.data[12].tale_of_the_tape.DOB[f150],
                                                                                                                                                    height: responseJune24.data[12].tale_of_the_tape.Height[f150],
                                                                                                                                                    id: 150,
                                                                                                                                                    matchupId: 75,
                                                                                                                                                    record: responseJune24.data[12].tale_of_the_tape['Wins/Losses/Draws'][f150],                                                                       
                                                                                                                                                  }),
                                                                                                                                                  Fighter.create({
                                                                                                                                                    //Tatsuro Taira
                                                                                                                                                    name: responseJune24.data[13].matchup[0],
                                                                                                                                                    defense: responseJune24.data[13].tale_of_the_tape.Defense[f151],
                                                                                                                                                    reach: responseJune24.data[13].tale_of_the_tape.Reach[f151],
                                                                                                                                                    strikesAbsorbedPerMin: responseJune24.data[13].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f151],
                                                                                                                                                    strikesLandedPerMin: responseJune24.data[13].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f151],
                                                                                                                                                    avgFightTime: responseJune24.data[13].tale_of_the_tape['Average Fight Time'][f151],
                                                                                                                                                    avgSubPer15: responseJune24.data[13].tale_of_the_tape['Submission Average/15 min.'][f151],
                                                                                                                                                    takedownAcc: responseJune24.data[13].tale_of_the_tape['Takedown Accuracy'][f151],
                                                                                                                                                    takedownDef: responseJune24.data[13].tale_of_the_tape['Takedown Defense'][f151],
                                                                                                                                                    avgTakedownsPer15: responseJune24.data[13].tale_of_the_tape['Takedowns Average/15 min.'][f151],
                                                                                                                                                    dob: responseJune24.data[13].tale_of_the_tape.DOB[f151],
                                                                                                                                                    height: responseJune24.data[13].tale_of_the_tape.Height[f151],
                                                                                                                                                    id: 151,
                                                                                                                                                    matchupId: 76,
                                                                                                                                                    record: responseJune24.data[13].tale_of_the_tape['Wins/Losses/Draws'][f151],                                                                      
                                                                                                                                                  }),
                                                                                                                                                  Fighter.create({
                                                                                                                                                    //Kleydson Rodrigues
                                                                                                                                                      name: responseJune24.data[13].matchup[1],
                                                                                                                                                      defense: responseJune24.data[13].tale_of_the_tape.Defense[f152],
                                                                                                                                                      reach: responseJune24.data[13].tale_of_the_tape.Reach[f152],
                                                                                                                                                      strikesAbsorbedPerMin: responseJune24.data[13].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f152],
                                                                                                                                                      strikesLandedPerMin: responseJune24.data[13].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f152],
                                                                                                                                                      avgFightTime: responseJune24.data[13].tale_of_the_tape['Average Fight Time'][f152],
                                                                                                                                                      avgSubPer15: responseJune24.data[13].tale_of_the_tape['Submission Average/15 min.'][f152],
                                                                                                                                                      takedownAcc: responseJune24.data[13].tale_of_the_tape['Takedown Accuracy'][f152],
                                                                                                                                                      takedownDef: responseJune24.data[13].tale_of_the_tape['Takedown Defense'][f152],
                                                                                                                                                      avgTakedownsPer15: responseJune24.data[13].tale_of_the_tape['Takedowns Average/15 min.'][f152],
                                                                                                                                                      dob: responseJune24.data[13].tale_of_the_tape.DOB[f152],
                                                                                                                                                      height: responseJune24.data[13].tale_of_the_tape.Height[f152],
                                                                                                                                                      id: 152,
                                                                                                                                                      matchupId: 76,
                                                                                                                                                      record: responseJune24.data[13].tale_of_the_tape['Wins/Losses/Draws'][f152],                                                                           
                                                                                                                                                  }),
                                                                                                                                                  Fighter.create({
                                                                                                                                                    //Sean Strickland
                                                                                                                                                    name: responseJuly1.data[0].matchup[0],
                                                                                                                                                    defense: responseJuly1.data[0].tale_of_the_tape.Defense[f153],
                                                                                                                                                    reach: responseJuly1.data[0].tale_of_the_tape.Reach[f153],
                                                                                                                                                    strikesAbsorbedPerMin: responseJuly1.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f153],
                                                                                                                                                    strikesLandedPerMin: responseJuly1.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f153],
                                                                                                                                                    avgFightTime: responseJuly1.data[0].tale_of_the_tape['Average Fight Time'][f153],
                                                                                                                                                    avgSubPer15: responseJuly1.data[0].tale_of_the_tape['Submission Average/15 min.'][f153],
                                                                                                                                                    takedownAcc: responseJuly1.data[0].tale_of_the_tape['Takedown Accuracy'][f153],
                                                                                                                                                    takedownDef: responseJuly1.data[0].tale_of_the_tape['Takedown Defense'][f153],
                                                                                                                                                    avgTakedownsPer15: responseJuly1.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f153],
                                                                                                                                                    dob: responseJuly1.data[0].tale_of_the_tape.DOB[f153],
                                                                                                                                                    height: responseJuly1.data[0].tale_of_the_tape.Height[f153],
                                                                                                                                                    id: 153,
                                                                                                                                                    matchupId: 77,
                                                                                                                                                    record: responseJuly1.data[0].tale_of_the_tape['Wins/Losses/Draws'][f153], 
                                                                                                                                                    
                                                                                                                                                  }),
                                                                                                                                                  Fighter.create({
                                                                                                                                                    //Abus Magomedov
                                                                                                                                                      name: responseJuly1.data[0].matchup[1],
                                                                                                                                                      defense: responseJuly1.data[0].tale_of_the_tape.Defense[f154],
                                                                                                                                                      reach: responseJuly1.data[0].tale_of_the_tape.Reach[f154],
                                                                                                                                                      strikesAbsorbedPerMin: responseJuly1.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f154],
                                                                                                                                                      strikesLandedPerMin: responseJuly1.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f154],
                                                                                                                                                      avgFightTime: responseJuly1.data[0].tale_of_the_tape['Average Fight Time'][f154],
                                                                                                                                                      avgSubPer15: responseJuly1.data[0].tale_of_the_tape['Submission Average/15 min.'][f154],
                                                                                                                                                      takedownAcc: responseJuly1.data[0].tale_of_the_tape['Takedown Accuracy'][f154],
                                                                                                                                                      takedownDef: responseJuly1.data[0].tale_of_the_tape['Takedown Defense'][f154],
                                                                                                                                                      avgTakedownsPer15: responseJuly1.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f154],
                                                                                                                                                      dob: responseJuly1.data[0].tale_of_the_tape.DOB[f154],
                                                                                                                                                      height: responseJuly1.data[0].tale_of_the_tape.Height[f154],
                                                                                                                                                      id: 154,
                                                                                                                                                      matchupId: 77,                        
                                                                                                                                                      record: responseJuly1.data[0].tale_of_the_tape['Wins/Losses/Draws'][f154],
                                                                                                                                                     
                                                                                                                                                  }),
                                                                                                                                                    Fighter.create({
                                                                                                                                                      //Damir Ismagulov
                                                                                                                                                      name: responseJuly1.data[1].matchup[0],
                                                                                                                                                      defense: responseJuly1.data[1].tale_of_the_tape.Defense[f155],
                                                                                                                                                      reach: responseJuly1.data[1].tale_of_the_tape.Reach[f155],
                                                                                                                                                      strikesAbsorbedPerMin: responseJuly1.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f155],
                                                                                                                                                      strikesLandedPerMin: responseJuly1.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f155],
                                                                                                                                                      avgFightTime: responseJuly1.data[1].tale_of_the_tape['Average Fight Time'][f155],
                                                                                                                                                      avgSubPer15: responseJuly1.data[1].tale_of_the_tape['Submission Average/15 min.'][f155],
                                                                                                                                                      takedownAcc: responseJuly1.data[1].tale_of_the_tape['Takedown Accuracy'][f155],
                                                                                                                                                      takedownDef: responseJuly1.data[1].tale_of_the_tape['Takedown Defense'][f155],
                                                                                                                                                      avgTakedownsPer15: responseJuly1.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f155],
                                                                                                                                                      dob: responseJuly1.data[1].tale_of_the_tape.DOB[f155],
                                                                                                                                                      height: responseJuly1.data[1].tale_of_the_tape.Height[f155],
                                                                                                                                                      id: 155,
                                                                                                                                                      matchupId: 78,
                                                                                                                                                      record: responseJuly1.data[1].tale_of_the_tape['Wins/Losses/Draws'][f155],
                                                                                                                                                    }),
                                                                                                                                                    Fighter.create({
                                                                                                                                                      //Grant Dawson
                                                                                                                                                        name: responseJuly1.data[1].matchup[1],
                                                                                                                                                        defense: responseJuly1.data[1].tale_of_the_tape.Defense[f156],
                                                                                                                                                        reach: responseJuly1.data[1].tale_of_the_tape.Reach[f156],
                                                                                                                                                        strikesAbsorbedPerMin: responseJuly1.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f156],
                                                                                                                                                        strikesLandedPerMin: responseJuly1.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f156],
                                                                                                                                                        avgFightTime: responseJuly1.data[1].tale_of_the_tape['Average Fight Time'][f156],
                                                                                                                                                        avgSubPer15: responseJuly1.data[1].tale_of_the_tape['Submission Average/15 min.'][f156],
                                                                                                                                                        takedownAcc: responseJuly1.data[1].tale_of_the_tape['Takedown Accuracy'][f156],
                                                                                                                                                        takedownDef: responseJuly1.data[1].tale_of_the_tape['Takedown Defense'][f156],
                                                                                                                                                        avgTakedownsPer15: responseJuly1.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f156],
                                                                                                                                                        dob: responseJuly1.data[1].tale_of_the_tape.DOB[f156],
                                                                                                                                                        height: responseJuly1.data[1].tale_of_the_tape.Height[f156],
                                                                                                                                                        id: 156,
                                                                                                                                                        matchupId: 78,
                                                                                                                                                        record: responseJuly1.data[1].tale_of_the_tape['Wins/Losses/Draws'][f156],   
                                                                                                                                                    }),
                                                                                                                                                      Fighter.create({
                                                                                                                                                        //Max Griffin
                                                                                                                                                        name: responseJuly1.data[2].matchup[0],
                                                                                                                                                        defense: responseJuly1.data[2].tale_of_the_tape.Defense[f157],
                                                                                                                                                        reach: responseJuly1.data[2].tale_of_the_tape.Reach[f157],
                                                                                                                                                        strikesAbsorbedPerMin: responseJuly1.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f157],
                                                                                                                                                        strikesLandedPerMin: responseJuly1.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f157],
                                                                                                                                                        avgFightTime: responseJuly1.data[2].tale_of_the_tape['Average Fight Time'][f157],
                                                                                                                                                        avgSubPer15: responseJuly1.data[2].tale_of_the_tape['Submission Average/15 min.'][f157],
                                                                                                                                                        takedownAcc: responseJuly1.data[2].tale_of_the_tape['Takedown Accuracy'][f157],
                                                                                                                                                        takedownDef: responseJuly1.data[2].tale_of_the_tape['Takedown Defense'][f157],
                                                                                                                                                        avgTakedownsPer15: responseJuly1.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f157],
                                                                                                                                                        dob: responseJuly1.data[2].tale_of_the_tape.DOB[f157],
                                                                                                                                                        height: responseJuly1.data[2].tale_of_the_tape.Height[f157],
                                                                                                                                                        id: 157,
                                                                                                                                                        matchupId: 79,
                                                                                                                                                        record: responseJuly1.data[2].tale_of_the_tape['Wins/Losses/Draws'][f157],
                                                                                                                                                      }),
                                                                                                                                                      Fighter.create({
                                                                                                                                                        //Michael Morales
                                                                                                                                                          name: responseJuly1.data[2].matchup[1],
                                                                                                                                                          defense: responseJuly1.data[2].tale_of_the_tape.Defense[f158],
                                                                                                                                                          reach: responseJuly1.data[2].tale_of_the_tape.Reach[f158],
                                                                                                                                                          strikesAbsorbedPerMin: responseJuly1.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f158],
                                                                                                                                                          strikesLandedPerMin: responseJuly1.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f158],
                                                                                                                                                          avgFightTime: responseJuly1.data[2].tale_of_the_tape['Average Fight Time'][f158],
                                                                                                                                                          avgSubPer15: responseJuly1.data[2].tale_of_the_tape['Submission Average/15 min.'][f158],
                                                                                                                                                          takedownAcc: responseJuly1.data[2].tale_of_the_tape['Takedown Accuracy'][f158],
                                                                                                                                                          takedownDef: responseJuly1.data[2].tale_of_the_tape['Takedown Defense'][f158],
                                                                                                                                                          avgTakedownsPer15: responseJuly1.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f158],
                                                                                                                                                          dob: responseJuly1.data[2].tale_of_the_tape.DOB[f158],
                                                                                                                                                          height: responseJuly1.data[2].tale_of_the_tape.Height[f158],
                                                                                                                                                          id: 158,
                                                                                                                                                          matchupId: 79,
                                                                                                                                                          record: responseJuly1.data[2].tale_of_the_tape['Wins/Losses/Draws'][f158],
                                                                                                                                                      }),
                                                                                                                                                        Fighter.create({
                                                                                                                                                          //Ariane Lipski
                                                                                                                                                          name: responseJuly1.data[3].matchup[0],
                                                                                                                                                          defense: responseJuly1.data[3].tale_of_the_tape.Defense[f159],
                                                                                                                                                          reach: responseJuly1.data[3].tale_of_the_tape.Reach[f159],
                                                                                                                                                          strikesAbsorbedPerMin: responseJuly1.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f159],
                                                                                                                                                          strikesLandedPerMin: responseJuly1.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f159],
                                                                                                                                                          avgFightTime: responseJuly1.data[3].tale_of_the_tape['Average Fight Time'][f159],
                                                                                                                                                          avgSubPer15: responseJuly1.data[3].tale_of_the_tape['Submission Average/15 min.'][f159],
                                                                                                                                                          takedownAcc: responseJuly1.data[3].tale_of_the_tape['Takedown Accuracy'][f159],
                                                                                                                                                          takedownDef: responseJuly1.data[3].tale_of_the_tape['Takedown Defense'][f159],
                                                                                                                                                          avgTakedownsPer15: responseJuly1.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f159],
                                                                                                                                                          dob: responseJuly1.data[3].tale_of_the_tape.DOB[f159],
                                                                                                                                                          height: responseJuly1.data[3].tale_of_the_tape.Height[f159],
                                                                                                                                                          id: 159,
                                                                                                                                                          matchupId: 80,
                                                                                                                                                          record: responseJuly1.data[3].tale_of_the_tape['Wins/Losses/Draws'][f159],     
                                                                                                                                                        }),
                                                                                                                                                        Fighter.create({
                                                                                                                                                          //Melissa Gatto
                                                                                                                                                            name: responseJuly1.data[3].matchup[1],
                                                                                                                                                            defense: responseJuly1.data[3].tale_of_the_tape.Defense[f160],
                                                                                                                                                            reach: responseJuly1.data[3].tale_of_the_tape.Reach[f160],
                                                                                                                                                            strikesAbsorbedPerMin: responseJuly1.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f160],
                                                                                                                                                            strikesLandedPerMin: responseJuly1.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f160],
                                                                                                                                                            avgFightTime: responseJuly1.data[3].tale_of_the_tape['Average Fight Time'][f160],
                                                                                                                                                            avgSubPer15: responseJuly1.data[3].tale_of_the_tape['Submission Average/15 min.'][f160],
                                                                                                                                                            takedownAcc: responseJuly1.data[3].tale_of_the_tape['Takedown Accuracy'][f160],
                                                                                                                                                            takedownDef: responseJuly1.data[3].tale_of_the_tape['Takedown Defense'][f160],
                                                                                                                                                            avgTakedownsPer15: responseJuly1.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f160],
                                                                                                                                                            dob: responseJuly1.data[3].tale_of_the_tape.DOB[f160],
                                                                                                                                                            height: responseJuly1.data[3].tale_of_the_tape.Height[f160],
                                                                                                                                                            id: 160,
                                                                                                                                                            matchupId: 80,
                                                                                                                                                            record: responseJuly1.data[3].tale_of_the_tape['Wins/Losses/Draws'][f160],                                                          
                                                                                                                                                        }),
                                                                                                                                                          Fighter.create({
                                                                                                                                                            //Ismael Bonfim
                                                                                                                                                            name: responseJuly1.data[4].matchup[0],
                                                                                                                                                            defense: responseJuly1.data[4].tale_of_the_tape.Defense[f161],
                                                                                                                                                            reach: responseJuly1.data[4].tale_of_the_tape.Reach[f161],
                                                                                                                                                            strikesAbsorbedPerMin: responseJuly1.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f161],
                                                                                                                                                            strikesLandedPerMin: responseJuly1.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f161],
                                                                                                                                                            avgFightTime: responseJuly1.data[4].tale_of_the_tape['Average Fight Time'][f161],
                                                                                                                                                            avgSubPer15: responseJuly1.data[4].tale_of_the_tape['Submission Average/15 min.'][f161],
                                                                                                                                                            takedownAcc: responseJuly1.data[4].tale_of_the_tape['Takedown Accuracy'][f161],
                                                                                                                                                            takedownDef: responseJuly1.data[4].tale_of_the_tape['Takedown Defense'][f161],
                                                                                                                                                            avgTakedownsPer15: responseJuly1.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f161],
                                                                                                                                                            dob: responseJuly1.data[4].tale_of_the_tape.DOB[f161],
                                                                                                                                                            height: responseJuly1.data[4].tale_of_the_tape.Height[f161],
                                                                                                                                                            id: 161,
                                                                                                                                                            matchupId: 81,
                                                                                                                                                            record: responseJuly1.data[4].tale_of_the_tape['Wins/Losses/Draws'][f161],                                                          
                                                                                                                                                          }),
                                                                                                                                                          Fighter.create({
                                                                                                                                                            //Benoit Saint Denis
                                                                                                                                                              name: responseJuly1.data[4].matchup[1],
                                                                                                                                                              defense: responseJuly1.data[4].tale_of_the_tape.Defense[f162],
                                                                                                                                                              reach: responseJuly1.data[4].tale_of_the_tape.Reach[f162],
                                                                                                                                                              strikesAbsorbedPerMin: responseJuly1.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f162],
                                                                                                                                                              strikesLandedPerMin: responseJuly1.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f162],
                                                                                                                                                              avgFightTime: responseJuly1.data[4].tale_of_the_tape['Average Fight Time'][f162],
                                                                                                                                                              avgSubPer15: responseJuly1.data[4].tale_of_the_tape['Submission Average/15 min.'][f162],
                                                                                                                                                              takedownAcc: responseJuly1.data[4].tale_of_the_tape['Takedown Accuracy'][f162],
                                                                                                                                                              takedownDef: responseJuly1.data[4].tale_of_the_tape['Takedown Defense'][f162],
                                                                                                                                                              avgTakedownsPer15: responseJuly1.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f162],
                                                                                                                                                              dob: responseJuly1.data[4].tale_of_the_tape.DOB[f162],
                                                                                                                                                              height: responseJuly1.data[4].tale_of_the_tape.Height[f162],
                                                                                                                                                              id: 162,
                                                                                                                                                              matchupId: 81,
                                                                                                                                                              record: responseJuly1.data[4].tale_of_the_tape['Wins/Losses/Draws'][f162],                                                                    
                                                                                                                                                          }),
                                                                                                                                                            Fighter.create({
                                                                                                                                                              //Abdul Razak Alhassan
                                                                                                                                                              name: responseJuly1.data[5].matchup[0],
                                                                                                                                                              defense: responseJuly1.data[5].tale_of_the_tape.Defense[f163],
                                                                                                                                                              reach: responseJuly1.data[5].tale_of_the_tape.Reach[f163],
                                                                                                                                                              strikesAbsorbedPerMin: responseJuly1.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f163],
                                                                                                                                                              strikesLandedPerMin: responseJuly1.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f163],
                                                                                                                                                              avgFightTime: responseJuly1.data[5].tale_of_the_tape['Average Fight Time'][f163],
                                                                                                                                                              avgSubPer15: responseJuly1.data[5].tale_of_the_tape['Submission Average/15 min.'][f163],
                                                                                                                                                              takedownAcc: responseJuly1.data[5].tale_of_the_tape['Takedown Accuracy'][f163],
                                                                                                                                                              takedownDef: responseJuly1.data[5].tale_of_the_tape['Takedown Defense'][f163],
                                                                                                                                                              avgTakedownsPer15: responseJuly1.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f163],
                                                                                                                                                              dob: responseJuly1.data[5].tale_of_the_tape.DOB[f163],
                                                                                                                                                              height: responseJuly1.data[5].tale_of_the_tape.Height[f163],
                                                                                                                                                              id: 163,
                                                                                                                                                              matchupId: 82,
                                                                                                                                                              record: responseJuly1.data[5].tale_of_the_tape['Wins/Losses/Draws'][f163],                                                                      
                                                                                                                                                            }),
                                                                                                                                                            Fighter.create({
                                                                                                                                                              //Brunno Ferreira
                                                                                                                                                                name: responseJuly1.data[5].matchup[1],
                                                                                                                                                                defense: responseJuly1.data[5].tale_of_the_tape.Defense[f164],
                                                                                                                                                                reach: responseJuly1.data[5].tale_of_the_tape.Reach[f164],
                                                                                                                                                                strikesAbsorbedPerMin: responseJuly1.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f164],
                                                                                                                                                                strikesLandedPerMin: responseJuly1.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f164],
                                                                                                                                                                avgFightTime: responseJuly1.data[5].tale_of_the_tape['Average Fight Time'][f164],
                                                                                                                                                                avgSubPer15: responseJuly1.data[5].tale_of_the_tape['Submission Average/15 min.'][f164],
                                                                                                                                                                takedownAcc: responseJuly1.data[5].tale_of_the_tape['Takedown Accuracy'][f164],
                                                                                                                                                                takedownDef: responseJuly1.data[5].tale_of_the_tape['Takedown Defense'][f164],
                                                                                                                                                                avgTakedownsPer15: responseJuly1.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f164],
                                                                                                                                                                dob: responseJuly1.data[5].tale_of_the_tape.DOB[f164],
                                                                                                                                                                height: responseJuly1.data[5].tale_of_the_tape.Height[f164],
                                                                                                                                                                id: 164,
                                                                                                                                                                matchupId: 82,
                                                                                                                                                                record: responseJuly1.data[5].tale_of_the_tape['Wins/Losses/Draws'][f164],                                                                 
                                                                                                                                                            }),
                                                                                                                                                              Fighter.create({
                                                                                                                                                                //Kevin Lee
                                                                                                                                                                name: responseJuly1.data[6].matchup[0],
                                                                                                                                                                defense: responseJuly1.data[6].tale_of_the_tape.Defense[f165],
                                                                                                                                                                reach: responseJuly1.data[6].tale_of_the_tape.Reach[f165],
                                                                                                                                                                strikesAbsorbedPerMin: responseJuly1.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f165],
                                                                                                                                                                strikesLandedPerMin: responseJuly1.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f165],
                                                                                                                                                                avgFightTime: responseJuly1.data[6].tale_of_the_tape['Average Fight Time'][f165],
                                                                                                                                                                avgSubPer15: responseJuly1.data[6].tale_of_the_tape['Submission Average/15 min.'][f165],
                                                                                                                                                                takedownAcc: responseJuly1.data[6].tale_of_the_tape['Takedown Accuracy'][f165],
                                                                                                                                                                takedownDef: responseJuly1.data[6].tale_of_the_tape['Takedown Defense'][f165],
                                                                                                                                                                avgTakedownsPer15: responseJuly1.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f165],
                                                                                                                                                                dob: responseJuly1.data[6].tale_of_the_tape.DOB[f165],
                                                                                                                                                                height: responseJuly1.data[6].tale_of_the_tape.Height[f165],
                                                                                                                                                                id: 165,
                                                                                                                                                                matchupId: 83,
                                                                                                                                                                record: responseJuly1.data[6].tale_of_the_tape['Wins/Losses/Draws'][f165],                                                             
                                                                                                                                                              }),
                                                                                                                                                              Fighter.create({
                                                                                                                                                                //Rinat Fakhretdinov
                                                                                                                                                                  name: responseJuly1.data[6].matchup[1],
                                                                                                                                                                  defense: responseJuly1.data[6].tale_of_the_tape.Defense[f166],
                                                                                                                                                                  reach: responseJuly1.data[6].tale_of_the_tape.Reach[f166],
                                                                                                                                                                  strikesAbsorbedPerMin: responseJuly1.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f166],
                                                                                                                                                                  strikesLandedPerMin: responseJuly1.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f166],
                                                                                                                                                                  avgFightTime: responseJuly1.data[6].tale_of_the_tape['Average Fight Time'][f166],
                                                                                                                                                                  avgSubPer15: responseJuly1.data[6].tale_of_the_tape['Submission Average/15 min.'][f166],
                                                                                                                                                                  takedownAcc: responseJuly1.data[6].tale_of_the_tape['Takedown Accuracy'][f166],
                                                                                                                                                                  takedownDef: responseJuly1.data[6].tale_of_the_tape['Takedown Defense'][f166],
                                                                                                                                                                  avgTakedownsPer15: responseJuly1.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f166],
                                                                                                                                                                  dob: responseJuly1.data[6].tale_of_the_tape.DOB[f166],
                                                                                                                                                                  height: responseJuly1.data[6].tale_of_the_tape.Height[f166],
                                                                                                                                                                  id: 166,
                                                                                                                                                                  matchupId: 83,
                                                                                                                                                                  record: responseJuly1.data[6].tale_of_the_tape['Wins/Losses/Draws'][f166],                                                                       
                                                                                                                                                              }),
                                                                                                                                                                Fighter.create({
                                                                                                                                                                  //Yana Santos
                                                                                                                                                                  name: responseJuly1.data[7].matchup[0],
                                                                                                                                                                  defense: responseJuly1.data[7].tale_of_the_tape.Defense[f167],
                                                                                                                                                                  reach: responseJuly1.data[7].tale_of_the_tape.Reach[f167],
                                                                                                                                                                  strikesAbsorbedPerMin: responseJuly1.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f167],
                                                                                                                                                                  strikesLandedPerMin: responseJuly1.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f167],
                                                                                                                                                                  avgFightTime: responseJuly1.data[7].tale_of_the_tape['Average Fight Time'][f167],
                                                                                                                                                                  avgSubPer15: responseJuly1.data[7].tale_of_the_tape['Submission Average/15 min.'][f167],
                                                                                                                                                                  takedownAcc: responseJuly1.data[7].tale_of_the_tape['Takedown Accuracy'][f167],
                                                                                                                                                                  takedownDef: responseJuly1.data[7].tale_of_the_tape['Takedown Defense'][f167],
                                                                                                                                                                  avgTakedownsPer15: responseJuly1.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f167],
                                                                                                                                                                  dob: responseJuly1.data[7].tale_of_the_tape.DOB[f167],
                                                                                                                                                                  height: responseJuly1.data[7].tale_of_the_tape.Height[f167],
                                                                                                                                                                  id: 167,
                                                                                                                                                                  matchupId: 84,
                                                                                                                                                                  record: responseJuly1.data[7].tale_of_the_tape['Wins/Losses/Draws'][f167],                                                                
                                                                                                                                                              }),
                                                                                                                                                                Fighter.create({
                                                                                                                                                                  //Macy Chiasson
                                                                                                                                                                    name: responseJuly1.data[7].matchup[1],
                                                                                                                                                                    defense: responseJuly1.data[7].tale_of_the_tape.Defense[f168],
                                                                                                                                                                    reach: responseJuly1.data[7].tale_of_the_tape.Reach[f168],
                                                                                                                                                                    strikesAbsorbedPerMin: responseJuly1.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f168],
                                                                                                                                                                    strikesLandedPerMin: responseJuly1.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f168],
                                                                                                                                                                    avgFightTime: responseJuly1.data[7].tale_of_the_tape['Average Fight Time'][f168],
                                                                                                                                                                    avgSubPer15: responseJuly1.data[7].tale_of_the_tape['Submission Average/15 min.'][f168],
                                                                                                                                                                    takedownAcc: responseJuly1.data[7].tale_of_the_tape['Takedown Accuracy'][f168],
                                                                                                                                                                    takedownDef: responseJuly1.data[7].tale_of_the_tape['Takedown Defense'][f168],
                                                                                                                                                                    avgTakedownsPer15: responseJuly1.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f168],
                                                                                                                                                                    dob: responseJuly1.data[7].tale_of_the_tape.DOB[f168],
                                                                                                                                                                    height: responseJuly1.data[7].tale_of_the_tape.Height[f168],
                                                                                                                                                                    id: 168,
                                                                                                                                                                    matchupId: 84,
                                                                                                                                                                    record: responseJuly1.data[7].tale_of_the_tape['Wins/Losses/Draws'][f168],                                                                   
                                                                                                                                                                }),
                                                                                                                                                                  Fighter.create({
                                                                                                                                                                    //Ivana Petrovic
                                                                                                                                                                    name: responseJuly1.data[8].matchup[0],
                                                                                                                                                                    defense: responseJuly1.data[8].tale_of_the_tape.Defense[f169],
                                                                                                                                                                    reach: responseJuly1.data[8].tale_of_the_tape.Reach[f169],
                                                                                                                                                                    strikesAbsorbedPerMin: responseJuly1.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f169],
                                                                                                                                                                    strikesLandedPerMin: responseJuly1.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f169],
                                                                                                                                                                    avgFightTime: responseJuly1.data[8].tale_of_the_tape['Average Fight Time'][f169],
                                                                                                                                                                    avgSubPer15: responseJuly1.data[8].tale_of_the_tape['Submission Average/15 min.'][f169],
                                                                                                                                                                    takedownAcc: responseJuly1.data[8].tale_of_the_tape['Takedown Accuracy'][f169],
                                                                                                                                                                    takedownDef: responseJuly1.data[8].tale_of_the_tape['Takedown Defense'][f169],
                                                                                                                                                                    avgTakedownsPer15: responseJuly1.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f169],
                                                                                                                                                                    dob: responseJuly1.data[8].tale_of_the_tape.DOB[f169],
                                                                                                                                                                    height: responseJuly1.data[8].tale_of_the_tape.Height[f169],
                                                                                                                                                                    id: 169,
                                                                                                                                                                    matchupId: 85,
                                                                                                                                                                    record: responseJuly1.data[8].tale_of_the_tape['Wins/Losses/Draws'][f169],                                                                    
                                                                                                                                                                  }),
                                                                                                                                                                  Fighter.create({
                                                                                                                                                                    //Luana Carolina
                                                                                                                                                                      name: responseJuly1.data[8].matchup[1],
                                                                                                                                                                      defense: responseJuly1.data[8].tale_of_the_tape.Defense[f170],
                                                                                                                                                                      reach: responseJuly1.data[8].tale_of_the_tape.Reach[f170],
                                                                                                                                                                      strikesAbsorbedPerMin: responseJuly1.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f170],
                                                                                                                                                                      strikesLandedPerMin: responseJuly1.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f170],
                                                                                                                                                                      avgFightTime: responseJuly1.data[8].tale_of_the_tape['Average Fight Time'][f170],
                                                                                                                                                                      avgSubPer15: responseJuly1.data[8].tale_of_the_tape['Submission Average/15 min.'][f170],
                                                                                                                                                                      takedownAcc: responseJuly1.data[8].tale_of_the_tape['Takedown Accuracy'][f170],
                                                                                                                                                                      takedownDef: responseJuly1.data[8].tale_of_the_tape['Takedown Defense'][f170],
                                                                                                                                                                      avgTakedownsPer15: responseJuly1.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f170],
                                                                                                                                                                      dob: responseJuly1.data[8].tale_of_the_tape.DOB[f170],
                                                                                                                                                                      height: responseJuly1.data[8].tale_of_the_tape.Height[f170],
                                                                                                                                                                      id: 170,
                                                                                                                                                                      matchupId: 85,
                                                                                                                                                                      record: responseJuly1.data[8].tale_of_the_tape['Wins/Losses/Draws'][f170],
                                                                                                                                                                  }),
                                                                                                                                                                    Fighter.create({
                                                                                                                                                                      //Alexandr Romanov
                                                                                                                                                                      name: responseJuly1.data[9].matchup[0],
                                                                                                                                                                      defense: responseJuly1.data[9].tale_of_the_tape.Defense[f171],
                                                                                                                                                                      reach: responseJuly1.data[9].tale_of_the_tape.Reach[f171],
                                                                                                                                                                      strikesAbsorbedPerMin: responseJuly1.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f171],
                                                                                                                                                                      strikesLandedPerMin: responseJuly1.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f171],
                                                                                                                                                                      avgFightTime: responseJuly1.data[9].tale_of_the_tape['Average Fight Time'][f171],
                                                                                                                                                                      avgSubPer15: responseJuly1.data[9].tale_of_the_tape['Submission Average/15 min.'][f171],
                                                                                                                                                                      takedownAcc: responseJuly1.data[9].tale_of_the_tape['Takedown Accuracy'][f171],
                                                                                                                                                                      takedownDef: responseJuly1.data[9].tale_of_the_tape['Takedown Defense'][f171],
                                                                                                                                                                      avgTakedownsPer15: responseJuly1.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f171],
                                                                                                                                                                      dob: responseJuly1.data[9].tale_of_the_tape.DOB[f171],
                                                                                                                                                                      height: responseJuly1.data[9].tale_of_the_tape.Height[f171],
                                                                                                                                                                      id: 171,
                                                                                                                                                                      matchupId: 86,
                                                                                                                                                                      record: responseJuly1.data[9].tale_of_the_tape['Wins/Losses/Draws'][f171],                                                                    
                                                                                                                                                                    }),
                                                                                                                                                                    Fighter.create({
                                                                                                                                                                      //Blagoy Ivanov
                                                                                                                                                                        name: responseJuly1.data[9].matchup[1],
                                                                                                                                                                        defense: responseJuly1.data[9].tale_of_the_tape.Defense[f172],
                                                                                                                                                                        reach: responseJuly1.data[9].tale_of_the_tape.Reach[f172],
                                                                                                                                                                        strikesAbsorbedPerMin: responseJuly1.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f172],
                                                                                                                                                                        strikesLandedPerMin: responseJuly1.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f172],
                                                                                                                                                                        avgFightTime: responseJuly1.data[9].tale_of_the_tape['Average Fight Time'][f172],
                                                                                                                                                                        avgSubPer15: responseJuly1.data[9].tale_of_the_tape['Submission Average/15 min.'][f172],
                                                                                                                                                                        takedownAcc: responseJuly1.data[9].tale_of_the_tape['Takedown Accuracy'][f172],
                                                                                                                                                                        takedownDef: responseJuly1.data[9].tale_of_the_tape['Takedown Defense'][f172],
                                                                                                                                                                        avgTakedownsPer15: responseJuly1.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f172],
                                                                                                                                                                        dob: responseJuly1.data[9].tale_of_the_tape.DOB[f172],
                                                                                                                                                                        height: responseJuly1.data[9].tale_of_the_tape.Height[f172],
                                                                                                                                                                        id: 172,
                                                                                                                                                                        matchupId: 86,
                                                                                                                                                                        record: responseJuly1.data[9].tale_of_the_tape['Wins/Losses/Draws'][f172],                                                                       
                                                                                                                                                                      }),
                                                                                                                                                                      Fighter.create({
                                                                                                                                                                        //Guram Kutateladze
                                                                                                                                                                        name: responseJuly1.data[10].matchup[0],
                                                                                                                                                                        defense: responseJuly1.data[10].tale_of_the_tape.Defense[f173],
                                                                                                                                                                        reach: responseJuly1.data[10].tale_of_the_tape.Reach[f173],
                                                                                                                                                                        strikesAbsorbedPerMin: responseJuly1.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f173],
                                                                                                                                                                        strikesLandedPerMin: responseJuly1.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f173],
                                                                                                                                                                        avgFightTime: responseJuly1.data[10].tale_of_the_tape['Average Fight Time'][f173],
                                                                                                                                                                        avgSubPer15: responseJuly1.data[10].tale_of_the_tape['Submission Average/15 min.'][f173],
                                                                                                                                                                        takedownAcc: responseJuly1.data[10].tale_of_the_tape['Takedown Accuracy'][f173],
                                                                                                                                                                        takedownDef: responseJuly1.data[10].tale_of_the_tape['Takedown Defense'][f173],
                                                                                                                                                                        avgTakedownsPer15: responseJuly1.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f173],
                                                                                                                                                                        dob: responseJuly1.data[10].tale_of_the_tape.DOB[f173],
                                                                                                                                                                        height: responseJuly1.data[10].tale_of_the_tape.Height[f173],
                                                                                                                                                                        id: 173,
                                                                                                                                                                        matchupId: 87,
                                                                                                                                                                        record: responseJuly1.data[10].tale_of_the_tape['Wins/Losses/Draws'][f173],                                                                      
                                                                                                                                                                      }),
                                                                                                                                                                      Fighter.create({
                                                                                                                                                                        //Elves Brener
                                                                                                                                                                          name: responseJuly1.data[10].matchup[1],
                                                                                                                                                                          defense: responseJuly1.data[10].tale_of_the_tape.Defense[f174],
                                                                                                                                                                          reach: responseJuly1.data[10].tale_of_the_tape.Reach[f174],
                                                                                                                                                                          strikesAbsorbedPerMin: responseJuly1.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f174],
                                                                                                                                                                          strikesLandedPerMin: responseJuly1.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f174],
                                                                                                                                                                          avgFightTime: responseJuly1.data[10].tale_of_the_tape['Average Fight Time'][f174],
                                                                                                                                                                          avgSubPer15: responseJuly1.data[10].tale_of_the_tape['Submission Average/15 min.'][f174],
                                                                                                                                                                          takedownAcc: responseJuly1.data[10].tale_of_the_tape['Takedown Accuracy'][f174],
                                                                                                                                                                          takedownDef: responseJuly1.data[10].tale_of_the_tape['Takedown Defense'][f174],
                                                                                                                                                                          avgTakedownsPer15: responseJuly1.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f174],
                                                                                                                                                                          dob: responseJuly1.data[10].tale_of_the_tape.DOB[f174],
                                                                                                                                                                          height: responseJuly1.data[10].tale_of_the_tape.Height[f174],
                                                                                                                                                                          id: 174,
                                                                                                                                                                          matchupId: 87,
                                                                                                                                                                          record: responseJuly1.data[10].tale_of_the_tape['Wins/Losses/Draws'][f174],                                                                           
                                                                                                                                                                      }),
                                                                                                                                                                      Fighter.create({
                                                                                                                                                                        //Alexander Volkanovski
                                                                                                                                                                        name: responseJuly8.data[0].matchup[0],
                                                                                                                                                                        defense: responseJuly8.data[0].tale_of_the_tape.Defense[f175],
                                                                                                                                                                        reach: responseJuly8.data[0].tale_of_the_tape.Reach[f175],
                                                                                                                                                                        strikesAbsorbedPerMin: responseJuly8.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f175],
                                                                                                                                                                        strikesLandedPerMin: responseJuly8.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f175],
                                                                                                                                                                        avgFightTime: responseJuly8.data[0].tale_of_the_tape['Average Fight Time'][f175],
                                                                                                                                                                        avgSubPer15: responseJuly8.data[0].tale_of_the_tape['Submission Average/15 min.'][f175],
                                                                                                                                                                        takedownAcc: responseJuly8.data[0].tale_of_the_tape['Takedown Accuracy'][f175],
                                                                                                                                                                        takedownDef: responseJuly8.data[0].tale_of_the_tape['Takedown Defense'][f175],
                                                                                                                                                                        avgTakedownsPer15: responseJuly8.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f175],
                                                                                                                                                                        dob: responseJuly8.data[0].tale_of_the_tape.DOB[f175],
                                                                                                                                                                        height: responseJuly8.data[0].tale_of_the_tape.Height[f175],
                                                                                                                                                                        id: 175,
                                                                                                                                                                        matchupId: 88,
                                                                                                                                                                        record: responseJuly8.data[0].tale_of_the_tape['Wins/Losses/Draws'][f175], 
                                                                                                                                                                        
                                                                                                                                                                      }),
                                                                                                                                                                      Fighter.create({
                                                                                                                                                                        //Yair Rodriguez
                                                                                                                                                                          name: responseJuly8.data[0].matchup[1],
                                                                                                                                                                          defense: responseJuly8.data[0].tale_of_the_tape.Defense[f176],
                                                                                                                                                                          reach: responseJuly8.data[0].tale_of_the_tape.Reach[f176],
                                                                                                                                                                          strikesAbsorbedPerMin: responseJuly8.data[0].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f176],
                                                                                                                                                                          strikesLandedPerMin: responseJuly8.data[0].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f176],
                                                                                                                                                                          avgFightTime: responseJuly8.data[0].tale_of_the_tape['Average Fight Time'][f176],
                                                                                                                                                                          avgSubPer15: responseJuly8.data[0].tale_of_the_tape['Submission Average/15 min.'][f176],
                                                                                                                                                                          takedownAcc: responseJuly8.data[0].tale_of_the_tape['Takedown Accuracy'][f176],
                                                                                                                                                                          takedownDef: responseJuly8.data[0].tale_of_the_tape['Takedown Defense'][f176],
                                                                                                                                                                          avgTakedownsPer15: responseJuly8.data[0].tale_of_the_tape['Takedowns Average/15 min.'][f176],
                                                                                                                                                                          dob: responseJuly8.data[0].tale_of_the_tape.DOB[f176],
                                                                                                                                                                          height: responseJuly8.data[0].tale_of_the_tape.Height[f176],
                                                                                                                                                                          id: 176,
                                                                                                                                                                          matchupId: 88,                        
                                                                                                                                                                          record: responseJuly8.data[0].tale_of_the_tape['Wins/Losses/Draws'][f176],
                                                                                                                                                                         
                                                                                                                                                                      }),
                                                                                                                                                                        Fighter.create({
                                                                                                                                                                          //Brandon Moreno
                                                                                                                                                                          name: responseJuly8.data[1].matchup[0],
                                                                                                                                                                          defense: responseJuly8.data[1].tale_of_the_tape.Defense[f177],
                                                                                                                                                                          reach: responseJuly8.data[1].tale_of_the_tape.Reach[f177],
                                                                                                                                                                          strikesAbsorbedPerMin: responseJuly8.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f177],
                                                                                                                                                                          strikesLandedPerMin: responseJuly8.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f177],
                                                                                                                                                                          avgFightTime: responseJuly8.data[1].tale_of_the_tape['Average Fight Time'][f177],
                                                                                                                                                                          avgSubPer15: responseJuly8.data[1].tale_of_the_tape['Submission Average/15 min.'][f177],
                                                                                                                                                                          takedownAcc: responseJuly8.data[1].tale_of_the_tape['Takedown Accuracy'][f177],
                                                                                                                                                                          takedownDef: responseJuly8.data[1].tale_of_the_tape['Takedown Defense'][f177],
                                                                                                                                                                          avgTakedownsPer15: responseJuly8.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f177],
                                                                                                                                                                          dob: responseJuly8.data[1].tale_of_the_tape.DOB[f177],
                                                                                                                                                                          height: responseJuly8.data[1].tale_of_the_tape.Height[f177],
                                                                                                                                                                          id: 177,
                                                                                                                                                                          matchupId: 89,
                                                                                                                                                                          record: responseJuly8.data[1].tale_of_the_tape['Wins/Losses/Draws'][f177],
                                                                                                                                                                        }),
                                                                                                                                                                        Fighter.create({
                                                                                                                                                                          //Alexandre Pantoja
                                                                                                                                                                            name: responseJuly8.data[1].matchup[1],
                                                                                                                                                                            defense: responseJuly8.data[1].tale_of_the_tape.Defense[f178],
                                                                                                                                                                            reach: responseJuly8.data[1].tale_of_the_tape.Reach[f178],
                                                                                                                                                                            strikesAbsorbedPerMin: responseJuly8.data[1].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f178],
                                                                                                                                                                            strikesLandedPerMin: responseJuly8.data[1].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f178],
                                                                                                                                                                            avgFightTime: responseJuly8.data[1].tale_of_the_tape['Average Fight Time'][f178],
                                                                                                                                                                            avgSubPer15: responseJuly8.data[1].tale_of_the_tape['Submission Average/15 min.'][f178],
                                                                                                                                                                            takedownAcc: responseJuly8.data[1].tale_of_the_tape['Takedown Accuracy'][f178],
                                                                                                                                                                            takedownDef: responseJuly8.data[1].tale_of_the_tape['Takedown Defense'][f178],
                                                                                                                                                                            avgTakedownsPer15: responseJuly8.data[1].tale_of_the_tape['Takedowns Average/15 min.'][f178],
                                                                                                                                                                            dob: responseJuly8.data[1].tale_of_the_tape.DOB[f178],
                                                                                                                                                                            height: responseJuly8.data[1].tale_of_the_tape.Height[f178],
                                                                                                                                                                            id: 178,
                                                                                                                                                                            matchupId: 89,
                                                                                                                                                                            record: responseJuly8.data[1].tale_of_the_tape['Wins/Losses/Draws'][f178],   
                                                                                                                                                                        }),
                                                                                                                                                                          Fighter.create({
                                                                                                                                                                            //Robert Whittaker
                                                                                                                                                                            name: responseJuly8.data[2].matchup[0],
                                                                                                                                                                            defense: responseJuly8.data[2].tale_of_the_tape.Defense[f179],
                                                                                                                                                                            reach: responseJuly8.data[2].tale_of_the_tape.Reach[f179],
                                                                                                                                                                            strikesAbsorbedPerMin: responseJuly8.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f179],
                                                                                                                                                                            strikesLandedPerMin: responseJuly8.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f179],
                                                                                                                                                                            avgFightTime: responseJuly8.data[2].tale_of_the_tape['Average Fight Time'][f179],
                                                                                                                                                                            avgSubPer15: responseJuly8.data[2].tale_of_the_tape['Submission Average/15 min.'][f179],
                                                                                                                                                                            takedownAcc: responseJuly8.data[2].tale_of_the_tape['Takedown Accuracy'][f179],
                                                                                                                                                                            takedownDef: responseJuly8.data[2].tale_of_the_tape['Takedown Defense'][f179],
                                                                                                                                                                            avgTakedownsPer15: responseJuly8.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f179],
                                                                                                                                                                            dob: responseJuly8.data[2].tale_of_the_tape.DOB[f179],
                                                                                                                                                                            height: responseJuly8.data[2].tale_of_the_tape.Height[f179],
                                                                                                                                                                            id: 179,
                                                                                                                                                                            matchupId: 90,
                                                                                                                                                                            record: responseJuly8.data[2].tale_of_the_tape['Wins/Losses/Draws'][f179],
                                                                                                                                                                          }),
                                                                                                                                                                          Fighter.create({
                                                                                                                                                                            //Dricus Du Plessis
                                                                                                                                                                              name: responseJuly8.data[2].matchup[1],
                                                                                                                                                                              defense: responseJuly8.data[2].tale_of_the_tape.Defense[f180],
                                                                                                                                                                              reach: responseJuly8.data[2].tale_of_the_tape.Reach[f180],
                                                                                                                                                                              strikesAbsorbedPerMin: responseJuly8.data[2].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f180],
                                                                                                                                                                              strikesLandedPerMin: responseJuly8.data[2].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f180],
                                                                                                                                                                              avgFightTime: responseJuly8.data[2].tale_of_the_tape['Average Fight Time'][f180],
                                                                                                                                                                              avgSubPer15: responseJuly8.data[2].tale_of_the_tape['Submission Average/15 min.'][f180],
                                                                                                                                                                              takedownAcc: responseJuly8.data[2].tale_of_the_tape['Takedown Accuracy'][f180],
                                                                                                                                                                              takedownDef: responseJuly8.data[2].tale_of_the_tape['Takedown Defense'][f180],
                                                                                                                                                                              avgTakedownsPer15: responseJuly8.data[2].tale_of_the_tape['Takedowns Average/15 min.'][f180],
                                                                                                                                                                              dob: responseJuly8.data[2].tale_of_the_tape.DOB[f180],
                                                                                                                                                                              height: responseJuly8.data[2].tale_of_the_tape.Height[f180],
                                                                                                                                                                              id: 180,
                                                                                                                                                                              matchupId: 90,
                                                                                                                                                                              record: responseJuly8.data[2].tale_of_the_tape['Wins/Losses/Draws'][f180],
                                                                                                                                                                          }),
                                                                                                                                                                            Fighter.create({
                                                                                                                                                                              //Jalin Turner
                                                                                                                                                                              name: responseJuly8.data[3].matchup[0],
                                                                                                                                                                              defense: responseJuly8.data[3].tale_of_the_tape.Defense[f181],
                                                                                                                                                                              reach: responseJuly8.data[3].tale_of_the_tape.Reach[f181],
                                                                                                                                                                              strikesAbsorbedPerMin: responseJuly8.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f181],
                                                                                                                                                                              strikesLandedPerMin: responseJuly8.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f181],
                                                                                                                                                                              avgFightTime: responseJuly8.data[3].tale_of_the_tape['Average Fight Time'][f181],
                                                                                                                                                                              avgSubPer15: responseJuly8.data[3].tale_of_the_tape['Submission Average/15 min.'][f181],
                                                                                                                                                                              takedownAcc: responseJuly8.data[3].tale_of_the_tape['Takedown Accuracy'][f181],
                                                                                                                                                                              takedownDef: responseJuly8.data[3].tale_of_the_tape['Takedown Defense'][f181],
                                                                                                                                                                              avgTakedownsPer15: responseJuly8.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f181],
                                                                                                                                                                              dob: responseJuly8.data[3].tale_of_the_tape.DOB[f181],
                                                                                                                                                                              height: responseJuly8.data[3].tale_of_the_tape.Height[f181],
                                                                                                                                                                              id: 181,
                                                                                                                                                                              matchupId: 91,
                                                                                                                                                                              record: responseJuly8.data[3].tale_of_the_tape['Wins/Losses/Draws'][f181],     
                                                                                                                                                                            }),
                                                                                                                                                                            Fighter.create({
                                                                                                                                                                              //Dan Hooker
                                                                                                                                                                                name: responseJuly8.data[3].matchup[1],
                                                                                                                                                                                defense: responseJuly8.data[3].tale_of_the_tape.Defense[f182],
                                                                                                                                                                                reach: responseJuly8.data[3].tale_of_the_tape.Reach[f182],
                                                                                                                                                                                strikesAbsorbedPerMin: responseJuly8.data[3].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f182],
                                                                                                                                                                                strikesLandedPerMin: responseJuly8.data[3].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f182],
                                                                                                                                                                                avgFightTime: responseJuly8.data[3].tale_of_the_tape['Average Fight Time'][f182],
                                                                                                                                                                                avgSubPer15: responseJuly8.data[3].tale_of_the_tape['Submission Average/15 min.'][f182],
                                                                                                                                                                                takedownAcc: responseJuly8.data[3].tale_of_the_tape['Takedown Accuracy'][f182],
                                                                                                                                                                                takedownDef: responseJuly8.data[3].tale_of_the_tape['Takedown Defense'][f182],
                                                                                                                                                                                avgTakedownsPer15: responseJuly8.data[3].tale_of_the_tape['Takedowns Average/15 min.'][f182],
                                                                                                                                                                                dob: responseJuly8.data[3].tale_of_the_tape.DOB[f182],
                                                                                                                                                                                height: responseJuly8.data[3].tale_of_the_tape.Height[f182],
                                                                                                                                                                                id: 182,
                                                                                                                                                                                matchupId: 91,
                                                                                                                                                                                record: responseJuly8.data[3].tale_of_the_tape['Wins/Losses/Draws'][f182],                                                          
                                                                                                                                                                            }),
                                                                                                                                                                              Fighter.create({
                                                                                                                                                                                //Bo Nickal
                                                                                                                                                                                name: responseJuly8.data[4].matchup[0],
                                                                                                                                                                                defense: responseJuly8.data[4].tale_of_the_tape.Defense[f183],
                                                                                                                                                                                reach: responseJuly8.data[4].tale_of_the_tape.Reach[f183],
                                                                                                                                                                                strikesAbsorbedPerMin: responseJuly8.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f183],
                                                                                                                                                                                strikesLandedPerMin: responseJuly8.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f183],
                                                                                                                                                                                avgFightTime: responseJuly8.data[4].tale_of_the_tape['Average Fight Time'][f183],
                                                                                                                                                                                avgSubPer15: responseJuly8.data[4].tale_of_the_tape['Submission Average/15 min.'][f183],
                                                                                                                                                                                takedownAcc: responseJuly8.data[4].tale_of_the_tape['Takedown Accuracy'][f183],
                                                                                                                                                                                takedownDef: responseJuly8.data[4].tale_of_the_tape['Takedown Defense'][f183],
                                                                                                                                                                                avgTakedownsPer15: responseJuly8.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f183],
                                                                                                                                                                                dob: responseJuly8.data[4].tale_of_the_tape.DOB[f183],
                                                                                                                                                                                height: responseJuly8.data[4].tale_of_the_tape.Height[f183],
                                                                                                                                                                                id: 183,
                                                                                                                                                                                matchupId: 92,
                                                                                                                                                                                record: responseJuly8.data[4].tale_of_the_tape['Wins/Losses/Draws'][f183],                                                          
                                                                                                                                                                              }),
                                                                                                                                                                              Fighter.create({
                                                                                                                                                                                //Tresean Gore
                                                                                                                                                                                  name: responseJuly8.data[4].matchup[1],
                                                                                                                                                                                  defense: responseJuly8.data[4].tale_of_the_tape.Defense[f184],
                                                                                                                                                                                  reach: responseJuly8.data[4].tale_of_the_tape.Reach[f184],
                                                                                                                                                                                  strikesAbsorbedPerMin: responseJuly8.data[4].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f184],
                                                                                                                                                                                  strikesLandedPerMin: responseJuly8.data[4].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f184],
                                                                                                                                                                                  avgFightTime: responseJuly8.data[4].tale_of_the_tape['Average Fight Time'][f184],
                                                                                                                                                                                  avgSubPer15: responseJuly8.data[4].tale_of_the_tape['Submission Average/15 min.'][f184],
                                                                                                                                                                                  takedownAcc: responseJuly8.data[4].tale_of_the_tape['Takedown Accuracy'][f184],
                                                                                                                                                                                  takedownDef: responseJuly8.data[4].tale_of_the_tape['Takedown Defense'][f184],
                                                                                                                                                                                  avgTakedownsPer15: responseJuly8.data[4].tale_of_the_tape['Takedowns Average/15 min.'][f184],
                                                                                                                                                                                  dob: responseJuly8.data[4].tale_of_the_tape.DOB[f184],
                                                                                                                                                                                  height: responseJuly8.data[4].tale_of_the_tape.Height[f184],
                                                                                                                                                                                  id: 184,
                                                                                                                                                                                  matchupId: 92,
                                                                                                                                                                                  record: responseJuly8.data[4].tale_of_the_tape['Wins/Losses/Draws'][f184],                                                                    
                                                                                                                                                                              }),
                                                                                                                                                                                Fighter.create({
                                                                                                                                                                                  //Robbie Lawler
                                                                                                                                                                                  name: responseJuly8.data[5].matchup[0],
                                                                                                                                                                                  defense: responseJuly8.data[5].tale_of_the_tape.Defense[f185],
                                                                                                                                                                                  reach: responseJuly8.data[5].tale_of_the_tape.Reach[f185],
                                                                                                                                                                                  strikesAbsorbedPerMin: responseJuly8.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f185],
                                                                                                                                                                                  strikesLandedPerMin: responseJuly8.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f185],
                                                                                                                                                                                  avgFightTime: responseJuly8.data[5].tale_of_the_tape['Average Fight Time'][f185],
                                                                                                                                                                                  avgSubPer15: responseJuly8.data[5].tale_of_the_tape['Submission Average/15 min.'][f185],
                                                                                                                                                                                  takedownAcc: responseJuly8.data[5].tale_of_the_tape['Takedown Accuracy'][f185],
                                                                                                                                                                                  takedownDef: responseJuly8.data[5].tale_of_the_tape['Takedown Defense'][f185],
                                                                                                                                                                                  avgTakedownsPer15: responseJuly8.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f185],
                                                                                                                                                                                  dob: responseJuly8.data[5].tale_of_the_tape.DOB[f185],
                                                                                                                                                                                  height: responseJuly8.data[5].tale_of_the_tape.Height[f185],
                                                                                                                                                                                  id: 185,
                                                                                                                                                                                  matchupId: 93,
                                                                                                                                                                                  record: responseJuly8.data[5].tale_of_the_tape['Wins/Losses/Draws'][f185],                                                                      
                                                                                                                                                                                }),
                                                                                                                                                                                Fighter.create({
                                                                                                                                                                                  //Niko Price
                                                                                                                                                                                    name: responseJuly8.data[5].matchup[1],
                                                                                                                                                                                    defense: responseJuly8.data[5].tale_of_the_tape.Defense[f186],
                                                                                                                                                                                    reach: responseJuly8.data[5].tale_of_the_tape.Reach[f186],
                                                                                                                                                                                    strikesAbsorbedPerMin: responseJuly8.data[5].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f186],
                                                                                                                                                                                    strikesLandedPerMin: responseJuly8.data[5].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f186],
                                                                                                                                                                                    avgFightTime: responseJuly8.data[5].tale_of_the_tape['Average Fight Time'][f186],
                                                                                                                                                                                    avgSubPer15: responseJuly8.data[5].tale_of_the_tape['Submission Average/15 min.'][f186],
                                                                                                                                                                                    takedownAcc: responseJuly8.data[5].tale_of_the_tape['Takedown Accuracy'][f186],
                                                                                                                                                                                    takedownDef: responseJuly8.data[5].tale_of_the_tape['Takedown Defense'][f186],
                                                                                                                                                                                    avgTakedownsPer15: responseJuly8.data[5].tale_of_the_tape['Takedowns Average/15 min.'][f186],
                                                                                                                                                                                    dob: responseJuly8.data[5].tale_of_the_tape.DOB[f186],
                                                                                                                                                                                    height: responseJuly8.data[5].tale_of_the_tape.Height[f186],
                                                                                                                                                                                    id: 186,
                                                                                                                                                                                    matchupId: 93,
                                                                                                                                                                                    record: responseJuly8.data[5].tale_of_the_tape['Wins/Losses/Draws'][f186],                                                                 
                                                                                                                                                                                }),
                                                                                                                                                                                  Fighter.create({
                                                                                                                                                                                    //Sean Brady
                                                                                                                                                                                    name: responseJuly8.data[6].matchup[0],
                                                                                                                                                                                    defense: responseJuly8.data[6].tale_of_the_tape.Defense[f187],
                                                                                                                                                                                    reach: responseJuly8.data[6].tale_of_the_tape.Reach[f187],
                                                                                                                                                                                    strikesAbsorbedPerMin: responseJuly8.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f187],
                                                                                                                                                                                    strikesLandedPerMin: responseJuly8.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f187],
                                                                                                                                                                                    avgFightTime: responseJuly8.data[6].tale_of_the_tape['Average Fight Time'][f187],
                                                                                                                                                                                    avgSubPer15: responseJuly8.data[6].tale_of_the_tape['Submission Average/15 min.'][f187],
                                                                                                                                                                                    takedownAcc: responseJuly8.data[6].tale_of_the_tape['Takedown Accuracy'][f187],
                                                                                                                                                                                    takedownDef: responseJuly8.data[6].tale_of_the_tape['Takedown Defense'][f187],
                                                                                                                                                                                    avgTakedownsPer15: responseJuly8.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f187],
                                                                                                                                                                                    dob: responseJuly8.data[6].tale_of_the_tape.DOB[f187],
                                                                                                                                                                                    height: responseJuly8.data[6].tale_of_the_tape.Height[f187],
                                                                                                                                                                                    id: 187,
                                                                                                                                                                                    matchupId: 94,
                                                                                                                                                                                    record: responseJuly8.data[6].tale_of_the_tape['Wins/Losses/Draws'][f187],                                                             
                                                                                                                                                                                  }),
                                                                                                                                                                                  Fighter.create({
                                                                                                                                                                                    //Jack Della Maddalena
                                                                                                                                                                                      name: responseJuly8.data[6].matchup[1],
                                                                                                                                                                                      defense: responseJuly8.data[6].tale_of_the_tape.Defense[f188],
                                                                                                                                                                                      reach: responseJuly8.data[6].tale_of_the_tape.Reach[f188],
                                                                                                                                                                                      strikesAbsorbedPerMin: responseJuly8.data[6].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f188],
                                                                                                                                                                                      strikesLandedPerMin: responseJuly8.data[6].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f188],
                                                                                                                                                                                      avgFightTime: responseJuly8.data[6].tale_of_the_tape['Average Fight Time'][f188],
                                                                                                                                                                                      avgSubPer15: responseJuly8.data[6].tale_of_the_tape['Submission Average/15 min.'][f188],
                                                                                                                                                                                      takedownAcc: responseJuly8.data[6].tale_of_the_tape['Takedown Accuracy'][f188],
                                                                                                                                                                                      takedownDef: responseJuly8.data[6].tale_of_the_tape['Takedown Defense'][f188],
                                                                                                                                                                                      avgTakedownsPer15: responseJuly8.data[6].tale_of_the_tape['Takedowns Average/15 min.'][f188],
                                                                                                                                                                                      dob: responseJuly8.data[6].tale_of_the_tape.DOB[f188],
                                                                                                                                                                                      height: responseJuly8.data[6].tale_of_the_tape.Height[f188],
                                                                                                                                                                                      id: 188,
                                                                                                                                                                                      matchupId: 94,
                                                                                                                                                                                      record: responseJuly8.data[6].tale_of_the_tape['Wins/Losses/Draws'][f188],                                                                       
                                                                                                                                                                                  }),
                                                                                                                                                                                    Fighter.create({
                                                                                                                                                                                      //Yazmin Jauregui
                                                                                                                                                                                      name: responseJuly8.data[7].matchup[0],
                                                                                                                                                                                      defense: responseJuly8.data[7].tale_of_the_tape.Defense[f189],
                                                                                                                                                                                      reach: responseJuly8.data[7].tale_of_the_tape.Reach[f189],
                                                                                                                                                                                      strikesAbsorbedPerMin: responseJuly8.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f189],
                                                                                                                                                                                      strikesLandedPerMin: responseJuly8.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f189],
                                                                                                                                                                                      avgFightTime: responseJuly8.data[7].tale_of_the_tape['Average Fight Time'][f189],
                                                                                                                                                                                      avgSubPer15: responseJuly8.data[7].tale_of_the_tape['Submission Average/15 min.'][f189],
                                                                                                                                                                                      takedownAcc: responseJuly8.data[7].tale_of_the_tape['Takedown Accuracy'][f189],
                                                                                                                                                                                      takedownDef: responseJuly8.data[7].tale_of_the_tape['Takedown Defense'][f189],
                                                                                                                                                                                      avgTakedownsPer15: responseJuly8.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f189],
                                                                                                                                                                                      dob: responseJuly8.data[7].tale_of_the_tape.DOB[f189],
                                                                                                                                                                                      height: responseJuly8.data[7].tale_of_the_tape.Height[f189],
                                                                                                                                                                                      id: 189,
                                                                                                                                                                                      matchupId: 95,
                                                                                                                                                                                      record: responseJuly8.data[7].tale_of_the_tape['Wins/Losses/Draws'][f189],                                                                
                                                                                                                                                                                  }),
                                                                                                                                                                                    Fighter.create({
                                                                                                                                                                                      //Denise Gomes
                                                                                                                                                                                        name: responseJuly8.data[7].matchup[1],
                                                                                                                                                                                        defense: responseJuly8.data[7].tale_of_the_tape.Defense[f190],
                                                                                                                                                                                        reach: responseJuly8.data[7].tale_of_the_tape.Reach[f190],
                                                                                                                                                                                        strikesAbsorbedPerMin: responseJuly8.data[7].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f190],
                                                                                                                                                                                        strikesLandedPerMin: responseJuly8.data[7].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f190],
                                                                                                                                                                                        avgFightTime: responseJuly8.data[7].tale_of_the_tape['Average Fight Time'][f190],
                                                                                                                                                                                        avgSubPer15: responseJuly8.data[7].tale_of_the_tape['Submission Average/15 min.'][f190],
                                                                                                                                                                                        takedownAcc: responseJuly8.data[7].tale_of_the_tape['Takedown Accuracy'][f190],
                                                                                                                                                                                        takedownDef: responseJuly8.data[7].tale_of_the_tape['Takedown Defense'][f190],
                                                                                                                                                                                        avgTakedownsPer15: responseJuly8.data[7].tale_of_the_tape['Takedowns Average/15 min.'][f190],
                                                                                                                                                                                        dob: responseJuly8.data[7].tale_of_the_tape.DOB[f190],
                                                                                                                                                                                        height: responseJuly8.data[7].tale_of_the_tape.Height[f190],
                                                                                                                                                                                        id: 190,
                                                                                                                                                                                        matchupId: 95,
                                                                                                                                                                                        record: responseJuly8.data[7].tale_of_the_tape['Wins/Losses/Draws'][f190],                                                                   
                                                                                                                                                                                    }),
                                                                                                                                                                                      Fighter.create({
                                                                                                                                                                                        //Jimmy Crute
                                                                                                                                                                                        name: responseJuly8.data[8].matchup[0],
                                                                                                                                                                                        defense: responseJuly8.data[8].tale_of_the_tape.Defense[f191],
                                                                                                                                                                                        reach: responseJuly8.data[8].tale_of_the_tape.Reach[f191],
                                                                                                                                                                                        strikesAbsorbedPerMin: responseJuly8.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f191],
                                                                                                                                                                                        strikesLandedPerMin: responseJuly8.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f191],
                                                                                                                                                                                        avgFightTime: responseJuly8.data[8].tale_of_the_tape['Average Fight Time'][f191],
                                                                                                                                                                                        avgSubPer15: responseJuly8.data[8].tale_of_the_tape['Submission Average/15 min.'][f191],
                                                                                                                                                                                        takedownAcc: responseJuly8.data[8].tale_of_the_tape['Takedown Accuracy'][f191],
                                                                                                                                                                                        takedownDef: responseJuly8.data[8].tale_of_the_tape['Takedown Defense'][f191],
                                                                                                                                                                                        avgTakedownsPer15: responseJuly8.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f191],
                                                                                                                                                                                        dob: responseJuly8.data[8].tale_of_the_tape.DOB[f191],
                                                                                                                                                                                        height: responseJuly8.data[8].tale_of_the_tape.Height[f191],
                                                                                                                                                                                        id: 191,
                                                                                                                                                                                        matchupId: 96,
                                                                                                                                                                                        record: responseJuly8.data[8].tale_of_the_tape['Wins/Losses/Draws'][f191],                                                                    
                                                                                                                                                                                      }),
                                                                                                                                                                                      Fighter.create({
                                                                                                                                                                                        //Alonzo Menifield
                                                                                                                                                                                          name: responseJuly8.data[8].matchup[1],
                                                                                                                                                                                          defense: responseJuly8.data[8].tale_of_the_tape.Defense[f192],
                                                                                                                                                                                          reach: responseJuly8.data[8].tale_of_the_tape.Reach[f192],
                                                                                                                                                                                          strikesAbsorbedPerMin: responseJuly8.data[8].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f192],
                                                                                                                                                                                          strikesLandedPerMin: responseJuly8.data[8].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f192],
                                                                                                                                                                                          avgFightTime: responseJuly8.data[8].tale_of_the_tape['Average Fight Time'][f192],
                                                                                                                                                                                          avgSubPer15: responseJuly8.data[8].tale_of_the_tape['Submission Average/15 min.'][f192],
                                                                                                                                                                                          takedownAcc: responseJuly8.data[8].tale_of_the_tape['Takedown Accuracy'][f192],
                                                                                                                                                                                          takedownDef: responseJuly8.data[8].tale_of_the_tape['Takedown Defense'][f192],
                                                                                                                                                                                          avgTakedownsPer15: responseJuly8.data[8].tale_of_the_tape['Takedowns Average/15 min.'][f192],
                                                                                                                                                                                          dob: responseJuly8.data[8].tale_of_the_tape.DOB[f192],
                                                                                                                                                                                          height: responseJuly8.data[8].tale_of_the_tape.Height[f192],
                                                                                                                                                                                          id: 192,
                                                                                                                                                                                          matchupId: 96,
                                                                                                                                                                                          record: responseJuly8.data[8].tale_of_the_tape['Wins/Losses/Draws'][f192],
                                                                                                                                                                                      }),
                                                                                                                                                                                        Fighter.create({
                                                                                                                                                                                          //Vitor Petrino
                                                                                                                                                                                          name: responseJuly8.data[9].matchup[0],
                                                                                                                                                                                          defense: responseJuly8.data[9].tale_of_the_tape.Defense[f193],
                                                                                                                                                                                          reach: responseJuly8.data[9].tale_of_the_tape.Reach[f193],
                                                                                                                                                                                          strikesAbsorbedPerMin: responseJuly8.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f193],
                                                                                                                                                                                          strikesLandedPerMin: responseJuly8.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f193],
                                                                                                                                                                                          avgFightTime: responseJuly8.data[9].tale_of_the_tape['Average Fight Time'][f193],
                                                                                                                                                                                          avgSubPer15: responseJuly8.data[9].tale_of_the_tape['Submission Average/15 min.'][f193],
                                                                                                                                                                                          takedownAcc: responseJuly8.data[9].tale_of_the_tape['Takedown Accuracy'][f193],
                                                                                                                                                                                          takedownDef: responseJuly8.data[9].tale_of_the_tape['Takedown Defense'][f193],
                                                                                                                                                                                          avgTakedownsPer15: responseJuly8.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f193],
                                                                                                                                                                                          dob: responseJuly8.data[9].tale_of_the_tape.DOB[f193],
                                                                                                                                                                                          height: responseJuly8.data[9].tale_of_the_tape.Height[f193],
                                                                                                                                                                                          id: 193,
                                                                                                                                                                                          matchupId: 97,
                                                                                                                                                                                          record: responseJuly8.data[9].tale_of_the_tape['Wins/Losses/Draws'][f193],                                                                    
                                                                                                                                                                                        }),
                                                                                                                                                                                        Fighter.create({
                                                                                                                                                                                          //Marcin Prachnio
                                                                                                                                                                                            name: responseJuly8.data[9].matchup[1],
                                                                                                                                                                                            defense: responseJuly8.data[9].tale_of_the_tape.Defense[f194],
                                                                                                                                                                                            reach: responseJuly8.data[9].tale_of_the_tape.Reach[f194],
                                                                                                                                                                                            strikesAbsorbedPerMin: responseJuly8.data[9].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f194],
                                                                                                                                                                                            strikesLandedPerMin: responseJuly8.data[9].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f194],
                                                                                                                                                                                            avgFightTime: responseJuly8.data[9].tale_of_the_tape['Average Fight Time'][f194],
                                                                                                                                                                                            avgSubPer15: responseJuly8.data[9].tale_of_the_tape['Submission Average/15 min.'][f194],
                                                                                                                                                                                            takedownAcc: responseJuly8.data[9].tale_of_the_tape['Takedown Accuracy'][f194],
                                                                                                                                                                                            takedownDef: responseJuly8.data[9].tale_of_the_tape['Takedown Defense'][f194],
                                                                                                                                                                                            avgTakedownsPer15: responseJuly8.data[9].tale_of_the_tape['Takedowns Average/15 min.'][f194],
                                                                                                                                                                                            dob: responseJuly8.data[9].tale_of_the_tape.DOB[f194],
                                                                                                                                                                                            height: responseJuly8.data[9].tale_of_the_tape.Height[f194],
                                                                                                                                                                                            id: 194,
                                                                                                                                                                                            matchupId: 97,
                                                                                                                                                                                            record: responseJuly8.data[9].tale_of_the_tape['Wins/Losses/Draws'][f194],                                                                       
                                                                                                                                                                                          }),
                                                                                                                                                                                          Fighter.create({
                                                                                                                                                                                            //Cameron Saaiman
                                                                                                                                                                                            name: responseJuly8.data[10].matchup[0],
                                                                                                                                                                                            defense: responseJuly8.data[10].tale_of_the_tape.Defense[f195],
                                                                                                                                                                                            reach: responseJuly8.data[10].tale_of_the_tape.Reach[f195],
                                                                                                                                                                                            strikesAbsorbedPerMin: responseJuly8.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f195],
                                                                                                                                                                                            strikesLandedPerMin: responseJuly8.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f195],
                                                                                                                                                                                            avgFightTime: responseJuly8.data[10].tale_of_the_tape['Average Fight Time'][f195],
                                                                                                                                                                                            avgSubPer15: responseJuly8.data[10].tale_of_the_tape['Submission Average/15 min.'][f195],
                                                                                                                                                                                            takedownAcc: responseJuly8.data[10].tale_of_the_tape['Takedown Accuracy'][f195],
                                                                                                                                                                                            takedownDef: responseJuly8.data[10].tale_of_the_tape['Takedown Defense'][f195],
                                                                                                                                                                                            avgTakedownsPer15: responseJuly8.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f195],
                                                                                                                                                                                            dob: responseJuly8.data[10].tale_of_the_tape.DOB[f195],
                                                                                                                                                                                            height: responseJuly8.data[10].tale_of_the_tape.Height[f195],
                                                                                                                                                                                            id: 195,
                                                                                                                                                                                            matchupId: 98,
                                                                                                                                                                                            record: responseJuly8.data[10].tale_of_the_tape['Wins/Losses/Draws'][f195],                                                                      
                                                                                                                                                                                          }),
                                                                                                                                                                                          Fighter.create({
                                                                                                                                                                                            //Terrence Mitchell
                                                                                                                                                                                              name: responseJuly8.data[10].matchup[1],
                                                                                                                                                                                              defense: responseJuly8.data[10].tale_of_the_tape.Defense[f196],
                                                                                                                                                                                              reach: responseJuly8.data[10].tale_of_the_tape.Reach[f196],
                                                                                                                                                                                              strikesAbsorbedPerMin: responseJuly8.data[10].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f196],
                                                                                                                                                                                              strikesLandedPerMin: responseJuly8.data[10].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f196],
                                                                                                                                                                                              avgFightTime: responseJuly8.data[10].tale_of_the_tape['Average Fight Time'][f196],
                                                                                                                                                                                              avgSubPer15: responseJuly8.data[10].tale_of_the_tape['Submission Average/15 min.'][f196],
                                                                                                                                                                                              takedownAcc: responseJuly8.data[10].tale_of_the_tape['Takedown Accuracy'][f196],
                                                                                                                                                                                              takedownDef: responseJuly8.data[10].tale_of_the_tape['Takedown Defense'][f196],
                                                                                                                                                                                              avgTakedownsPer15: responseJuly8.data[10].tale_of_the_tape['Takedowns Average/15 min.'][f196],
                                                                                                                                                                                              dob: responseJuly8.data[10].tale_of_the_tape.DOB[f196],
                                                                                                                                                                                              height: responseJuly8.data[10].tale_of_the_tape.Height[f196],
                                                                                                                                                                                              id: 196,
                                                                                                                                                                                              matchupId: 98,
                                                                                                                                                                                              record: responseJuly8.data[10].tale_of_the_tape['Wins/Losses/Draws'][f196],                                                                           
                                                                                                                                                                                          }),
                                                                                                                                                                                          Fighter.create({
                                                                                                                                                                                            //Shannon Ross
                                                                                                                                                                                            name: responseJuly8.data[11].matchup[0],
                                                                                                                                                                                            defense: responseJuly8.data[11].tale_of_the_tape.Defense[f197],
                                                                                                                                                                                            reach: responseJuly8.data[11].tale_of_the_tape.Reach[f197],
                                                                                                                                                                                            strikesAbsorbedPerMin: responseJuly8.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f197],
                                                                                                                                                                                            strikesLandedPerMin: responseJuly8.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f197],
                                                                                                                                                                                            avgFightTime: responseJuly8.data[11].tale_of_the_tape['Average Fight Time'][f197],
                                                                                                                                                                                            avgSubPer15: responseJuly8.data[11].tale_of_the_tape['Submission Average/15 min.'][f197],
                                                                                                                                                                                            takedownAcc: responseJuly8.data[11].tale_of_the_tape['Takedown Accuracy'][f197],
                                                                                                                                                                                            takedownDef: responseJuly8.data[11].tale_of_the_tape['Takedown Defense'][f197],
                                                                                                                                                                                            avgTakedownsPer15: responseJuly8.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f197],
                                                                                                                                                                                            dob: responseJuly8.data[11].tale_of_the_tape.DOB[f197],
                                                                                                                                                                                            height: responseJuly8.data[11].tale_of_the_tape.Height[f197],
                                                                                                                                                                                            id: 197,
                                                                                                                                                                                            matchupId: 99,
                                                                                                                                                                                            record: responseJuly8.data[11].tale_of_the_tape['Wins/Losses/Draws'][f197],                                                                    
                                                                                                                                                                                          }),
                                                                                                                                                                                          Fighter.create({
                                                                                                                                                                                            //Jesus Aguilar
                                                                                                                                                                                              name: responseJuly8.data[11].matchup[1],
                                                                                                                                                                                              defense: responseJuly8.data[11].tale_of_the_tape.Defense[f198],
                                                                                                                                                                                              reach: responseJuly8.data[11].tale_of_the_tape.Reach[f198],
                                                                                                                                                                                              strikesAbsorbedPerMin: responseJuly8.data[11].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f198],
                                                                                                                                                                                              strikesLandedPerMin: responseJuly8.data[11].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f198],
                                                                                                                                                                                              avgFightTime: responseJuly8.data[11].tale_of_the_tape['Average Fight Time'][f198],
                                                                                                                                                                                              avgSubPer15: responseJuly8.data[11].tale_of_the_tape['Submission Average/15 min.'][f198],
                                                                                                                                                                                              takedownAcc: responseJuly8.data[11].tale_of_the_tape['Takedown Accuracy'][f198],
                                                                                                                                                                                              takedownDef: responseJuly8.data[11].tale_of_the_tape['Takedown Defense'][f198],
                                                                                                                                                                                              avgTakedownsPer15: responseJuly8.data[11].tale_of_the_tape['Takedowns Average/15 min.'][f198],
                                                                                                                                                                                              dob: responseJuly8.data[11].tale_of_the_tape.DOB[f198],
                                                                                                                                                                                              height: responseJuly8.data[11].tale_of_the_tape.Height[f198],
                                                                                                                                                                                              id: 198,
                                                                                                                                                                                              matchupId: 99,
                                                                                                                                                                                              record: responseJuly8.data[11].tale_of_the_tape['Wins/Losses/Draws'][f198],
                                                                                                                                                                                              
                                                                                                                                                                                          }),
                                                                                                                                                                                            Fighter.create({
                                                                                                                                                                                              //Kamuela Kirk
                                                                                                                                                                                              name: responseJuly8.data[12].matchup[0],
                                                                                                                                                                                              defense: responseJuly8.data[12].tale_of_the_tape.Defense[f199],
                                                                                                                                                                                              reach: responseJuly8.data[12].tale_of_the_tape.Reach[f199],
                                                                                                                                                                                              strikesAbsorbedPerMin: responseJuly8.data[12].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f199],
                                                                                                                                                                                              strikesLandedPerMin: responseJuly8.data[12].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f199],
                                                                                                                                                                                              avgFightTime: responseJuly8.data[12].tale_of_the_tape['Average Fight Time'][f199],
                                                                                                                                                                                              avgSubPer21: responseJuly8.data[12].tale_of_the_tape['Submission Average/15 min.'][f199],
                                                                                                                                                                                              takedownAcc: responseJuly8.data[12].tale_of_the_tape['Takedown Accuracy'][f199],
                                                                                                                                                                                              takedownDef: responseJuly8.data[12].tale_of_the_tape['Takedown Defense'][f199],
                                                                                                                                                                                              avgTakedownsPer21: responseJuly8.data[12].tale_of_the_tape['Takedowns Average/15 min.'][f199],
                                                                                                                                                                                              dob: responseJuly8.data[12].tale_of_the_tape.DOB[f199],
                                                                                                                                                                                              height: responseJuly8.data[12].tale_of_the_tape.Height[f199],
                                                                                                                                                                                              id: 199,
                                                                                                                                                                                              matchupId: 100,
                                                                                                                                                                                              record: responseJuly8.data[12].tale_of_the_tape['Wins/Losses/Draws'][f199],                                                                    
                                                                                                                                                                                            }),
                                                                                                                                                                                            Fighter.create({
                                                                                                                                                                                              //Esteban Ribovics
                                                                                                                                                                                                name: responseJuly8.data[12].matchup[1],
                                                                                                                                                                                                defense: responseJuly8.data[12].tale_of_the_tape.Defense[f200],
                                                                                                                                                                                                reach: responseJuly8.data[12].tale_of_the_tape.Reach[f200],
                                                                                                                                                                                                strikesAbsorbedPerMin: responseJuly8.data[12].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f200],
                                                                                                                                                                                                strikesLandedPerMin: responseJuly8.data[12].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f200],
                                                                                                                                                                                                avgFightTime: responseJuly8.data[12].tale_of_the_tape['Average Fight Time'][f200],
                                                                                                                                                                                                avgSubPer15: responseJuly8.data[12].tale_of_the_tape['Submission Average/15 min.'][f200],
                                                                                                                                                                                                takedownAcc: responseJuly8.data[12].tale_of_the_tape['Takedown Accuracy'][f200],
                                                                                                                                                                                                takedownDef: responseJuly8.data[12].tale_of_the_tape['Takedown Defense'][f200],
                                                                                                                                                                                                avgTakedownsPer15: responseJuly8.data[12].tale_of_the_tape['Takedowns Average/15 min.'][f200],
                                                                                                                                                                                                dob: responseJuly8.data[12].tale_of_the_tape.DOB[f200],
                                                                                                                                                                                                height: responseJuly8.data[12].tale_of_the_tape.Height[f200],
                                                                                                                                                                                                id: 200,
                                                                                                                                                                                                matchupId: 100,
                                                                                                                                                                                                record: responseJuly8.data[12].tale_of_the_tape['Wins/Losses/Draws'][f200],                                                                       
                                                                                                                                                                                              }),
                                                                                                                                                                                              // Fighter.create({
                                                                                                                                                                                              //   //Kamuela Kirk
                                                                                                                                                                                              //   name: responseJuly8.data[13].matchup[0],
                                                                                                                                                                                              //   defense: responseJuly8.data[13].tale_of_the_tape.Defense[f201],
                                                                                                                                                                                              //   reach: responseJuly8.data[13].tale_of_the_tape.Reach[f201],
                                                                                                                                                                                              //   strikesAbsorbedPerMin: responseJuly8.data[13].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f201],
                                                                                                                                                                                              //   strikesLandedPerMin: responseJuly8.data[13].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f201],
                                                                                                                                                                                              //   avgFightTime: responseJuly8.data[13].tale_of_the_tape['Average Fight Time'][f201],
                                                                                                                                                                                              //   avgSubPer15: responseJuly8.data[13].tale_of_the_tape['Submission Average/15 min.'][f201],
                                                                                                                                                                                              //   takedownAcc: responseJuly8.data[13].tale_of_the_tape['Takedown Accuracy'][f201],
                                                                                                                                                                                              //   takedownDef: responseJuly8.data[13].tale_of_the_tape['Takedown Defense'][f201],
                                                                                                                                                                                              //   avgTakedownsPer15: responseJuly8.data[13].tale_of_the_tape['Takedowns Average/15 min.'][f201],
                                                                                                                                                                                              //   dob: responseJuly8.data[13].tale_of_the_tape.DOB[f201],
                                                                                                                                                                                              //   height: responseJuly8.data[13].tale_of_the_tape.Height[f201],
                                                                                                                                                                                              //   id: 201,
                                                                                                                                                                                              //   matchupId: 101,
                                                                                                                                                                                              //   record: responseJuly8.data[13].tale_of_the_tape['Wins/Losses/Draws'][f201],                                                                      
                                                                                                                                                                                              // }),
                                                                                                                                                                                              // Fighter.create({
                                                                                                                                                                                              //   //Esteban Ribovics
                                                                                                                                                                                              //     name: responseJuly8.data[13].matchup[1],
                                                                                                                                                                                              //     defense: responseJuly8.data[13].tale_of_the_tape.Defense[f202],
                                                                                                                                                                                              //     reach: responseJuly8.data[13].tale_of_the_tape.Reach[f202],
                                                                                                                                                                                              //     strikesAbsorbedPerMin: responseJuly8.data[13].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][f202],
                                                                                                                                                                                              //     strikesLandedPerMin: responseJuly8.data[13].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][f202],
                                                                                                                                                                                              //     avgFightTime: responseJuly8.data[13].tale_of_the_tape['Average Fight Time'][f202],
                                                                                                                                                                                              //     avgSubPer15: responseJuly8.data[13].tale_of_the_tape['Submission Average/15 min.'][f202],
                                                                                                                                                                                              //     takedownAcc: responseJuly8.data[13].tale_of_the_tape['Takedown Accuracy'][f202],
                                                                                                                                                                                              //     takedownDef: responseJuly8.data[13].tale_of_the_tape['Takedown Defense'][f202],
                                                                                                                                                                                              //     avgTakedownsPer15: responseJuly8.data[13].tale_of_the_tape['Takedowns Average/15 min.'][f202],
                                                                                                                                                                                              //     dob: responseJuly8.data[13].tale_of_the_tape.DOB[f202],
                                                                                                                                                                                              //     height: responseJuly8.data[13].tale_of_the_tape.Height[f202],
                                                                                                                                                                                              //     id: 202,
                                                                                                                                                                                              //     matchupId: 101,
                                                                                                                                                                                              //     record: responseJuly8.data[13].tale_of_the_tape['Wins/Losses/Draws'][f202],                                                                           
                                                                                                                                                                                              // }),
                                                                                                                                                                      
  ]);



  return {
    users: {
      moe,
      lucy,
      larry,
      ethyl,
    },
    fighters: {
      fighter1, 
      fighter2,fighter3, fighter4,fighter5, fighter6,fighter7, fighter8,fighter9, fighter10,
      fighter11, fighter12, fighter13, fighter14,fighter15, fighter16,fighter17, fighter18,fighter19, fighter20, fighter21, fighter22, fighter23, fighter24,fighter25, fighter26,fighter27, fighter28,fighter29, fighter30,
      fighter31, fighter32, fighter33, fighter34,fighter35, fighter36,fighter37, fighter38,fighter39, fighter40,fighter41,fighter42,fighter43,fighter44
    }
  };
};


module.exports = {
  syncAndSeed,
  User,
  Fighter
};
