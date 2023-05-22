import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = ()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const onChange = ev => {
    setCredentials({...credentials, [ ev.target.name ]: ev.target.value });
  };

  const login = (ev)=> {
    ev.preventDefault();
    dispatch(attemptLogin(credentials));
    navigate('/home')
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={ login }>
      <TextField label="Username" name = 'username' variant="outlined" value={ credentials.username } onChange={onChange} />
      <div style={{ marginBottom: 8 }}/>
      <TextField label="Password" name = 'password' variant="outlined" value={ credentials.password } onChange={onChange} />

        <Button onClick={ login } disabled={ !credentials }>Login</Button>
        {/* <input
          placeholder='username'
          value = { credentials.username }
          name = 'username'
          onChange = { onChange }
          />
        <input
          placeholder='password'
          name = 'password'
          value={ credentials.password }
          onChange = { onChange }
        />
        <button>Login</button> */}
      </form>
            {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               
                <div>
                    <h2>Not a member?</h2>
                    <Link to={`/register`}>Register Here</Link>
                </div>
            </div> */}
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Not a Member?
        </Typography>
        <Typography sx={{ mb: .5, mt: .5 }} color="text.secondary">
          <Link to={`/register`}>Register Here</Link>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default Login;







    

