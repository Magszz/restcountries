import React, { useContext, useState } from 'react'

// Import Context API
import { CountryContext } from '../context/CountryContext'

// Import components
import { Search } from './Search'
import { Countries } from './Countries'
import { Modals } from './Modals'

export const Main = ({ color }) => {
  // States
  const [countries] = useContext(CountryContext)
  const [modal, setModal] = useState(false)
  const [modalDetails, setModalDetails] = useState([])
  const [filterSearch, setFilterSearch] = useState('')

  // Functions
  function openModal() {
    setModal((prev) => !prev)
  }

  // FILTER Data
  // country.name.toLowerCase().includes(filterSearch)

  const filtered = countries.filter((country) => {
    if (filterSearch === 'all') {
      return country.region.toLowerCase().includes('')
    } else if (
      filterSearch === 'africa' ||
      filterSearch === 'americas' ||
      filterSearch === 'asia' ||
      filterSearch === 'europe' ||
      filterSearch === 'oceania'
    ) {
      return country.region.toLowerCase().includes(filterSearch)
    } else {
      return country.name.common.toLowerCase().includes(filterSearch)
    }
  })

  return (
    <>
      <Search setFilterSearch={setFilterSearch} />
      <Modals modalDetails={modalDetails} modal={modal} openModal={openModal} />
      <Countries
        openModal={openModal}
        filtered={filtered}
        setModalDetails={setModalDetails}
      />
    </>
  )
}
