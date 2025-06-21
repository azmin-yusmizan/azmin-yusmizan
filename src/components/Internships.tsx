
import { useLanguage } from '@/contexts/LanguageContext';

export const Internships = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: 'Tech Startup Inc.',
      position: 'Frontend Developer Intern',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Developed responsive web applications using React and collaborated with the design team to implement user-friendly interfaces.',
      achievements: [
        'Improved website performance by 30%',
        'Implemented new features that increased user engagement',
        'Collaborated with cross-functional teams'
      ],
      logo: '🚀'
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer Intern',
      duration: 'Jan 2024 - May 2024',
      description: 'Worked on both frontend and backend development, creating RESTful APIs and building user interfaces.',
      achievements: [
        'Built 5+ RESTful APIs',
        'Developed admin dashboard',
        'Mentored junior interns'
      ],
      logo: '💻'
    },
    {
      company: 'Innovation Labs',
      position: 'Software Engineering Intern',
      duration: 'Sep 2023 - Dec 2023',
      description: 'Participated in agile development processes and contributed to multiple projects using modern web technologies.',
      achievements: [
        'Contributed to 3 major projects',
        'Learned agile methodologies',
        'Improved code quality practices'
      ],
      logo: '🔬'
    }
  ];

  return (
    <section id="internships" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('internships.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey through various internships and experiences that shaped my development skills.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ml-16 md:ml-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{exp.logo}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-1/2 shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
