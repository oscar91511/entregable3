import React from 'react'

const Location = ({location}) => {

    
return (
<section className="max-w-5xl lg:m-auto">
    <h2 className="text-center text-[25px] font-bold text-blue-200">{location?.name}</h2>
    <ul className="flex justify-evenly text-[20px] py-4 font-fira mx-auto">
        <li className="">Type: {location?.type}</li>
        <li className="">Dimension: {location?.dimension}</li>
        <li className="">Population: {location?.residents.length} </li>
    </ul>
</section>

)

}
export default Location
