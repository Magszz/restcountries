import React from "react";

// Import components
import { Country } from "./Country";

export const Countries = ({ openModal, filtered, setModalDetails }) => {
  return (
    <div className="country-list">
      {filtered.map((country) => (
        <Country
          country={country}
          openModal={openModal}
          setModalDetails={setModalDetails}
          key={Math.random() * 5000}
        />
      ))}
    </div>
  );
};
