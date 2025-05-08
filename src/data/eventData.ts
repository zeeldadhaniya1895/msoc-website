export const eventDetails = {
  name: "MSOC - MSTC Summer of Code",
  description: "A summer coding event organized by Microsoft Student Technical Club to help students learn and build projects in different technologies.",
  timeline: [
    { date: "May 10, 2023", event: "Official Event Declaration" },
    { date: "May 11, 2023", event: "Category Reveal & Registration Opens" },
    { date: "May 15, 2023", event: "Event Begins - Learning Phase Starts" },
    { date: "June 30, 2023", event: "Learning Phase Ends" },
    { date: "July 1, 2023", event: "Development Phase Begins" },
    { date: "July 21, 2023", event: "Development Phase Ends & Final Evaluation" }
  ],
  duration: {
    total: "Around 9 weeks",
    learningPhase: "6 weeks (May 15 - June 30)",
    developmentPhase: "3 weeks (July 1 - July 21)"
  }
};

export const categories = [
  {
    id: "html-css-js-react",
    name: "HTML, CSS, JS, React",
    shortName: "Frontend",
    icon: "💻",
    description: "Learn the fundamentals of web development with HTML, CSS, JavaScript and React.",
    isMainTrack: false
  },
  {
    id: "nodejs",
    name: "NodeJS",
    shortName: "Backend",
    icon: "🖥️",
    description: "Build server-side applications using Node.js and related technologies.",
    isMainTrack: false
  },
  {
    id: "flutter",
    name: "Flutter",
    shortName: "Mobile",
    icon: "📱",
    description: "Create cross-platform mobile applications with Flutter framework.",
    isMainTrack: false
  },
  {
    id: "python",
    name: "Python",
    shortName: "Python",
    icon: "🐍",
    description: "Learn Python programming language for various applications.",
    isMainTrack: false
  },
  {
    id: "cp-dsa",
    name: "CP+DSA",
    shortName: "Algorithms",
    icon: "🧮",
    description: "Enhance problem-solving skills with Competitive Programming and Data Structures & Algorithms.",
    isMainTrack: false
  },
  {
    id: "blockchain",
    name: "BlockChain",
    shortName: "Blockchain",
    icon: "⛓️",
    description: "Explore blockchain technologies and decentralized applications.",
    isMainTrack: false
  },
  {
    id: "ml-nlp",
    name: "ML, NLP",
    shortName: "ML",
    icon: "🤖",
    description: "Learn Machine Learning and Natural Language Processing techniques.",
    isMainTrack: false
  },
  {
    id: "django",
    name: "Django",
    shortName: "Django",
    icon: "🌐",
    description: "Build web applications with Django framework.",
    isMainTrack: false
  },
  {
    id: "mern",
    name: "MERN Stack",
    shortName: "MERN",
    icon: "🔥",
    description: "Comprehensive learning track for MongoDB, Express, React and Node.js stack.",
    isMainTrack: true
  },
  {
    id: "genai",
    name: "GenAI",
    shortName: "GenAI",
    icon: "🧠",
    description: "Explore Generative AI technologies and applications.",
    isMainTrack: true
  }
];

export const phaseDetails = {
  learning: {
    title: "Learning Phase",
    description: "In this phase, participants will be provided with learning resources and small coding tasks to help them understand the concepts. Instead of building complete projects, they will work on small code snippets and debug existing code to solidify their understanding.",
    activities: [
      "Access to curated learning resources",
      "Small code snippet exercises",
      "Debugging challenges",
      "Online/offline quizzes",
      "Mini-project components"
    ]
  },
  development: {
    title: "Development Phase",
    description: "After completing the learning phase, participants will move to the development phase where they will build complete projects based on themes provided by the organizers. They can choose to work individually or in groups for this phase.",
    activities: [
      "Project theme selection",
      "Individual or group participation",
      "Regular progress check-ins",
      "Mentorship support",
      "Final project submission"
    ]
  }
};

export const participationTypes = [
  {
    type: "Individual",
    phases: "Learning Phase",
    description: "Participants will learn and complete tasks individually during the learning phase."
  },
  {
    type: "Individual or Group",
    phases: "Development Phase",
    description: "Participants can choose to work individually or form groups for the development phase."
  }
];

export const faqs = [
  {
    question: "How do I register for MSOC?",
    answer: "Registration will open on May 11, 2023. You can register through this website and join our Discord server for updates."
  },
  {
    question: "Do I need prior experience to participate?",
    answer: "No, beginners are welcome. We have structured the learning phase to accommodate participants of all skill levels."
  },
  {
    question: "Can I participate in multiple categories?",
    answer: "Yes, you can explore all 8 categories during the initial phase, but for the detailed checkpoint tracking, you'll need to select either MERN or GenAI."
  },
  {
    question: "Is this event online or offline?",
    answer: "The event has both online and offline components. Some quizzes and sessions might be conducted offline, while most of the learning and development will be online."
  },
  {
    question: "Is there any participation fee?",
    answer: "No, participation in MSOC is completely free."
  }
]; 