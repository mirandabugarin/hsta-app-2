import "../css/ChoicePanel.css";
import React, { Component } from "react";
import NextButton from "./NextButton.js";
import ChoiceButton from "./ChoiceButton.js";

export default class ChoicePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButton1Selected: false,
      isButton2Selected: false,
    };
  }
  render() {
    const handleButton1Click = () => {
      console.log("button1 state is %s", this.state.isButton1Selected);
      if (!this.state.isButton1Selected) {
        this.setState((state) => ({
          isButton2Selected: false,
        }));
        document.querySelector(".NextButton").style.visibility = "visible";
      } else if (!this.state.isButton2Selected) {
        document.querySelector(".NextButton").style.visibility = "hidden";
      }
      this.setState((state) => ({
        isButton1Selected: !state.isButton1Selected,
      }));
    };

    const handleButton2Click = () => {
      console.log("button2 state is %s", this.state.isButton2Selected);
      if (!this.state.isButton2Selected) {
        this.setState((state) => ({
          isButton1Selected: false,
        }));
        document.querySelector(".NextButton").style.visibility = "visible";
      } else if (!this.state.isButton1Selected) {
        document.querySelector(".NextButton").style.visibility = "hidden";
      }
      this.setState((state) => ({
        isButton2Selected: !state.isButton2Selected,
      }));
    };

    const resetButtonStates = () => {
      this.setState((state) => ({
        isButton1Selected: false,
        isButton2Selected: false,
      }));
    };
    return (
      <div className="ChoicePanelWrapper">
        <div className="ChoicePanel">
          <div className="Question">{this.props.strings[0].question}</div>
          <ChoiceButton
            type={"button1"}
            label={this.props.strings[0].choice1}
            isButtonSelected={this.state.isButton1Selected}
            handleButton1Click={handleButton1Click}
            handleButton2Click={handleButton2Click}
          />
          <ChoiceButton
            type={"button2"}
            label={this.props.strings[0].choice2}
            isButtonSelected={this.state.isButton2Selected}
            handleButton1Click={handleButton1Click}
            handleButton2Click={handleButton2Click}
          />
        </div>
        <NextButton
          callback={this.props.callback}
          type={"choicePanel"}
          resetButtonStates={resetButtonStates}
          isButton1Selected={this.state.isButton1Selected}
          isButton2Selected={this.state.isButton2Selected}
          updateScore={this.props.updateScore}
          resetScore={this.props.resetScore}
          needToResetScore={this.props.needToResetScore}
        />
      </div>
    );
  }
}
