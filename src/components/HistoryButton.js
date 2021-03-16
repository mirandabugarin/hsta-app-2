import "../css/HistoryButton.css";

function HistoryButton(props) {
  const handleClick = () => {
    props.callback();
  };
  return (
    <div
      onClick={handleClick}
      className={
        props.isHistoryButtonVisible ? "historyVisible" : "historyHidden"
      }
      //className="HistoryButton"
    >
      <label>Historical Context</label>
      <div>
        <i class="fa fa-angle-right"></i>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  );
}

export default HistoryButton;
