import "../css/StaticInfo.css";

function StaticInfo(props) {
  const handleClick = () => {
    if (props.activateDashboard) {
      props.activateDashboard();
    }
    props.callback();
  };
  return (
    <div className="InformationWrapper">
      <div className="Information">
        <h1>{props.strings[0].title}</h1>
        {props.strings[0].content.map((paragraph) => (
          <p className="paragraph">{paragraph}</p>
        ))}
      </div>
      <div className="StaticNextButton" onClick={handleClick}>
        <i class="fa fa-angle-right"></i>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  );
}

export default StaticInfo;
