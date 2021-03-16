import "../css/NextButton.css";

function NextButton(props) {
  const handleClick = () => {
    console.log("dashboard is active: " + props.dashboardActive);
    if (props.dashboardActive) {
      console.log("return to dashboard");
      props.returnToDashboard();
    } else {
      if (props.needToResetScore === "true") {
        console.log("need to reset score");
        props.resetScore();
      }
      if (props.type === "choicePanel") {
        if (props.ignore !== "ignore" && props.isButton1Selected) {
          console.log("will update score");
          props.updateScore();
        } else if (props.updateSubScore && props.isButton1Selected) {
          console.log("will update subscore");
          props.updateSubScore();
        }
        props.resetButtonStates();
      }
      props.resetNextButton();
      props.callback();
    }
  };
  console.log("next button " + props.isNextButtonVisible);
  return (
    <div
      className={props.isNextButtonVisible ? "visible" : "hidden"}
      //className="NextButton"
      onClick={handleClick}
    >
      <i class="fa fa-angle-right"></i>
      <i class="fa fa-angle-right"></i>
    </div>
  );
}

export default NextButton;
