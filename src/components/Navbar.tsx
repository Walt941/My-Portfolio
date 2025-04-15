
import { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t, i18n } = useTranslation("translation", { keyPrefix: "components.navbar" });
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');
    const observer = useRef<IntersectionObserver | null>(null);

    
    useEffect(() => {
        const options = { root: null, rootMargin: '-50px 0px -50% 0px', threshold: 0.1 };
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                    window.history.replaceState(null, '', `#${entry.target.id}`);
                }
            });
        }, options);

        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) observer.current?.observe(element);
        });

        return () => observer.current?.disconnect();
    }, []);

    const handleChangeLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('preferred_language', newLang);
    };

    const scrollToSection = (hash: string) => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false);
    };

    const navLinks = [
        { to: '#home', text: t('home') },
        { to: '#about', text: t('about') },
        { to: '#skills', text: t('skills') },
        { to: '#projects', text: t('projects') },
        { to: '#contact', text: t('contact') }
    ];

    return (
        <header className="py-4 bg-[#0F172A]/90 backdrop-blur-sm text-white fixed w-full top-0 left-0 right-0 z-50 animate-navani-fast">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                   
                    <a 
                        href="#home" 
                        onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} 
                        className="text-xl font-bold text-text-primary animate-navani-fast"
                        style={{ animationDelay: '0.05s' }}
                    >
                        {t('portfolio')}
                    </a>

                 
                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.to}
                                href={link.to}
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.to); }}
                                className={`text-xs sm:text-sm font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                                    activeSection === link.to ? 'text-text-secondary' : 'text-white hover:text-text-secondary'
                                } animate-navani-fast`}
                                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            >
                                {link.text}
                            </a>
                        ))}
                        
                       
                        <button 
                            onClick={handleChangeLanguage} 
                            className="flex items-center space-x-1 hover:text-text-secondary pl-2 ml-1 transition-all animate-navani-fast"
                            style={{ animationDelay: '0.3s' }}
                        >
                            <IoLanguage size={20} />
                            <span className="text-xs sm:text-sm font-medium">{t('next_language')}</span>
                        </button>
                    </nav>

                   
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="md:hidden text-[#00E8F8] animate-navani-fast"
                        style={{ animationDelay: '0.35s' }}
                    >
                        <FaBars size={20} />
                    </button>
                </div>
            </div>

           
            {menuOpen && (
                <nav className="md:hidden bg-[#1F252E]/95 backdrop-blur-sm absolute left-0 right-0 top-14 z-50 p-4 space-y-3">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.to}
                            href={link.to}
                            onClick={(e) => { e.preventDefault(); scrollToSection(link.to); }}
                            className="block text-sm font-semibold px-3 py-2 text-white hover:text-[#00E8F8] transition-all animate-navani-fast"
                            style={{ animationDelay: `${0.05 + index * 0.03}s` }}
                        >
                            {link.text}
                        </a>
                    ))}
                     <button
                        onClick={() => {
                            handleChangeLanguage();
                            setMenuOpen(false);
                        }}
                        className="flex items-center cursor-pointer space-x-2 w-full text-sm font-semibold px-3 py-2 text-white hover:text-[#00E8F8] transition-all animate-navani-fast"
                        style={{ animationDelay: `${0.05 + navLinks.length * 0.03}s` }}
                    >
                        <IoLanguage size={18} />
                        <span>{t('next_language')}</span>
                    </button>
                </nav>
            )}
        </header>
    );
}