const conn = require('./conn');
const User = require('./User');
const Fighter = require('./Fighter');
// const { UFC_API_KEY } = require('../../.env');
const axios = require('axios');
require('dotenv').config()

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  console.log(process.env.UFC_API_KEY)
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

//   const optionsMay20 = {
//     method: 'GET',
//     url: 'https://mma-stats.p.rapidapi.com/May_20_2023',
//     params: {offset: '0', limit: '15'},
//     headers: {
//       'X-RapidAPI-Key': process.env.UFC_API_KEY,
//       'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
//     }
//   };

//  const responseMay20 = await axios.request(optionsMay20);
//  console.log(responseMay20.data)


// radarResponse.data['summaries'][0]['sport_event']['statistics']
// http://api.sportradar.us/mma/trial/v2/en/competitors/sr:competitor:237654/summaries.json?api_key=${process.env.SPORT_RADAR_API_KEY}
  // const radarResponse = {
  //   method: 'GET',
  //   url: `http://api.sportradar.us/mma/trial/v2/en/competitors/sr:competitor:237654/summaries.json?api_key=${process.env.SPORT_RADAR_API_KEY}`
  // }
  
  // const winBonus = (response, id) => {
  //   let bonus = 0
  //   if(response.data['summaries'][0]['sport_event_status']['winner_id'] === id){
  //     if(response.data['summaries'][0]['sport_event_status']['method'].split('_')[0] === 'decision'){
  //       bonus += 20
  //     } else if(response.data['summaries'][0]['sport_event_status']['final_round'] === 1) {
  //       bonus += 100
  //     } else if(response.data['summaries'][0]['sport_event_status']['final_round'] === 2) {
  //       bonus += 75
  //     } else if(response.data['summaries'][0]['sport_event_status']['final_round'] === 3) {
  //       bonus += 50
  //     } else if(response.data['summaries'][0]['sport_event_status']['final_round'] === 4) {
  //       bonus += 35
  //     } else if(response.data['summaries'][0]['sport_event_status']['final_round'] === 5) {
  //       bonus += 25
  //     }
  //   }
  //   return bonus
  // }
  
  // try {
  //   const response1 = await axios.request(options1);
  //   console.log(response1, response1.data.Fights[0].Fighters[0]['Moneyline'], response1.data.Fights[0].Fighters[0]["FirstName"] + ' ' + response1.data.Fights[0].Fighters[0]["LastName"]);
  // } catch (error) {
  //   console.error(error);
  // }
 // [0]["FirstName"] + ' ' + response1.data.Fights[0].Fighters[0]["LastName"]
  // , response1.data.Fights[0].Fighters[0]["Moneyline"]

  
    const response1 = await axios.request(options1);
    const response = await axios.request(options);
    const dernHillResponse = await axios.request(dernHillOptions);
    //console.log(response.data, response.data[0].matchup[0])
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
  //   const angelaHill = dernHillResponse.data.Fights[1].Fighters[0] //sr:competitor:542071
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

  //   const mackenzieDern = dernHillResponse.data.Fights[1].Fighters[1] //sr:competitor:399233
  //   const mackenzieDernID = 'sr:competitor:399233'
  //   const mackenzieDernRadarOptions = {
  //     method: 'GET',
  //     url: `http://api.sportradar.us/mma/trial/v2/en/competitors/sr:competitor:399233/summaries.json?api_key=${process.env.SPORT_RADAR_API_KEY}`
  //   }
  //   const mackenzieDernRadarResponse = await axios.request(mackenzieDernRadarOptions);
  //   const mackenzieDernLastFightSS = mackenzieDernRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['significant_strikes']
  //   const mackenzieDernLastFightTD = mackenzieDernRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['takedowns']
  //   const mackenzieDernLastFightTDD = mackenzieDernRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][0]['statistics']['takedowns_attempted'] - mackenzieDernRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][0]['statistics']['takedowns']
  //   const mackenzieDernLastFightKD = mackenzieDernRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['knockdowns']
  //   const mackenzieDernLastFightSA = mackenzieDernRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['submission_attempts']
  //   const mackenzieDernLastFightFS = (mackenzieDernLastFightSS * .6 + mackenzieDernLastFightTD * 6 + mackenzieDernLastFightTDD * 3 + mackenzieDernLastFightKD * 12 + mackenzieDernLastFightSA * 3 + winBonus(mackenzieDernRadarResponse,mackenzieDernID))
    //console.log(mackenzieDernLastFightFS)
    //console.log(mackenzieDernRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'])
    //console.log(mackenzieDernRadarResponse.data['summaries'][0]['sport_event_status'])
    // console.log(mackenzieDernRadarResponse.data['summaries'][0]['sport_event_status']['method'])
    // console.log(mackenzieDernRadarResponse.data['summaries'][0]['sport_event_status']['winner_id'])
    // console.log(mackenzieDernRadarResponse.data['summaries'][0]['sport_event_status']['winner_id'] === mackenzieDernID)
  
    // console.log(winBonus(angelaHillRadarResponse ,angelaHillID))
   
//     const anthonyHernandez = dernHillResponse.data.Fights[2].Fighters[0] //
//     const anthonyHernandezID = 'sr:competitor:449127'
//     const anthonyHernandezRadarOptions = {
//       method: 'GET',
//       url: `http://api.sportradar.us/mma/trial/v2/en/competitors/sr:competitor:449127/summaries.json?api_key=${process.env.SPORT_RADAR_API_KEY}`
//     }
//     const anthonyHernandezRadarResponse = await axios.request(anthonyHernandezRadarOptions);
//     const anthonyHernandezLastFightSS = anthonyHernandezRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][0]['statistics']['significant_strikes']
//     const anthonyHernandezLastFightTD = anthonyHernandezRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][0]['statistics']['takedowns']
//     const anthonyHernandezLastFightTDD = anthonyHernandezRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['takedowns_attempted'] - anthonyHernandezRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][1]['statistics']['takedowns']
//     const anthonyHernandezLastFightKD = anthonyHernandezRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][0]['statistics']['knockdowns']
//     const anthonyHernandezLastFightSA = anthonyHernandezRadarResponse.data['summaries'][0]['statistics']['totals']['competitors'][0]['statistics']['submission_attempts']
//     const anthonyHernandezLastFightFS = (anthonyHernandezLastFightSS * .6 + anthonyHernandezLastFightTD * 6 + anthonyHernandezLastFightTDD * 3 + anthonyHernandezLastFightKD * 12 + anthonyHernandezLastFightSA * 3 + winBonus(anthonyHernandezRadarResponse,anthonyHernandezID))

// console.log(anthonyHernandezLastFightFS)

    // const edmenShahbazyan = dernHillResponse.data.Fights[2].Fighters[1] //sr:competitor:462119
    // const edmenShahbazyanID = 'sr:competitor:462119'
    // const edmenShahbazyanRadarOptions = {
    //   method: 'GET',
    //   url: `http://api.sportradar.us/mma/trial/v2/en/competitors/sr:competitor:462119/summaries.json?api_key=${process.env.SPORT_RADAR_API_KEY}`
    // }
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


  // console.log('f3:' + f3)
  // console.log('f4:' + f4)
  // console.log('f5:' + f5)
  // console.log('f6:' + f6)
  // console.log('f7:' + f7)
  // console.log('f8:' + f8)
  // console.log('f9:' + f9)
  // console.log('f10:' + f10)
  // console.log('f11:' + f11)
  // console.log('f12:' + f12)
  // console.log('f13:' + f13)
  // console.log('f14:' + f14)
  // console.log('f15:' + f15)
  // console.log('f16:' + f16)
  // console.log('f17:' + f17)
  // console.log('f18:' + f18)
  // console.log('f19:' + f19)
  // console.log('f20:' + f20)
  // console.log('f21:' + f21)
  // console.log('f22:' + f22)
  // console.log('f23:' + f23)
  // console.log('f24:' + f24)


  const [moe, lucy, larry, ethyl, fighter1, fighter2, fighter3, fighter4,fighter5, fighter6,fighter7, fighter8,fighter9, fighter10,
    fighter11, fighter12, fighter13, fighter14,fighter15, fighter16,fighter17, fighter18,fighter19, fighter20,fighter21,fighter22,fighter23,fighter24] = await Promise.all([
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
      fighter11, fighter12, fighter13, fighter14,fighter15, fighter16,fighter17, fighter18,fighter19, fighter20, fighter21, fighter22, fighter23, fighter24
    }
  };
};


module.exports = {
  syncAndSeed,
  User,
  Fighter
};
