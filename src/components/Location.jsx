import React from 'react'

const Location = ({location}) => {

    
return (
<section className="max-w-5xl  lg:m-auto">
    <h2 className="text-center text-[30px] text-blue-300 font-bold ">{location?.name}</h2>
    <div className="bg-green-700 font-bold border-2 shadow-green-500 shadow-lg mx-2 text-lime-300 rounded-3xl">
    <ul className="flex justify-evenly text-[16px] py-4 font-bold mx-auto">
        <li className=""><span className="text-blue-300">type: </span>{location?.type} </li>
        <li className=""><span className="text-blue-300 ">Dimension:</span> {location?.dimension}</li>
        <li className=""><span className="text-blue-300 ">Population:</span> {location?.residents.length} </li>
    </ul>
    </div>
</section>

)

}
export default Location
