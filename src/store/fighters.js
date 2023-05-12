import axios from 'axios';


const fighters = (state = [], action)=> {
  if(action.type === 'SET_FIGHTERS'){
    return action.fighters;
  }
  return state;
};

export const fetchFighters = () => {
  return async(dispatch) => {
    const response = await axios.get('/api/fighters')
    dispatch({type: "SET_FIGHTERS", fighters: response.data})
  }
}


export default fighters;
