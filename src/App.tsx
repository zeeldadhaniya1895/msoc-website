import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import AboutPage from './pages/AboutPage';
import RoadmapPage from './pages/RoadmapPage';
import EventPage from './pages/EventPage';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
