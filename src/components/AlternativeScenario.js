import "../css/AlternativeScenario.css";

function AlternativeScenario(props) {
  const handleClick = () => {
    props.callback();
  };
  return (
    <div className="AlternativeScenarioWrapper">
      <div className="AlternativeScenario">
        <p className="paragraph">
          You are a co-founder of a small start-up. Currently you and your team
          all share the same demographic makeup: young, white, male, and from a
          prestigious university. After all, that is how you recruited your
          initial team in the first place: you knew some buddies from college,
          who also knew some buddies from college. The result: your team is made
          up of people like you.
        </p>
        <p className="paragraph">
          As you continue to grow your startup and recruit new candidates, you
          are faced with a choice to make. You realize that there are no women
          on your team. However, one of your employees mentions that his friend
          from college is interested in joining. This friend also happens to be
          young, white, and male.
        </p>
        <p className="determined">{props.determinedChoice}</p>
      </div>
      <div className="StaticNextButton" onClick={handleClick}>
        <i class="fa fa-angle-right"></i>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  );
}

export default AlternativeScenario;
