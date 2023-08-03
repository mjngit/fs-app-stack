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

const FightersJuly22 = () => {
    const { fighters } = useSelector(state => state)

    const fightersJuly22 = fighters.sort((a, b) => {
        return a.id - b.id
    }).filter(fighter => fighter.id < 29)
   
    console.log(fightersJuly22)

    let notes = {}
    

    for(let i = 0; i < fightersJuly22.length; i += 2){
        let redCorn = fightersJuly22[i]
        let blueCorn = fightersJuly22[i + 1]
        let redCornTDD
        let blueCornTDD
        let redCornTDA
        let blueCornTDA
        let redCornHeight
        let blueCornHeight
        let matchupArray = []
        notes[redCorn.matchupId] = matchupArray
        let redCornFightTimeSeconds = redCorn.avgFightTime ? Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]) : null
        let blueCornFightTimeSeconds = blueCorn.avgFightTime ? Number(blueCorn.avgFightTime.split(':')[0]) * 60 + Number(blueCorn.avgFightTime.split(':')[1]) : null
        console.log(redCorn.avgFightTime, blueCorn.avgFightTime)
        let redCornAge = redCorn.dob ? 2023 - Number(redCorn.dob.split(', ')[1]) : null
        let blueCornAge = blueCorn.dob ? 2023 - Number(blueCorn.dob.split(', ')[1]) : null
        console.log(blueCornAge, redCornAge)

        if(redCorn.height){
            let redHeight = `${redCorn.height}`
            let redSplitHeight = redHeight.split(`' `)
            let  redInches = redSplitHeight[1]

            if(redInches[1] === '"'){
            redInches = redInches.slice(0,1)*1
            } else {
                redInches = redInches.slice(0, 2)*1
            }
            redCornHeight = (redSplitHeight[0]*12)*1 + redInches
        }

    if(blueCorn.height){
        let blueHeight = `${blueCorn.height}`
        let blueSplitHeight = blueHeight.split(`' `)
        let  blueInches = blueSplitHeight[1]

        if(blueInches[1] === '"'){
        blueInches = blueInches.slice(0,1)*1
        } else {
            blueInches = blueInches.slice(0, 2)*1
        }
        blueCornHeight = (blueSplitHeight[0]*12)*1 + blueInches
    }
 



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
        if(redCornFightTimeSeconds < 300 && redCornFightTimeSeconds){
            matchupArray.push(`${redCorn.name} might kill or be killed in rd1! LOW average fight time of ${redCorn.avgFightTime}`)
        }
        if(blueCornFightTimeSeconds < 300 && blueCornFightTimeSeconds){
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
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h1>Fighters Of The Week: July 22</h1></div>

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
            <TableCell align="right">Record</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fightersJuly22.map((fighter) => (
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
              <TableCell align="right">{fighter.record}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}variant="h2">Main Card</Typography>        
      <h3> Main Event:  {fightersJuly22[0] ? fightersJuly22[0].name + " (" + (fightersJuly22[0].record) + ')'  : ''} vs. {fightersJuly22[1] ? fightersJuly22[1].name + " (" + fightersJuly22[1].record + ')' : ''}</h3>
    <List>
        {notes[1] ? notes[1].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 2: {fightersJuly22[2] ? fightersJuly22[2].name + " (" + (fightersJuly22[2].record) + ')' : ''} vs. {fightersJuly22[3] ? fightersJuly22[3].name + " (" + (fightersJuly22[3].record) + ')' : ''}</h3>
    <List>
        {notes[2] ? notes[2].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 3: {fightersJuly22[4] ? fightersJuly22[4].name + " (" + (fightersJuly22[4].record) + ')' : ''} vs. {fightersJuly22[5] ? fightersJuly22[5].name + " (" + (fightersJuly22[5].record) + ')' : ''}</h3>
    <List>
        {notes[3] ? notes[3].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 4: {fightersJuly22[6] ? fightersJuly22[6].name + " (" + (fightersJuly22[6].record) + ')' : ''} vs. {fightersJuly22[7] ? fightersJuly22[7].name + " (" + (fightersJuly22[7].record) + ')' : ''}</h3>
    <List>
        {notes[4] ? notes[4].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 5: {fightersJuly22[8] ? fightersJuly22[8].name + " (" + (fightersJuly22[8].record) + ')' : ''} vs. {fightersJuly22[9] ? fightersJuly22[9].name + " (" + (fightersJuly22[9].record) + ')' : ''}</h3>
    <List>
        {notes[5] ? notes[5].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />
    <Typography style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} variant="h2">Pre-lims</Typography>   

    <h3>Fight 6: {fightersJuly22[10] ? fightersJuly22[10].name + " (" + (fightersJuly22[10].record) + ')' : ''} vs. {fightersJuly22[11] ? fightersJuly22[11].name + " (" + (fightersJuly22[11].record) + ')' : ''}</h3>
    <List>
        {notes[6] ? notes[6].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />
       
    <h3>Fight 7: {fightersJuly22[12] ? fightersJuly22[12].name + " (" + (fightersJuly22[12].record) + ')' : ''} vs. {fightersJuly22[13] ? fightersJuly22[13].name + " (" + (fightersJuly22[13].record) + ')' : ''}</h3>
    <List>
        {notes[7] ? notes[7].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 8: {fightersJuly22[14] ? fightersJuly22[14].name + " (" + (fightersJuly22[14].record) + ')' : ''} vs. {fightersJuly22[15] ? fightersJuly22[15].name + " (" + (fightersJuly22[15].record) + ')' : ''}</h3>
    <List>
        {notes[8] ? notes[8].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 9: {fightersJuly22[16] ? fightersJuly22[16].name + " (" + (fightersJuly22[16].record) + ')' : ''} vs. {fightersJuly22[17] ? fightersJuly22[17].name + " (" + (fightersJuly22[17].record) + ')' : ''}</h3>
    <List>
        {notes[9] ? notes[9].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 10: {fightersJuly22[18] ? fightersJuly22[18].name + " (" + (fightersJuly22[18].record) + ')' : ''} vs. {fightersJuly22[19] ? fightersJuly22[19].name + " (" + (fightersJuly22[19].record) + ')' : ''}</h3>
    <List>
        {notes[10] ? notes[10].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 11: {fightersJuly22[20] ? fightersJuly22[20].name + " (" + (fightersJuly22[20].record) + ')'  : ''} vs. {fightersJuly22[21] ? fightersJuly22[21].name + " (" + (fightersJuly22[21].record) + ')' : ''}</h3>
    <List>
        {notes[11] ? notes[11].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 12: {fightersJuly22[22] ? fightersJuly22[22].name + " (" + (fightersJuly22[22].record) + ')' : ''} vs. {fightersJuly22[23] ? fightersJuly22[23].name + " (" + (fightersJuly22[23].record) + ')' : ''}</h3>
    <List>
        {notes[12] ? notes[12].map((note, idx) => {
            return (
            <ListItem disablePadding key={idx}>
              <ListItemText primary={note} />
            </ListItem>
            )
        }) : ''}
          
    </List>
    <Divider />

    <h3>Fight 13: {fightersJuly22[24] ? fightersJuly22[24].name + " (" + (fightersJuly22[24].record) + ')' : ''} vs. {fightersJuly22[25] ? fightersJuly22[25].name + " (" + (fightersJuly22[25].record) + ')' : ''}</h3>
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

    <h3>Fight 14: {fightersJuly22[26] ? fightersJuly22[26].name + " (" + (fightersJuly22[26].record) + ')' : ''} vs. {fightersJuly22[27] ? fightersJuly22[27].name + " (" + (fightersJuly22[27].record) + ')' : ''}</h3>
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
    </>
   
  )
}

export default FightersJuly22