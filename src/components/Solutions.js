import "../css/StaticInfo.css";

function Solutions(props) {
  const handleClick = () => {
    props.callback();
  };
  return (
    <div className="InformationWrapper">
      <div className="Information">
        <h1>Where do we go from here?</h1>
        <p className="paragraph">
          It will take a generation to reach somewhat of a fifty-fifty gender
          balance within the tech industry, at the current rate that the amount
          of female engineers and managers are increasing (Chang, 275). So how
          do we accelerate this?
        </p>
        <p className="paragraph">
          Most importantly, change needs to start at the top. Leaders, founders,
          and CEOs alike must prioritize hiring women and maintaining their
          retention.
        </p>
        <p className="paragraph">
          In <span className="italicize">Brotopia</span>, Chang lists several
          actions that can be taken by individuals and companies. Here are some
          of them:
          <ol>
            <li>
              Stop overlooking and making excuses for bad behavior; hold
              employees accountable for their actions.
            </li>
            <li>
              Focus on the long term, and not short term. Reaching gender
              equality will be difficult, especially as companies face several
              obstacles, including the pipeline problem that the industry
              created itself. Founders and leaders need to develop a thorough
              plan on how to build a diverse workforce.
            </li>
            <li>More women need to be promoted to leadership positions.</li>
            <li>
              There needs to be more female Venture Capitalists; Limited
              Partners must prioritize hiring more of them.
            </li>
          </ol>
        </p>
      </div>
      <div className="StaticNextButton" onClick={handleClick}>
        <i class="fa fa-angle-right"></i>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  );
}

export default Solutions;
