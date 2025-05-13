import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// SVG icons as components
const CheckCircleIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-4 h-4 text-green-400 mt-1"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ChevronDownIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUpIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const LinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="inline-block ml-1"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

// Roadmap weeks data
const roadmap = [
  {
    title: "Week 1: HTML & Web Basics",
    quote: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine",
    description: "Iske liye 1 week nahi lagna chahiye par thik hai",
    checklist: [
      "Read MDN \"Structuring content with HTML\"",
      "Create a simple HTML file (e.g. a personal profile) and open it in a browser",
      "Practice using headings (<h1>-<h6>), paragraphs, lists (<ul>, <ol>), links (<a>), images (<img>), and tables/forms",
      "Major Task: Build a basic personal profile webpage using only HTML (no CSS)",
      "Git & GitHub (ye checkpoint thoda chhota hai to aapke liye achha hoga cover it here only kyu aage jake karna to padega hi)"
    ],
    resources: [
      {
        title: "MDN Documentation",
        description: "Jo hai yahi hai development karna hai to documentation padhana sikho",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        title: "FreeCodeCamp",
        description: "Learn with fun and practical",
        link: "https://www.freecodecamp.org/learn/responsive-web-design"
      },
      {
        title: "Video resource for HTML (ENGLISH)",
        description: "Ham bina video k nahi sikh sakte. This will cover HTML-CSS simultaneously",
        link: "https://youtu.be/G3e-cpL7ofc?si=W0B5iCOiDnE0OBtu"
      },
      {
        title: "Video resource for HTML (HINDI)",
        description: "Hame video bhi chahiye vo bhi hindi me",
        link: "https://youtu.be/k7ELO356Npo?si=qvLCcBuqGHmjh13e"
      },
      {
        title: "Git Tutorial",
        description: "",
        link: "https://youtu.be/Ez8F0nW6S-w?si=UOZywlKdkL80akNL"
      }
    ],
    progressTip: "Use a digital checklist (Notion, Google Docs, or Trello) to tick off each HTML element as you master it."
  },
  {
    title: "Week 2: CSS Styling & Tailwind CSS",
    quote: "Learning to write programs stretches your mind...creates a way of thinking that I think is helpful in all domains.",
    author: "Bill Gates",
    description: "",
    checklist: [
      "Read MDN \"CSS Styling Basics\" and MDN \"What is CSS?\"",
      "Try styling your Week 1 page: change colors, fonts, margins, and padding",
      "Install Tailwind CSS and use a few utility classes (e.g. flex, pt-4, text-center) in an HTML file",
      "Make your page responsive (e.g. use media queries or Tailwind's responsive classes)",
      "Major Task: Style your profile page or a simple landing page using CSS and Tailwind"
    ],
    resources: [
      {
        title: "MDN Documentation",
        description: "Jo hai yahi hai development karna hai to documentation padhana sikho",
        link: "https://developer.mozilla.org/en-US/docs/Web"
      },
      {
        title: "Tailwind CSS",
        description: "Learn with fun and practical",
        link: "https://tailwindcss.com/docs/installation/using-vite"
      },
      {
        title: "Video resource for CSS (ENGLISH)",
        description: "Agar aapne upar ye dekha hai to skip it go on tailwind",
        link: "https://www.youtube.com/watch?v=G3e-cpL7ofc"
      },
      {
        title: "Video resource for CSS (HINDI)",
        description: "Hame full basic se and complete css shikhani hai",
        link: "https://youtu.be/dSJM4Gyh8jE?si=cUDOGJucxl7g_hvb"
      },
      {
        title: "Tailwind tutorial",
        description: "Thoda bada hai par detailed hai",
        link: "https://youtu.be/ft30zcMlFao?si=siIfqlpaKHzW0NVe"
      },
      {
        title: "Tailwind tutorial v4",
        description: "Thoda chhota hai par latest hai",
        link: "https://youtu.be/6biMWgD6_JY?si=RzAwfEF-EcUNYe1k"
      },
      {
        title: "FlexBox Game",
        description: "Let's implement our FlexBox game",
        link: "https://codingfantasy.com/games/flexboxadventure"
      },
      {
        title: "Netflix Clone Source Code",
        description: "Mene try kiya agar jarur pade to hi dekhana 😅",
        link: "https://github.com/zeeldadhaniya1895/netflix-clone"
      }
    ],
    progressTip: "Practice by cloning simple webpage designs to strengthen CSS skills. Ex. Now you can create clone of netflix homepage"
  },
  {
    title: "Week 3: JavaScript Fundamentals",
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    description: "",
    checklist: [
      "Read MDN \"What is JavaScript?\"",
      "Practice writing simple scripts: alert \"Hello\", log data, prompt user input",
      "Manipulate the DOM: change text/content of HTML elements via document.querySelector",
      "Handle a click event: e.g. create a button that shows an alert or toggles a class",
      "Major Task: Build a simple interactive widget. For example, a to-do list or a quiz"
    ],
    resources: [
      {
        title: "MDN Documentation",
        description: "Firse vahi line repeat kar deta hu development karna hai to document padhana sikho",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"
      },
      {
        title: "W3Schools",
        description: "",
        link: "https://www.w3schools.com/Js/"
      },
      {
        title: "Video resource for JS (ENGLISH)",
        description: "Thoda lamba hai par js itni hi important hai..",
        link: "https://youtu.be/EerdGm-ehJQ?si=0rxqDYKHA9_efHiJ"
      },
      {
        title: "Java script 1 (Hindi)",
        description: "Sare basics cover hue hai isme",
        link: "https://youtu.be/sscX432bMZo?si=dQ9yiPsMgECJjA_f"
      },
      {
        title: "Java script 2 (Hindi)",
        description: "Ye vala part thoda advance hai per important hai",
        link: "https://youtu.be/_TjtAyMkiTI?si=9WpHya1tSLzUBWvd"
      },
      {
        title: "Node.js Setup",
        description: "If you have not setup node.js environment in your system then it is a best time to do it",
        link: "https://nodejs.org/en"
      },
      {
        title: "Node.js Setup Tutorial",
        description: "",
        link: "https://youtu.be/NrhP53Divco?si=BLyUSLeg1sQGAhR2"
      }
    ],
    progressTip: "Use the browser console (DevTools) to test JS snippets quickly. Keep a coding journal of new concepts you learn."
  },
  {
    title: "Week 4: React & Frontend Frameworks",
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    description: "",
    checklist: [
      "Read \"React: Create user interfaces from components\"",
      "Install Node-based build tool (e.g. use Vite or Create React App) and set up a new React project",
      "Write a simple React component (e.g. a button or card) and render it. Pass props to child components",
      "Use useState hook to add interactivity (e.g. a counter or toggle switch)",
      "Major Task: Build a small React application. For example, a \"Gallery App\" that displays images or a \"Notes App\""
    ],
    resources: [
      {
        title: "React Documentation",
        description: "React 19 has many advance feature in any youtube videos you will not be able to find all of them so pls try to read this doc",
        link: "https://react.dev/"
      },
      {
        title: "Video resource for React.js (English)",
        description: "This video is little bit old but good for understand basics",
        link: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=CY-WsQvjP08rmFVe"
      },
      {
        title: "Video resource for React.js (Hindi)",
        description: "Thoda lamba hai par js itni hi important hai..",
        link: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=CY-WsQvjP08rmFVe"
      },
      {
        title: "Redux-Toolkit",
        description: "To manage global states with ease",
        link: "https://react-redux.js.org/introduction/getting-started"
      },
      {
        title: "Vite",
        description: "Don't use create react ap instead use vite Vite documentation easy to setup",
        link: "https://vite.dev/"
      }
    ],
    progressTip: "Regularly commit and push your React code. Use the React Developer Tools in your browser to inspect components and state"
  },
  {
    title: "Week 5: TypeScript & Advanced Tools",
    quote: "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one.",
    author: "Mario Fusco",
    description: "",
    checklist: [
      "Read \"TypeScript is JavaScript with syntax for types\"",
      "Install TypeScript (npm install -D typescript) and try compiling a simple .ts file",
      "Convert a small part of your React app to TypeScript (rename files .tsx and define interfaces for props)",
      "Create a production build of your React app (e.g. vite build or npm run build) and deploy it",
      "Major Task: Extend your React app: add TypeScript types and a new feature (e.g. form validation, custom hooks)"
    ],
    resources: [
      {
        title: "TypeScript Documentation",
        description: "",
        link: "https://www.typescriptlang.org/"
      },
      {
        title: "TypeScript Video Resource",
        description: "",
        link: "https://youtu.be/SpwzRDUQ1GI?si=v3x5crBwMj_DV6V4"
      },
      {
        title: "Next.js",
        description: "One more interesting thing is next.js You can explore this also (Ab routing ki dikkat nahi rahegi)",
        link: "https://nextjs.org/"
      },
      {
        title: "Firebase (BaaS)",
        description: "Iska use karke bina backend sikhe full stack web bana sakte ho",
        link: "https://firebase.google.com/"
      },
      {
        title: "Vercel",
        description: "Use vercel for free deployment of your projects",
        link: "https://vercel.com/"
      }
    ],
    progressTip: "Use versioned branches for big changes (like adding TS). Keep a log of issues you fix with types."
  },
  {
    title: "Week 6: Three.js",
    quote: "In the beginner's mind, there are many possibilities; in the expert's mind, there are few.",
    author: "Shunryu Suzuki",
    description: "",
    checklist: [
      "Follow a Three.js \"Getting Started\" tutorial (setup a scene, add a cube, animate it)",
      "Make your site responsive on different devices (mobile, tablet, desktop)",
      "Use a performance tool (e.g. Lighthouse) to audit your page's load speed and fix major issues",
      "Add at least one accessible feature (e.g. alt tags on images, semantic HTML landmarks)",
      "Major Task: Create a final mini-project or personal portfolio page with a 3D element"
    ],
    resources: [
      {
        title: "Three.js",
        description: "Explore what you can make using three.js: Three.js – JavaScript 3D Library",
        link: "https://threejs.org/"
      },
      {
        title: "Three.js Documentation",
        description: "",
        link: "https://threejs.org/manual/#en/creating-a-scene"
      },
      {
        title: "Three.js Video Resource",
        description: "",
        link: "https://www.youtube.com/watch?v=KM64t3pA4fs"
      }
    ],
    progressTip: "Keep a learning diary or blog your journey. Reflect on how far you've come and update your GitHub profile with the projects you built."
  }
];

// UI libraries to explore
const uiLibraries = [
  { name: "Shadcn/ui", description: "Modern, elegant, and flexible components", link: "https://ui.shadcn.com/docs/components/accordion" },
  { name: "Material-UI (MUI)", description: "Fully customizable design system", link: "https://mui.com/material-ui/all-components/" },
  { name: "Chakra UI", description: "Accessible and theme-ready", link: "https://v2.chakra-ui.com/docs/components" },
  { name: "Ant Design", description: "Enterprise-grade components", link: "https://ant.design/components/overview/" },
  { name: "Particles.js", description: "Create stunning particle effects", link: "https://vincentgarreau.com/particles.js/" },
  { name: "React Awesome Reveal", description: "Elegant animation components", link: "https://react-awesome-reveal.morello.dev/guides/getting-started/" },
  { name: "GSAP", description: "Powerful animations library", link: "https://gsap.com" },
  { name: "React Three Fiber", description: "React renderer for Three.js", link: "https://r3f.docs.pmnd.rs" },
  { name: "Remotion", description: "Create videos programmatically using React", link: "https://www.remotion.dev/" },
  { name: "Motion.dev", description: "A library for declarative animations", link: "https://motion.dev/" }
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [completedItems, setCompletedItems] = useState<{[key: number]: boolean[]}>({});
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('frontend-progress');
      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress);
        setCompletedItems(parsedProgress);
        
        // Calculate overall progress immediately after loading from localStorage
        let completed = 0;
        let total = 0;
        
        roadmap.forEach((week, weekIndex) => {
          total += week.checklist.length;
          completed += (parsedProgress[weekIndex] || []).filter(Boolean).length;
        });
        
        const newProgress = total > 0 ? Math.round((completed / total) * 100) : 0;
        setProgress(newProgress);
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(completedItems).length > 0) {
      try {
        localStorage.setItem('frontend-progress', JSON.stringify(completedItems));
        
        // Calculate overall progress
        let completed = 0;
        let total = 0;
        
        roadmap.forEach((week, weekIndex) => {
          total += week.checklist.length;
          completed += (completedItems[weekIndex] || []).filter(Boolean).length;
        });
        
        const newProgress = total > 0 ? Math.round((completed / total) * 100) : 0;
        setProgress(newProgress);
        
        // Show confetti animation when progress increases significantly
        if (newProgress > 0 && newProgress % 25 === 0) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        }
      } catch (error) {
        console.error('Failed to save progress:', error);
      }
    }
  }, [completedItems]);

  const toggleWeek = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleCheckItem = (weekIndex: number, itemIndex: number) => {
    setCompletedItems(prev => {
      const weekItems = prev[weekIndex] || Array(roadmap[weekIndex].checklist.length).fill(false);
      const newWeekItems = [...weekItems];
      newWeekItems[itemIndex] = !newWeekItems[itemIndex];
      
      return {
        ...prev,
        [weekIndex]: newWeekItems
      };
    });
  };

  // Calculate completed items for each week
  const getWeekProgress = (weekIndex: number) => {
    const weekItems = completedItems[weekIndex] || [];
    const completedCount = weekItems.filter(Boolean).length;
    const totalItems = roadmap[weekIndex].checklist.length;
    return totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-900/20 via-gray-950 to-purple-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-pink-500/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                animation: `pulse ${Math.random() * 10 + 10}s infinite alternate`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Confetti animation */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: '-10px',
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                background: `hsl(${Math.random() * 60 + 300}, 100%, 50%)`,
                animation: `confetti ${Math.random() * 3 + 2}s forwards`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500"
          >
            Frontend Development Path
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-center mb-8 text-summer-yellow"
          >
            Master Modern Web Development
          </motion.h2>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 p-4 bg-gray-900/80 rounded-xl border border-gray-800 shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-white">Your Progress</h3>
              <span className="text-pink-400 font-bold">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/70 p-6 rounded-xl mb-12 border border-gray-800"
          >
            <p className="text-white/80 mb-4">
              This beginner-friendly roadmap provides a structured path through web fundamentals, aligning with MDN's advice that true novices start with basic setup tutorials. Each week focuses on key skills (HTML, CSS, JavaScript, Git, npm, etc.) and tools (Tailwind CSS, Vite, Webpack, React, TypeScript, Three.js) with hands-on tasks to reinforce learning. You'll earn fun "badges" each week and track progress with checklists.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors bg-blue-500/20 rounded-lg p-4 border border-blue-500/30 w-full sm:w-auto text-center">
                Frontend Developer Roadmap | roadmap.sh <LinkIcon />
              </a>
              <a 
                href="https://docs.google.com/document/d/1axnjvbQRj4lgrlUjyqTNr4apkql2ZczB/edit?usp=drive_link&ouid=102138017384349792997&rtpof=true&sd=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-semibold hover:text-green-300 transition-colors rounded-lg p-4 border border-green-500/30 w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Roadmap
              </a>
            </div>
          </motion.div>

          <div className="space-y-6 relative before:absolute before:left-4 md:before:left-[1.75rem] before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
            {roadmap.map((week, weekIndex) => (
              <motion.div
                key={weekIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: weekIndex * 0.1 }}
                className={`relative pl-10 md:pl-16 pb-6 ${weekIndex === roadmap.length - 1 ? '' : 'mb-8'}`}
              >
                <div className="absolute left-0 top-1 md:left-0 md:top-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center shadow-glow z-10">
                  <span className="text-white font-bold">{weekIndex + 1}</span>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
                  <div 
                    className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleWeek(weekIndex)}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">{week.title}</h3>
                    <button className="text-white/70 hover:text-white p-1 rounded-full transition-colors">
                      {openIndex === weekIndex ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </button>
                  </div>

                  {openIndex === weekIndex && (
                    <div className="p-5">
                      {week.description && (
                        <p className="text-gray-400 mb-4 italic">{week.description}</p>
                      )}

                      <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                        <p className="text-blue-300 italic mb-1">"{week.quote}"</p>
                        <p className="text-right text-gray-400 text-sm">- {week.author}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2 text-white">Checklist:</h4>
                        <div className="space-y-2">
                          {week.checklist.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-2">
                              <div className="flex-shrink-0 mt-1">
                                <input 
                                  type="checkbox" 
                                  checked={completedItems[weekIndex]?.[itemIndex] || false}
                                  onChange={() => toggleCheckItem(weekIndex, itemIndex)}
                                  className="h-4 w-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                                />
                              </div>
                              <span className={`${completedItems[weekIndex]?.[itemIndex] ? 'line-through text-gray-500' : 'text-white/80'}`}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2 text-white">Resources:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {week.resources.map((resource, idx) => (
                            <a 
                              key={idx} 
                              href={resource.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block bg-gray-800/50 p-3 rounded hover:bg-gray-800 transition-colors group"
                            >
                              <div className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <div>
                                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">{resource.title}</span>
                                  {resource.description && (
                                    <p className="text-sm text-gray-400">{resource.description}</p>
                                  )}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-800/30">
                        <h4 className="font-semibold mb-2 text-purple-300">Progress Tip:</h4>
                        <p className="text-white/70">{week.progressTip}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">UI Libraries to Explore</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {uiLibraries.map((lib, index) => (
                <a 
                  key={index}
                  href={lib.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded hover:bg-gray-800 transition-colors group"
                >
                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">{lib.name}</span>
                  <p className="text-sm text-gray-400">{lib.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-green-900/20 p-6 rounded-xl border border-green-700/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">🏁 Bas itna hi kehna tha</h2>
            <p className="text-white/80 mb-2">
              Aap agar yahan tak aa gaye ho, toh samajh lo — ab aap sach-much wale developer ho gaye ho!
            </p>
            <p className="text-white/80 mb-2">
              HTML, CSS, JS, React sab aapke tools hain, aur Google, StackOverflow aapke permanent dost ban chuke hain.
            </p>
            <p className="text-white/80 mb-2">
              Ab kisi ka "bhai portfolio bana de na" ya "netflix clone chahiye" sunte hi muh nahi chhupana… confidently bolna: "haan bhai, bana denge — deploy ke saath!"
            </p>
            <p className="text-white/80 mb-2">
              Yeh roadmap ek course nahi, ek journey thi — kabhi console.log se khushi mili, kabhi semicolon na lagane pe dard hua 😅
            </p>
            <p className="text-white/80">
              Aur ab aap itne advance ho chuke ho ki khud se kuch bhi seekh sakte ho. Next.js? Firebase? Three.js? — sab ab "easy lagta hai" zone mein aa gaye hain!
            </p>
          </div>
        </div>
      </div>

      {/* Custom cursor effect */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: var(--opacity); }
          100% { transform: scale(1.2); opacity: var(--opacity) * 0.8; }
        }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(105vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
