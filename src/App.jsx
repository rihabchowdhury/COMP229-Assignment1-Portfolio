
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div className="portfolio">

        
        <header>

          <div className="logo">
            RC
          </div>

          <h2>My Portfolio</h2>

          
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
          </nav>

        </header>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        
        <footer>
          <p>
            © 2026 My Portfolio. All rights reserved.
          </p>
        </footer>

      </div>

    </BrowserRouter>
  );
}

export default App;
