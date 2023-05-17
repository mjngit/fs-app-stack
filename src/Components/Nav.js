import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'

export default function Nav() {
    const {auth} = useSelector(state => state)

  return (
    <Box>
      <AppBar sx={{ top: 0, left: 0, right: 0 }}>
        <Toolbar >
          <Typography href='/#/present' variant="h6" component="a" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }} >
            Birthday Present Generator
          </Typography>
          <Typography href='/#/trip' variant="h6" component="a" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }} >
            AI Trip Planner
          </Typography>
          <Typography href='/#/fighters' variant="h6" component="a" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            Fights Of Last Week
          </Typography>
          <Typography href='/#/fightersMay20' variant="h6" component="a" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            Fights Of This Week
          </Typography>
          {auth.id ? <Button href='/#/logout' color="inherit">Logout</Button> : <Button href='/#/login' color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}