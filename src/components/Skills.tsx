
import { useLanguage } from '@/contexts/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'Vue.js', level: 80, color: 'bg-green-500' },
        { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' }
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'Express.js', level: 85, color: 'bg-gray-600' },
        { name: 'MongoDB', level: 75, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 70, color: 'bg-blue-600' }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-500' },
        { name: 'Docker', level: 75, color: 'bg-blue-600' },
        { name: 'AWS', level: 70, color: 'bg-orange-400' },
        { name: 'Figma', level: 85, color: 'bg-purple-500' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out group-hover:scale-x-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Currently Learning</h3>
            <p className="text-gray-600">Always expanding my knowledge and staying up-to-date with the latest technologies.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'GraphQL', 'Rust', 'Machine Learning', 'DevOps', 'Microservices'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
