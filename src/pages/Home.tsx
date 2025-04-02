import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';

export default function HomePage() {
    const [loaded, setLoaded] = useState(false);
    const { t } = useTranslation("translation", { keyPrefix: "pages.home" });

    useEffect(() => {
        setLoaded(true);
    }, []);

    const socialLinks = [
        { icon: <FaGithub />, delay: 0 },
        { icon: <FaTelegram />, delay: 1 },
        { icon: <FaLinkedin />, delay: 2 },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center w-full gap-8">
                <div className="flex-1 text-white max-w-2xl">
                    <div className='animate-left-to-right'>
                        <h1 className="text-2xl mb-2">
                            <span>{t('hola')}</span>
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                            <Trans 
                                i18nKey="pages.home.title"
                                components={{
                                    1: <span className="text-text-secondary" />
                                }}
                              
                            />
                        </h1>
                        <p className="text-sm md:text-base mb-8">
                            <Trans 
                                i18nKey="pages.home.description"
                                components={{
                                    2: <span className="text-text-secondary" />,
                                    3: <span className="text-text-secondary" />,
                                    br: <br className="hidden md:block" />
                                }}
                            />
                        </p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index}
                                href="#" 
                                className={`text-text-secundary text-lg border border-[#00E8F8] rounded-full p-2 
                                    hover:bg-[#00E8F8] hover:text-[#1F252E] hover:shadow-[0_0_20px_#00E8F8] 
                                    transition-all duration-300 ${loaded ? 'animate-navani' : 'opacity-0'}`}
                                style={{
                                    animationDelay: `${link.delay * 100}ms`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                {link.icon}
                            </a>
                        ))}
                        
                        <Link 
                            to="/contact" 
                            className={`bg-text-secondary text-[#1F252E] font-medium py-2 px-4 rounded-lg
                                hover:bg-opacity-90 hover:shadow-[0_0_15px_#00E8F8] transition-all duration-300
                                ${loaded ? 'animate-navani' : 'opacity-0'}`}
                            style={{
                                animationDelay: '400ms',
                                animationFillMode: 'forwards'
                            }}
                        >
                            {t('contact_button')}
                        </Link>
                    </div>
                </div>

                <div className="flex-1 hidden md:block">
                    <img
                        src="/fua.png" 
                        alt="Walter"
                        className="object-cover w-full animate-right-to-left h-auto max-h-100 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}