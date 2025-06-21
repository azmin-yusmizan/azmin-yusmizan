
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Internships } from '@/components/Internships';
import { Skills } from '@/components/Skills';
import { Hobbies } from '@/components/Hobbies';
import { Contact } from '@/components/Contact';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Internships />
          <Skills />
          <Hobbies />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
