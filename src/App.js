import "./App.css";
import React, { Component } from "react";
import IntroPage from "./components/IntroPage.js";
import StoryPanel from "./components/StoryPanel.js";
import ChoicePanel from "./components/ChoicePanel.js";
import OutcomePanel from "./components/OutcomePanel.js";
import HistoryPanel from "./components/HistoryPanel.js";
import storyStrings from "./storyTexts/storyStrings.js";
import decisions from "./storyTexts/decisions.js";
import outcomes from "./storyTexts/outcomes.js";
import history from "./storyTexts/history.js";
//import StaticStoryPanel from "./components/StaticStoryPanel";

export default class App extends Component {
  state = {
    componentIndex: 0,
    score: 0,
  };

  handleClick = () => {
    this.setState({ componentIndex: this.state.componentIndex + 1 });
    console.log("componentIndex is %d", this.state.componentIndex);
  };

  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
    console.log("score is %d", this.state.score);
  };

  resetScore = () => {
    this.setState({ score: 0 });
    console.log("score is %d", this.state.score);
  };

  render() {
    /*const [componentIndex, setComponentIndex] = useState(0);
  const handleClick = () => {
    setComponentIndex(componentIndex + 1);
    console.log(componentIndex);
  };

  const [score, setScore] = useState(0);
  const updateScore = () => {
    setScore(score + 1);
    console.log("score is %d", score);
  };

  // When there is a new scenario, I want to reset the score, but not the componentIndex
  const resetScore = () => {
    /// ???
  };*/

    const hideNextButton = () => {
      document.querySelector(".NextButton").style.visibility = "hidden";
    };

    if (this.state.componentIndex === 0) {
      return <IntroPage callback={this.handleClick} />;
    } else if (this.state.componentIndex === 1) {
      return (
        <StoryPanel
          strings={storyStrings["firstScenario"]}
          callback={this.handleClick}
        />
      );
    } else if (this.state.componentIndex === 2) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision1"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 3) {
      return (
        <StoryPanel
          strings={storyStrings["cosmo"]}
          callback={this.handleClick}
        />
      );
    } else if (this.state.componentIndex === 4) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision2"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 5) {
      return (
        <StoryPanel
          strings={storyStrings["aptitudeTest"]}
          callback={this.handleClick}
        />
      );
    } else if (this.state.componentIndex === 6) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision3"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 7) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision4"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 8) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision5"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 9) {
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["interview1Done"]}
        />
      );
    } else if (this.state.componentIndex === 10) {
      if (this.state.score >= 3) {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario1Outcome1"]}
          />
        );
      } else {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario1Outcome2"]}
          />
        );
      }
    } else if (this.state.componentIndex === 11) {
      return (
        <HistoryPanel
          history={history["history1"]}
          callback={this.handleClick}
        />
      );
    } else if (this.state.componentIndex === 12) {
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["secondScenario"]}
          needToResetScore={"true"}
          resetScore={this.resetScore}
        />
      );
    } else if (this.state.componentIndex === 13) {
      hideNextButton();
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["trilogyInterview"]}
        />
      );
    } else if (this.state.componentIndex === 14) {
      hideNextButton();
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["liemandt"]}
        />
      );
    } else if (this.state.componentIndex === 15) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision6"]}
          updateScore={this.updateScore}
          needToResetScore={"true"}
          resetScore={this.resetScore}
        />
      );
    } else if (this.state.componentIndex === 16) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision7"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 17) {
      if (this.state.score === 0) {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario2Outcome1"]}
          />
        );
      } else {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario2Outcome2"]}
          />
        );
      }
    } else if (this.state.componentIndex === 18) {
      return (
        <HistoryPanel
          history={history["history2"]}
          callback={this.handleClick}
        />
      );
    }
    return <div>hello</div>;
  }
}

//export default App;
