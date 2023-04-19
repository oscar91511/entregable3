import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentStatus = {
    Alive:  "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
}

const ResidentCard = ({resident}) => {

  const [residentInfo, setResidenInfo] = useState()
  

  useEffect(() => {
    axios.get(resident)
    .then((res) => setResidenInfo(res.data))
    .catch((err) => console.log(err))
  }, [])


  return (
    <article className="text-white">
      <div className='relative'>
      <img className='w-full  border-[1px] border-green-500' src={residentInfo?.image} alt="" />
      <div className='border-[2px] border-green-500 absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2
      flex gap-2 items-center rounded-sm'> 
        <div className={`w-3 h-3 ${residentStatus[residentInfo?.status]} rounded-full`}></div>
        <span>{residentInfo?.status}</span>
      </div>
      </div>
      <section className=" border-[1px] p-2 shadow-green-500 shadow-lg border-green-500">
        <h3 className=" font-Dongle uppercase text-blue-300 text-[10px]  text-center">{residentInfo?.name}</h3>
        <ul className=" flex justify-evenly  w-full flex-row sm:justify-evenly py-4 font-bold sm:w-[500px] sm:flex-col">
          <li className="">
            <span className="text-lime-300 text-[10px] uppercase font-bold">Species :</span>
            <span className="text-[10px] pl-1  font-bold"> {residentInfo?.species}</span>
          </li>
          <li className="">
            <span  className="text-lime-300 text-[10px] font-bold uppercase" >Origin:</span>
            <span className="text-[9px] pl-1  font-bold ">{residentInfo?.origin.name}</span>
          </li>
          <li className="">
            <span  className="text-lime-300 text-[10px] uppercase  font-bold">Times appear:</span>
            <span className="text-[12px] pl-4 font-Dongle font-bold">{residentInfo?.episode.length}</span>
          </li>
      
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard
