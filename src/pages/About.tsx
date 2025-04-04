import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Trans, useTranslation } from 'react-i18next';
import ActionButton from '../components/ActionButton';

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

               
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                    <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                        <ScrollReveal delay={100} className="w-full h-full">
                            <div className="w-64 h-64 rounded-full bg-[#1F252E] border-4 border-text-secondary mx-auto lg:mx-0 animate-left-to-right">
            
                            </div>
                        </ScrollReveal>
                    </div>

                  
                    <div className="w-full lg:w-auto lg:flex-1 space-y-6">
                        <ScrollReveal delay={200} className="w-full">
                            <div className="animate-right-to-left text-center lg:text-left">
                                <h3 className="text-3xl font-semibold mb-4">
                                    <Trans
                                        i18nKey="pages.about.title"
                                        components={{
                                            2: <span className="text-text-secondary" />
                                        }}
                                    />
                                </h3>
                                <p className="text-lg leading-relaxed">
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