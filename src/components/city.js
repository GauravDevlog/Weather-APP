async function city(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`

    const res = await fetch(url)
    const data = await res.json()
    if (data.results && data.results.length >0) {
        return {
            name: data.results[0].name,
            lat: data.results[0].latitude,
            long: data.results[0].longitude
        }
    }
    return null
}

export default city