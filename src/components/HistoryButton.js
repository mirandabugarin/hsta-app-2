import "../css/HistoryButton.css";

function CustomButton(props) {
  const handleClick = () => {
    props.callback();
  };
  return (
    <div onClick={handleClick} className="historyButton">
      <label>Historical Context</label>
      <div>
        <i class="fa fa-angle-right"></i>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  );
}

export default CustomButton;
