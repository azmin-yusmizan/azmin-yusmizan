
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.education')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('internships')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.internships')}
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection('hobbies')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.hobbies')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.contact')}
            </button>
          </nav>

          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2"
            >
              <Languages size={16} />
              {languages.find(lang => lang.code === language)?.flag}
            </Button>
            
            {isMenuOpen && (
              <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border p-2 min-w-[200px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 ${
                      language === lang.code ? 'bg-blue-50 text-blue-600' : ''
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
