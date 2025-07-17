import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

// Professional African administrative services images featuring Black African people  
const heroImage = 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwYnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D';
const businessCreationImage = 'https://images.unsplash.com/photo-1609220136736-443140cffec6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHklMjBvZiUyMHBlb3BsZSUyMGluc2lkZSUyMHJvb20lMjBkdXJpbmclMjBkYXl0aW1lfGVufDB8fDB8fHww';
const legalComplianceImage = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwc2lnbmluZyUyMG9uJTIwd2hpdGUlMjBwcmludGVyJTIwcGFwZXIlMjBiZXNpZGUlMjB3b21hbiUyMGFib3V0JTIwdG8lMjB0b3VjaCUyMHRoZSUyMGRvY3VtZW50c3xlbnwwfHwwfHx8MA%3D%3D';
const permitsLicensesImage = 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwaW4lMjB5ZWxsb3clMjBibGF6ZXIlMjBhbmQlMjBibHVlJTIwZGVuaW0lMjBqZWFucyUyMHNtaWxpbmd8ZW58MHx8MHx8fDA%3D';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
  })
};

// Helper function to render bullet lists
const renderBullets = (bullets: string[]) => {
  return bullets.map((bullet, index) => (
    <li key={index} className="text-gray-700 text-base md:text-lg">{bullet}</li>
  ));
};

const AdministratifPage: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex flex-col justify-between">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 py-20 md:py-32 lg:py-40 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texte */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-montserrat">
              {t('services.representation.administratif.hero.title')}
            </h1>
            <p className="mb-8 text-base md:text-lg font-normal">
              {t('services.representation.administratif.hero.subtitle')}
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white font-bold px-8 py-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white hover:text-blue-900">
                {t('services.representation.administratif.hero.cta')}
              </Button>
            </Link>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt={t('services.representation.administratif.hero.title')}
              className="rounded-2xl shadow-xl object-cover w-full max-w-md h-64 md:h-80 lg:h-96"
              style={{ background: '#e5e7eb' }}
            />
          </div>
        </div>
        {/* WAVE SVG */}
        <div className="absolute left-0 right-0 bottom-0 w-full pointer-events-none" style={{lineHeight:0}}>
          <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44 lg:h-56" preserveAspectRatio="none">
            <path d="M0,60 C360,180 1080,0 1440,120 L1440,180 L0,180 Z" fill="#fff"/>
          </svg>
        </div>
      </section>
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Création d'entreprise */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={1}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={businessCreationImage} alt={t('services.representation.administratif.creation.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('services.representation.administratif.creation.title')}</h1>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('services.representation.administratif.creation.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                {renderBullets(t('services.representation.administratif.creation.bullets'))}
              </ul>
            </div>
          </motion.div>

          {/* Permis et licences */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={2}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={permitsLicensesImage} alt={t('services.representation.administratif.permis.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('services.representation.administratif.permis.title')}</h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('services.representation.administratif.permis.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                {renderBullets(t('services.representation.administratif.permis.bullets'))}
              </ul>
            </div>
          </motion.div>

          {/* Conformité juridique */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={3}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={legalComplianceImage} alt={t('services.representation.administratif.conformite.title')} className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72 md:h-96 transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">{t('services.representation.administratif.conformite.title')}</h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">{t('services.representation.administratif.conformite.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-6">
                {renderBullets(t('services.representation.administratif.conformite.bullets'))}
              </ul>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center py-8 border-t mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            custom={4}
          >
            <p className="text-gray-600 mb-6 text-xl font-semibold">{t('services.representation.administratif.cta.title')}</p>
            <Link to="/#contact">
              <Button
                variant="primary"
                size="lg"
                className="transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                {t('services.representation.administratif.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdministratifPage;