import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";
export default class PortfolioManager extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems: []
    };
    this.handleSuccssfulFormSubmission = this.handleSuccssfulFormSubmission.bind(
      this
    );
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
  }

  handleSuccssfulFormSubmission(portfolioItem) {
    // TODO
    // Update the portfolioItems state
    // and add the portfolioItem to the list
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError", error);
  }

  getPortfolioItems() {
    axios
      .get("https://marshalldeans.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log("error in getPortfolioItems", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm
            handleSuccssfulFormSubmission={this.handleSuccssfulFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
          />
        </div>

        <div className="right-column">
          <PortfolioSidebarList data={this.state.portfolioItems} />
        </div>
      </div>
    );
  }
}
