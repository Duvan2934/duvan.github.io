import React, { useState, ReactNode } from 'react';
import { BookOpen, GitBranch, BookMarked, FileSpreadsheet, BookText, ExternalLink, Quote as QuoteIcon, ChevronDown, ChevronUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Section Component
interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  colorClass: string;
}

const Section = ({ title, icon: Icon, children, colorClass }: SectionProps) => (
  <div className={`bg-white rounded-2xl shadow-xl p-6 ${colorClass} transform transition-all duration-300 
    hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden group`}>
    <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm">
          <Icon className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </div>
);

// Quote Component
interface QuoteProps {
  text: string;
  author: string;
  year: string;
}

const Quote = ({ text, author, year }: QuoteProps) => (
  <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 rounded-lg my-3 transform transition-all duration-300 
    hover:scale-[1.02] hover:shadow-md relative group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/30 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative flex gap-3 items-start">
      <div className="bg-white p-2 rounded-full shadow-sm">
        <QuoteIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <div>
        <p className="text-gray-700 italic leading-relaxed">{text}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-px flex-grow bg-gradient-to-r from-emerald-200 to-transparent" />
          <p className="text-sm font-medium text-emerald-700">
            — {author} <span className="text-emerald-500">({year})</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ExpandableContent Component
interface ExpandableContentProps {
  title: string;
  children: React.ReactNode;
}

const ExpandableContent = ({ title, children }: ExpandableContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 py-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center py-2 px-3 text-left rounded-lg
          hover:bg-gradient-to-r hover:from-emerald-50 hover:to-transparent
          transition-all duration-300 group"
      >
        <span className="font-medium text-gray-700 group-hover:text-emerald-600 transition-colors">
          {title}
        </span>
        <div className="bg-white p-1 rounded-full shadow-sm">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-emerald-500 transform transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <ChevronDown className="w-5 h-5 text-emerald-500 transform transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-3 pl-4 pr-2 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

// References Component
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

// Main App Component
function App() {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent
            mb-4 animate-fade-in">
            Marco de Referencia
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ¿Qué es? Section */}
          <div className="lg:col-span-3 animate-slide-up">
            <Section
              title="¿Qué es?"
              icon={BookOpen}
              colorClass="border-l-8 border-emerald-400"
            >
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Un marco de referencia en investigación educativa es un sistema teórico que organiza las bases conceptuales, 
                  los antecedentes relevantes y las normativas que sustentan el estudio. Este marco es crucial porque guía y 
                  estructura la investigación, permitiendo una comprensión clara del problema y la relación de este con los 
                  conceptos teóricos.
                </p>
                <Quote 
                  text="Es una estructura conceptual que permite interpretar fenómenos educativos y orientar su análisis desde una perspectiva situada y dinámica"
                  author="Barriga"
                  year="2005"
                />
                <Quote 
                  text="Actúa como un puente entre la teoría y la práctica, proporcionando un contexto que respalda el análisis de los datos y la interpretación de los resultados"
                  author="Latorre, Del Rincón y Arnal"
                  year="2021"
                />
              </div>
            </Section>
          </div>

          {/* Construcción Section */}
          <Section
            title="Construcción"
            icon={GitBranch}
            colorClass="border-l-8 border-teal-400"
          >
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                La construcción de un marco de referencia implica seleccionar y estructurar teorías, investigaciones 
                previas y conceptos clave que sean pertinentes al problema de investigación.
              </p>
              <ExpandableContent title="Proceso de construcción">
                <ul className="list-none space-y-3">
                  {[
                    'Selección de teorías relevantes',
                    'Revisión exhaustiva de literatura',
                    'Organización sistemática de elementos',
                    'Integración de múltiples perspectivas'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ExpandableContent>
              <Quote 
                text="Un marco de referencia efectivo debe integrar tanto antecedentes como teorías modernas que permitan analizar el problema desde diferentes perspectivas"
                author="Torrecilla"
                year="2004"
              />
            </div>
          </Section>

          {/* Elementos Section */}
          <Section
            title="Elementos"
            icon={BookMarked}
            colorClass="border-l-8 border-cyan-400"
          >
            <div className="space-y-4">
              <ExpandableContent title="Bases teóricas">
                <p className="leading-relaxed">
                  Fundamentan el estudio en conceptos y teorías reconocidas en el campo académico, proporcionando 
                  una base sólida para la investigación.
                </p>
              </ExpandableContent>
              <ExpandableContent title="Antecedentes">
                <p className="leading-relaxed">
                  Revisan investigaciones previas para contextualizar el problema y establecer el estado del arte, 
                  identificando brechas en el conocimiento actual.
                </p>
              </ExpandableContent>
              <ExpandableContent title="Normativas">
                <p className="leading-relaxed">
                  Aseguran que el estudio cumpla con estándares éticos y legales establecidos, garantizando la 
                  integridad de la investigación.
                </p>
              </ExpandableContent>
              <ExpandableContent title="Relación con el problema">
                <p className="leading-relaxed">
                  Establecen una conexión explícita entre la teoría y los objetivos específicos del estudio, 
                  asegurando la coherencia metodológica.
                </p>
              </ExpandableContent>
              <Quote 
                text="Los elementos relevantes deben ser seleccionados cuidadosamente para garantizar que el marco sea integral y coherente con el propósito de la investigación"
                author="Miranda Beltrán y Ortiz Bernal"
                year="2020"
              />
            </div>
          </Section>

          {/* Aspectos Adicionales Section */}
          <Section
            title="Aspectos Adicionales"
            icon={FileSpreadsheet}
            colorClass="border-l-8 border-blue-400"
          >
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Es fundamental que el marco de referencia sea claro y esté bien organizado, con un respaldo sólido 
                en fuentes confiables y una estructura coherente.
              </p>
              <ExpandableContent title="Características esenciales">
                <ul className="list-none space-y-3">
                  {[
                    'Claridad y organización sistemática',
                    'Respaldo en fuentes académicas confiables',
                    'Adaptabilidad a cambios durante la investigación',
                    'Comunicación efectiva de conceptos'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ExpandableContent>
              <Quote 
                text="La claridad del marco permite que los investigadores identifiquen rápidamente las conexiones entre los elementos teóricos y los resultados empíricos"
                author="Tejada Fernández"
                year="2007"
              />
            </div>
          </Section>

          {/* References Section */}
          <div className="lg:col-span-3">
            <References />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;