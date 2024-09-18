import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'
function InfoBox({info}){
  const INIT_URL = 'https://images.unsplash.com/photo-1514229917620-e7041bcb7d56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhenklMjB3ZWF0aGVyfGVufDB8fDB8fHww';

  const HOT_URL = "https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?b=1&s=612x612&w=0&k=20&c=0JW5niXJ-nxYhXXYL6OYQJ8cik4EjksP-TmMNUfIXE4=";
  const COLD_URL = "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXIlMjBjaXR5fGVufDB8fDB8fHww";
  const RAIN_URL = "https://media.istockphoto.com/id/170114445/photo/gloomy-city-rain.webp?b=1&s=612x612&w=0&k=20&c=BT2OSdDxUZK4INo5uFsKJPNawErRnuNgXWUx0mzpqj0=";

  return(
    <div className='InfoBox'>
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ? RAIN_URL
          :info.temp>15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80
              ? <ThunderstormIcon/>
              :info.temp>15
              ? < WbSunnyIcon/>
              : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature : {info.temp}&deg;C</p>
          <p>Humidity: {info.humidity}</p>
          <p>Min temp: {info.tempMin}</p>
          <p>Max temp: {info.tempMax}</p>
          <p>weather can be described as <i>{info.weather}</i></p>
        </Typography>
      </CardContent>  
    </Card>
    </div>
    </div>
  );
}
export default InfoBox