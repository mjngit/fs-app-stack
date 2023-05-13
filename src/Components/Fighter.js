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

    console.log(fighters.sort((a, b) => {
        return a.id - b.id
    })
    )

    let evsModel = []
    let notes = {}

    for(let i = 0; i < fighters.length; i += 2){
        let redCorn = fighters[i]
        let blueCorn = fighters[i + 1]
        let redCornTDD
        let blueCornTDD
        let redCornTDA
        let blueCornTDA
        let redCornHeight
        let blueCornHeight
        let matchupArray = []
        notes[redCorn.matchupId] = matchupArray


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
            matchupArray.push(`${redCorn.name} has got a ${Number(redCorn.reach.slice(0,2)) - Number(blueCorn.reach.slice(0,2))} inch reach advantage!`)
        }
        if(Number(blueCorn.reach.slice(0,2)) - Number(redCorn.reach.slice(0,2)) > 1 ){
            matchupArray.push(`${blueCorn.name} has got a ${Number(blueCorn.reach.slice(0,2)) - Number(redCorn.reach.slice(0,2))} inch reach advantage!`)
        }
        if(Number(redCorn.strikesAbsorbedPerMin) < 2.5 && Number(redCorn.avgTakedownsPer15) > 5){
            matchupArray.push(`Legit grappler alert on ${redCorn.name}!`)
        }
        if(Number(blueCorn.strikesAbsorbedPerMin) < 2.5 && Number(blueCorn.avgTakedownsPer15) > 5){       
            matchupArray.push(`Legit grappler alert on ${blueCorn.name}!`)
        }
        if(Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]) > 600 && Number(blueCorn.avgFightTime.split(':')[0]) * 60 + Number(blueCorn.avgFightTime.split(':')[1]) > 600){
            matchupArray.push(`Check the over 1.5 rounds or fight goes the distance on ${blueCorn.name} vs. ${redCorn.name}!`)
        }
        if(Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]) < 300 && Number(blueCorn.avgFightTime.split(':')[0]) * 60 + Number(blueCorn.avgFightTime.split(':')[1]) < 300){
            matchupArray.push(`Don't blink on this one: ${blueCorn.name} vs. ${redCorn.name}!`)
        }
        if(Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]) < 300){
       
            matchupArray.push(`${redCorn.name} might kill or be killed in rd1! LOW average fight time of ${redCorn.avgFightTime}`)
        }
        if(Number(blueCorn.avgFightTime.split(':')[0]) * 60 + Number(blueCorn.avgFightTime.split(':')[1]) < 300){
            matchupArray.push(`${blueCorn.name} might kill or be killed in rd1! LOW average fight time of ${blueCorn.avgFightTime}`)
        }
        if(Number(redCorn.avgTakedownsPer15) > 2 && blueCornTDD < 50  && redCornTDA > 50 ){
            matchupArray.push(`${blueCorn.name} could get blanketed`)
        }
        if(Number(blueCorn.avgTakedownsPer15) > 2 && redCornTDD < 50 && blueCornTDA > 50 ){
            matchupArray.push(`${redCorn.name} could get blanketed!`)
        }
        if(2023 - Number(blueCorn.dob.split(', ')[1]) - 3 > 2023 - Number(redCorn.dob.split(', ')[1])){
            matchupArray.push(`${redCorn.name} is the younger buck by 3 years or more!`)
        }
        if(2023 - Number(redCorn.dob.split(', ')[1]) - 3 > 2023 - Number(blueCorn.dob.split(', ')[1])){
            matchupArray.push(`${blueCorn.name} is the younger buck by 3 years or more!`)
        }
        if(2023 - Number(blueCorn.dob.split(', ')[1]) > 2023 - Number(redCorn.dob.split(', ')[1]) && blueCornHeight < redCornHeight){
            matchupArray.push(`${redCorn.name} is the younger and taller fighter #evsmodel`)
        }
        if(2023 - Number(redCorn.dob.split(', ')[1]) > 2023 - Number(blueCorn.dob.split(', ')[1]) && blueCornHeight > redCornHeight){
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




        console.log(redCorn.reach, redCorn.reach.slice(0,2), Number(redCorn.defense.slice(0,2)), 
        Number(redCorn.avgFightTime.split(':')[0]) * 60 + Number(redCorn.avgFightTime.split(':')[1]), 
        Number(redCorn.takedownDef.slice(0, 3)) === 100 ? Number(redCorn.takedownDef.slice(0, 3)) : Number(redCorn.takedownDef.slice(0, 1)) === 0 ? Number(redCorn.takedownDef.slice(0, 1)) : Number(redCorn.takedownDef.slice(0,2)),
        Number(blueCorn.takedownDef.slice(0, 3)) === 100 ? Number(blueCorn.takedownDef.slice(0, 3)) : Number(blueCorn.takedownDef.slice(0, 1)) === 0 ? Number(blueCorn.takedownDef.slice(0, 1)) : Number(blueCorn.takedownDef.slice(0,2)), redCornTDD, blueCorn.dob.split(', ')[1], blueCornHeight, redCornHeight, notes, notes[1] )
    }



  return (
    <>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Fighters Of The Week</div>

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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <h2>  Main Event </h2>

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

    <h3>Fight 2</h3>
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

    <h3>Fight 3</h3>
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

    <h3>Fight 4</h3>
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

    <h3>Fight 5</h3>
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

    <h3>Fight 6</h3>
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
       
    <h3>Fight 7</h3>
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

    <h3>Fight 8</h3>
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

    <h3>Fight 9</h3>
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

    <h3>Fight 10</h3>
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
    </>
   
  )
}

export default Fighter

// import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { fontWeight } from '@mui/system';


//   return (
//     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <nav aria-label="main mailbox folders">
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Inbox" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <DraftsIcon />
//               </ListItemIcon>
//               <ListItemText primary="Drafts" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </nav>
//       <Divider />
//       <nav aria-label="secondary mailbox folders">
//         <List>
//           <ListItem disablePadding>
//               <ListItemText primary="Trash" />
//           </ListItem>
//         </List>
//       </nav>
//     </Box>
//   );


