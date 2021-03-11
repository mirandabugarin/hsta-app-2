let outcomes = {
  scenario1Outcome1: [
    {
      id: 200,
      startDelay: 0,
      type: "statement",
      text:
        "You did not pass. Your interviewer briefly explains that you aren’t quite a “culture fit.” Even though you did well in the aptitude test, you just don’t seem to dislike people enough. Better luck next time.",
      last: true,
    },
  ],
  scenario1Outcome2: [
    {
      id: 201,
      startDelay: 0,
      type: "statement",
      text:
        "You did not pass. While you did well on the aptitude test and demonstrated the characteristics of a “computer programmer”, which is primarily “not liking people”, you are viewed differently as an anti-social woman compared to an anti-social man. This is a strange behavior for a woman, and you are pitied. If you were a man, perhaps you would have passed, for your anti-social behavior could really just be hidden genius.",
      last: true,
    },
  ],
  scenario2Outcome1: [
    {
      id: 202,
      startDelay: 0,
      type: "statement",
      text:
        "You did not pass. While your number may be more accurate, it actually does not matter what your answer is, but how you answer. You were not confident enough in your answer.",
      last: false,
    },
    {
      id: 203,
      startDelay: 8000,
      type: "statement",
      text: "So what did you miss out on?",
      last: false,
    },
    {
      id: 204,
      startDelay: 10000,
      type: "statement",
      text: "Working holidays and till 11:30 pm everyday...",
      last: false,
    },
    {
      id: 205,
      startDelay: 13000,
      type: "statement",
      text:
        "Pressures from your fellow coworkers and Liemandt himself to fly out to Vegas on the weekend for drinking, strip clubs, and high-stakes gambling...",
      last: false,
    },
    {
      id: 206,
      startDelay: 20000,
      type: "statement",
      text:
        "“Money, recruiters, beer, repeat”...which was not the slogan of a college frat house, but Trilogy’s motto. What the two have in common: not very women-friendly.",
      last: true,
    },
  ],
  scenario2Outcome2: [
    {
      id: 207,
      startDelay: 0,
      type: "statement",
      text:
        "While your number was not that accurate, you displayed the exact type of confidence that proves you would be a good fit at Trilogy.",
      last: false,
    },
    {
      id: 208,
      startDelay: 6000,
      type: "statement",
      text:
        "You spend the next year at Trilogy working holidays and till 11:30 pm everyday,",
      last: false,
    },
    {
      id: 209,
      startDelay: 10000,
      type: "statement",
      text:
        "and are urged by your fellow coworkers and Liemandt himself to fly out to Vegas on the weekends.",
      last: false,
    },
    {
      id: 210,
      startDelay: 15000,
      type: "statement",
      text:
        "These weekends are full of drinking, high-stakes gambling, and visiting  strip clubs. Liemandt becomes known as “Hundred-Dollar Joe.”",
      last: false,
    },
    {
      id: 211,
      startDelay: 21000,
      type: "statement",
      text:
        "“Money, recruiters, beer, repeat” was not the slogan of a college frat house, but was your company’s motto, and its culture is not very women-friendly.",
      last: true,
    },
  ],
};

export default outcomes;
