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
  if(newLocation.length === 0) return
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
    <div className =" App  text-white  mx-auto bg-[url(/images/bg.jpg)]  py-4 min-h-screen">
     <header className="flex flex-col items-center gap-8 mb-8">
     <div className="-translate-y-[40%]">
      <img src="/images/portal2.png" alt="" className="animate-spin-slow lg:w-[500px] w-[80%] mx-auto"/>
      </div>
      
      <div className="flex justify-center ">
      <img src="/images/title.png" alt="" className="animate-pulse w-[400px] lg:w-[500px] mx-auto  absolute top-[60px] "/>
      </div>

      
      
      <form onSubmit={handleSubmit} className=" -translate-y-[50%]">
        <div className="flex-col  h-[45px] border-[2px] border-green-400 sm:w-[600px] w-auto ">
          <input className="w-[65%] pl-4 solid h-full bg-transparent text-white font-bold " id='locationId' placeholder="Type a location Id.."   type="" />
          <button className="border-l-[2px] border-green-400 h-full w-[35%] bg-green-400/50 text-white text-bold items-center ">Search <i className=' text-white hover:bg-dark-green  bx bx-search -translate-y-[-25%]'></i></button>
        </div>
        
        <h2 className="  text-green-300 font-bold text-xl mt-16 text-center">¡ Welcome to the crazy  universe !</h2>
      </form>
     </header>
      
      <Location location={location} />
      <ResidentList location={location} />
      </div>
    
  )
}

export default App
