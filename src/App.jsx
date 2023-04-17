import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'



function App() {

const [ location, setLocation ] = useState();

const handleSubmit = (e) => {
  e.preventDefault()
  
  const newLocation = e.target.locationId.value

  const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
  

  axios.get(URL)
  .then((res) => setLocation(res.data))
  .catch((err) => console.log(err))
}

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, []);

  return (
    <div className ="App bg-[url(/images/bg.jpg)]">
     
      <div className="-translate-y-[40%] ">
      <img src="/images/portal2.png" alt="" className="animate-spin-slow mx-auto"/>
      </div>
      
      <div className="flex justify-center">
      <img src="/images/title.png" alt="" className="animate-pulse w-[515px] mx-auto  absolute top-[60px] "/>
      </div>

      
      
      <form onSubmit={handleSubmit} className=" -translate-y-[50%]">
        <div className="flex justify-center  ">
          <input className="w-[400px] border-green-400 border-[2px] solid #8EFF8B bg-transparent text-white font-bold " id='locationId' placeholder="Type a location Id.."   type="" />
          <button className="border-[2px] border-green-500 h-11 w-28 bg-green-400/50 text-white text-bold items-center ">Search <i className=' text-white  bx bx-search -translate-y-[-25%]'></i></button>
        </div>
        
        <h2 className="  text-green-500/70 font-bold text-xl mt-16 text-center">¡ Welcome to the crazy  universe !</h2>
      </form>
      <Location location={location} />
      <ResidentList location={location} />
    </div>
  )
}

export default App
