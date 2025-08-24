import React, { useState } from 'react'

function Input() {

  const [city,setCity] = useState(null)
  return (
    <div>
      <input 
      type="text"
      placeholder='Enter City Name : '
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />
    </div>
  )
}

export default Input