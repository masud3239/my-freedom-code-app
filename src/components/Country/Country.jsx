import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
 const [visited, setVisited] =useState(false);

 console.log(handleVisitedCountries);

   const handleVisited = () => {
    // basic system
    // if(visited) {
    //     setVisited(false)
    // } else {
    //     setVisited(true)
    // }
// Second System
    // setVisited(visited ? false : true);
// Third System
    setVisited(!visited);
    handleVisitedCountries(country);

   }
  
    return (
        // <div className={`country ${visited && 'country-visited'}`}>

        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>

        <div className={`country ${visited &&'country-visited'}`}>

            <img 
            src={country?.flags?.flags?.png}
            alt={country.name.common}
            width="200"
            />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population} </p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </p>
            <div className='flex justify-between items-center mt-2'>
            <button className="btn btn-neutral" onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>
            <button className="btn btn-neutral" onClick={() => {handleVisitedFlags(country?.flags?.flags?.png)}}> 
            Add Visited Flag
            </button>
            </div>
           
        </div>
    );
};

export default Country;