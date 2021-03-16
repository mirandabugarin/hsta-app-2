import React, { Component } from "react";
import Typing from "react-typing-animation";

export default class CustomTyping extends Component {
  render() {
    if (this.props.customTyping.last) {
      if (this.props.type === "outcome") {
        return (
          <Typing
            speed={20}
            startDelay={this.props.customTyping.startDelay}
            onFinishedTyping={() => {
              this.props.toggleHistoryButton();
            }}
          >
            <span>{this.props.customTyping.text}</span>
          </Typing>
        );
      } else {
        return (
          <Typing
            speed={20}
            startDelay={this.props.customTyping.startDelay}
            onFinishedTyping={() => {
              this.props.toggleNextButton();
            }}
          >
            <span>{this.props.customTyping.text}</span>
          </Typing>
        );
      }
    } else {
      return (
        <Typing speed={20} startDelay={this.props.customTyping.startDelay}>
          <span>{this.props.customTyping.text}</span>
        </Typing>
      );
    }
  }
}
