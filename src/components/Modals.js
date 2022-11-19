import React from 'react'

export const Modals = ({ modalDetails, openModal, modal }) => {
  return (
    <div className={`modal-container ${modal ? 'modal-open' : ''}`}>
      {modalDetails.map((country) => (
        <div className="modal" key={Math.random() * 9999}>
          <div className="country-content">
            <button onClick={openModal} className="btn-mode">
              <i className="fa fa-arrow-left"></i>&nbsp;&nbsp;Back
            </button>
            <div className="flag-img">
              <img src={country.flag} alt="" />
            </div>
          </div>
          <div className="country-content p10">
            <h3>{country.name}</h3>
            <div className="other">
              <div className="other-items">
                <p>
                  <strong>Native Name: </strong>
                  {country.nativename}
                </p>
                <p>
                  <strong>Population: </strong>
                  {country.population}
                </p>
                <p>
                  <strong>Region: </strong>
                  {country.region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {country.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {country.capital}
                </p>
              </div>
              <div className="other-items">
                <p>
                  <strong>Top Level Domain: </strong>
                  {country.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {Object.keys(country.currencies).map(
                    (item) => `${item + ' '} `,
                  )}
                </p>
                <p>
                  <strong>Language/s: </strong>
                  {Object.keys(country.languages).map(
                    (item) => `${item + ', '} `,
                  )}
                </p>
              </div>
            </div>
            <p className="mt-20">
              <strong>Borders: </strong>
              {country.borders + ' '}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
