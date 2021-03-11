let decisions = {
  decision1: [
    {
      id: 100,
      question: "How are you dressed?",
      choice1:
        "In a nice, sophisticated dress and wearing your best pearl earrings.",
      choice2: "Unkempt and disheveled, looks don’t matter in this profession!",
    },
  ],
  decision2: [
    {
      id: 101,
      question: "How do you greet your interviewer?",
      choice1: "Smile, introduce yourself, and politely ask how he is doing.",
      choice2:
        "No attempt at a smile, avoid eye contact, and mumble something to acknowledge that you are the candidate whose name was called.",
    },
  ],
  decision3: [
    {
      id: 102,
      question:
        "You have been given a complex coding task. What are you most likely to do?",
      choice1:
        "Think about the problem and your initial solution. Then consult your team for feedback and discuss all possible solutions and decide the best approach based off of that.",
      choice2:
        "Dive into the task immediately, writing the initial code. You can solve this by yourself, and work better alone.",
    },
  ],
  decision4: [
    {
      id: 103,
      question: "Which traits more align with you?",
      choice1: "Outgoing and friendly",
      choice2: "Aloof and anti-social",
    },
  ],
  decision5: [
    {
      id: 104,
      question: "Do you like working with people?",
      choice1: "Yes, I enjoy collaborating with others.",
      choice2: "Not if I can help it.",
    },
  ],
  decision6: [
    {
      id: 105,
      question:
        'He asks: "How much would you charge to wash all the windows in San Francisco?" What is your initial reaction to this question?',
      choice1:
        "I love brain teasers! Confidently making an argument on something on which I have no actual expertise on is one of my favorite things to do.",
      choice2:
        "Uhm...how is this related to the actual job I’m interviewing for?",
    },
  ],
  decision7: [
    {
      id: 106,
      question:
        '"How much would you charge to wash all the windows in San Francisco?" Despite your initial thoughts in response to the question, you decide to answer:',
      choice1:
        "There are likely 50 million people who live in San Francisco. Each person would probably have 2 windows. I would charge $50 for each, so 50 million * 2 * 50 = 5,000,000,000. I would charge $5,000,000,000 to wash all the windows in San Francisco.",
      choice2:
        "Hm, this is a strange question, and I don’t think I have all the necessary information to answer it accurately, but I can make some assumptions based on the population of San Francisco. If I had to guestimate, the population would probably be  less than 1 million. I will use this number but it may result in an upper bound. I’m not sure what the person to windows ratio would be, but if I had to just make a guess, it would be 20 windows per person. I am not sure how much window washing would charge, so I will say $10 per window. Multiplying these, I would charge $200,000,000 to wash all the windows in San Francisco.",
    },
  ],
};

export default decisions;
