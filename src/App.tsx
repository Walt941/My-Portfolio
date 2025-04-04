import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import SectionDivider from './components/SectionDivider';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Contact from './pages/Contact';


function App() {
  

  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-main-primary">
        <Toaster />
        <Navbar />
        
        <section id="home" className="py-20 min-h-screen">
          <Home />
          <SectionDivider />
        </section>
        
        <section id="about" className=" min-h-screen">
          <About />
          <SectionDivider />
        </section>
        
        <section id="skills" className=" min-h-screen">
          <Skills />
          <SectionDivider />
        </section>

        <section id="projects" className=" min-h-screen">
          <Projects />
          <SectionDivider />
        </section>

        <section id="contact" className="py-5 min-h-screen">
          <Contact/>
          
        </section>
        
       
      </div>
    </I18nextProvider>
  );
}

export default App;