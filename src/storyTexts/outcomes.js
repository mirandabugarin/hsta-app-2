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
      startDelay: 8500,
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
      startDelay: 6500,
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
      startDelay: 21500,
      type: "statement",
      text:
        "“Money, recruiters, beer, repeat” was not the slogan of a college frat house, but was your company’s motto, and its culture is not very women-friendly.",
      last: true,
    },
  ],
  scenario3Outcome1: [
    {
      id: 212,
      startDelay: 0,
      type: "statement",
      text:
        "Despite your efforts to save your company, it ends up failing. This is due in part of not thoughtfully building a diverse company culture from the start.",
      last: true,
    },
  ],
  scenario3Outcome2: [
    {
      id: 213,
      startDelay: 0,
      type: "statement",
      text:
        "Despite your efforts to prioritize hiring more women at the start of building your company, after two decades, women only make up 21 percent of all technical jobs.",
      last: true,
    },
  ],
  scenario4Outcome1: [
    {
      id: 214,
      startDelay: 0,
      type: "statement",
      text:
        "You are criticized by moms and random journalists alike for taking such a short maternity leave, and failing to fulfill the responsibilities of a good mom. Several articles also question your ability to lead your company as a pregnant CEO.",
      last: true,
    },
  ],
  scenario4Outcome2: [
    {
      id: 215,
      startDelay: 0,
      type: "statement",
      text:
        "You are criticized for taking too long of a maternity leave, and putting your company’s future at stake. Yet, if you were to choose a short maternity leave, there is no doubt that you would’ve faced criticisms for not being a good mom.",
      last: true,
    },
  ],
  scenario4Outcome3: [
    {
      id: 216,
      startDelay: 0,
      type: "statement",
      text:
        "Eventually, you become burnt out from meeting strenuous work demands and sometimes compromising your familial responsibilities, which has created conflict at home. Not only did you pass on a career opportunity of being a CEO, but you also decide to leave your company, and are not sure if or when you will return to the tech industry.",
      last: true,
    },
  ],
  speedRound1Outcome1: [
    {
      id: 217,
      startDelay: 0,
      type: "statement",
      text:
        "A few days later, you hear back from the company that you interviewed for. They decided to move forward with another candidate.",
      last: true,
    },
  ],
  speedRound1Outcome2: [
    {
      id: 218,
      startDelay: 0,
      type: "statement",
      text:
        "A few days later, you hear back from the company you interviewed for. They say that in addition to being a great engineer, you are also a great culture fit. Welcome to the team!",
      last: true,
    },
  ],
  speedRound2Outcome1: [
    {
      id: 219,
      startDelay: 0,
      type: "statement",
      text:
        "You are able to secure the VC’s investment, but now that he is a major backer, you have to interact with him often. His harassment definitely does not stop, and he gets more bold every time.",
      last: true,
    },
  ],
  speedRound2Outcome2: [
    {
      id: 220,
      startDelay: 0,
      type: "statement",
      text:
        ' You lose this VC as a potential investor. He may even call you a "bitch" for being rejected.',
      last: true,
    },
  ],
  speedRound3Outcome1: [
    {
      id: 221,
      startDelay: 0,
      type: "statement",
      text:
        "You put up with unwanted advances from your boss for a few months on the job, until you can no longer focus on your work and decide to transfer to another department.",
      last: true,
    },
  ],
  speedRound3Outcome2: [
    {
      id: 222,
      startDelay: 0,
      type: "statement",
      text:
        "When you take this to HR, they tell you that your boss probably meant well, and perhaps you misinterpreted it. The HR department feels that a punishment would be unnecessary--after all, he is a “high performer” and probably just made an “innocent mistake.” To make you feel better, though, they will give him a warning.",
      last: true,
    },
  ],
};

export default outcomes;
