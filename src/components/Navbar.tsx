import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { FaBars } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t, i18n } = useTranslation("translation", { keyPrefix: "components.navbar" });
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const observer = useRef<IntersectionObserver | null>(null);

    const handleChangeLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('preferred_language', newLang);
    };

    useEffect(() => {
        setLoaded(true);
        
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        }, options);

        const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) observer.current?.observe(element);
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [location]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const scrollToSection = (hash: string) => {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setMenuOpen(false);
    };

    const navLinks = [
        { to: '#home', text: t('home') },
        { to: '#about', text: t('about') },
        { to: '#skills', text: t('skills') },
        { to: '#portfolio', text: t('projects') },
        { to: '#contact', text: t('contact') }
    ];

    const isActive = (linkTo: string) => {
        return activeSection === linkTo;
    };

    return (
        <header className="py-4 px-4 bg-main-primary sm:px-6 lg:px-8 max-w-6xl mx-auto fixed w-full top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold animate-left-to-right">
                    <Link to="/" className="text-text-primary"><span>{t('portfolio')}</span></Link>
                </div>

               
                <nav className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.to}
                            href={link.to}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.to);
                            }}
                            className={`text-xs sm:text-sm font-medium whitespace-nowrap px-3 py-1 rounded-full ${
                                isActive(link.to) ? 'text-text-secondary' : 'text-white hover:text-text-secondary'
                            } transition-all duration-300 ${
                                loaded ? 'animate-navani' : 'opacity-0'
                            }`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            {link.text}
                        </a>
                    ))}
                    
                   
                    <button 
                        className="flex items-center space-x-1 text-white hover:text-text-secondary pl-2 ml-1"
                        onClick={handleChangeLanguage}
                    >
                        <IoLanguage size={20} />
                        <span className="text-xs sm:text-sm font-medium">
                            {t('next_language')}
                        </span>
                    </button>
                </nav>

               
                <div className="md:hidden flex items-center space-x-4">
                    <button 
                        className="text-white"
                        onClick={handleChangeLanguage}
                    >
                        <IoLanguage size={20} />
                    </button>
                    <button onClick={toggleMenu} className="text-[#00E8F8]">
                        <FaBars size={20} />
                    </button>
                </div>
            </div>

          
            {menuOpen && (
                <nav className="md:hidden bg-[#1F252E] absolute left-0 right-0 top-16 z-50 p-4">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.to}
                                href={link.to}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.to);
                                }}
                                className={`text-sm font-semibold px-3 py-2 rounded-full ${
                                    isActive(link.to) ? 'text-[#00E8F8]' : 'text-white'
                                } ${
                                    loaded ? 'animate-fade-up' : 'opacity-0'
                                }`}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                {link.text}
                            </a>
                        ))}
                        <button 
                            className="text-sm font-semibold px-3 py-2 rounded-full text-white flex items-center"
                            onClick={handleChangeLanguage}
                        >
                            <IoLanguage size={20} className="mr-2" />
                            {t('next_language')}
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
}