import React from 'react';
import { BookText, ExternalLink } from 'lucide-react';
import Section from './Section';

const References = () => {
  const references = [
    {
      citation: 'Barriga, F. D. (2005). Principios de diseño instruccional de entornos de aprendizaje apoyados con TIC: un marco de referencia sociocultural y situado. Revista Tecnología y Comunicación Educativa.',
      url: 'http://cursa.ihmc.us/rid=1197697109500_1928608710_8051/c56art1.pdf'
    },
    {
      citation: 'Latorre, A., Del Rincón, D., & Arnal, J. (2021). Bases metodológicas de la investigación educativa.',
      url: 'https://books.google.com/books?id=ZF4wEAAAQBAJ'
    },
    {
      citation: 'Torrecilla, F. J. M. (2004). Un marco comprensivo de mejora de la eficacia escolar. Revista Mexicana de Investigación Educativa.',
      url: 'https://www.redalyc.org/pdf/140/14002104.pdf'
    },
    {
      citation: 'Miranda Beltrán, S., & Ortiz Bernal, J. A. (2020). Los paradigmas de la investigación educativa. Revista Mexicana de Investigación y Desarrollo Educativo.',
      url: 'https://www.scielo.org.mx/scielo.php?pid=S2007-74672020000200164&script=sci_arttext'
    },
    {
      citation: 'Daza, W. G. I. (2018). Investigación educativa desde un enfoque cualitativo: la historia oral como método. Voces de la Educación.',
      url: 'https://hal.science/hal-02528588/document'
    }
  ];

  return (
    <Section
      title="Referencias"
      icon={BookText}
      colorClass="border-l-8 border-amber-400"
    >
      <div className="space-y-3">
        {references.map((ref, index) => (
          <a
            key={index}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-transparent
              transition-all duration-300 group relative"
          >
            <div className="flex items-start gap-3">
              <div className="flex-grow">
                <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  • {ref.citation}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-200 to-transparent 
              scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default References;