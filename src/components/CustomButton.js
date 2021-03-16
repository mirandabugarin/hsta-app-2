import "../css/CustomButton.css";

function CustomButton(props) {
  const handleClick = () => {
    if (props.dashboardActive) {
      props.returnToDashboard();
    } else {
      props.callback();
    }
  };
  return (
    <div onClick={handleClick} className="button">
      <label>{props.label}</label>
      <div>
        <i class="fa fa-angle-right"></i>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  );
}

export default CustomButton;
