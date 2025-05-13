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
    title: "Weeks 1-2: Blockchain Basics and Programming Fundamentals",
    quote: "The blockchain does one thing: It replaces third-party trust with mathematical proof that something happened.",
    author: "Adam Draper",
    description: "Build a strong foundation in blockchain technology and ensure programming basics are covered.",
    checklist: [
      "Learn blockchain fundamentals (decentralization, consensus mechanisms, cryptography)",
      "Understand applications beyond cryptocurrencies (supply chain, healthcare)",
      "Master JavaScript basics for those new to coding (variables, data types, loops, functions)",
      "Practice basic algorithms in JavaScript",
      "Complete JavaScript exercises from freeCodeCamp"
    ],
    resources: [
      {
        title: "Harkirat - Blockchain Roadmap",
        description: "Initial video explaining blockchain topics",
        link: "https://www.youtube.com/watch?v=D5CGlFQbgnk&list=PLVKLWop9wWA9n9NQZ2GURoB_a1gOezN_e&index=3"
      },
      {
        title: "Code Eater - Web3 Basics",
        description: "Basic jargons in the web3 space",
        link: "https://www.youtube.com/watch?v=fF_yTe7h1hQ"
      },
      {
        title: "freeCodeCamp - JavaScript Basics",
        description: "Comprehensive JavaScript tutorial for beginners",
        link: "https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLWKotQ0CWI2NIdKfesRa-2tE88f3hGOp4"
      }
    ],
    progressTip: "Watch the videos from the recommended playlists and read articles about topics you find interesting. Use AI tools like ChatGPT to understand difficult concepts, and complete practical JavaScript exercises to build a solid foundation."
  },
  {
    title: "Weeks 3-4: Smart Contract Development",
    quote: "Smart contracts... guarantee a very, very specific set of outcomes. There's never any confusion and there's never any need for litigation.",
    author: "Vitalik Buterin",
    description: "Learn to write, deploy, and interact with smart contracts on Ethereum using Solidity.",
    checklist: [
      "Understand smart contracts as self-executing contracts on blockchain",
      "Learn Solidity programming (syntax, variables, functions, events)",
      "Master tools like Remix IDE for writing and deploying contracts",
      "Use Hardhat or Ganache for local development and testing",
      "Deploy contracts to Ethereum testnets and interact with them"
    ],
    resources: [
      {
        title: "Smart Contract Programmer",
        description: "Covers Solidity from basics to advanced with practical examples",
        link: "https://www.youtube.com/watch?v=M576WGiDBdQ"
      },
      {
        title: "Remix IDE",
        description: "Web-based IDE for writing and testing Solidity contracts",
        link: "https://remix.ethereum.org/"
      }
    ],
    progressTip: "Write a simple Solidity contract like a counter, deploy it on a testnet using Remix, and interact with it. This hands-on approach helps solidify the concepts of smart contract development."
  },
  {
    title: "Week 5: Building Decentralized Applications (DApps)",
    quote: "Web3 is about creating an alternative to the internet we know. One with different values and goals.",
    author: "Gavin Wood",
    description: "Create DApps by building frontends and integrating them with smart contracts.",
    checklist: [
      "Learn DApp architecture (frontend, backend, blockchain interaction)",
      "Master frontend development with React",
      "Connect to Ethereum using Web3.js or Ethers.js",
      "Handle wallet connections (e.g., MetaMask)",
      "Manage gas fees and transaction processing"
    ],
    resources: [
      {
        title: "Full-Stack Dapp using Solidity, Ether.js, Hardhat, and React JS",
        description: "Complete tutorial for building a full-stack DApp",
        link: "https://www.youtube.com/watch?v=CdUDHj2i01Y"
      },
      {
        title: "Alchemy - Build a DApp",
        description: "Guides on integrating frontends with Ethereum",
        link: "https://www.alchemy.com/overviews/best-youtube-channels-for-web3-developers"
      },
      {
        title: "freeCodeCamp - React Course",
        description: "Beginner-friendly introduction to React for building user interfaces",
        link: "https://www.youtube.com/watch?v=4UZrsTqwnOQ&list=PLWKotQ0CWI2O8fak2R87F8577iIH46C_k"
      }
    ],
    progressTip: "Build a simple DApp that connects a React frontend to your smart contract from the previous weeks. Focus on making the user experience smooth, with proper error handling and wallet integration."
  },
  {
    title: "Week 6: Exploring Other Blockchains (Solana)",
    quote: "The future is multi-chain, not tied to a single blockchain platform.",
    author: "Anatoly Yakovenko",
    description: "Learn Solana's ecosystem and basics of Rust programming for Solana development.",
    checklist: [
      "Understand Solana overview (high-throughput blockchain with low transaction costs)",
      "Learn how Solana differs from Ethereum (e.g., Proof of History)",
      "Master Rust programming basics (syntax, memory safety)",
      "Understand Solana's data model and account structure",
      "Use tools like Anchor for Solana development"
    ],
    resources: [
      {
        title: "Rust Bootcamp",
        description: "Solana-specific videos for beginners",
        link: "https://www.youtube.com/watch?v=qP7LzZqGh30"
      },
      {
        title: "Complete Rust Marathon in 6 hours",
        description: "Comprehensive Rust tutorial for Solana development",
        link: "https://www.youtube.com/watch?v=joCFbTJt0o0"
      },
      {
        title: "Solana Developers",
        description: "Official guides for setting up Solana development",
        link: "https://docs.solana.com/developers"
      }
    ],
    progressTip: "Write a basic Rust program for Solana (like a counter), deploy it to devnet, and interact with it. This will give you hands-on experience with an alternative blockchain to Ethereum."
  },
  {
    title: "Weeks 7-8: Security, Projects and Advanced Topics",
    quote: "In blockchain, code is law. But without proper security audits, it can be lawless.",
    author: "Andreas Antonopoulos",
    description: "Understand smart contract vulnerabilities, adopt secure coding practices, and build a comprehensive project.",
    checklist: [
      "Learn common vulnerabilities (reentrancy, integer overflow/underflow, gas limit issues)",
      "Adopt best practices (input validation, access control, fail-safes)",
      "Use auditing tools (Mythril, Slither) and perform manual code reviews",
      "Build a project (voting DApp, NFT minting platform, or decentralized wallet)",
      "Explore advanced topics (DeFi protocols, oracles, token standards)",
      "Document projects on GitHub and share on social media"
    ],
    resources: [
      {
        title: "Smart Contract Programmer - Solidity Exploits",
        description: "Videos on vulnerabilities and how to avoid them",
        link: "https://www.youtube.com/c/SmartContractProgrammer/playlists"
      },
      {
        title: "ConsenSys - Smart Contract Security Best Practices",
        description: "Detailed guide to secure development",
        link: "https://consensys.net/blog/blockchain-explained/smart-contract-security-best-practices/"
      },
      {
        title: "OpenZeppelin Contracts",
        description: "Secure, audited smart contract templates",
        link: "https://openzeppelin.com/contracts/"
      },
      {
        title: "Buildspace - Blockchain Projects",
        description: "Free, guided projects like building an NFT collection",
        link: "https://buildspace.so/"
      },
      {
        title: "Chainlink Documentation",
        description: "Oracles for advanced DApps",
        link: "https://chain.link/"
      }
    ],
    progressTip: "Choose a project idea that interests you and build it from start to finish. Implement security best practices, document your process, and create a polished GitHub repository to showcase your skills to potential employers."
  }
];

// Blockchain tools and resources
const blockchainResources = [
  { name: "Remix IDE", description: "Browser-based IDE for Solidity development", link: "https://remix.ethereum.org/" },
  { name: "Hardhat", description: "Ethereum development environment for professionals", link: "https://hardhat.org/" },
  { name: "OpenZeppelin", description: "Library for secure smart contract development", link: "https://openzeppelin.com/" },
  { name: "Ethers.js", description: "Library for interacting with Ethereum", link: "https://docs.ethers.io/" },
  { name: "Metamask", description: "Cryptocurrency wallet and gateway to blockchain apps", link: "https://metamask.io/" },
  { name: "Ganache", description: "Personal blockchain for Ethereum development", link: "https://www.trufflesuite.com/ganache" },
  { name: "Solana Web3.js", description: "Library for interacting with Solana", link: "https://solana-labs.github.io/solana-web3.js/" },
  { name: "Anchor", description: "Framework for Solana development", link: "https://project-serum.github.io/anchor/" },
  { name: "Chainlink", description: "Decentralized oracle network", link: "https://chain.link/" },
  { name: "IPFS", description: "Distributed file system for storing and sharing data", link: "https://ipfs.io/" }
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [completedItems, setCompletedItems] = useState<{[key: number]: boolean[]}>({});
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('blockchain-progress');
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
        localStorage.setItem('blockchain-progress', JSON.stringify(completedItems));
        
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 via-gray-950 to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-purple-500/10"
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
                background: `hsl(${Math.random() * 60 + 250}, 100%, 50%)`,
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
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
          >
            Blockchain Development Roadmap
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-center mb-8 text-summer-yellow"
          >
            Master Blockchain and Web3 Skills
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
              <span className="text-purple-400 font-bold">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
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
              This roadmap is structured over 8 weeks, designed to align with a 2-month summer break, with each week focusing on specific skills and resources. The progression ensures a strong foundation in blockchain fundamentals and programming before moving to advanced topics like smart contracts, DApps, and multi-chain development. Each section includes practical projects to reinforce learning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://roadmap.sh/blockchain" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors bg-blue-500/20 rounded-lg p-4 border border-blue-500/30 w-full sm:w-auto text-center">
                Complete Blockchain Developer Roadmap | roadmap.sh <LinkIcon />
              </a>
              <a 
                href="https://docs.google.com/document/d/17hDsX7C5J2VlCIkD-wZbe_11FMWeh7xD/edit?usp=drive_link&ouid=102138017384349792997&rtpof=true&sd=true" 
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
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">{week.title}</h3>
                      
                      {/* Week progress bar */}
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <div className="h-1.5 flex-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-400"
                            style={{ width: `${getWeekProgress(weekIndex)}%` }}
                          />
                        </div>
                        <span className="text-gray-400">{getWeekProgress(weekIndex)}%</span>
                      </div>
                    </div>
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
              <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">Web3 Tools & Resources</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {blockchainResources.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded hover:bg-gray-800 transition-colors group"
                >
                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">{resource.name}</span>
                  <p className="text-sm text-gray-400">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-green-900/20 p-6 rounded-xl border border-green-700/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">🏁 Your Blockchain Journey</h2>
            <p className="text-white/80 mb-2">
              Blockchain technology is a field where innovation and stability go hand in hand. We are bringing changes to the future economy and data management.
            </p>
            <p className="text-white/80 mb-2">
              Remember, learning takes time. Understanding the principles before writing code is essential. Security should always be a priority.
            </p>
            <p className="text-white/80">
              Build projects, join communities, and stay updated in the constantly evolving world of Web3 technology!
            </p>
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
      </div>
    </div>
  );
} 