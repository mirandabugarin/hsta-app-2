import "../css/StoryPanel.css";
import React, { Component } from "react";
import NextButton from "./NextButton.js";

export default class StaticStoryPanel extends Component {
  render() {
    const strings = this.props.strings;
    return (
      <div className="StoryPanelWrapper">
        <div className="StoryPanel">
          {strings.map((paragraph) => (
            <p className="paragraph-wrapper">{paragraph.text}</p>
          ))}
        </div>
        <NextButton callback={this.props.callback} />
      </div>
    );
  }
}
