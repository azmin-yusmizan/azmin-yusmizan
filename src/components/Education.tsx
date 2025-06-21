
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: 'Bachelor of Electrical Engineering',
      institution: 'University Name',
      location: 'City, Country',
      duration: '2022 - 2026',
      gpa: '3.8/4.0',
      description: 'Specializing in power systems, electronics, and renewable energy technologies.',
      courses: [
        'Circuit Analysis',
        'Digital Signal Processing',
        'Power Electronics',
        'Control Systems',
        'Renewable Energy Systems',
        'Microprocessors'
      ],
      achievements: [
        'Dean\'s List - 4 semesters',
        'Engineering Excellence Award 2024',
        'President of Electrical Engineering Society'
      ]
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      location: 'City, Country',
      duration: '2020 - 2022',
      gpa: '3.9/4.0',
      description: 'Graduated with honors, focusing on mathematics and physics.',
      courses: [
        'Advanced Mathematics',
        'Physics',
        'Chemistry',
        'Computer Science'
      ],
      achievements: [
        'Valedictorian',
        'National Science Olympiad - Gold Medal',
        'Mathematics Competition Winner'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('education.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award size={14} />
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{edu.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">{t('education.relevantCourses')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span 
                            key={courseIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">{t('education.achievements')}</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
