import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Router from './Routes';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import SectionDivider from './components/SectionDivider';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';

function App() {
  const location = useLocation();

  useEffect(() => {
   
    if (location.pathname === '/') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location]);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-main-primary">
        <Toaster />
        <Navbar />
        
        <section id="home" className='py-20'>
          <Home />
          <SectionDivider />
        </section>
        
        <section id="about">
          <About />
          <SectionDivider />
        </section>
        
        <section id="skills" className="py-5">
          <Skills />
          <SectionDivider />
        </section>
        
        <Router />
      </div>
    </I18nextProvider>
  );
}

export default App;