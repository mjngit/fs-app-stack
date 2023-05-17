import React, {useState}from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RAPIDAI_API_KEY } from '../../secrets';
import { Audio } from  'react-loader-spinner'

const Present = () => {
    const [plans, setPlans] = useState([])
    const [days, setDays] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(false);
   

    const getTrip = async (e) => {
        e.preventDefault()
        setLoading(true);
       try {
         console.log('submitted')
         const options = {
            method: 'GET',
            url: 'https://ai-trip-planner.p.rapidapi.com/',
            params: {
              days: `${days}`,
              destination: `${city}, ${country}`
            },
            headers: {
              'X-RapidAPI-Key': `${RAPIDAI_API_KEY}`,
              'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
            }
          };
     
              const response = await axios.request(options);
              const plans = response.data.plan
              setPlans(plans)
              setLoading(false)
       } catch (error) {
        console.log(error)
       }
    }

    return (
        <>
        <div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h1>AI Trip Planner</h1></div>
                <form onSubmit={ getTrip } style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                  <div style={{ marginBottom: 8 }}/>
                  <div style={{ display:'flex', flexDirection: 'row', justifyContent:'center' }}>
                  <div style={{alignSelf: 'center', fontSize: '24'}}>I'm going to </div> 
                  <TextField label="City" variant="outlined" value={ city } onChange={ev => setCity(ev.target.value)} style={{ width: "20%", alignItems: 'center',  alignContent: 'center', marginLeft:'1%'}}/>
                  <TextField label="Country" variant="outlined" value={ country } onChange={ev => setCountry(ev.target.value)} style={{ width: "20%", marginLeft:'1%', marginRight:'1%' }}/> 
                  <div style={{alignSelf: 'center', fontSize: '24'}}> for </div> 
                  <TextField label="Days" variant="outlined" value={ days } onChange={ev => setDays(ev.target.value)} style={{display: 'flex', alignSelf: 'start', width: "10%", marginLeft:'1%', marginRight:'1%' }} /> 
                  <div style={{alignSelf: 'center', fontSize: '24'}}> days.</div>
                  </div>
      
                  <Button onClick={ getTrip } disabled={ !days || !city || !country || days > 10}>Please AI, Plan My Trip!</Button>
                </form>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                    {loading ? <Audio
                        height = "80"
                        width = "80"
                        radius = "9"
                        color = 'green'
                        ariaLabel = 'three-dots-loading'     
                        wrapperStyle
                        wrapperClass
                                /> : ''}
                </div>
                    {plans ? plans.map((plan, idx) => 
                        <div key={idx}>{
                            `Day ${plan.day} Plan:` 
                        }
                        <ul>
                            {plan.activities.map((activity, idx1) => {
                                return (
                                    <li key={idx1}>{activity.time}: {activity.description}</li>
                                )
                            })}
                        </ul>
                </div>) 
                
                    : ''}
            </div>
        </>
    )
}

export default Present;