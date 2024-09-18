import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import React,{useState} from 'react'
export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
      city:"Hyderabad",
      feelslike:25.08,
      temp:25.34,
      tempMin:25.34,
      tempMax:25.34,
      humidity:46,
      weather:"haze"
  });
  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return(
    <div style={{textAlign:"center"}}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}