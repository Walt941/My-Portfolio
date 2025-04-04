import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import ScrollReveal from '../components/ScrollReveal';
import { Trans, useTranslation } from 'react-i18next';
import ActionButton from '../components/ActionButton';

export default function Projects() {
  const { t } = useTranslation("translation", { keyPrefix: "pages.projects" });
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: t('title_card1'),
      description: t('description_card1'),
      tags: ["React", "Node.js", "JavaScript", "Zustand"],
      githubUrl: "https://github.com/username/ecommerce",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('title_card2'),
      description: t('description_card2'),
      tags: ["TypeScript", "React", "Vite", "Tailwind"],
      githubUrl: "https://github.com/username/taskapp",
      demoUrl: "https://taskapp-demo.com",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('title_card3'),
      description: t('description_card3'),
      tags: ["TypeScript", "Sequelize", "PostgreSQL"],
      githubUrl: "https://github.com/username/dashboard",
      demoUrl: "https://dashboard-demo.com",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('title_card4'),
      description: t('description_card4'),
      tags: ["Vite", "TypeScript", "React","Tailwind"],
      githubUrl: "https://github.com/username/fitness-tracker",
      demoUrl: "https://fitnesstracker-demo.com",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('title_card5'),
      description: t('description_card5'),
      tags: ["JavaScript", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/username/recipe-finder",
      demoUrl: "https://recipefinder-demo.com",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('title_card6'),
      description: t('description_card6'),
      tags: ["React", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/username/portfolio",
      demoUrl: "https://myportfolio.com",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-main-primary text-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Trans
                i18nKey="pages.projects.title"
                components={{
                  1: <span className="text-text-secondary" />
                }}
              />
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#94A3B8]">
              {t('description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {visibleProjects.map((project, index) => (
            <div 
              key={index}
              className={`h-full ${showAll && index >= 3 ? 'animate-fade-in' : ''}`}
            >
              <ScrollReveal delay={index * 100} className="h-full">
                <div className="bg-[#1E293B] rounded-xl overflow-hidden border border-[#334155] hover:border-[#38BDF8] transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col group">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-70"></div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col"> 
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-[#E2E8F0] group-hover:text-[#38BDF8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#CBD5E1] mb-3 text-sm"> 
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3"> 
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 bg-[#334155]/80 rounded-full text-[#CBD5E1] hover:bg-[#38BDF8] hover:text-[#0F172A] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#334155]"> 
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-text-secondary hover:text-[#38BDF8] transition-colors group/github text-sm" 
                      >
                        <FaGithub className="mr-2 group-hover/github:animate-bounce" />
                        <span className="hover:underline">{t('code')}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <ScrollReveal delay={300} className="text-center mt-10"> 
            <ActionButton
              onClick={() => setShowAll(true)}
              text={
                <>
                  {t('view_more')}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </>
              }
              color="secondary"
              className="border border-[#38BDF8] hover:shadow-[0_0_15px_#00E8F8]  text-black"
              animate={true}
              animationDelay="300ms"
            />
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}