import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';
import ActionButton from '../components/ActionButton';
import fuaImage from '../assets/hol.png';

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

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-0">
            <div className="flex flex-col md:flex-row items-center w-full gap-8">
                <div className="flex-1 text-white max-w-2xl mt-8 md:mt-0">
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
                        
                        <ActionButton
                            onClick={scrollToContact}
                            text={t('contact_button')}
                            color="primary"
                            animate={loaded}
                            animationDelay="400ms"
                        />
                    </div>
                </div>

                <div className="flex-1 hidden md:block">
                    <img
                       src={fuaImage}
                        alt="Walter"
                        className="object-cover w-full animate-right-to-left h-auto max-h-100 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}