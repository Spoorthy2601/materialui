import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import React,{useState} from 'react';

function SearchBox({updateInfo}){
  let [city,setCity] = useState("");
  let [error,setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "aed933c9fb002b9018bbb42d68bb4228";

  let getWeatherDetails = async()=>{
     try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description
      };
      console.log(result);
      return result;
    }catch(err){
      throw err;
    }
  }
  
  let handleChange = (e)=>{
    setCity(e.target.value);
  }
  let handleSubmit = async (e)=>{
   try{
     e.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await getWeatherDetails();
    updateInfo(newinfo);
   }catch(err){
    setError(true);
   }
  }
  return(
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange}/><br></br>
        <br></br>
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}><b>No such place found!!</b></p>}
      </form>
    </div>
  );
}
export default SearchBox