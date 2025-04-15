import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import { Trans, useTranslation } from 'react-i18next';
import ActionButton from '../components/ActionButton';
import ImageHome from '../assets/imageHome.png';

export default function HomePage() {
    const [loaded, setLoaded] = useState(false);
    const { t } = useTranslation("translation", { keyPrefix: "pages.home" });

    useEffect(() => {
        setLoaded(true);
    }, []);

    const socialLinks = [
        { 
            icon: <FaGithub />, 
            delay: 1,
            url: "https://github.com/Walt941"  
        }, 
        { 
            icon: <CgMail />, 
            delay: 2,
            url: "mailto:walterbelloe@gmail.com"  
        },
        { 
            icon: <FaLinkedin />, 
            delay: 3,
            url: "https://www.linkedin.com/in/walter-bello-951622359"  
        },
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-12 lg:pt-0">
            <div className="flex flex-col md:flex-row items-center w-full gap-6 sm:gap-8">
                <div className="flex-1 text-white max-w-2xl mt-4 sm:mt-6 md:mt-0 order-2 md:order-1">
                    <div className='animate-left-to-right'>
                        <h1 className="text-xl xs:text-2xl mb-2">
                            <span>{t('hola')}</span>
                        </h1>
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-semibold mb-3 sm:mb-4">
                            <Trans 
                                i18nKey="pages.home.title"
                                components={{
                                    1: <span className="text-text-secondary" />
                                }}
                            />
                        </h1>
                        <p className="text-xs xs:text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                            <Trans 
                                i18nKey="pages.home.description"
                                components={{
                                    2: <span className="text-text-secondary" />,
                                    3: <span className="text-text-secondary" />,
                                    br: <br className="hidden sm:block" />
                                }}
                            />
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index}
                                href={link.url}
                                target="_blank"  
                                rel="noopener noreferrer" 
                                className={`text-text-secundary text-base sm:text-lg border border-[#00E8F8] rounded-full p-1 sm:p-2
                                    hover:bg-[#00E8F8] hover:text-[#1F252E] hover:shadow-[0_0_10px_#00E8F8] sm:hover:shadow-[0_0_20px_#00E8F8]
                                    transition-all duration-300 ${loaded ? 'animate-navani-fast' : 'opacity-0'}`}
                                style={{
                                    animationDelay: `${link.delay * 100}ms`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                {link.icon}
                            </a>
                        ))}
                        
                        <div className="w-full sm:w-auto mt-2 sm:mt-0">
                            <ActionButton
                                onClick={scrollToContact}
                                text={t('contact_button')}
                                color="primary"
                                animate={loaded}
                                animationDelay="400ms"
                                className="text-sm sm:text-base"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 hidden md:block order-2">
                    <img
                        src={ImageHome}
                        alt="Walter"
                        className="object-cover w-full animate-right-to-left h-auto max-h-100 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}