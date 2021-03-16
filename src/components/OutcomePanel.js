import "../css/OutcomePanel.css";
import React, { Component } from "react";
import CustomTyping from "./CustomTyping.js";
import HistoryButton from "./HistoryButton.js";

export default class OutcomePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNextButtonVisible: false,
      isHistoryButtonVisible: false,
    };
  }

  render() {
    const typingStrings = this.props.strings;

    const toggleNextButton = () => {
      this.setState((state) => ({
        isNextButtonVisible: true,
      }));
    };

    const toggleHistoryButton = () => {
      this.setState((state) => ({
        isHistoryButtonVisible: true,
      }));
    };

    return (
      <div className="OutcomePanelWrapper">
        <div className="OutcomePanel">
          {typingStrings.map((customTyping) => (
            <div className="paragraph-wrapper">
              <CustomTyping
                key={customTyping.id}
                customTyping={customTyping}
                type={"outcome"}
                toggleNextButton={toggleNextButton}
                toggleHistoryButton={toggleHistoryButton}
              />
            </div>
          ))}
        </div>
        <HistoryButton
          callback={this.props.callback}
          isHistoryButtonVisible={this.state.isHistoryButtonVisible}
        />
      </div>
    );
  }
}
