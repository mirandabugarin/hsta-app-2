import "../css/OutcomePanel.css";
import React, { Component } from "react";
import CustomTyping from "./CustomTyping.js";
import HistoryButton from "./HistoryButton.js";

export default class OutcomePanel extends Component {
  render() {
    const typingStrings = this.props.strings;
    return (
      <div className="OutcomePanelWrapper">
        <div className="OutcomePanel">
          {typingStrings.map((customTyping) => (
            <div className="paragraph-wrapper">
              <CustomTyping
                key={customTyping.id}
                customTyping={customTyping}
                type={"outcome"}
              />
            </div>
          ))}
        </div>
        <HistoryButton callback={this.props.callback} />
      </div>
    );
  }
}
