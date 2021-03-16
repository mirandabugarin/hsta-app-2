import "../css/HistoryPanel.css";
import React, { Component } from "react";
import CustomButton from "./CustomButton.js";

export default class HistoryPanel extends Component {
  render() {
    return (
      <div className="HistoryPanel">
        <div className="section1">
          <div className="quote1">
            {this.props.history[0].quote1}
            <div>
              -{this.props.history[0].author1},
              <span className="source">{this.props.history[0].source1}</span>
            </div>
          </div>
          <div className="quote2">
            {this.props.history[0].quote2}
            <div>
              -{this.props.history[0].author2},
              <span className="source">{this.props.history[0].source2}</span>
            </div>
          </div>
        </div>
        <div className={this.props.historyType}>
          {this.props.history[0].content.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
          <div className="image">
            <img src={this.props.image} alt={this.props.description}></img>
            <a href={this.props.href} target="_blank" rel="noreferrer">
              {this.props.articleTitle}
            </a>
          </div>
        </div>
        <div className="section3">
          {" "}
          <CustomButton
            label={"Continue"}
            callback={this.props.callback}
            dashboardActive={this.props.dashboardActive}
            returnToDashboard={this.props.returnToDashboard}
          />
        </div>
      </div>
    );
  }
}
