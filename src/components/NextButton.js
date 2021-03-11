import "../css/NextButton.css";

function NextButton(props) {
  const handleClick = () => {
    console.log("went to handleClick");
    if (props.needToResetScore === "true") {
      console.log("need to reset score");
      props.resetScore();
    } else if (props.type === "choicePanel") {
      if (props.isButton1Selected) {
        props.updateScore();
      }
      props.resetButtonStates();
    }
    props.callback();
  };
  return (
    <div className="NextButton" onClick={handleClick}>
      <i class="fa fa-angle-right"></i>
      <i class="fa fa-angle-right"></i>
    </div>
  );
}

export default NextButton;
