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
    params: {offset: '0', limit: '10'},
    headers: {
      'X-RapidAPI-Key': process.env.UFC_API_KEY,
      'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
    }
  };

    const response = await axios.request(options);
    console.log(response.data, response.data[0].matchup[0])
    const f1 = response.data[0].matchup[0]
    const f2 = response.data[0].matchup[1]
    const f3 = response.data[1].matchup[0]
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


    //  get 8 fighters and put them into my database
    //  const fighters = await getFirst2Fighters();
    // for(let i = 1; i < 5; i++){
    //   let fight1 = response.data[i].matchup[0]
    //   let fight2 = response.data[i].matchup[1]
    //   await Promise.all(
    //     Fighter.create({
    //       name: response.data[i].matchup[0],
    //       defense: response.data[i].tale_of_the_tape.Defense[fight1],
    //       reach: response.data[i].tale_of_the_tape.Reach[fight1],
    //       strikesAbsorbedPerMin: response.data[i].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][fight1],
    //       strikesLandedPerMin: response.data[i].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][fight1],
    //       avgFightTime: response.data[i].tale_of_the_tape['Average Fight Time'][fight1],
    //       avgSubPer15: response.data[i].tale_of_the_tape['Submission Average/15 min.'][fight1],
    //       takedownAcc: response.data[i].tale_of_the_tape['Takedown Accuracy'][fight1],
    //       takedownDef: response.data[i].tale_of_the_tape['Takedown Defense'][fight1],
    //       avgTakedownsPer15: response.data[i].tale_of_the_tape['Takedowns Average/15 min.'][fight1],
    //       dob: response.data[i].tale_of_the_tape.DOB[fight1],
    //     }),
    //     Fighter.create({
    //         name: response.data[i].matchup[1],
    //         defense: response.data[i].tale_of_the_tape.Defense[fight2],
    //         reach: response.data[i].tale_of_the_tape.Reach[fight2],
    //         strikesAbsorbedPerMin: response.data[i].tale_of_the_tape['Strikes Absorbed per Min. (SApM)'][fight2],
    //         strikesLandedPerMin: response.data[i].tale_of_the_tape['Strikes Landed per Min. (SLpM)'][fight2],
    //         avgFightTime: response.data[i].tale_of_the_tape['Average Fight Time'][fight2],
    //         avgSubPer15: response.data[i].tale_of_the_tape['Submission Average/15 min.'][fight2],
    //         takedownAcc: response.data[i].tale_of_the_tape['Takedown Accuracy'][fight2],
    //         takedownDef: response.data[i].tale_of_the_tape['Takedown Defense'][fight2],
    //         avgTakedownsPer15: response.data[i].tale_of_the_tape['Takedowns Average/15 min.'][fight2],
    //         dob: response.data[i].tale_of_the_tape.DOB[fight2],
    //       }),
    //   )
    // }

  const [moe, lucy, larry, ethyl, fighter1, fighter2, fighter3, fighter4,fighter5, fighter6,fighter7, fighter8,fighter9, fighter10,
    fighter11, fighter12, fighter13, fighter14,fighter15, fighter16,fighter17, fighter18,fighter19, fighter20] = await Promise.all([
    User.create({ username: 'moe', password: '123'}),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
    
    Fighter.create({
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
      matchupId: 1
    }),
    Fighter.create({
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
        matchupId: 1
      }),
      Fighter.create({
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
        id: 3,
        matchupId: 2
      }),
      Fighter.create({
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
          id: 4,
          matchupId: 2
        }),
        Fighter.create({
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
          id: 5,
          matchupId: 3
        }),
        Fighter.create({
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
            id: 6,
            matchupId: 3
          }),
          Fighter.create({
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
            id: 7,
            matchupId: 4
          }),
          Fighter.create({
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
              id: 8,
              matchupId: 4
            }),
            Fighter.create({
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
              id: 9,
              matchupId: 5
            }),
            Fighter.create({
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
                id: 10,
                matchupId: 5
              }),Fighter.create({
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
                matchupId: 6
              }),
              Fighter.create({
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
                  matchupId: 6
                }),
                Fighter.create({
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
                  id: 13,
                  matchupId: 7
                }),
                Fighter.create({
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
                    id: 14,
                    matchupId: 7
                  }),
                  Fighter.create({
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
                    id: 15,
                    matchupId: 8
                  }),
                  Fighter.create({
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
                      id: 16,
                      matchupId: 8
                    }),
                    Fighter.create({
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
                      id: 17,
                      matchupId: 9
                    }),
                    Fighter.create({
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
                        id: 18,
                        matchupId: 9
                      }),
                      Fighter.create({
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
                        id: 19,
                        matchupId: 10
                      }),
                      Fighter.create({
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
                          id: 20,
                          matchupId: 10
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
      fighter11, fighter12, fighter13, fighter14,fighter15, fighter16,fighter17, fighter18,fighter19, fighter20
    }
  };
};


module.exports = {
  syncAndSeed,
  User,
  Fighter
};
