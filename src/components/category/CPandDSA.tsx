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
    title: "Week 1: Implementation & I/O, Basic Arrays",
    quote: "The art of programming is the art of organizing complexity.",
    author: "Edsger W. Dijkstra",
    description: "Implementation exercises build coding fluency and debugging skills. Array manipulation underpins most CP tasks.",
    checklist: [
      "Implementation: translate problem statements into code",
      "Handle I/O, loops, conditionals, arrays",
      "Master array indexing and traversal",
      "Learn basic array operations",
      "Complete 10+ implementation exercises"
    ],
    resources: [
      {
        title: "Striver A2Z: Implementation & Arrays",
        description: "Comprehensive guide to implementation and arrays",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        title: "Implementation Problems on Codeforces",
        description: "Practice implementation challenges",
        link: "https://codeforces.com/problemset?tags=implementation"
      }
    ],
    progressTip: "Focus on building good coding habits - proper variable naming, consistent formatting, and thorough testing are just as important as getting the right answer."
  },
  {
    title: "Week 2: Math Foundations & Sorting",
    quote: "Mathematics is the queen of the sciences and number theory is the queen of mathematics.",
    author: "Carl Friedrich Gauss",
    description: "Math fundamentals help in optimization; sorting is a prerequisite for many algorithms.",
    checklist: [
      "Number Theory: gcd/lcm, prime numbers, factorization",
      "Modular arithmetic for large calculations",
      "Study in-place sorting algorithms (bubble, insertion, selection)",
      "Learn divide-and-conquer sorts (merge sort, quicksort)",
      "Master usage of built-in sorting functions"
    ],
    resources: [
      {
        title: "Striver A2Z: Math & Sorting sections",
        description: "Learn mathematical concepts and sorting algorithms",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        title: "Visualizing Sorting Algorithms",
        description: "Interactive visualizations of sorting algorithms",
        link: "https://visualgo.net/en/sorting"
      }
    ],
    progressTip: "Build a library of common math functions (gcd, lcm, primality test, etc.) that you can quickly implement in contests."
  },
  {
    title: "Week 3: Binary Search & Two Pointers",
    quote: "All problems in computer science can be solved by another level of indirection.",
    author: "David Wheeler",
    description: "Binary search optimizes O(n) → O(log n). Two pointers/sliding window reduce O(n²) to O(n).",
    checklist: [
      "Master binary search on sorted arrays",
      "Learn binary search on answer technique",
      "Apply two pointers for paired elements",
      "Implement sliding window technique for subarrays",
      "Solve monotonic queue/stack problems"
    ],
    resources: [
      {
        title: "Striver A2Z: Binary Search & Two Pointers",
        description: "Detailed tutorials on binary search and two pointers",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        title: "Binary Search Practice Problems",
        description: "Curated list of binary search challenges",
        link: "https://leetcode.com/tag/binary-search/"
      }
    ],
    progressTip: "For binary search, focus on identifying the search space and monotonicity of the predicate. For two pointers, practice recognizing when this technique can be applied to avoid nested loops."
  },
  {
    title: "Week 4: Recursion & Backtracking",
    quote: "To iterate is human, to recurse divine.",
    author: "L. Peter Deutsch",
    description: "Recursion simplifies divide-and-conquer; backtracking generates combinations/permutations.",
    checklist: [
      "Master recursion fundamentals: base case and recursive case",
      "Visualize recursion tree for complex problems",
      "Implement backtracking to generate combinations",
      "Solve permutation problems with backtracking",
      "Apply pruning techniques to optimize backtracking"
    ],
    resources: [
      {
        title: "Striver A2Z: Recursion & Backtracking",
        description: "Comprehensive guide to recursion and backtracking",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        title: "Backtracking Visualization",
        description: "Visual explanation of backtracking algorithms",
        link: "https://algorithm-visualizer.org/backtracking/n-queens-problem"
      }
    ],
    progressTip: "Practice thinking recursively by breaking problems into smaller subproblems. For backtracking, focus on state representation and efficient pruning conditions."
  },
  {
    title: "Week 5: Greedy Strategies & Bit Manipulation",
    quote: "Sometimes making the best choice at each step leads to the best overall solution.",
    author: "Greedy Algorithm Philosophy",
    description: "Greedy suits interval scheduling/selection problems. Bit-hacks optimize parity, subsets.",
    checklist: [
      "Understand greedy algorithm principles",
      "Apply greedy to interval scheduling problems",
      "Learn bit manipulation fundamentals",
      "Master bitwise operations (AND, OR, XOR, shifts)",
      "Implement subset generation using bits"
    ],
    resources: [
      {
        title: "Striver A2Z: Greedy & Bit Manipulation",
        description: "Detailed tutorials on greedy algorithms and bit manipulation",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        title: "Bit Manipulation Techniques",
        description: "Common bit manipulation tricks for competitive programming",
        link: "https://cp-algorithms.com/algebra/bit-manipulation.html"
      }
    ],
    progressTip: "For greedy algorithms, always prove to yourself why the greedy choice works before implementing. For bit manipulation, practice bitwise operations on paper until they become intuitive."
  },
  {
    title: "Week 6: Introduction to Dynamic Programming (1D & 2D)",
    quote: "Those who cannot remember the past are condemned to repeat it.",
    author: "George Santayana",
    description: "Memoize overlapping subproblems; tabulate bottom-up. Recognize state definitions.",
    checklist: [
      "Learn 1D DP for linear problems",
      "Master coin change and longest increasing subsequence",
      "Implement 2D DP for grid problems",
      "Solve knapsack variations",
      "Practice state definition and transition formulation"
    ],
    resources: [
      {
        title: "Striver A2Z: DP – 1D & 2D",
        description: "Comprehensive tutorials on dynamic programming",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        title: "Dynamic Programming Patterns",
        description: "Common patterns in DP problems",
        link: "https://leetcode.com/discuss/study-guide/458695/Dynamic-Programming-Patterns"
      }
    ],
    progressTip: "Approach DP problems systematically: define states clearly, establish base cases, formulate transition functions, and determine the traversal order. Always consider both top-down and bottom-up approaches."
  },
  {
    title: "Week 7: Advanced DP & Optimizations",
    quote: "The more efficient the algorithm, the more elegant the solution.",
    author: "Donald Knuth",
    description: "Advanced DP handles exponential states or tree-structured input; optimizations speed up high-n cases.",
    checklist: [
      "Implement Bitmask DP for problems with small n (≤20)",
      "Master Tree DP for problems on trees",
      "Learn about Convex Hull optimization",
      "Study Knuth's optimization for specific DP problems",
      "Apply space optimizations to reduce memory usage"
    ],
    resources: [
      {
        title: "Striver A2Z: DP – Advanced & Tree DP",
        description: "Advanced DP techniques and tree dynamic programming",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        title: "DP Optimization Techniques",
        description: "Various optimization techniques for dynamic programming",
        link: "https://cp-algorithms.com/dynamic_programming/divide-and-conquer-dp.html"
      }
    ],
    progressTip: "For bitmask DP, practice representing states as bits. For tree DP, carefully define subtree states. Always look for opportunities to optimize your DP solution, both in time and space complexity."
  },
  {
    title: "Week 8: Graph Theory I (BFS, DFS, Shortest Paths)",
    quote: "A picture is worth a thousand words; a graph is worth a thousand arrays.",
    author: "Graph Theory Wisdom",
    description: "Graph fundamentals underpin network/route problems; know representation and traversal nuances.",
    checklist: [
      "Master graph representations (adjacency list/matrix)",
      "Implement BFS for level-order traversal and shortest paths",
      "Use DFS for connectivity and depth exploration",
      "Apply Dijkstra's algorithm for weighted shortest paths",
      "Implement Bellman-Ford for graphs with negative weights"
    ],
    resources: [
      {
        title: "Striver A2Z: Graph – BFS/DFS & shortest paths",
        description: "Comprehensive guide to graph traversals and shortest path algorithms",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        title: "Graph Algorithms Visualization",
        description: "Interactive visualization of graph algorithms",
        link: "https://visualgo.net/en/dfsbfs"
      }
    ],
    progressTip: "Make sure you're comfortable with different graph representations and when to use each. Practice identifying which traversal algorithm is most appropriate for different types of problems."
  },
  {
    title: "Week 9: Graph Theory II, Trees, & Contest Integration",
    quote: "The best way to predict the future is to implement it.",
    author: "Competitive Programming Maxim",
    description: "MSG techniques solve ordering and connectivity clusters. MST finds minimal total edges. LCA answers ancestor queries quickly.",
    checklist: [
      "Implement Topological Sort for dependency ordering",
      "Apply Strongly Connected Components (Kosaraju's algorithm)",
      "Master Minimum Spanning Tree (Kruskal's and Prim's algorithms)",
      "Learn Lowest Common Ancestor (LCA) for tree queries",
      "Study centroid decomposition for advanced tree problems",
      "Practice timed mock contests and upsolving"
    ],
    resources: [
      {
        title: "Striver A2Z: Graph II & Tree – LCA",
        description: "Advanced graph algorithms and tree techniques",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        title: "CSES Problem Set",
        description: "Excellent collection of algorithmic problems",
        link: "https://cses.fi/problemset/"
      },
      {
        title: "TLE Eliminators CP Sheet",
        description: "Structured competitive programming practice sheet",
        link: "https://www.tle-eliminators.com/cp-sheet"
      }
    ],
    progressTip: "Regular contest participation is key. Set aside time for weekly contests on platforms like Codeforces, CodeChef, and AtCoder. After each contest, analyze your performance and upsolve problems you couldn't solve during the contest."
  }
];

// Competitive programming platforms and resources
const cpResources = [
  { name: "Codeforces", description: "Popular competitive programming platform with regular contests", link: "https://codeforces.com/" },
  { name: "LeetCode", description: "Platform for technical interview preparation", link: "https://leetcode.com/" },
  { name: "AtCoder", description: "Japanese programming contest platform", link: "https://atcoder.jp/" },
  { name: "CodeChef", description: "Educational initiative for competitive programming", link: "https://www.codechef.com/" },
  { name: "CSES Problem Set", description: "Collection of algorithmic programming problems", link: "https://cses.fi/problemset/" },
  { name: "Striver's A2Z DSA Course", description: "Structured DSA learning path", link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
  { name: "TLE Eliminators CP Sheet", description: "Structured competitive programming practice sheet", link: "https://www.tle-eliminators.com/cp-sheet" },
  { name: "CP-Algorithms", description: "Collection of algorithms and data structures used in CP", link: "https://cp-algorithms.com/" },
  { name: "Visualgo", description: "Visualize data structures and algorithms", link: "https://visualgo.net/en" },
  { name: "USACO Guide", description: "Comprehensive resource for competitive programming", link: "https://usaco.guide/" }
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [completedItems, setCompletedItems] = useState<{[key: number]: boolean[]}>({});
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('cpdsa-progress');
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
        localStorage.setItem('cpdsa-progress', JSON.stringify(completedItems));
        
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-900/20 via-gray-950 to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-green-500/10"
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
              className="absolute bg-green-500"
              style={{
                top: '-10px',
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                background: `hsl(${Math.random() * 120 + 90}, 100%, 50%)`,
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
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          >
            CP+DSA Learning Roadmap (2025)
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-center mb-8 text-summer-yellow"
          >
            Master Competitive Programming & Data Structures
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
              <span className="text-green-400 font-bold">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-500 to-blue-500"
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
            className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl mb-12 border border-gray-800 shadow-xl hover:shadow-green-900/20 transition-all duration-300"
          >
            <p className="text-white/80 mb-4">
              This 9-week roadmap is structured to build competitive programming skills systematically, from basic implementation to advanced algorithms. Each week focuses on essential concepts with curated resources and practice guidelines. By following this path and regularly participating in contests, you'll develop the problem-solving skills needed for programming competitions and technical interviews.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-400 font-semibold hover:text-green-300 transition-colors bg-green-500/20 hover:bg-green-500/30 rounded-lg p-4 border border-green-500/30 w-full sm:w-auto text-center group"
              >
                <span className="relative">
                  Striver's A2Z DSA Course | takeuforward.org
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </span>
                <LinkIcon />
              </a>
              <a 
                href="https://docs.google.com/document/d/1h4QeRaUvApWpACRRR4O8VyctdpB9e6w8/edit?usp=drive_link&ouid=102138017384349792997&rtpof=true&sd=true" 
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

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-[1.75rem] before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-green-500 before:via-blue-500 before:to-green-500 before:rounded-full before:-z-10">
            {roadmap.map((week, weekIndex) => (
              <motion.div
                key={weekIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: weekIndex * 0.1 }}
                className={`relative pl-10 md:pl-16 pb-6 ${weekIndex === roadmap.length - 1 ? '' : 'mb-8'}`}
              >
                <div className="absolute left-0 top-1 md:left-0 md:top-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-green-500/30 z-10 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{weekIndex + 1}</span>
                </div>

                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-green-900/20 transition-all duration-300">
                  <div 
                    className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 cursor-pointer flex justify-between items-center relative group"
                    onClick={() => toggleWeek(weekIndex)}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 group-hover:from-green-300 group-hover:to-blue-300 transition-colors duration-300">{week.title}</h3>
                      
                      {/* Week progress bar */}
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <div className="h-1.5 flex-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
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

                      <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border-l-4 border-green-500 transform hover:-translate-y-1 transition-transform duration-300">
                        <p className="text-green-300 italic mb-1">"{week.quote}"</p>
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
                                  className="h-4 w-4 rounded border-gray-600 text-green-500 focus:ring-green-500 focus:ring-offset-gray-900 cursor-pointer"
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
                                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:text-green-300 transition-colors group-hover:rotate-12 transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <div>
                                  <span className="font-medium text-green-400 group-hover:text-green-300 transition-colors duration-300">{resource.title}</span>
                                  {resource.description && (
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{resource.description}</p>
                                  )}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="bg-green-900/20 p-4 rounded-lg border border-green-800/30 transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-green-900/20 hover:shadow-lg">
                        <h4 className="font-semibold mb-2 text-green-300">Progress Tip:</h4>
                        <p className="text-white/70">{week.progressTip}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-green-900/20 transition-all duration-300">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">CP Platforms & Resources</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {cpResources.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-800/50 hover:border-green-800/50 group"
                >
                  <span className="font-medium text-green-400 group-hover:text-green-300 transition-colors duration-300">{resource.name}</span>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-blue-900/20 p-6 rounded-xl border border-blue-700/30 backdrop-blur-md hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">🏁 Your Competitive Programming Journey</h2>
            <p className="text-white/80 mb-2">
              Competitive programming is a journey that combines algorithmic thinking with implementation skills. The key to success is consistent practice and continuous learning.
            </p>
            <p className="text-white/80 mb-2">
              Remember to upsolve problems after contests - review editorials and implement optimal solutions. Regular participation in contests on platforms like Codeforces, CodeChef, and AtCoder will accelerate your growth.
            </p>
            <p className="text-white/80">
              For advanced growth, explore additional topics like segment trees, lazy propagation, and specialized algorithms. Most importantly, make the best of your practice time by focusing on understanding rather than just solving.
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