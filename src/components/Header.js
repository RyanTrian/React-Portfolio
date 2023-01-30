import React from "react";
import Nav from "./Nav";

function Header({currentTab, handleTabChange}) {
  return (
      <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Minh Truong's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section className="hero">
        <div className="hero-cta">
          <h2>Welcome</h2>
          <p>
            Welcome to Minh Truong's portfolio page built with React. Please,
            checkout my projects in the portfolio tab.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Header;