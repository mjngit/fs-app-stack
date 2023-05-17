import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
// import Home from './Home'
import Login from './Login'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Welcome = () => {
  const { auth } = useSelector(state => state);
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography variant="h2" component="div">
      Welcome to the Stack Shack { auth.username }!
      </Typography>
      <Typography sx={{ mb: .5, mt: .5 }} color="text.secondary" variant="h4" component="a" href='/#/account'>
      Add some info to your profile!
      </Typography>
      <Typography variant="h3" component="div">
      Looking for a present for a friend?
      </Typography>
      <Typography sx={{ mb: .5, mt: .5 }} color="text.secondary" variant="h4" component="div">
      Going on a trip?
      </Typography>
      <Typography variant="h5" component="div">
      Hungry for MMA Stats? 
      </Typography>
      <Typography variant="h6" component="div">
      Knowledge is Good
      </Typography>
    </CardContent>
  </Card>
    </div>
  )
}

const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{display: 'flex', justifyContent: 'center'}}>Home</h1>
       <div>
       {
        auth.id ? <Welcome />  : <Login />
      }

      </div>
    </div>
  );
};

export default Home;

 {/* Welcome { auth.username }!!
        <button onClick={()=> dispatch(logout())}>Logout</button> */}