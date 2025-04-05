import { useRef, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import ScrollReveal from '../components/ScrollReveal';
import { Trans, useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import contact from '../assets/fiuuu.png';

export default function Contact() {
  const { t } = useTranslation("translation", { keyPrefix: "pages.contact" });
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success(t('submit_success'));
      formRef.current?.reset();
    } catch (error) {
      toast.error(t('submit_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-main-primary text-white">
      <div className="max-w-6xl mx-auto"> 
        <ScrollReveal>
          <div className="text-center mb-12"> 
            <h2 className="text-2xl md:text-4xl font-bold mb-4"> 
              <Trans
                i18nKey="pages.contact.title"
                components={{
                  1: <span className="text-text-secondary" />
                }}
              />
            </h2>
            <p className="max-w-xl mx-auto text-base text-[#94A3B8]"> 
              {t('description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center w-full gap-6"> 
          <div className="flex-1 w-full max-w-lg mx-auto"> 
            <ScrollReveal className="w-full">
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-[#1E293B] rounded-xl p-5 sm:p-6 border border-[#334155] hover:border-[#38BDF8] transition-all duration-300" 
              >
                <div className="space-y-5"> 
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#CBD5E1] mb-1.5"> 
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 bg-[#0F172A] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent text-white placeholder-[#64748B] transition-all" 
                      placeholder={t('name_placeholder')}
                    />
                  </div>

                 
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 bg-[#0F172A] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent text-white placeholder-[#64748B] transition-all"
                      placeholder={t('email_placeholder')}
                    />
                  </div>

                
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4} 
                      required
                      className="w-full px-3 py-2.5 bg-[#0F172A] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent text-white placeholder-[#64748B] transition-all"
                      placeholder={t('message_placeholder')}
                    ></textarea>
                  </div>

                 
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-5 py-2.5 bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0F172A] font-medium rounded-lg transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> 
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('submitting')}
                      </span>
                    ) : (
                      <>
                        <span>{t('submitting')}</span>
                        <FiSend className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
          
          <div className="flex-1 hidden md:block max-w-md"> 
            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src={contact} 
                  alt="Contacto"
                  className="object-cover w-full h-auto max-h-[400px] rounded-lg animate-right-to-left" 
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}