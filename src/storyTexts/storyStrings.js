let storyStrings = {
  firstScenario: [
    {
      id: 1,
      startDelay: 0,
      text: "First stop, the 1960s...",
      type: "statement",
      last: false,
    },
    {
      id: 2,
      startDelay: 2000,
      text: "You sit in a waiting room in Santa Monica, California.",
      type: "statement",
      last: false,
    },
    {
      id: 3,
      startDelay: 5000,
      type: "statement",
      text:
        "You are about to be interviewed by a prominent software company: System Development Corporation.",
      last: true,
    },
  ],
  cosmo: [
    {
      id: 4,
      startDelay: 0,
      type: "statement",
      text:
        "As you wait, you pull out a copy of Cosmopolitan, and flip to the page featuring an interview with Grace Hopper, who confidently exclaims that “Women are ‘naturals’ at computer programming.”",
      last: false,
    },
    {
      id: 5,
      startDelay: 10000,
      type: "statement",
      text:
        "Cosmopolitan goes on to say that computer programming is “a whole new kind of work for women...telling the miracle machines what to do and how to do it...",
      last: false,
    },
    {
      id: 6,
      startDelay: 18000,
      type: "statement",
      text: "and if it doesn’t sound like woman’s work--well, it just is.”",
      last: false,
    },
    {
      id: 7,
      startDelay: 22000,
      type: "statement",
      text: "This is just the kind of encouragement you needed.",
      last: false,
    },
    {
      id: 8,
      startDelay: 25000,
      type: "statement",
      text:
        "When your name is called, you place the magazine back into your bag.",
      last: true,
    },
  ],
  aptitudeTest: [
    {
      id: 9,
      startDelay: 0,
      type: "statement",
      text:
        "For the first part of the interview, you are asked to complete an aptitude test, which evaluates your problem solving skills.",
      last: false,
    },
    {
      id: 10,
      startDelay: 6000,
      type: "statement",
      text:
        "You do particularly well, scoring in the range of the type of candidate the company is looking for.",
      last: false,
    },
    {
      id: 11,
      startDelay: 11000,
      type: "statement",
      text:
        "For the second part, you are asked to answer some personality questions.",
      last: true,
    },
  ],
  interview1Done: [
    {
      id: 16,
      startDelay: 0,
      type: "statement",
      text:
        "Congratulations, you have finished your interview! Let’s see if you passed...",
      last: true,
    },
  ],
  secondScenario: [
    {
      id: 17,
      startDelay: 0,
      type: "statement",
      text: "It is the early 1990s.",
      last: false,
    },
    {
      id: 18,
      startDelay: 2000,
      type: "statement",
      text: "You just graduated from Stanford and are looking for a job.",
      last: false,
    },
    {
      id: 19,
      startDelay: 6000,
      type: "statement",
      text:
        "You heard that an old classmate, Joe Liemandt, just founded a new company called Trilogy.",
      last: false,
    },
    {
      id: 20,
      startDelay: 11000,
      type: "statement",
      text: "You vaguely remember Liemandt.",
      last: false,
    },
    {
      id: 21,
      startDelay: 13000,
      type: "statement",
      text:
        "He came from a wealthy family, often tried to exude the same confidence and charisma as Steve Jobs,",
      last: false,
    },
    {
      id: 22,
      startDelay: 18500,
      type: "statement",
      text:
        "and any time you found yourself in a conversation with him, he would needlessly brag that he had a $500 million idea.",
      last: false,
    },
    {
      id: 23,
      startDelay: 25000,
      type: "statement",
      text: "The $500 million idea must have been Trilogy, you think.",
      last: false,
    },
    {
      id: 24,
      startDelay: 28000,
      type: "statement",
      text: "You decide to reach out to him.",
      last: true,
    },
  ],
  trilogyInterview: [
    {
      id: 25,
      startDelay: 0,
      type: "statement",
      text:
        "Liemandt offers you an interview since you went to a prestigious university that Trilogy is actively recruiting from--among Stanford is Harvard, Carnegie Mellon, and MIT.",
      last: false,
    },
    {
      id: 26,
      startDelay: 10000,
      type: "statement",
      text:
        "When you show up to Trilogy’s building, there are several other candidates waiting.",
      last: false,
    },
    {
      id: 27,
      startDelay: 15000,
      type: "statement",
      text:
        "All of them look incredibly young and fresh out of college, just like you.",
      last: false,
    },
    {
      id: 28,
      startDelay: 19000,
      type: "statement",
      text: "All of them are male, besides you.",
      last: false,
    },
    {
      id: 29,
      startDelay: 21000,
      type: "statement",
      text:
        "There are a couple of female recruiters in the room, who also look rather young.",
      last: false,
    },
    {
      id: 30,
      startDelay: 26000,
      type: "statement",
      text:
        "They are also very pretty, and cheerily converse with the male candidates.",
      last: false,
    },
    {
      id: 31,
      startDelay: 31000,
      type: "statement",
      text: "You wonder if this was an intentional recruiting strategy.",
      last: true,
    },
  ],
  liemandt: [
    {
      id: 32,
      startDelay: 0,
      type: "statement",
      text:
        "Eventually it is your turn to interview and you are greeted by Liemandt himself.",
      last: false,
    },
    {
      id: 33,
      startDelay: 4000,
      type: "statement",
      text:
        "You expect Liemandt to first ask you about your coding experience, or give you an aptitude test.",
      last: false,
    },
    {
      id: 34,
      startDelay: 9000,
      type: "statement",
      text:
        "Instead, he says that he is going ask you a brain teaser to see how well you can think on your feet.",
      last: true,
    },
  ],
};

export default storyStrings;
