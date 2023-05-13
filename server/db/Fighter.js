
const conn = require('./conn');
const { STRING, INTEGER } = conn.Sequelize;
// const {UFC_API_KEY}  = require('../../secrets');

const Fighter = conn.define("fighter", {
  name: {
    type: STRING,
  },
  defense: {
    type: STRING,
  },
  reach: {
    type: STRING,
  },
  strikesAbsorbedPerMin: {
    type: STRING
  },
  strikesLandedPerMin: {
    type: STRING
  },
  avgFightTime: {
    type: STRING
  },
  avgSubPer15: {
    type: STRING
  },
  takedownAcc: {
    type: STRING
  },
  takedownDef: {
    type: STRING
  },
  avgTakedownsPer15: {
    type: STRING
  },
  dob: {
    type: STRING
  },
  height: {
    type: STRING
  },
  id: {
    type: INTEGER,
    primaryKey: true
  },
  matchupId: {
    type: INTEGER
  },
  record: {
    type: STRING
  },
  moneyLine: {
    type: STRING
  }
});

module.exports = Fighter;


// const options1 = {
//   method: 'GET',
//   url: `https://api.sportsdata.io/v3/mma/scores/json/Event/301?key=${process.env.UFC_API_KEY}`,
// };

// let call = async () => {
// try {
// 	const response = await axios.request(options1);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// }
// call()
// const axios = require('axios');

// const getFirst10Fighters = async () => {
//   const fighters = [];

//   try {
      
//       fighters.push(response);
//     }

//     return (await Promise.all(fighters)).map((response) => response.data);
//   } catch (error) {
//     throw error;
//   }
// };

// //rapidAPI stuff
// const seed = async () => {
//   // seed my own database with the fighter data
//   const options = {
//     method: 'GET',
//     url: 'https://mma-stats.p.rapidapi.com/May_13_2023',
//     params: {offset: '0', limit: '1'},
//     headers: {
//       'X-RapidAPI-Key': `${UFC_API_KEY}`,
//       'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
//     }
//   };

//   try {
//     await conn.sync({ force: true }); // drop all the tables and recreate it

//     const response = await axios.request(options);
//     console.log(response, response.matchup[0], response.matchup[1])
//     const f1 = response.matchup[0]
//     const f2 = response.matchup[1]

//     //  get 2  fighters and put them into my database
//     //const fighters = await getFirst2Fighters();
//     const [fighter1, fighter2] = await Promise.all(
//         Fighter.create({
//           name: response.matchup[0],
//           defense: response.tale_of_the_tape.Defense[fighter1],
//           reach: response.tale_of_the_tape.Reach[fighter1],
//           strikesAbsorbedPerMin: response.tale_of_the_tape.StrikesAbsorbedperMin[fighter1],
//           strikesLandedPerMin: response.tale_of_the_tape.StrikesLandedperMin[fighter1],
//           avgFightTime: response.tale_of_the_tape.AverageFightTime[fighter1],
//         }),
//         Fighter.create({
//             name: response.matchup[0],
//             defense: response.tale_of_the_tape.Defense[fighter2],
//             reach: response.tale_of_the_tape.Reach[fighter2],
//             strikesAbsorbedPerMin: response.tale_of_the_tape.StrikesAbsorbedperMin[fighter2],
//             strikesLandedPerMin: response.tale_of_the_tape.StrikesLandedperMin[fighter2],
//             avgFightTime: response.tale_of_the_tape.AverageFightTime[fighter2],
//           }),
//       )
//   } catch (error) {
//     console.log(error);
//   }
// };

// seed();



// const axios = require("axios");
// const { conn, Pokemon } = require("./conn");

// const getFirst10Pokemon = async () => {
//   const pokemon = [];

//   try {
//     for (let id = 1; id < 100; id++) {
//       const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

//       pokemon.push(response);
//     }

//     return (await Promise.all(pokemon)).map((response) => response.data);
//   } catch (error) {
//     throw error;
//   }
// };









// const seed = async () => {
//   // seed our own database with the pokemon data

