import React, { useState } from "react";

export const Search = ({ setFilterSearch }) => {
  const [filter, setFilter] = useState(false);

  // Functions
  function openFilter() {
    setFilter((prev) => !prev);
  }

  // Filter and Search
  function regionFilter(e) {
    setFilterSearch(e.target.innerText.toLowerCase());
  }

  function searchCountry(e) {
    setFilterSearch(e.target.value.toLowerCase());
  }

  return (
    <div className="search-container">
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          className="input"
          onChange={searchCountry}
        />
      </div>

      <div onClick={openFilter} className={`dropdown ${filter ? "open" : ""}`}>
        Filter by Region
        <i className="fas fa-chevron-down"></i>
        <ul>
          <li onClick={regionFilter}>All</li>
          <li onClick={regionFilter}>Africa</li>
          <li onClick={regionFilter}>Americas</li>
          <li onClick={regionFilter}>Asia</li>
          <li onClick={regionFilter}>Europe</li>
          <li onClick={regionFilter}>Oceania</li>
        </ul>
      </div>
    </div>
  );
};
