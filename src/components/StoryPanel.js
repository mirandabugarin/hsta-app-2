import "../css/StoryPanel.css";
import React, { Component } from "react";
import CustomTyping from "./CustomTyping.js";
import NextButton from "./NextButton.js";

export default class StoryPanel extends Component {
  render() {
    const typingStrings = this.props.strings;
    return (
      <div className="StoryPanelWrapper">
        <div className="StoryPanel">
          {typingStrings.map((customTyping) => (
            <div className="paragraph-wrapper">
              <CustomTyping key={customTyping.id} customTyping={customTyping} />
            </div>
          ))}
        </div>
        <NextButton
          callback={this.props.callback}
          resetScore={this.props.resetScore}
          needToResetScore={this.props.needToResetScore}
        />
      </div>
    );
  }
}
