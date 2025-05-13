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
    title: "Week 1: Building the Foundation – Python Basics",
    quote: "The foundation is the most important part of any building.",
    author: "Programming Wisdom",
    description: "The first week is dedicated to understanding the fundamental concepts of Python",
    checklist: [
      "Python Syntax and Basics",
      "Data Types and Variables",
      "String Operations (including common in-built methods)",
      "Conditional Statements (if-else logic and flow control)",
      "Looping Constructs – for and while loops",
      "Functions – definition, arguments, return types",
      "Lists – appending, modifying, and updating elements",
      "Dictionaries – working with key-value pairs"
    ],
    resources: [
      {
        title: "VS Code Download",
        description: "Download Visual Studio Code IDE",
        link: "https://code.visualstudio.com/Download"
      },
      {
        title: "Complete Python Course in Hindi – CodeWithHarry 🔥",
        description: "Comprehensive Python tutorial for beginners",
        link: "https://www.youtube.com/watch?v=gfDE2a7MKjA"
      }
    ],
    progressTip: "Students are encouraged to write simple programs to gain familiarity with syntax and basic programming constructs."
  },
  {
    title: "Week 2: Mastering Object-Oriented Programming and File Handling",
    quote: "Understanding objects and files will open endless possibilities in Python.",
    author: "Coding Principles",
    description: "This week shifts the focus toward essential intermediate concepts – particularly Object-Oriented Programming (OOP) and File Handling",
    checklist: [
      "Understanding classes, objects, attributes, methods, and constructors",
      "Usage of class methods and static methods",
      "Core principles: Inheritance and Polymorphism",
      "Opening, reading, writing, and modifying files in Python",
      "Importance of file I/O for backend data management"
    ],
    resources: [
      {
        title: "File Handling: Python File Handling – CodeWithHarry 🔥",
        description: "Learn to work with files in Python",
        link: "https://www.youtube.com/watch?v=U3ijEym2r30"
      },
      {
        title: "OOP in Python: Object-Oriented Programming – FreeCodeCamp",
        description: "Comprehensive guide to OOP concepts in Python",
        link: "https://www.youtube.com/watch?v=Ej_02ICOIgs"
      }
    ],
    progressTip: "Practice creating classes that model real-world objects and implement file handling to store and retrieve data."
  },
  {
    title: "Weeks 3 & 4: Introduction to PyQt5",
    quote: "GUI makes your code accessible to everyone.",
    author: "PyQt5 Development",
    description: "With a strong programming foundation, students will now begin working with PyQt5, a widely used Python framework for developing desktop GUI applications",
    checklist: [
      "Understanding the fundamentals and capabilities of PyQt5",
      "Using Qt Designer to create UI interfaces",
      "Integrating .ui files into Python through direct imports or by converting them into Python scripts",
      "Combo Boxes",
      "Line Edits and Text Edits",
      "Spin Boxes",
      "List Widgets",
      "Push Buttons"
    ],
    resources: [
      {
        title: "PyQt5 Tutorials",
        description: "Complete playlist for learning PyQt5",
        link: "https://youtube.com/playlist?list=PLCC34OHNcOtpmCA8s_dpPMvQLyHbvxocY&si=0X-KvX8PzNSmzt3e"
      }
    ],
    progressTip: "Start designing the GUI for your personal project and experiment with small-scale programs using PyQt5."
  },
  {
    title: "Week 5: Project Development – Frontend and Backend Integration",
    quote: "The integration of the frontend and backend creates a complete application.",
    author: "Software Architecture",
    description: "In the final phase, students should begin planning and implementing the core functionality of their GUI applications using PyQt5",
    checklist: [
      "Designing and structuring a clean, user-friendly GUI using PyQt5 widgets",
      "Implementing backend logic to process user inputs and manage data",
      "Utilizing JSON files for storing and retrieving data dynamically",
      "Using json.load() to read data from JSON files",
      "Using json.dump() to write data into JSON files"
    ],
    resources: [
      {
        title: "PyQt5 Video Series (YouTube Playlist)",
        description: "Application-oriented tutorials for PyQt5 development",
        link: "https://www.youtube.com/playlist?list=PL3bPhYo0mubekjZebCjnN_fIiajiDg84r"
      }
    ],
    progressTip: "Focus on creating a complete, functional application that demonstrates both UI design skills and backend programming knowledge."
  }
];

// Popular PyQt5 widgets and components
const recommendedComponents = [
  { name: "QLabel", description: "Display text or images", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QLabel.html" },
  { name: "QPushButton", description: "Standard button for user interactions", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QPushButton.html" },
  { name: "QLineEdit", description: "Single-line text input field", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QLineEdit.html" },
  { name: "QTextEdit", description: "Multi-line text editing", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QTextEdit.html" },
  { name: "QComboBox", description: "Dropdown selection widget", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QComboBox.html" },
  { name: "QCheckBox", description: "Checkbox for toggling options", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QCheckBox.html" },
  { name: "QRadioButton", description: "Radio button for exclusive selections", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QRadioButton.html" },
  { name: "QTableWidget", description: "Display data in tabular format", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QTableWidget.html" },
  { name: "QListWidget", description: "Display a list of items", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QListWidget.html" },
  { name: "QFileDialog", description: "Dialog for file selection", link: "https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QFileDialog.html" }
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [completedItems, setCompletedItems] = useState<{[key: number]: boolean[]}>({});
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('python-progress');
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
        localStorage.setItem('python-progress', JSON.stringify(completedItems));
        
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-900/20 via-gray-950 to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-yellow-500/10"
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
              className="absolute bg-yellow-500"
              style={{
                top: '-10px',
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                background: `hsl(${Math.random() * 60 + 30}, 100%, 50%)`,
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
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"
          >
            Python with GUI – Structured Learning Roadmap
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-center mb-8 text-summer-yellow"
          >
            Master Python and PyQt5 Development
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
              <span className="text-yellow-400 font-bold">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-yellow-500 to-blue-500"
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
            className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl mb-12 border border-gray-800 shadow-xl hover:shadow-yellow-900/20 transition-all duration-300"
          >
            <p className="text-white/80 mb-4">
              This roadmap is designed to guide students step-by-step through the journey of learning Python and GUI development using PyQt5. The structure emphasizes building a solid foundation in core programming concepts before transitioning into GUI application development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://www.python.org/downloads/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors bg-yellow-500/20 hover:bg-yellow-500/30 rounded-lg p-4 border border-yellow-500/30 w-full sm:w-auto text-center group"
              >
                <span className="relative">
                  Download Python and Get Started
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </span>
                <LinkIcon />
              </a>
              <a 
                href="https://docs.google.com/document/d/1KtE4SAzStb3T4lygNmZdKxByok1wBnjH/edit?usp=drive_link&ouid=102138017384349792997&rtpof=true&sd=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 font-semibold hover:text-blue-300 transition-colors rounded-lg p-4 border border-blue-500/30 w-full sm:w-auto group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block group-hover:translate-y-1 transition-transform duration-300">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Roadmap
              </a>
            </div>
          </motion.div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-[1.75rem] before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-yellow-500 before:via-blue-500 before:to-yellow-500 before:rounded-full before:-z-10">
            {roadmap.map((week, weekIndex) => (
              <motion.div
                key={weekIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: weekIndex * 0.1 }}
                className={`relative pl-10 md:pl-16 pb-6 ${weekIndex === roadmap.length - 1 ? '' : 'mb-8'}`}
              >
                <div className="absolute left-0 top-1 md:left-0 md:top-0 bg-gradient-to-br from-yellow-500 to-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-yellow-500/30 z-10 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{weekIndex + 1}</span>
                </div>

                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-900/20 transition-all duration-300">
                  <div 
                    className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 cursor-pointer flex justify-between items-center relative group"
                    onClick={() => toggleWeek(weekIndex)}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400 group-hover:from-yellow-300 group-hover:to-blue-300 transition-colors duration-300">{week.title}</h3>
                      
                      {/* Week progress bar */}
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <div className="h-1.5 flex-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-yellow-500 to-amber-400"
                            style={{ width: `${getWeekProgress(weekIndex)}%` }}
                          />
                        </div>
                        <span className="text-gray-400">{getWeekProgress(weekIndex)}%</span>
                      </div>
                    </div>
                    <button className="text-white/70 hover:text-white p-1 rounded-full transition-colors bg-gray-800/50 hover:bg-gray-700/50 ml-2 transform hover:scale-110 duration-300">
                      {openIndex === weekIndex ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </button>
                  </div>

                  {openIndex === weekIndex && (
                    <div className="p-5 border-t border-gray-800">
                      {week.description && (
                        <p className="text-gray-400 mb-4 italic">{week.description}</p>
                      )}

                      <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border-l-4 border-yellow-500 transform hover:-translate-y-1 transition-transform duration-300">
                        <p className="text-yellow-300 italic mb-1">"{week.quote}"</p>
                        <p className="text-right text-gray-400 text-sm">- {week.author}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2 text-white">Checklist:</h4>
                        <div className="space-y-2">
                          {week.checklist.map((item, itemIndex) => (
                            <motion.div 
                              key={itemIndex} 
                              className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200"
                              whileHover={{ x: 5 }}
                            >
                              <div className="flex-shrink-0 mt-1">
                                <input 
                                  type="checkbox" 
                                  checked={completedItems[weekIndex]?.[itemIndex] || false}
                                  onChange={() => toggleCheckItem(weekIndex, itemIndex)}
                                  className="h-4 w-4 rounded border-gray-600 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-gray-900 cursor-pointer"
                                />
                              </div>
                              <span 
                                className={`${completedItems[weekIndex]?.[itemIndex] ? 'line-through text-gray-500' : 'text-white/80'} transition-colors duration-300`}
                                onClick={() => toggleCheckItem(weekIndex, itemIndex)}
                              >
                                {item}
                              </span>
                            </motion.div>
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
                              className="block bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                            >
                              <div className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0 group-hover:text-yellow-300 transition-colors group-hover:rotate-12 transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <div>
                                  <span className="font-medium text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">{resource.title}</span>
                                  {resource.description && (
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{resource.description}</p>
                                  )}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-800/30 transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-yellow-900/20 hover:shadow-lg">
                        <h4 className="font-semibold mb-2 text-yellow-300">Progress Tip:</h4>
                        <p className="text-white/70">{week.progressTip}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-900/20 transition-all duration-300">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Essential PyQt5 Widgets & Components</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedComponents.map((comp, index) => (
                <a 
                  key={index}
                  href={comp.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-800/50 hover:border-yellow-800/50 group"
                >
                  <span className="font-medium text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">{comp.name}</span>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{comp.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-blue-900/20 p-6 rounded-xl border border-blue-700/30 backdrop-blur-md hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">🏁 Your GUI Development Journey</h2>
            <p className="text-white/80 mb-2">
              Learning to create graphical user interfaces with Python opens up new possibilities for your applications.
            </p>
            <p className="text-white/80 mb-2">
              PyQt5 is a powerful toolkit that bridges Python's simplicity with Qt's robust GUI capabilities.
            </p>
            <p className="text-white/80">
              Wishing you the best in your Python with GUI development journey. Stay consistent and keep experimenting with new ideas!
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