
import { useLanguage } from '@/contexts/LanguageContext';

export const Hobbies = () => {
  const { t } = useLanguage();

  const hobbies = [
    {
      title: 'Photography',
      description: 'Capturing moments and exploring creative perspectives through my lens',
      icon: '📸',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&q=80'
    },
    {
      title: 'Gaming',
      description: 'Enjoying strategy games and exploring virtual worlds in my free time',
      icon: '🎮',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80'
    },
    {
      title: 'Traveling',
      description: 'Discovering new cultures and places around the world',
      icon: '✈️',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80'
    },
    {
      title: 'Reading',
      description: 'Expanding knowledge through books on technology, psychology, and fiction',
      icon: '📚',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80'
    },
    {
      title: 'Cooking',
      description: 'Experimenting with different cuisines and creating delicious meals',
      icon: '👨‍🍳',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80'
    },
    {
      title: 'Fitness',
      description: 'Staying active with regular workouts and outdoor activities',
      icon: '💪',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'
    }
  ];

  return (
    <section id="hobbies" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('hobbies.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('hobbies.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img 
                  src={hobby.image} 
                  alt={hobby.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="text-3xl mb-2">{hobby.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
                  <p className="text-sm text-gray-200 opacity-90">{hobby.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Life Philosophy</h3>
            <blockquote className="text-xl text-gray-700 italic mb-4 max-w-3xl mx-auto">
              "Balance is key to a fulfilling life. Whether it's coding, exploring new places, or spending time with loved ones, 
              each experience shapes who we are and brings new perspectives to our work."
            </blockquote>
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Work</div>
                <div className="text-sm text-gray-600">Passion</div>
              </div>
              <div className="text-2xl text-gray-400">+</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Life</div>
                <div className="text-sm text-gray-600">Balance</div>
              </div>
              <div className="text-2xl text-gray-400">=</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Growth</div>
                <div className="text-sm text-gray-600">Mindset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
