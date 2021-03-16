import "../css/ChoiceButton.css";

function ChoiceButton(props) {
  const handleClick = () => {
    if (props.type === "button1") {
      props.handleButton1Click();
    } else {
      props.handleButton2Click();
    }
  };
  return (
    <div className="ChoiceWrapper">
      <button
        className={props.isButtonSelected ? "selected" : "unselected"}
        onClick={handleClick}
      >
        {props.label}
      </button>
    </div>
  );
}

export default ChoiceButton;
