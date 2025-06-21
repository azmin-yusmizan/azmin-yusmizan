
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <p className="text-lg text-gray-600 mb-4">{t('hero.greeting')}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Azmin Yusmizan
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.cta')}
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-semibold text-gray-800 mb-2">Circuit Design</h3>
            <p className="text-gray-600 text-sm">Designing efficient electrical circuits and systems</p>
          </div>
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="font-semibold text-gray-800 mb-2">Problem Solving</h3>
            <p className="text-gray-600 text-sm">Analytical thinking for complex engineering challenges</p>
          </div>
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">Creating sustainable engineering solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};
