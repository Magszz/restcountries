import React, { useContext } from "react";

export const Nav = ({ color, setColor }) => {
  function changeTheme() {
    setColor((prev) => !prev);
  }

  return (
    <nav>
      <div className="nav-items">
        <h1>Where in the world?</h1>
        <h5 onClick={changeTheme}>
          <i className="fas fa-moon"></i> Dark Mode
        </h5>
      </div>
    </nav>
  );
};
