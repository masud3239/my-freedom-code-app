import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({countriesPromise}) => {
   const countries = use(countriesPromise);

   const [visitedCountries, setVisitedCountries] = useState([]);

   const [visitedFlags, setVisitedFlags] = useState([])

   const handleVisitedCountries = (country) => {
    console.log('handle visited country clicked', country);
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries);
   }

   const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
   }
  
    return (
        <div>
            

            <div className="max-w-7xl mx-auto px-4 mt-4 ml-15 ">
                <h1 className="text-3xl">Total Countries: {countries.length} </h1>
                <h3 className="text-xl">Total Visited Country: {visitedCountries.length} </h3>
                <h3>Total Flags Visited: {visitedFlags.length}</h3>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                    }
                </ol>

                <div className="flex gap-2 w-20">
                    {
                        visitedFlags.map((flag, index) => <img key={index}
                        src={flag}
                        />)
                    }
                </div>

            </div>

            <div className=" max-w-7xl mx-auto px-4 mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
                ></Country>)
            }
            </div>

          
           
        </div>
    );
};

export default Countries;