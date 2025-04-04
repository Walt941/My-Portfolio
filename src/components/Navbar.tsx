import { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

export default function Navbar() {
    const { t, i18n } = useTranslation("translation", { keyPrefix: "components.navbar" });
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    const handleChangeLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('preferred_language', newLang);
    };

    useEffect(() => {
        if (!location.hash) {
            setActiveSection('#home');
        }
    }, [location]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-50px 0px -50% 0px',
            threshold: 0.1
        };

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

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const scrollToSection = (hash: string) => {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(hash);
        }
        setMenuOpen(false);
    };

    const navLinks = [
        { to: '#home', text: t('home') },
        { to: '#about', text: t('about') },
        { to: '#skills', text: t('skills') },
        { to: '#projects', text: t('projects') },
        { to: '#contact', text: t('contact') }
    ];

    const isActive = (linkTo: string) => {
        return activeSection === linkTo;
    };

    return (
        <header className="py-4 bg-main-primary fixed w-full top-0 left-0 right-0 z-50">
            <div className="w-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold">
                            <a 
                                href="#home" 
                                className="text-text-primary" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('#home');
                                }}
                            >
                                <span>{t('portfolio')}</span>
                            </a>
                        </div>

                        <nav className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.to}
                                    href={link.to}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.to);
                                    }}
                                    className={`text-xs sm:text-sm font-medium whitespace-nowrap px-3 py-1 rounded-full ${
                                        isActive(link.to) 
                                            ? 'text-text-secondary' 
                                            : 'text-white hover:text-text-secondary'
                                    } transition-all duration-300`}
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
                            <button onClick={toggleMenu} className="text-[#00E8F8]">
                                <FaBars size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <nav className="md:hidden bg-[#1F252E] absolute left-0 right-0 top-16 z-50 p-4">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.to}
                                href={link.to}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.to);
                                }}
                                onMouseEnter={() => setHoveredLink(link.to)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className={`text-sm font-semibold px-3 py-2 rounded-full ${
                                    isActive(link.to) 
                                        ? 'text-[#00E8F8]' 
                                        : hoveredLink === link.to 
                                            ? 'text-[#00E8F8] bg-opacity-10 bg-[#00E8F8]'
                                            : 'text-white'
                                } transition-colors duration-200`}
                            >
                                {link.text}
                            </a>
                        ))}
                        <button 
                            className="text-sm font-semibold px-3 py-2 rounded-full text-white flex items-center hover:text-[#00E8F8] transition-colors duration-200"
                            onClick={handleChangeLanguage}
                            onMouseEnter={() => setHoveredLink('#language')}
                            onMouseLeave={() => setHoveredLink(null)}
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