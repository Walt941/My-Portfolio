import { 
  FaReact, FaNodeJs, 
  FaDatabase, FaGitAlt 
} from 'react-icons/fa';
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSequelize, SiJavascript } from 'react-icons/si';
import ScrollReveal from '../components/ScrollReveal'; 
import { useTranslation } from 'react-i18next';
import sear from '../assets/cweee.png'

export default function Skills() {
  const { t } = useTranslation("translation", { keyPrefix: "pages.skills" });
  
  const techCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-2xl text-[#61DAFB]" />,
      skills: [
        { name: "React", level: 75, icon: <FaReact className="text-2xl text-[#61DAFB]" /> },
        { name: "Tailwind", level: 80, icon: <RiTailwindCssFill className='text-2xl text-[#38BDF8]' /> },
        { name: "TypeScript", level: 50, icon: <SiTypescript className="text-2xl text-[#3178C6]" /> },
        { name: "JavaScript", level: 65, icon: <SiJavascript className="text-2xl text-[#F7DF1E]" /> },
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-2xl text-[#68A063]" />,
      skills: [
        { name: "Node.js", level: 63, icon: <FaNodeJs className="text-2xl text-[#68A063]" /> },
        { name: "JavaScript", level: 65, icon: <SiJavascript className="text-2xl text-[#F7DF1E]" /> },
        { name: "TypeScript", level: 50, icon: <SiTypescript className="text-2xl text-[#3178C6]" /> },
        { 
          name: "C#", 
  level: 50, 
  icon: (
    <div className=" flex items-center justify-center"> 
      <img 
        src={sear } 
        alt="C#"
        className="w-12 h-12 object-contain"  
      />
    </div>
          )
        },
      ]
    },
    {
      title: "Otros",
      icon: <FaDatabase className="text-2xl text-[#00618A]" />,
      skills: [
        { name: "Sequelize", level: 80, icon: <SiSequelize className="text-2xl text-[#3B7EBB]" /> },
        { name: "PostgreSQL", level: 78, icon: <FaDatabase className="text-2xl text-[#336791]" /> },
        { name: "Git", level: 90, icon: <FaGitAlt className="text-2xl text-[#F05032]" /> },
        { name: "Bootstrap", level: 87, icon: <BsBootstrapFill className='text-2xl text-[#7952B3]' /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8  text-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              <span className="text-text-primary">{t('title')}</span> 
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#94A3B8]">
              {t('description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-4">
          {techCategories.map((category, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 100}
              className="h-full" 
            >
              <div 
                className="bg-main-secondary rounded-xl p-6 border border-[#334155] hover:border-[#38BDF8] transition-all duration-300 shadow-lg hover:shadow-xl h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#E2E8F0]">{category.title}</h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <ScrollReveal key={skillIndex} delay={100 + skillIndex * 50}>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-[#CBD5E1] flex items-center">
                            {skill.icon ? (
                              <>
                                {skill.icon}
                                <span className="ml-2">{skill.name}</span>
                              </>
                            ) : (
                              <>
                                <span className="w-8 h-8 flex items-center justify-center mr-2">
                                  <span className="w-6 h-6 rounded-full bg-[#334155]"></span>
                                </span>
                                {skill.name}
                              </>
                            )}
                          </span>
                          {skill.level && <span className="text-sm text-[#38BDF8]">{skill.level}%</span>}
                        </div>
                        {skill.level && (
                          <div className="w-full bg-[#334155] rounded-full h-2.5">
                            <div 
                              className="bg-[#38BDF8] h-2.5 rounded-full" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}