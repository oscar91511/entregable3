import React from 'react'

const Location = ({location}) => {

    
return (
<section className="max-w-5xl flex-col lg:m-auto">
    <h2 className="text-center  text-blue-300 font-dongle text-[60px] font-bold ">{location?.name}</h2>
    <div className="bg-green-700 font-bold border-2 shadow-green-500 shadow-lg px-4 mx-2 text-lime-300 rounded-3xl">
    <ul className="flex justify-evenly text-[16px] flex-col w-full sm:flex-row sm:justify-evenly py-4 font-bold mx-auto">
        <li className=""><span className="text-blue-300 font-dongle text-[30px]">type: </span>{location?.type} </li>
        <li className=""><span className="text-blue-300 font-dongle text-[30px]">Dimension:</span> {location?.dimension}</li>
        <li className=""><span className="text-blue-300 font-dongle text-[30px]">Population:</span> {location?.residents.length} </li>
    </ul>
    </div>
</section>

)

}
export default Location
