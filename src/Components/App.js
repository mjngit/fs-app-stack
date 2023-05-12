import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchFighters } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import Present from './Present'
import Fighter from './Fighter'


const App = ()=> {
  const { auth, fighters } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
    dispatch(fetchFighters())
  }, []);

  return (
    <div>
      <h1>FS App Template</h1>
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/present'>Birthday Present Generator</Link>
              <Link to='/fighters'>Fighter Stats</Link>
            </nav>
            <Routes>
              <Route path='/present' element={ <Present /> } />
              <Route path='/fighters' element={ <Fighter /> } />
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;
