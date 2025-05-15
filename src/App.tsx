import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import AboutPage from './pages/AboutPage';
import RoadmapPage from './pages/RoadmapPage';
import EventPage from './pages/EventPage';
import MernCheckpoint1 from './pages/MernCheckpoint1';
import GenAICheckpoint1 from './pages/GenAICheckpoint1';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FrontendRoadmap from './components/category/Frontend';
import NodeJSRoadmap from './components/category/NodeJS';
import FlutterRoadmap from './components/category/Flutter';
import PythonRoadmap from './components/category/Python';
import CPandDSARoadmap from './components/category/CPandDSA';
import BlockchainRoadmap from './components/category/Blockchain';
import MLandNLPRoadmap from './components/category/MLandNLP';
import DjangoRoadmap from './components/category/Django';
import MERNRoadmap from './components/category/MERN';
import GenAIRoadmap from './components/category/GenAI';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/html-css-js-react" element={<FrontendRoadmap />} />
            <Route path="/nodejs" element={<NodeJSRoadmap />} />
            <Route path="/flutter" element={<FlutterRoadmap />} />
            <Route path="/python" element={<PythonRoadmap />} />
            <Route path="/cp-dsa" element={<CPandDSARoadmap />} />
            <Route path="/blockchain" element={<BlockchainRoadmap />} />
            <Route path="/ml-nlp" element={<MLandNLPRoadmap />} />
            <Route path="/django" element={<DjangoRoadmap />} />
            <Route path="/mern" element={<MERNRoadmap />} />
            <Route path="/genai" element={<GenAIRoadmap />} />
            <Route path="/mern/checkpoint/1" element={<MernCheckpoint1 />} />
            <Route path="/genai/checkpoint/1" element={<GenAICheckpoint1 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
