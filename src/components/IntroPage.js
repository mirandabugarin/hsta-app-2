import "../css/IntroPage.css";
import React, { Component } from "react";
import CustomButton from "./CustomButton.js";

export default class IntroPage extends Component {
  render() {
    return (
      <div className="IntroBody">
        <h1 className="Title">
          <div>What it’s like as a woman</div>
          <div>in Silicon Valley:</div>
          <div>Through the decades</div>
        </h1>
        <p>
          An interactive story examining the experiences of women working in the
          largest tech hub of America, starting from the 1960s to today.
        </p>
        <p>
          Inspired by{" "}
          <span className="italicize">
            Brotopia: Breaking up the Boy’s Club of Silicon Valley
          </span>{" "}
          by Emily Chang.
        </p>
        <p>
          “The scarcity of women in an industry that is so forcefully reshaping
          our culture simply cannot be allowed to stand.” - Chang
        </p>
        <CustomButton label={"Let's begin"} callback={this.props.callback} />
      </div>
    );
  }
}
