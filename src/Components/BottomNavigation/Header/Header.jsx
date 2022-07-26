import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div
        className="Header__main__nav"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E3E1E1",
          padding: "10px",
          position: "sticky",
          top: "0",
          zIndex: "2",
        }}
      >
        <h1 style={{ fontSize: "30px", marginTop: "5px", fontWeight: "bold" }}>
          Nepal Bazzar
        </h1>

        <form style={{ width: "60%" }} className="mt-3 d-flex mt-1">
          <input
            className="form-control me-2 input__nav__main"
            type="search"
            placeholder="I am searching for..."
            aria-label="Search"
          />
        </form>
      </div>
    </>
  );
};

export default Header;
