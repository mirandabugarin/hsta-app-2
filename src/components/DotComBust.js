import "../css/StaticInfo.css";

function DotComBust(props) {
  const handleClick = () => {
    props.callback();
  };
  return (
    <div className="InformationWrapper">
      <div className="Information">
        <h1>Dot-Com Bust</h1>
        <p className="paragraph">
          Many founders of tech companies shared Liemandt’s bro-style and risk
          taking characteristics in the 1990s, and many venture capitalists were
          buying into their billion-dollar company promises. By 2000, the tech
          industry had faced a loss of $5 trillion in market value in less than
          two years.
        </p>
        <p className="paragraph">
          “If investors’ love affair with bro style helped fuel the boom--and it
          did--it’s fair to ask, if more tech leaders of the 1990s had been
          women, could they have helped avoid the bust, or mitigated it?”
          -Chang, <span className="italicize">Brotopia</span>
        </p>
        <p className="paragraph">
          Despite its inability to change the past, it is a question worth
          asking for the future. Researcher Geoff Trickey’s findings “suggest
          that the simplest way to create a balance between risk taking and
          caution in a business is to make sure you have a gender-balanced
          workplace”(Chang, 49). From the dot-com bust, we can take away
          something simple: that having more women as entrepreneurs, investors,
          and in high finance would definitely be a good start.
        </p>
      </div>
      <div className="StaticNextButton" onClick={handleClick}>
        <i class="fa fa-angle-right"></i>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  );
}

export default DotComBust;
