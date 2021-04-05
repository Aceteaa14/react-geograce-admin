import React from 'react'

export default function TopBar() {
    return(
        <header id="header" classNameName="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo"><a href="index.html">Geograce</a></h1>
      
     

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="index.html">Home</a></li>
          <li><a className="nav-link scrollto" href="investor-relations.html">Investor Relations</a></li>
          <li className="dropdown"><a href="meet-the-team.html"><span>Meet The Team</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li className="dropdown"><a href="meet-the-team.html"><span>Board of Directors</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="meet-the-team.html">Regular</a></li>
                  <li><a href="meet-the-team.html">Independent</a></li>
                </ul>
              </li>
              <li><a href="meet-the-team.html">Board Committee</a></li>
              <li><a href="meet-the-team.html">Executive Officers</a></li>
            </ul>
          </li>
          <li className="dropdown"><a href="downloadables.html"><span>Downloadables</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="downloadables.html">Corporate Governance</a></li>
              <li><a href="downloadables.html">Company Disclosures</a></li>
            </ul>
          </li>
          <li><a className="getstarted scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    )
}