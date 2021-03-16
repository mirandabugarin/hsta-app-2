import "../css/Dashboard.css";
import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    const restart = () => {
      if (this.props.restart) {
        this.props.restart();
      }
    };

    const references = () => {
      if (this.props.references) {
        this.props.references();
      }
    };

    const replayFirstScenario = () => {
      if (this.props.replayFirstScenario) {
        this.props.replayFirstScenario();
      }
    };

    const replaySecondScenario = () => {
      if (this.props.replaySecondScenario) {
        this.props.replaySecondScenario();
      }
    };

    const replayThirdScenario = () => {
      if (this.props.replayThirdScenario) {
        this.props.replayThirdScenario();
      }
    };

    const replayFourthScenario = () => {
      if (this.props.replayFourthScenario) {
        this.props.replayFourthScenario();
      }
    };

    const replayFifthScenario = () => {
      if (this.props.replayFifthScenario) {
        this.props.replayFifthScenario();
      }
    };

    const replaySolutions = () => {
      if (this.props.replaySolutions) {
        this.props.replaySolutions();
      }
    };

    return (
      <div className="Dashboard">
        <div className="topnav">
          <div className="title">Scenarios Dashboard</div>
          <div className="topnav-right">
            <div className="navComp" onClick={restart}>
              Restart
            </div>
            <div className="navComp" onClick={references}>
              References
            </div>
          </div>
        </div>
        <div className="main">
          <div className="scenariosWrapper">
            <div className="scenarios">
              <div className="scenarioWrapper">
                <div className="scenario" onClick={replayFirstScenario}>
                  Revenge of the Nerds
                </div>
              </div>
              <div className="scenarioWrapper">
                <div className="scenario" onClick={replaySecondScenario}>
                  The start of bro culture
                </div>
              </div>
              <div className="scenarioWrapper">
                <div className="scenario" onClick={replayThirdScenario}>
                  PayPal and "Meritocracy" vs. Google's Good Intentions
                </div>
              </div>
              <div className="scenarioWrapper">
                <div className="scenario" onClick={replayFourthScenario}>
                  Work Hard, Work Hard
                </div>
              </div>
              <div className="scenarioWrapper">
                <div className="scenario" onClick={replayFifthScenario}>
                  Speed Round
                </div>
              </div>
              <div className="scenarioWrapper">
                <div className="scenario" onClick={replaySolutions}>
                  Moving Forward
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
