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
    <article className="text-white ">
      <div className='relative'>
      <img className='w-full  border-[1px] border-green-500' src={residentInfo?.image} alt="" />
      <div className='border-[2px] border-green-500 absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2
      flex gap-2 items-center rounded-sm'> 
        <div className={`w-3 h-3 ${residentStatus[residentInfo?.status]} rounded-full`}></div>
        <span>{residentInfo?.status}</span>
      </div>
      </div>
      <section className=" border-[1px] border-green-500">
        <h3 className=" text-[18px] text-center">{residentInfo?.name}</h3>
        <ul className="pl-3">
          <li>
            <span>Species :</span>
            <span className="pl-11"> {residentInfo?.species}</span>
          </li>
          <li>
            <span>Origin:</span>
            <span  className=" pl-16">{residentInfo?.origin.name}</span>
          </li>
          <li>
            <span>Times appear:</span>
            <span  className=" pl-3">{residentInfo?.episode.length}</span>
          </li>
      
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard