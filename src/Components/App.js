import React, { useEffect, useRef } from 'react';
import Home from './Home';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchFighters } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import Present from './Present'
import Fighter from './Fighter'
import Nav from './Nav'
import TripAi from './TripAi'
import Logout from './Logout'
import Register from './Register'
import Account from './Account'



const App = ()=> {
  const { auth, fighters } = useSelector(state => state);
  const prevAuth = useRef(auth)
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
    dispatch(fetchFighters())
  }, []);

  useEffect(() => {
    if(!prevAuth.current.id && auth.id ){
      console.log('you just signed in!')
    }
    if(prevAuth.current.id && !auth.id){
      console.log('you just logged out')
    }
  }, [auth])

  useEffect(() => {
    prevAuth.current = auth
  })
  

  return (
    <div>
       <Nav />
      <h1>MN Stackathon!</h1>
      {/* {
        auth.id ? <Home /> : <Login />
      } */}
      <Routes>
              <Route path='/login' element={ <Login /> } />
              <Route path='/register' element={ <Register /> } />
              <Route path='/home' element={ <Home /> } />
              {/* <Route path='/logout' element={ <Logout /> } /> */}
      </Routes>
      {
        !!auth.id  && (
          <div>
            <Routes>
              <Route path='/present' element={ <Present /> } />
              <Route path='/fighters' element={ <Fighter /> } />
              <Route path='/trip' element={ <TripAi /> } />
              {/* <Route path='/login' element={ <Login /> } /> */}
              <Route path='/logout' element={ <Logout /> } />
              {/* <Route path='/register' element={ <Register /> } />
              <Route path='/home' element={ <Home /> } /> */}
              <Route path='/account' element={ <Account /> } />
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;
