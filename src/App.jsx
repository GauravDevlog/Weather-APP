import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import city from './components/city'
import weather from './components/weather'
function App() {
  const [coord, setCoord] = useState(null)
  const [Loading,setLoading] = useState(true)
  const [temp,setTemp] = useState(null)
  const [cityName,setCityName] = useState("Delhi")

  // useEffect(() => {
  //   setLoading(true)
  //   async function fetchCoords(){
  //     const data = await city(cityName)
  //     setCoord(data)
  //     // console.log(data);
  //     setLoading(false)
  //   }
  //   fetchCoords()
  // }, [city])
  async function fetchCoords(){
      setLoading(true)
      const data = await city(cityName)
      setCoord(data)
      // console.log(data);
      setLoading(false)
    }
  useEffect(()=>{
    async function fetchWeather() {
      if(!Loading){
        const temp = await weather(coord.lat,coord.long)
        setTemp(temp)
        console.log("This",temp);
      }
      
    }
    fetchWeather()
  },[Loading])
  // if(!Loading) weather(coord.lat,coord.long)
  return (
    <>
      <h1>Weather APP</h1>
      <input 
      type="text"
      placeholder='Enter City Name : '
      value={cityName}
      onChange={(e)=>setCityName(e.target.value)}
      />
      <button
      onClick={fetchCoords}
      >Search</button>
      {Loading ? "Loading....":
      <div><h3>City : {coord.name?? 'Loading...'}</h3>
      <h3>Latitude : {coord.lat}</h3>
      <h3>Longitude : {coord.long}</h3>
      <h3>Temperature : {temp}</h3></div>}
    </>
  )
}

export default App
