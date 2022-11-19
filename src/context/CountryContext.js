import React, { useState, useEffect, createContext } from 'react'

export const CountryContext = createContext()

export const CountryProvider = (props) => {
  // States
  const [countries, setCountries] = useState([])

  // Use Effect
  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch('https://restcountries.com/v3.1/all')
      const countryData = await data.json()
      setCountries(countryData)
    }

    fetchCountries()
  }, [])

  return (
    <CountryContext.Provider value={[countries, setCountries]}>
      {props.children}
    </CountryContext.Provider>
  )
}
