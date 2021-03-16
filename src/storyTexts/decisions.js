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
  decision8: [
    {
      id: 107,
      question: "What do you decide to do?",
      choice1:
        "Go ahead and pursue your employee’s referral. After all, it saves you more time and money than looking for another candidate.",
      choice2:
        "Respectfully turn down this referral. You believe that it is important to try and recruit more women from the start, even if it may require more time and effort in recruitment.",
    },
  ],
  decision9: [
    {
      id: 108,
      question:
        "After a year, your company has certainly grown tremendously. However, gender disparities have also scaled with your company, and you notice that a particular culture has taken root. There is a lot of drinking that goes on in the office, which can lead to drinking in the middle of a workday and some employees can get a little handsy. What do you do?",
      choice1:
        "Let it be. Your employees are working long hours, so as long as they get their work done, they can do what they want.",
      choice2:
        "Reevaluate how you let this company culture form, and penalize its partakers.",
    },
  ],
  decision10: [
    {
      id: 109,
      question:
        "At one point, an engineer who has been drinking pushes code at 3 am in the morning, which takes down your company’s website. What do you do?",
      choice1: "Ban drinking in the office and penalize the engineer at fault.",
      choice2:
        "You really need to get your company on track. You decide to remove all the employees who actively encourage this type of bro culture, and set new policies.",
    },
  ],
  decision11: [
    {
      id: 110,
      question:
        "You are able to recruit a handful of highly capable women engineers to join your company. However, you notice that the rate of men being hired is still dramatically greater than the rate of women being hired, so you ask your recruitment team about it. They say that it is much more difficult to find qualified female candidates. What do you do?",
      choice1:
        "You need to scale your company quickly, so you ease off on prioritizing the search for more women.",
      choice2:
        "Insist that the recruitment team keeps looking for more female candidates.",
    },
  ],
  decision12: [
    {
      id: 111,
      question:
        "You notice that the numbers of women getting hired is still not increasing. After talking with some of the female engineers, you learn that sometimes male engineers impose their own gender biases on the women that they interview. How can you combat this?",
      choice1: "Have a bias-training policy implemented.",
      choice2:
        "Change the interview structure: have one female engineer and one male engineer interview the same candidate, and have a committee decide the fate of a candidate rather than one person.",
    },
  ],
  decision13: [
    {
      id: 112,
      question: "What do you decide to do?",
      choice1:
        "Take the offer as CEO and put in your notice. This is your chance to accelerate your career!",
      choice2:
        "Stay with your current company. While it may take longer to get promoted, the company has been doing well.",
    },
  ],
  decision14: [
    {
      id: 113,
      question:
        "A few weeks before your official start as CEO of the competitor company, you find out that you are pregnant. You have been wanting a baby for a while, so at first you are ecstatic. However, you wonder whether this will affect your image as the new CEO. You can keep your pregnancy under the radar, or you can make a big announcement.",
      choice1:
        "Keep it under the radar. Why does it matter whether I am pregnant or not? If a male CEO was expecting a child, the media surely wouldn’t care all that much.",
      choice2:
        "Call some of the big media outlets to get your story out. People will probably make a big deal about it, and  you want to get ahead of the press.",
    },
  ],
  decision15: [
    {
      id: 114,
      question:
        "News eventually gets out when you are approaching the third trimester of your pregnancy. For a week, your pregnancy is all over tech journals and news outlets. You need to put in your leave soon. How long will you take off?",
      choice1:
        "There’s no way I can become CEO and then leave for a period of time. I will take a short maternity leave of 2 weeks.",
      choice2:
        "I don’t want to take off so much time from my new role, but I need to prioritize my pregnancy. I will take off 12 weeks.",
    },
  ],
  decision16: [
    {
      id: 115,
      question:
        "When the news gets out, media outlets go crazy. Everybody seems to care about your pregnancy. How long do you decide to take off for your maternity leave?",
      choice1:
        " There’s no way I can become CEO and then leave for a period of time. I will take a short maternity leave of 2 weeks.",
      choice2:
        "I don’t want to take off so much time from my new role, but I need to prioritize my pregnancy. I will take off 12 weeks.",
    },
  ],
  decision17: [
    {
      id: 116,
      question:
        "One workday, a last-minute meeting is scheduled at 6 pm. However, you need to pick up your kids from school and cook dinner. What do you do?",
      choice1:
        "You decide to make the necessary arrangements and stay for the last-minute meeting. At least dinner is provided...at 8 pm.",
      choice2:
        "You choose to miss this meeting and attend to your family responsibilities.",
    },
  ],
  decision18: [
    {
      id: 117,
      question:
        "You just finished an on-site interview, and you feel really good about it. Before it concludes, however, your interviewer asks if you would like to grab lunch at the Gold Club, a strip club in downtown San Francisco.",
      choice1:
        "I’m not that comfortable with going. I’ll pass and thank the interviewer for their time.",
      choice2: " It’s a weird proposition, but sure. I can hang with the guys.",
    },
  ],
  decision19: [
    {
      id: 118,
      question: "What do you do?",
      choice1:
        " Politely shrug it off and try to divert the conversation back to why you set up a meeting in the first place: to talk about your startup.",
      choice2:
        "You tell him to back off, firmly. You are not interested in matters outside of work and that his behavior is highly inappropriate.",
    },
  ],
  decision20: [
    {
      id: 119,
      question: "What do you do?",
      choice1:
        "You brush it off and try to change the topic, but you don’t tell anyone about it.",
      choice2:
        "You report this incident to HR. This is highly inappropriate, and on the first day on the job? C’mon.",
    },
  ],
  decision21: [
    {
      id: 120,
      question: "What do you do?",
      choice1: "Just deal with it and get through the interview.",
      choice2: "Call him out on his rudeness.",
    },
  ],
};

export default decisions;
