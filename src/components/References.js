import "../css/References.css";

function References(props) {
  const returnToDashboard = () => {
    props.returnToDashboard();
  };
  return (
    <div className="ReferencesWrapper">
      <div className="topnav">
        <div className="return" onClick={returnToDashboard}>
          Return to Dashboard
        </div>
      </div>
      <div className="References">
        <h1>References</h1>
        <p className="citation">
          Aydin, Rebecca. “The 10 most inspiring leaders in tech, according to
          thousands of tech workers.” Business Insider, September 25, 2019.{" "}
        </p>
        <a
          className="link"
          target="_blank"
          href="https://www.businessinsider.com/most-inspiring-tech-execs-hired-musk-bezos-zuckerberg-2019-9"
        >
          https://www.businessinsider.com/most-inspiring-tech-execs-hired-musk-bezos-zuckerberg-2019-9
        </a>
        <p className="citation">
          Cannon, William M., and Dallis K. Perry. “A vocational interest scale
          for computer programmers.” (June 1966): 61-82.
        </p>
        <a
          className="link"
          href="https://doi.org/10.1145/1142620.1142628"
          target="_blank"
        >
          https://doi.org/10.1145/1142620.1142628
        </a>
        <p className="citation">
          Chang, Emily. Brotopia: Breaking up the Boys’ Club of Silicon Valley.
          Portfolio/Penguin, 2019. Libby.
        </p>
        <p className="citation">
          Francis, Scott. “Those Trilogy Guys Down in Austin.” Trilogy Alumni,
          July 23, 2015.
        </p>
        <a
          className="link"
          target="_blank"
          href="https://trilogyalumni.org/2015/07/23/those-trilogy-guys-down-in-austin/"
        >
          https://trilogyalumni.org/2015/07/23/those-trilogy-guys-down-in-austin/
        </a>
        <p className="citation">
          Mundy, Liza. “Why Is Silicon Valley So Awful to Women?” The Atlantic,
          April, 2017.
        </p>
        <a
          className="link"
          target="_blank"
          href="https://www.theatlantic.com/magazine/archive/2017/04/why-is-silicon-valley-so-awful-to-women/517788/"
        >
          https://www.theatlantic.com/magazine/archive/2017/04/why-is-silicon-valley-so-awful-to-women/517788/
        </a>
        <p className="citation">
          O’Brien, Jeffrey, M. “The PayPal Mafia.” Fortune Media IP Limited,
          November 13, 2007.
        </p>
        <a
          className="link"
          target="_blank"
          href="https://fortune.com/2007/11/13/paypal-mafia/"
        >
          https://fortune.com/2007/11/13/paypal-mafia/
        </a>
        <p className="citation">
          Tartar, Andre. “The Tech World’s Tactics for Keeping Workers Working.”
          New York Magazine, April 12, 2013.
        </p>
        <a
          className="link"
          target="_blank"
          href=" https://nymag.com/news/intelligencer/tech-company-perks-2013-4/"
        >
          {" "}
          https://nymag.com/news/intelligencer/tech-company-perks-2013-4/
        </a>
        <p className="citation">
          Thompson, Clive. “The Secret History of Women in Coding.” New York
          Times, February, 13, 2019.
        </p>
        <a
          className="link"
          target="_blank"
          href="https://www.nytimes.com/2019/02/13/magazine/women-coding-computer-programming.html"
        >
          https://www.nytimes.com/2019/02/13/magazine/women-coding-computer-programming.html
        </a>
        <p className="citation">
          Vardi, Nathan. “How A Mysterious Tech Billionaire Created Two
          Fortunes—And A Global Software Sweatshop.” Forbes, November 19, 2018.{" "}
        </p>
        <a
          className="link"
          target="_blank"
          href="https://www.forbes.com/sites/nathanvardi/2018/11/19/how-a-mysterious-tech-billionaire-created-two-fortunesand-a-global-software-sweatshop/?sh=6102a2ba6cff"
        >
          https://www.forbes.com/sites/nathanvardi/2018/11/19/how-a-mysterious-tech-billionaire-created-two-fortunesand-a-global-software-sweatshop/?sh=6102a2ba6cff
        </a>
        <p className="citation">
          Xavier, Jon. “Google's tricky interview questions were 'a complete
          waste of time.'” Silicon Valley Business Journal, June 20, 2013.{" "}
        </p>
        <a
          className="link"
          target="_blank"
          href="https://www.bizjournals.com/sanjose/news/2013/06/20/google-those-brain-teaser-interview.html"
        >
          https://www.bizjournals.com/sanjose/news/2013/06/20/google-those-brain-teaser-interview.html
        </a>
      </div>
    </div>
  );
}

export default References;
