import React from "react";

import PortfolioContainer from "../portfolio/portfolio-container";

export default function() {
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <div className="top-header">
          <h1>HOMEPAGE</h1>
        </div>
        <div className="bottom-header">
          <h4>PORTFOLIO WEBSITE</h4>
        </div>
      </div>
      <PortfolioContainer />
    </div>
  );
}
