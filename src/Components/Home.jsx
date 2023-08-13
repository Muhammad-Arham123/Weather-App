import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'


export default function Home() {
  const [data,setData] = useState({
    celcius:10,
    name:'London',
    humidity:10,
    speed:2
  })
  const[name,setName]=useState('');

const handleClick =()=>{
  if(name !== ""){
    const apiUrl=`https://pro.openweathermap.org/data/2.5/weather?q=${name}&appid=3500aa8ab775cb0cb97ead2b9fc41866&units=metric`
axios.get(apiUrl)
.then(res =>{
  setData({...data,celcius:res.data.main.temp, name:res.data.name,humidity:res.data.main.humidity,speed:res.data.wind.speed})
})
.catch(err =>console.log(err))
  }
}

  return (
    <div className='container'>
      <div className='weather'>
        <div className='search'>
          <input type="text" placeholder='Enter city Name' onChange={e => setName(e.target.value)} />
          <button><img src="https://e7.pngegg.com/pngimages/342/516/png-clipart-computer-icons-search-icon-zooming-user-interface-computer-icons.png" onClick={handleClick}  alt="" /></button>
        </div>
        <div className="winfo">
          <img className='icon'  src="https://static.vecteezy.com/system/resources/previews/020/274/817/original/sun-with-cloud-in-flat-icon-weather-app-forecast-summer-climate-free-vector.jpg" alt="" />
          <h1>{Math.round(data.celcius)}°c</h1>
          <h2>{data.name}</h2>
          <div className="detail">
            <div className="col">
                <img className='img1' src="https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-vector-waves-simple-icon-png-image_4836285.png" alt="" />
                <div className='humidity'>
                  <p>{Math.round(data.humidity)}%</p>
                  <p>Humidity</p>
                </div>
            </div>
            <div className="col">
             
           <img className='img2' src="data:image/jpeg;base64,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" alt="" />
              <div className='wind'>
              <p>{Math.round(data.speed)} km/h%</p>
              <p>Wind</p>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
