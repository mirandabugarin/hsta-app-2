import "./App.css";
import React, { Component } from "react";
import IntroPage from "./components/IntroPage.js";
import StoryPanel from "./components/StoryPanel.js";
import ChoicePanel from "./components/ChoicePanel.js";
import OutcomePanel from "./components/OutcomePanel.js";
import HistoryPanel from "./components/HistoryPanel.js";
import DotComBust from "./components/DotComBust.js";
import storyStrings from "./storyTexts/storyStrings.js";
import decisions from "./storyTexts/decisions.js";
import outcomes from "./storyTexts/outcomes.js";
import history from "./storyTexts/history.js";
import AlternativeScenario from "./components/AlternativeScenario";
import Dashboard from "./components/Dashboard.js";
import staticInfo from "./storyTexts/staticInfo";
import StaticInfo from "./components/StaticInfo.js";
import Solutions from "./components/Solutions.js";
import References from "./components/References.js";
import programmerImage from "./images/programmer-scale-img.png";
import trilogyImage from "./images/trilogy.png";
import googleWomen from "./images/googleWomen.png";
import payPalMafia from "./images/payPalMafia.png";
import techPerks from "./images/techperks.png";

export default class App extends Component {
  state = {
    componentIndex: 0, // default is 0
    score: 0,
    subScore: 0,
    dashboardActive: false, // default is false
  };

  handleClick = () => {
    this.setState({ componentIndex: this.state.componentIndex + 1 });
    //console.log("componentIndex is %d", this.state.componentIndex);
  };

  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
    //console.log("score is %d", this.state.score);
  };

  resetScore = () => {
    this.setState({ score: 0 });
    //console.log("score is %d", this.state.score);
  };

  updateSubScore = () => {
    this.setState({ subScore: this.state.subScore + 1 });
    //console.log("subScore is %d", this.state.subScore);
  };

  activateDashboard = () => {
    this.setState({ dashboardActive: true });
  };

  returnToDashboard = () => {
    this.setState({ componentIndex: 57 }); // need to set to actual dashboard component index
  };

  restart = () => {
    this.setState({
      componentIndex: 0,
      score: 0,
      subScore: 0,
      dashboardActive: false,
    });
    //console.log("restart");
  };

  references = () => {
    this.setState({ componentIndex: 58 });
    //console.log("references");
  };

  replayFirstScenario = () => {
    this.setState({ componentIndex: 1, score: 0, subScore: 0 });
  };

  replaySecondScenario = () => {
    this.setState({ componentIndex: 12, score: 0, subScore: 0 });
  };

  replayThirdScenario = () => {
    this.setState({ componentIndex: 20, score: 0, subScore: 0 });
  };

  replayFourthScenario = () => {
    this.setState({ componentIndex: 32, score: 0, subScore: 0 });
  };

  replayFifthScenario = () => {
    this.setState({ componentIndex: 38, score: 0, subScore: 0 });
  };

  replaySolutions = () => {
    this.setState({ componentIndex: 53 });
  };

  render() {
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
          historyType={"history1"}
          callback={this.handleClick}
          image={programmerImage}
          description={"What a programmer looks like"}
          href={"https://dl.acm.org/doi/10.1145/1142620.1142628"}
          articleTitle={"A vocational interest scale for computer programmers"}
          dashboardActive={this.state.dashboardActive}
          returnToDashboard={this.returnToDashboard}
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
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["trilogyInterview"]}
        />
      );
    } else if (this.state.componentIndex === 14) {
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
          ignore={"ignore"}
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
          historyType={"history2"}
          callback={this.handleClick}
          image={trilogyImage}
          description={"Trilogy University: a company boot camp for new hires"}
          href={
            "https://trilogyalumni.org/2015/07/23/those-trilogy-guys-down-in-austin/"
          }
          articleTitle={"Trilogy University: a company boot camp for new hires"}
          dashboardActive={this.state.dashboardActive}
          returnToDashboard={this.returnToDashboard}
        />
      );
    } else if (this.state.componentIndex === 19) {
      return <DotComBust callback={this.handleClick} />;
    } else if (this.state.componentIndex === 20) {
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["scenario3"]}
          needToResetScore={"true"}
          resetScore={this.resetScore}
        />
      );
    } else if (this.state.componentIndex === 21) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision8"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 22) {
      if (this.state.score === 1) {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision9"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
          />
        );
      } else {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision11"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
          />
        );
      }
    } else if (this.state.componentIndex === 23) {
      if (this.state.score === 1) {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision10"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
          />
        );
      } else {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision12"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
          />
        );
      }
    } else if (this.state.componentIndex === 24) {
      if (this.state.score === 1) {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario3Outcome1"]}
          />
        );
      } else {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario3Outcome2"]}
          />
        );
      }
    } else if (this.state.componentIndex === 25) {
      if (this.state.score === 1) {
        return (
          <HistoryPanel
            history={history["history3"]}
            historyType={"history3"}
            callback={this.handleClick}
            image={payPalMafia}
            description={"The PayPal Mafia, 2007 Fortune Magazine"}
            href={"https://fortune.com/2007/11/13/paypal-mafia/ "}
            articleTitle={"The PayPal Mafia, 2007 Fortune Magazine"}
          />
        );
      } else {
        return (
          <HistoryPanel
            history={history["history4"]}
            historyType={"history4"}
            callback={this.handleClick}
            image={googleWomen}
            description={
              "The women of Google: Susan Wojcicki, Marissa Mayer, and Sheryl Sanberg"
            }
            href={
              "https://www.businessinsider.com/most-inspiring-tech-execs-hired-musk-bezos-zuckerberg-2019-9"
            }
            articleTitle={"Susan Wojcicki, Marissa Mayer, and Sheryl Sanberg"}
          />
        );
      }
    } else if (this.state.componentIndex === 26) {
      if (this.state.score === 1) {
        return (
          <StoryPanel
            callback={this.handleClick}
            strings={storyStrings["playGoogleScenario"]}
          />
        );
      } else {
        return (
          <StoryPanel
            callback={this.handleClick}
            strings={storyStrings["playPayPalScenario"]}
          />
        );
      }
    } else if (this.state.componentIndex === 27) {
      if (this.state.score === 1) {
        return (
          <AlternativeScenario
            callback={this.handleClick}
            determinedChoice={
              "You respectfully turn down this referral. You believe that it is important to try and recruit more women from the start, even if it may require more time and effort in recruitment. "
            }
          />
        );
      } else {
        return (
          <AlternativeScenario
            callback={this.handleClick}
            determinedChoice={
              "You go ahead and pursue your employee’s referral. After all, it saves you more time and money than looking for another candidate."
            }
          />
        );
      }
    } else if (this.state.componentIndex === 28) {
      if (this.state.score === 1) {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision11"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
          />
        );
      } else {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision9"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
          />
        );
      }
    } else if (this.state.componentIndex === 29) {
      if (this.state.score === 1) {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision12"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
          />
        );
      } else {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision10"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
          />
        );
      }
    } else if (this.state.componentIndex === 30) {
      if (this.state.score === 1) {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario3Outcome2"]}
          />
        );
      } else {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario3Outcome1"]}
          />
        );
      }
    } else if (this.state.componentIndex === 31) {
      if (this.state.score === 1) {
        return (
          <HistoryPanel
            history={history["history4"]}
            historyType={"history4"}
            callback={this.handleClick}
            image={googleWomen}
            description={
              "The women of Google: Susan Wojcicki, Marissa Mayer, and Sheryl Sanberg"
            }
            href={
              "https://www.businessinsider.com/most-inspiring-tech-execs-hired-musk-bezos-zuckerberg-2019-9"
            }
            articleTitle={"Susan Wojcicki, Marissa Mayer, and Sheryl Sanberg"}
            dashboardActive={this.state.dashboardActive}
            returnToDashboard={this.returnToDashboard}
          />
        );
      } else {
        return (
          <HistoryPanel
            history={history["history3"]}
            historyType={"history3"}
            callback={this.handleClick}
            image={payPalMafia}
            description={"The PayPal Mafia, 2007 Fortune Magazine"}
            href={"https://fortune.com/2007/11/13/paypal-mafia/"}
            articleTitle={"The PayPal Mafia, 2007 Fortune Magazine"}
            dashboardActive={this.state.dashboardActive}
            returnToDashboard={this.returnToDashboard}
          />
        );
      }
    } else if (this.state.componentIndex === 32) {
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["scenario4"]}
          needToResetScore={"true"}
          resetScore={this.resetScore}
        />
      );
    } else if (this.state.componentIndex === 33) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision13"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 34) {
      if (this.state.score === 1) {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision14"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
            updateSubScore={this.updateSubScore}
          />
        );
      } else {
        return (
          <StoryPanel
            callback={this.handleClick}
            strings={storyStrings["pregnancy"]}
          />
        );
      }
    } else if (this.state.componentIndex === 35) {
      if (this.state.score === 1) {
        if (this.state.subScore === 1) {
          return (
            <ChoicePanel
              callback={this.handleClick}
              strings={decisions["decision15"]}
              updateScore={this.updateScore}
            />
          );
        } else {
          return (
            <ChoicePanel
              callback={this.handleClick}
              strings={decisions["decision16"]}
              updateScore={this.updateScore}
            />
          );
        }
      } else {
        return (
          <ChoicePanel
            callback={this.handleClick}
            strings={decisions["decision17"]}
            updateScore={this.updateScore}
            ignore={"ignore"}
          />
        );
      }
    } else if (this.state.componentIndex === 36) {
      //console.log("should show outcomes");
      if (this.state.score === 2) {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario4Outcome1"]}
          />
        );
      } else if (this.state.score === 1) {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario4Outcome2"]}
          />
        );
      } else {
        return (
          <OutcomePanel
            callback={this.handleClick}
            strings={outcomes["scenario4Outcome3"]}
          />
        );
      }
    } else if (this.state.componentIndex === 37) {
      return (
        <HistoryPanel
          callback={this.handleClick}
          history={history["history5"]}
          historyType={"history5"}
          image={techPerks}
          description={
            "Illustration showing many tech company perks: includes free meals, on-site haircutters, yoga classes, and dog day cares"
          }
          href={
            "https://nymag.com/news/intelligencer/tech-company-perks-2013-4/"
          }
          articleTitle={
            'Tech Company Perks: "Press for free meal", "Free beer"'
          }
          dashboardActive={this.state.dashboardActive}
          returnToDashboard={this.returnToDashboard}
        />
      );
    } else if (this.state.componentIndex === 38) {
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["scenario5"]}
          needToResetScore={"true"}
          resetScore={this.resetScore}
        />
      );
    } else if (this.state.componentIndex === 39) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision18"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 40) {
      if (this.state.score === 1) {
        return (
          <StoryPanel
            callback={this.handleClick}
            strings={outcomes["speedRound1Outcome1"]}
          />
        );
      } else {
        return (
          <StoryPanel
            callback={this.handleClick}
            strings={outcomes["speedRound1Outcome2"]}
          />
        );
      }
    } else if (this.state.componentIndex === 41) {
      return (
        <StaticInfo
          callback={this.handleClick}
          strings={staticInfo["theGoldClub"]}
        />
      );
    } else if (this.state.componentIndex === 42) {
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["vc"]}
          needToResetScore={"true"}
          resetScore={this.resetScore}
        />
      );
    } else if (this.state.componentIndex === 43) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision19"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 44) {
      if (this.state.score === 1) {
        return (
          <StoryPanel
            callback={this.handleClick}
            strings={outcomes["speedRound2Outcome1"]}
          />
        );
      } else {
        return (
          <StoryPanel
            callback={this.handleClick}
            strings={outcomes["speedRound2Outcome2"]}
          />
        );
      }
    } else if (this.state.componentIndex === 45) {
      return (
        <StaticInfo
          callback={this.handleClick}
          strings={staticInfo["ventureCapitalists"]}
        />
      );
    } else if (this.state.componentIndex === 46) {
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["uber"]}
          needToResetScore={"true"}
          resetScore={this.resetScore}
        />
      );
    } else if (this.state.componentIndex === 47) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision20"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 48) {
      if (this.state.score === 1) {
        return (
          <StoryPanel
            callback={this.handleClick}
            strings={outcomes["speedRound3Outcome1"]}
          />
        );
      } else {
        return (
          <StoryPanel
            callback={this.handleClick}
            strings={outcomes["speedRound3Outcome2"]}
          />
        );
      }
    } else if (this.state.componentIndex === 49) {
      return (
        <StaticInfo callback={this.handleClick} strings={staticInfo["uber"]} />
      );
    } else if (this.state.componentIndex === 50) {
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["sexism"]}
          needToResetScore={"true"}
          resetScore={this.resetScore}
        />
      );
    } else if (this.state.componentIndex === 51) {
      return (
        <ChoicePanel
          callback={this.handleClick}
          strings={decisions["decision21"]}
          updateScore={this.updateScore}
        />
      );
    } else if (this.state.componentIndex === 52) {
      return (
        <StoryPanel
          callback={this.handleClick}
          strings={storyStrings["labor"]}
          dashboardActive={this.state.dashboardActive}
          returnToDashboard={this.returnToDashboard}
        />
      );
    } else if (this.state.componentIndex === 53) {
      return (
        <StaticInfo
          callback={this.handleClick}
          strings={staticInfo["movingForward"]}
        />
      );
    } else if (this.state.componentIndex === 54) {
      return (
        <StaticInfo
          callback={this.handleClick}
          strings={staticInfo["genderEquality"]}
        />
      );
    } else if (this.state.componentIndex === 55) {
      return <Solutions callback={this.handleClick} />;
    } else if (this.state.componentIndex === 56) {
      return (
        <StaticInfo
          callback={this.handleClick}
          strings={staticInfo["end"]}
          activateDashboard={this.activateDashboard}
        />
      );
    } else if (this.state.componentIndex === 57) {
      return (
        <Dashboard
          restart={this.restart}
          replayFirstScenario={this.replayFirstScenario}
          replaySecondScenario={this.replaySecondScenario}
          replayThirdScenario={this.replayThirdScenario}
          replayFourthScenario={this.replayFourthScenario}
          replayFifthScenario={this.replayFifthScenario}
          replaySolutions={this.replaySolutions}
          references={this.references}
        />
      );
    } else if (this.state.componentIndex === 58) {
      return <References returnToDashboard={this.returnToDashboard} />;
    }
    return <IntroPage callback={this.handleClick} />;
  }
}
