import * as React from 'react'
import {useSelector} from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Fighter = () => {
    const { fighters } = useSelector(state => state)

    console.log(fighters)
    let eyes = []
    let evsModel = []

    for(let i = 0; i < fighters.length; i += 2){
        let redCorn = fighters[i]
        let blueCorn = fighters[i + 1]
        let redCornTDD
        let blueCornTDD
        let redCornTDA
        let blueCornTDA
        let redCornHeight
        let blueCornHeight


let redHeight = `${redCorn.height}`
let redSplitHeight = redHeight.split(`' `)
let  redInches = redSplitHeight[1]

if(redInches[1] === '"'){
  redInches = redInches.slice(0,1)*1
  } else {
    redInches = redInches.slice(0, 2)*1
  }
  redCornHeight = (redSplitHeight[0]*12)*1 + redInches

  let blueHeight = `${blueCorn.height}`
let blueSplitHeight = blueHeight.split(`' `)
let  blueInches = blueSplitHeight[1]

if(blueInches[1] === '"'){
  blueInches = blueInches.slice(0,1)*1
  } else {
    blueInches = blueInches.slice(0, 2)*1
  }
  blueCornHeight = (blueSplitHeight[0]*12)*1 + blueInches


      //  Number(redCorn.takedownDef.slice(0, 3)) === 100 ? Number(redCorn.takedownDef.slice(0, 3)) : Number(redCorn.takedownDef.slice(0, 1)) === 0 ? Number(redCorn.takedownDef.slice(0, 1)) : Number(redCorn.takedownDef.slice(0,2))
        if(Number(redCorn.takedownDef.slice(0, 3)) === 100){
            redCornTDD = 100
        } else if (Number(redCorn.takedownDef.slice(0, 1)) === 0) {
            redCornTDD = Number(redCorn.takedownDef.slice(0,1))
        } else {
            redCornTDD = Number(redCorn.takedownDef.slice(0, 2))
        }

        if(Number(blueCorn.takedownDef.slice(0, 3)) === 100){
            blueCornTDD = 100
        } else if (Number(blueCorn.takedownDef.slice(0, 1)) === 0) {
            blueCornTDD = Number(blueCorn.takedownDef.slice(0,1))
        } else {
            blueCornTDD = Number(blueCorn.takedownDef.slice(0, 2))
        }

        if(Number(redCorn.takedownAcc.slice(0, 3)) === 100){
            redCornTDA = 100
        } else if (Number(redCorn.takedownAcc.slice(0, 1)) === 0) {
            redCornTDA = Number(redCorn.takedownAcc.slice(0,1))
        } else {
            redCornTDA = Number(redCorn.takedownAcc.slice(0, 2))
        }

        if(Number(blueCorn.takedownAcc.slice(0, 3)) === 100){
            blueCornTDA = 100
        } else if (Number(blueCorn.takedownAcc.slice(0, 1)) === 0) {
            blueCornTDA = Number(blueCorn.takedownAcc.slice(0,1))
        } else {
            blueCornTDA = Number(blueCorn.takedownAcc.slice(0, 2))
        }
        
        if(Number(redCorn.defense.slice(0,2)) < 50 && Number(blueCorn.strikesLandedPerMin) > 2.5){
            eyes.push(`${blueCorn.name}'s striking could be hot!`)
        }
        if(Number(blueCorn.defense.slice(0,2)) < 50 && Number(redCorn.strikesLandedPerMin) > 2.5){
            eyes.push(`${redCorn.name}'s striking could be hot!`)
        }
        if(Number(redCorn.strikesAbsorbedPerMin) > 5 && Number(redCorn.strikesLandedPerMin) > 5){
            eyes.push(`${redCorn.name} is a brawler!`)
        }
        if(Number(blueCorn.strikesAbsorbedPerMin) > 5 && Number(blueCorn.strikesLandedPerMin) > 5){
            eyes.push(`${blueCorn.name} is a brawler!`)
        }
        if(Number(redCorn.avgTakedownsPer15) > 2){
            eyes.push(`${redCorn.name} goes for submissions`)
        }
        if(Number(blueCorn.avgTakedownsPer15) > 2 ){
            eyes.push(`${blueCorn.name} goes for submissions!`)
        }
        if(Number(redCorn.reach.slice(0,2)) - Number(blueCorn.reach.slice(0,2)) > 1 ){
            eyes.push(`${redCorn.name} has got a reach advantage!`)
        }
        if(Number(blueCorn.reach.slice(0,2)) - Number(redCorn.reach.slice(0,2)) > 1 ){
            eyes.push(`${blueCorn.name} has got a reach advantage!`)
        }
        if(Number(redCorn.strikesAbsorbedPerMin) < 2.5 && Number(redCorn.avgTakedownsPer15) > 5){
            eyes.push(`Legit grappler alert on ${redCorn.name}!`)
        }
        if(Number(blueCorn.strikesAbsorbedPerMin) < 2.5 && Number(blueCorn.avgTakedownsPer15) > 5){
            eyes.push(`Legit grappler alert on ${blueCorn.name}!`)
        }
        if(Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]) > 600 && Number(blueCorn.avgFightTime.split(':')[0]) * 60 + Number(blueCorn.avgFightTime.split(':')[1]) > 600){
            eyes.push(`Check the over 1.5 rounds or fight goes the distance on ${blueCorn.name} vs. ${redCorn.name}!`)
        }
        if(Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]) < 300 && Number(blueCorn.avgFightTime.split(':')[0]) * 60 + Number(blueCorn.avgFightTime.split(':')[1]) < 300){
            eyes.push(`Don't blink on this one: ${blueCorn.name} vs. ${redCorn.name}!`)
        }
        if(Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]) < 300){
            eyes.push(`${redCorn.name} might kill or be killed in rd1! LOW average fight time of ${redCorn.avgFightTime}`)
        }
        if(Number(blueCorn.avgFightTime.split(':')[0]) * 60 + Number(blueCorn.avgFightTime.split(':')[1]) < 300){
            eyes.push(`${blueCorn.name} might kill or be killed in rd1! LOW average fight time of ${blueCorn.avgFightTime}`)
        }
        if(Number(redCorn.avgTakedownsPer15) > 2 && blueCornTDD < 50  && redCornTDA > 50 ){
            eyes.push(`${blueCorn.name} could get blanketed`)
        }
        if(Number(blueCorn.avgTakedownsPer15) > 2 && redCornTDD < 50 && blueCornTDA > 50 ){
            eyes.push(`${redCorn.name} could get blanketed!`)
        }
        if(2023 - Number(blueCorn.dob.split(', ')[1]) > 2023 - Number(redCorn.dob.split(', ')[1])){

        }
        

        console.log(redCorn.reach, redCorn.reach.slice(0,2), Number(redCorn.defense.slice(0,2)), 
        Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]), 
        Number(redCorn.takedownDef.slice(0, 3)) === 100 ? Number(redCorn.takedownDef.slice(0, 3)) : Number(redCorn.takedownDef.slice(0, 1)) === 0 ? Number(redCorn.takedownDef.slice(0, 1)) : Number(redCorn.takedownDef.slice(0,2)),
        Number(blueCorn.takedownDef.slice(0, 3)) === 100 ? Number(blueCorn.takedownDef.slice(0, 3)) : Number(blueCorn.takedownDef.slice(0, 1)) === 0 ? Number(blueCorn.takedownDef.slice(0, 1)) : Number(blueCorn.takedownDef.slice(0,2)), redCornTDD, blueCorn.dob.split(', ')[1], blueCornHeight, redCornHeight )
    }

    console.log(eyes)

  return (
    <>
     <div>Fighters Of The Week</div>
     {/* <ul>
        { fighters.map( (fighter, idx) => {
            return (<li key={idx}>Name: {fighter.name} <br />
                Striking Defense: {fighter.defense} <br />
                Reach: {fighter.reach}<br />
                Strikes Absorbed Per Min: {fighter.strikesAbsorbedPerMin}<br />
                Strikes Landed Per Min: {fighter.strikesLandedPerMin}<br />
                Avg Fight Time: {fighter.avgFightTime}<br />
                Avg Sub Attempts Per 15 Minutes: {fighter.avgSubPer15}<br />
                Takedown Accuracy: {fighter.takedownAcc}<br />
                Takedown Defense: {fighter.takedownDef}<br />
                Avg Takedowns Per 15 Minutes: {fighter.avgTakedownsPer15}<br />
                Birthday: {fighter.dob}<br />
                Height: {fighter.height}<br />
            </li>)
        })
        }
     </ul> */}

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Fighter Name</TableCell>
            <TableCell align="right">Strikes Landed Per Min</TableCell>
            <TableCell align="right">Strikes Absorbed Per Min</TableCell>
            <TableCell align="right">Striking Defense</TableCell>
            <TableCell align="right">Reach</TableCell>
            <TableCell align="right">Avg Fight Time</TableCell>
            <TableCell align="right">Avg Sub Attempts Per 15 Minutes</TableCell>
            <TableCell align="right">Avg Takedowns Per 15 Minutes</TableCell>
            <TableCell align="right">Takedown Accuracy</TableCell>
            <TableCell align="right">Takedown Defense</TableCell>
            <TableCell align="right">Birthday</TableCell>
            <TableCell align="right">Height</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fighters.map((fighter) => (
            <TableRow
              key={fighter.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {fighter.name}
              </TableCell>
              <TableCell align="right">{fighter.strikesLandedPerMin}</TableCell>
              <TableCell align="right">{fighter.strikesAbsorbedPerMin}</TableCell>
              <TableCell align="right">{fighter.defense}</TableCell>
              <TableCell align="right">{fighter.reach}</TableCell>
              <TableCell align="right">{fighter.avgFightTime}</TableCell>
              <TableCell align="right">{fighter.avgSubPer15}</TableCell>
              <TableCell align="right">{fighter.avgTakedownsPer15}</TableCell>
              <TableCell align="right">{fighter.takedownAcc}</TableCell>
              <TableCell align="right">{fighter.takedownDef}</TableCell>
              <TableCell align="right">{fighter.dob}</TableCell>
              <TableCell align="right">{fighter.height}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    Stats to Note
    <ul>
        {eyes.map((note, idx) => {
            return (
                <li key={idx}>{note}</li>
            )
        })}
    </ul>
    </>
   
  )
}

export default Fighter

// import * as React from 'react';



