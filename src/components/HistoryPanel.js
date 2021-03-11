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
        <div className="section2">
          <div className="text">
            {this.props.history[0].content.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </div>
          <div className="image"></div>
          <CustomButton label={"Continue"} callback={this.props.callback} />
        </div>
      </div>
    );
  }
}
