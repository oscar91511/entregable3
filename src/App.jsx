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
    <div className =" App font-['Fira_Code'] text-white bg-cover bg-no-repeat bg-[url(/images/bg-green.jpg)]  py-4 min-h-screen">
     <header className="flex flex-col items-center gap-8 mb-8">
     <div className="-translate-y-[40%]">
      <img src="/images/portal2.png" alt="" className="animate-spin-slow  w-[65%] mx-auto"/>
      </div>
      
      <div className="flex justify-center ">
      <img src="/images/title.png" alt="" className="animate-pulse w-[55%] sm:w-[350px] mx-auto  absolute top-[60px]  "/>
      </div>

      
      
      <form onSubmit={handleSubmit} className="-translate-y-[50%]">
        <div className="flex-col  h-[45px] border-[2px] border-lime-400 sm:w-[600px] w-auto mx-4 ">
          <input className="w-[65%] pl-4 solid h-full bg-transparent text-white font-bold " id='locationId' placeholder="Type a location Id.."   type="" />
          <button className="border-[2px] border-lime-400 h-full w-[35%] bg-green-400/50 text-lime-300 text-bold items-center ">Search <i className=' text-lime-300 hover:bg-dark-green  bx bx-search -translate-y-[-25%]'></i></button>
        </div>
        
        <h2 className=" font-dongle text-[60px] font-bold hover:text-black hover:bg-dark-green text-green-300 text-3xl mt-16 text-center">¡ Welcome to the crazy universe !</h2>
      </form>
     </header>
      
      <Location location={location} />
      <ResidentList location={location} />
      <footer className="flex gap-2 p-4 justify-center">
        <a
          className="text-4xl hover:text-lime-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/oscar91511/entregable4"
        >
          <i className="bx bxl-github "></i>
        </a>
        <a
          className="text-4xl hover:text-lime-400"
          target="_blank" // permite abrir en nueva pestaña
          rel="noopener noreferrer" //evita malwares maliciosos al abrir ventanas
          href="https://www.linkedin.com/in/oscar-eduardo-lopez-restrepo-968a91265/"
        >
          <i className="bx bxl-linkedin "></i>
        </a>
        <a
          className="text-4xl hover:text-lime-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/oscar915lr/"
        >
          <i className="bx bxl-instagram"></i>
        </a>
      </footer>
      </div>
    
  )
}

export default App
