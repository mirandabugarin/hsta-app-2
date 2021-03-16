import "../css/StoryPanel.css";
import React, { Component } from "react";
import CustomTyping from "./CustomTyping.js";
import NextButton from "./NextButton.js";

export default class StoryPanel extends Component {
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

    const resetNextButton = () => {
      this.setState((state) => ({
        isNextButtonVisible: false,
      }));
    };

    return (
      <div className="StoryPanelWrapper">
        <div className="StoryPanel">
          {typingStrings.map((customTyping) => (
            <div className="paragraph-wrapper">
              <CustomTyping
                key={customTyping.id}
                customTyping={customTyping}
                toggleNextButton={toggleNextButton}
                toggleHistoryButton={toggleHistoryButton}
              />
            </div>
          ))}
        </div>
        {this.state.isNextButtonVisible ? (
          <NextButton
            callback={this.props.callback}
            resetScore={this.props.resetScore}
            needToResetScore={this.props.needToResetScore}
            isNextButtonVisible={this.state.isNextButtonVisible}
            resetNextButton={resetNextButton}
            dashboardActive={this.props.dashboardActive}
            returnToDashboard={this.props.returnToDashboard}
          />
        ) : null}
      </div>
    );
  }
}
