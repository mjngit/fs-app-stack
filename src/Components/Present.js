import React, {useState}from 'react';
import axios from 'axios';
import Input from '@mui/joy/Input';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { OPENAI_API_KEY } from '../../secrets';

const Present = () => {
    const [age, setAge] = useState('')
    const [minPrice, setMinPrice] = useState(25)
    const [maxPrice, setMaxPrice] = useState(50)
    const [interest1, setInterest1] = useState('')
    const [interest2, setInterest2] = useState('')
    const [interest3, setInterest3] = useState('')
    const [gift, setGift] = useState([])

    const submit = async () => {
       try {
         console.log('submitted')
        const response =  await axios.post('https://api.openai.com/v1/chat/completions',
{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": `Please give me 3 birthday gift ideas with links to buy them for a ${age} year old interested in ${interest1}, ${interest2}, and ${interest3} between ${minPrice} and ${maxPrice} USD?`}],
     "temperature": 0.7
   },
{ headers: 
 { Authorization: `Bearer ${OPENAI_API_KEY}`,
 organization: "org-ED6jkoSYo0F2euGczF01T5sv"}
})

//console.log(response)
//console.log(response.data.choices[0].message.content)
// let giftString = response.data.choices[0].message.content
// console.log(giftString)
// var matches = giftString.match(/\bhttps?:\/\/\S+/gi);
//[1, 2] 
// const[el1, el2] = [1, 2] but can name anything you want imagine the string 
//1. Gaming headset - https://www.amazon.com
// setGift(giftString.split('\n').map(string => {
//     const [ name, url ] = string.split(' - ')
//     return { name, url }
// })
// )

let string = response.data.choices[0].message.content

const urls = string.match(/\bhttps?:\/\/\S+/gi);

/** 
[
{name: '1) family..', url: 'https://www.personalizationmall.com/Personalized-Family-Tree-Picture-Frame-p14368.prod?sdest=dept&sdestid=1737&storeid=23&categoryid=1737'}
]
*/

setGift(urls.map(url => {
  const found = string.indexOf(url)
  const name = string.slice(0, found);

  const substring = `${name}${url}`;
  string = string.slice(substring.length);
  
  return {
    name: name.replace('\n', ''),
    url,
  }
})
)


// console.log(a)

//setGift(response.data.choices[0].message.content)
       } catch (error) {
        console.log(error)
       }
    }

    return (
        <>
        <div>
                <h1>Birthday Present Generator</h1>
                <form onSubmit={ submit } style={{ display: 'flex' }}>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="Age" variant="outlined" value={ age } onChange={ev => setAge(ev.target.value)} />
                  <div style={{ marginBottom: 8 }}/>
                  <div style={{ flexDirection: 'row' }}>
                  <TextField label="Min Price" variant="outlined" value={ minPrice } onChange={ev => setMinPrice(ev.target.value)} style={{ justifyContent: 'space-between', width: "50%" }}/>
                  
                  <TextField label="Max Price" variant="outlined" value={ maxPrice } onChange={ev => setMaxPrice(ev.target.value)} style={{ justifyContent: 'space-between',  width: "50%" }}/>
                  </div>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="First Interest" variant="outlined"  value={ interest1 } onChange={ev => setInterest1(ev.target.value)}/>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="Second Interest" variant="outlined" value={ interest2 } onChange={ev => setInterest2(ev.target.value)}/>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="Third Interest" variant="outlined" value={ interest3 } onChange={ev => setInterest3(ev.target.value)}/>
      
                  <Button onClick={ submit } disabled={ !age || !minPrice || !maxPrice || !interest1 || !interest2}>Generate Birthday Present</Button>
                </form>
                {gift.map((gift, idx) => <div key={idx}><a href={gift.url}  target={'_blank'}>{gift.name}</a></div>)}
            </div>
        </>
    )
}

export default Present;
