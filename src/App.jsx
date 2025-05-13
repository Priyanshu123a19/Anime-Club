import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Members from './components/Members';
import FeaturePage from './components/FeaturePage';
import PastEventsPage from './components/PastEventsPage';
import AnimeNews from './components/AnimeNews';
import NexusPage from './components/NexusPage';

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/members" element={<Members />} />
        <Route path="/feature/:id" element={<FeaturePage />} />
        <Route path="/past-events" element={<PastEventsPage />} />
        <Route path="/anime-news" element={<AnimeNews />} />
        <Route path="/upcoming-events" element={<NexusPage />} />
      </Routes>
    </main>
  );
}

export default App;
