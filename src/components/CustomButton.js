import "../css/CustomButton.css";

function CustomButton(props) {
  const handleClick = () => {
    props.callback();
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
