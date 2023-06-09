import * as React from 'react'
import {useSelector} from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const FightersMay20 = () => {
    const { fighters } = useSelector(state => state)

    const fightersMay20 = fighters.sort((a, b) => {
        return a.id - b.id
    }).filter(fighter => fighter.id > 24 && fighter.id < 49)
   
    console.log(fightersMay20)

    let notes = {}
    

    for(let i = 0; i < fightersMay20.length; i += 2){
        let redCorn = fightersMay20[i]
        let blueCorn = fightersMay20[i + 1]
        let redCornTDD
        let blueCornTDD
        let redCornTDA
        let blueCornTDA
        let redCornHeight
        let blueCornHeight
        let matchupArray = []
        notes[redCorn.matchupId] = matchupArray
        let redCornFightTimeSeconds = Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1])
        let blueCornFightTimeSeconds = Number(blueCorn.avgFightTime.split(':')[0]) * 60 + Number(blueCorn.avgFightTime.split(':')[1])
        //console.log(redCorn.avgFightTime, blueCorn.avgFightTime)
        let redCornAge = 2023 - Number(redCorn.dob.split(', ')[1])
        let blueCornAge = 2023 - Number(blueCorn.dob.split(', ')[1])
        console.log(blueCornAge, redCornAge)

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
            matchupArray.push(`${blueCorn.name}'s striking could be hot!`)
          
        }
        if(Number(blueCorn.defense.slice(0,2)) < 50 && Number(redCorn.strikesLandedPerMin) > 2.5){
            matchupArray.push(`${redCorn.name}'s striking could be hot!`)
        }
        if(Number(redCorn.strikesAbsorbedPerMin) > 5 && Number(redCorn.strikesLandedPerMin) > 5){
            matchupArray.push(`${redCorn.name} is a brawler!`)
        }
        if(Number(blueCorn.strikesAbsorbedPerMin) > 5 && Number(blueCorn.strikesLandedPerMin) > 5){
            matchupArray.push(`${blueCorn.name} is a brawler!`)
        }
        if(Number(redCorn.avgTakedownsPer15) > 2){
            matchupArray.push(`${redCorn.name} goes for submissions`)
        }
        if(Number(blueCorn.avgTakedownsPer15) > 2 ){
            matchupArray.push(`${blueCorn.name} goes for submissions!`)
        }
        if(Number(redCorn.reach.slice(0,2)) - Number(blueCorn.reach.slice(0,2)) > 1 ){
            matchupArray.push(`${redCorn.name} has a ${Number(redCorn.reach.slice(0,2)) - Number(blueCorn.reach.slice(0,2))} inch reach advantage!`)
        }
        if(Number(blueCorn.reach.slice(0,2)) - Number(redCorn.reach.slice(0,2)) > 1 ){
            matchupArray.push(`${blueCorn.name} has a ${Number(blueCorn.reach.slice(0,2)) - Number(redCorn.reach.slice(0,2))} inch reach advantage!`)
        }
        if(Number(redCorn.strikesAbsorbedPerMin) < 2.5 && Number(redCorn.avgTakedownsPer15) > 5){
            matchupArray.push(`Legit grappler alert on ${redCorn.name}!`)
        }
        if(Number(blueCorn.strikesAbsorbedPerMin) < 2.5 && Number(blueCorn.avgTakedownsPer15) > 5){       
            matchupArray.push(`Legit grappler alert on ${blueCorn.name}!`)
        }
        if(redCornFightTimeSeconds > 600 && blueCornFightTimeSeconds > 600){
            matchupArray.push(`Check the over 1.5 rounds or fight goes the distance on ${blueCorn.name} vs. ${redCorn.name}!`)
        }
        if(redCornFightTimeSeconds < 300 && blueCornFightTimeSeconds < 300){
            matchupArray.push(`Don't blink on this one: ${blueCorn.name} vs. ${redCorn.name}!`)
        }
        if(redCornFightTimeSeconds < 300){
            matchupArray.push(`${redCorn.name} might kill or be killed in rd1! LOW average fight time of ${redCorn.avgFightTime}`)
        }
        if(blueCornFightTimeSeconds < 300){
            matchupArray.push(`${blueCorn.name} might kill or be killed in rd1! LOW average fight time of ${blueCorn.avgFightTime}`)
        }
        if(Number(redCorn.avgTakedownsPer15) > 2 && blueCornTDD < 50  && redCornTDA > 50 ){
            matchupArray.push(`${blueCorn.name} could get blanketed`)
        }
        if(Number(blueCorn.avgTakedownsPer15) > 2 && redCornTDD < 50 && blueCornTDA > 50 ){
            matchupArray.push(`${redCorn.name} could get blanketed!`)
        }
        if(blueCornAge - 3 >= redCornAge){
            matchupArray.push(`${redCorn.name} is the younger buck by 3 years or more!`)
        }
        if(redCornAge - 3 >= blueCornAge){
            matchupArray.push(`${blueCorn.name} is the younger buck by 3 years or more!`)
        }
        if(blueCornAge > redCornAge && blueCornHeight < redCornHeight){
            matchupArray.push(`${redCorn.name} is the younger and taller fighter #evsmodel`)
        }
        if(redCornAge > redCornAge && blueCornHeight > redCornHeight){
            matchupArray.push(`${blueCorn.name} is the younger and taller fighter #evsmodel`)
        }
        if(redCorn.avgTakedownsPer15 === '0.00' && blueCorn.avgTakedownsPer15 === '0.00'){
            matchupArray.push(`High Strike Total Possibility! This one could be a standup banger. Both Fighters have never gone for a takedown in the UFC`)
        }
        if(redCorn.avgTakedownsPer15 === '0.00'){
            matchupArray.push(`${redCorn.name} has never gone for a takedown in the UFC`)
        }
        if(blueCorn.avgTakedownsPer15 === '0.00'){
            matchupArray.push(`${blueCorn.name} has never gone for a takedown in the UFC`)
        }
        // console.log(redCorn.reach, redCorn.reach.slice(0,2), Number(redCorn.defense.slice(0,2)), 
        // Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]), 
        // Number(redCorn.takedownDef.slice(0, 3)) === 100 ? Number(redCorn.takedownDef.slice(0, 3)) : Number(redCorn.takedownDef.slice(0, 1)) === 0 ? Number(redCorn.takedownDef.slice(0, 1)) : Number(redCorn.takedownDef.slice(0,2)),
        // Number(blueCorn.takedownDef.slice(0, 3)) === 100 ? Number(blueCorn.takedownDef.slice(0, 3)) : Number(blueCorn.takedownDef.slice(0, 1)) === 0 ? Number(blueCorn.takedownDef.slice(0, 1)) : Number(blueCorn.takedownDef.slice(0,2)), redCornTDD, blueCorn.dob.split(', ')[1], blueCornHeight, redCornHeight, notes, notes[1] )
    }



  return (
    <>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h1>Fighters Of May 20</h1></div>

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
            <TableCell align="right">Moneyline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fightersMay20.map((fighter) => (
            <TableRow
              key={fighter.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {fighter.name}
              </TableCell>
              <TableCell align="right">{Number(fighter.strikesLandedPerMin) > 5 ? <strong>{fighter.strikesLandedPerMin}</strong> : fighter.strikesLandedPerMin}</TableCell>
              <TableCell align="right">{Number(fighter.strikesAbsorbedPerMin) > 5 ? <strong>{fighter.strikesAbsorbedPerMin}</strong> : fighter.strikesAbsorbedPerMin}</TableCell>
              <TableCell align="right">{fighter.defense}</TableCell>
              <TableCell align="right">{fighter.reach}</TableCell>
              <TableCell align="right">{Number(fighter.avgFightTime.split(':')[0]) > 12 || Number(fighter.avgFightTime.split(':')[0]) < 5 ? <strong>{fighter.avgFightTime}</strong> : fighter.avgFightTime}</TableCell>
              <TableCell align="right">{Number(fighter.avgSubPer15) > 2 ? <strong>{fighter.avgSubPer15}</strong> : fighter.avgSubPer15}</TableCell>
              <TableCell align="right">{Number(fighter.avgTakedownsPer15) === 0 ? <strong>{fighter.avgTakedownsPer15}</strong> : fighter.avgTakedownsPer15}</TableCell>
              <TableCell align="right">{fighter.takedownAcc}</TableCell>
              <TableCell align="right">{Number(fighter.takedownDef.slice(0, 3)) === 100 ? <strong>{fighter.takedownDef}</strong> : fighter.takedownDef}</TableCell>
              <TableCell align="right">{fighter.dob}</TableCell>
              <TableCell align="right">{fighter.height}</TableCell>
              <TableCell align="right">{fighter.moneyLine}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}variant="h2">Main Card</Typography>        
      <h3> Main Event:  {fightersMay20[0] ? fightersMay20[0].name + " (" + (fightersMay20[0].moneyLine) + ')'  : ''} vs. {fightersMay20[1] ? fightersMay20[1].name + " (" + fightersMay20[1].moneyLine + ')' : ''}</h3>
    <List>
        {notes[13] ? notes[13].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 2: {fightersMay20[2] ? fightersMay20[2].name + " (" + (fightersMay20[2].moneyLine) + ')' : ''} vs. {fightersMay20[3] ? fightersMay20[3].name + " (" + (fightersMay20[3].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[14] ? notes[14].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 3: {fightersMay20[4] ? fightersMay20[4].name + " (" + (fightersMay20[4].moneyLine) + ')' : ''} vs. {fightersMay20[5] ? fightersMay20[5].name + " (" + (fightersMay20[5].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[15] ? notes[15].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 4: {fightersMay20[6] ? fightersMay20[6].name + " (" + (fightersMay20[6].moneyLine) + ')' : ''} vs. {fightersMay20[7] ? fightersMay20[7].name + " (" + (fightersMay20[7].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[16] ? notes[16].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 5: {fightersMay20[8] ? fightersMay20[8].name + " (" + (fightersMay20[8].moneyLine) + ')' : ''} vs. {fightersMay20[9] ? fightersMay20[9].name + " (" + (fightersMay20[9].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[17] ? notes[17].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />
    <Typography style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} variant="h2">Pre-lims</Typography>   

    <h3>Fight 6: {fightersMay20[10] ? fightersMay20[10].name + " (" + (fightersMay20[10].moneyLine) + ')' : ''} vs. {fightersMay20[11] ? fightersMay20[11].name + " (" + (fightersMay20[11].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[18] ? notes[18].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />
       
    <h3>Fight 7: {fightersMay20[12] ? fightersMay20[12].name + " (" + (fightersMay20[12].moneyLine) + ')' : ''} vs. {fightersMay20[13] ? fightersMay20[13].name + " (" + (fightersMay20[13].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[19] ? notes[19].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 8: {fightersMay20[14] ? fightersMay20[14].name + " (" + (fightersMay20[14].moneyLine) + ')' : ''} vs. {fightersMay20[15] ? fightersMay20[15].name + " (" + (fightersMay20[15].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[20] ? notes[20].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 9: {fightersMay20[16] ? fightersMay20[16].name + " (" + (fightersMay20[16].moneyLine) + ')' : ''} vs. {fightersMay20[17] ? fightersMay20[17].name + " (" + (fightersMay20[17].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[21] ? notes[21].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 10: {fightersMay20[18] ? fightersMay20[18].name + " (" + (fightersMay20[18].moneyLine) + ')' : ''} vs. {fightersMay20[19] ? fightersMay20[19].name + " (" + (fightersMay20[19].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[22] ? notes[22].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 11: {fightersMay20[20] ? fightersMay20[20].name + " (" + (fightersMay20[20].moneyLine) + ')'  : ''} vs. {fightersMay20[21] ? fightersMay20[21].name + " (" + (fightersMay20[21].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[23] ? notes[23].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 12: {fightersMay20[22] ? fightersMay20[22].name + " (" + (fightersMay20[22].moneyLine) + ')' : ''} vs. {fightersMay20[23] ? fightersMay20[23].name + " (" + (fightersMay20[23].moneyLine) + ')' : ''}</h3>
    <List>
        {notes[24] ? notes[24].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />
    </>
   
  )
}

export default FightersMay20