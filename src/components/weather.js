// import city from "./city";
async function weather(lat,long){
 const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`
   const res = await fetch(url)
   const data = await res.json()
   return  data.hourly.temperature_2m[0]
   
}

export default weather;