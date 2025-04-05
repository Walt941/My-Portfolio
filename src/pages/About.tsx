import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Trans, useTranslation } from 'react-i18next';
import ActionButton from '../components/ActionButton';
import perfil from '../assets/prueba2.png';

export default function About() {
    const { t } = useTranslation("translation", { keyPrefix: "pages.about" });
    
    useEffect(() => {
        const handleSmoothScroll = (e: Event) => {
            e.preventDefault();
            const target = e.target as HTMLAnchorElement;
            if (target.hash === '#skills') {
                const element = document.querySelector(target.hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        const links = document.querySelectorAll('a[href="#skills"]');
        links.forEach(link => {
            link.addEventListener('click', handleSmoothScroll as EventListener);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll as EventListener);
            });
        };
    }, []);

    const handleDownloadCV = () => {
        console.log("Descargando CV...");
    };

    return (
        <section id="about" className="min-h-screen px-4 sm:px-6 lg:px-8 bg-main-primary text-white">
            <div className="max-w-4xl mx-auto py-12 md:py-16 lg:py-12">
                <ScrollReveal className="w-full">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <Trans
                                i18nKey="pages.about.aboutme"
                                components={{
                                    1: <span className="text-text-secondary" />
                                }}
                            />
                        </h2>
                        <div className="w-20 h-1 bg-text-secondary mx-auto mb-6"></div>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                    <div className="flex justify-center lg:justify-start w-full lg:w-auto relative">
                        <ScrollReveal delay={100} className="w-full h-full">
                         
                            <div className="relative w-48 h-60 xs:w-56 xs:h-72 sm:w-64 sm:h-80 mx-auto lg:mx-0 animate-left-to-right">
                                <div className="absolute inset-0 rounded-lg bg-text-secondary transform translate-x-3 translate-y-3 -z-10"></div>
                                
                                <div className="relative w-full h-full rounded-lg overflow-hidden border-4 bg-white group">
                                    <img
                                        src={perfil}
                                        alt="Walter"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-text-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="w-full lg:w-auto lg:flex-1 space-y-6">
                        <ScrollReveal delay={200} className="w-full">
                            <div className="animate-right-to-left text-center lg:text-left">
                                <h3 className="text-2xl xs:text-3xl font-semibold mb-4">
                                    <Trans
                                        i18nKey="pages.about.title"
                                        components={{
                                            2: <span className="text-text-secondary" />
                                        }}
                                    />
                                </h3>
                                <p className="text-base xs:text-lg leading-relaxed">
                                    {t('description')}
                                </p>

                                <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                                    <ActionButton
                                        onClick={handleDownloadCV}
                                        text={t('download_cv')}
                                        color="primary"
                                        className="hover:shadow-[0_0_15px_#00E8F8]"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}