import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Trans, useTranslation } from 'react-i18next';

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

    return (
        <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-main-primary text-white">
            <div className="max-w-4xl mx-auto">
               
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

               
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  
                    <div className="md:col-span-2 flex justify-center">
                        <ScrollReveal delay={100} className="w-full h-full">
                            <div className="w-64 h-64 rounded-full bg-[#1F252E] border-4 border-text-secondary animate-left-to-right">
                               
                            </div>
                        </ScrollReveal>
                    </div>

                    
                    <div className="md:col-span-3 space-y-6">
                        <ScrollReveal delay={200} className="w-full">
                            <div className="animate-right-to-left">
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

                                <div className="flex flex-wrap gap-4 mt-8">
                                    <button 
                                        
                                        className="bg-text-secondary text-[#1F252E] font-medium py-2 px-6 rounded-lg
                                            hover:bg-opacity-90 hover:shadow-[0_0_15px_#00E8F8] transition-all duration-300"
                                    >
                                        {t('download_cv')}
                                    </button>

                                   
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}