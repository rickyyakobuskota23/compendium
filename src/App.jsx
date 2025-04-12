import './App.css';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import new project pages
import Page1 from './projects/Project1/Page1';
import Page2 from './projects/Project1/Page2';
import Page3 from './projects/Project1/Page3';
import Page4 from './projects/Project1/Page4';

function App() {
  return (
    <Router>
      <Hero />
      <Projects />
      <Routes>
        <Route path="/projects/1/page1" element={<Page1 />} />
        <Route path="/projects/1/page2" element={<Page2 />} />
        <Route path="/projects/1/page3" element={<Page3 />} />
        <Route path="/projects/1/page4" element={<Page4 />} />
      </Routes>
      <div className="additional-section">
        <h1>Generative AI Aknowledgement</h1>
        <br />
        <p>I declare that Microsoft Copilot (https://m365.cloud.microsoft/chat) was utilized to enhance the academic tone, and Studiosity (https://www.studiosity.com), provided by Monash University, was used for correcting grammar, spelling, and punctuation errors in this compendium.</p>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
