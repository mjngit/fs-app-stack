const axios = require("axios");
const { db, Present } = require("./db");

// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//     organization: "org-ED6jkoSYo0F2euGczF01T5sv",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();












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

//   try {
//     await db.sync({ force: true }); // drop all the tables and recreate it

//     // lets get all 100 pokemon here and put it into our own database
//     const pokemons = await getFirst10Pokemon();
//     await Promise.all(
//       pokemons.map((pokemon) =>
//         Pokemon.create({
//           name: pokemon.name,
//           img: pokemon.sprites.front_shiny,
//         })
//       )
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// seed();