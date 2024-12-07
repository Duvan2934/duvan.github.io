import React from 'react';
import { BookOpen, GitBranch, BookMarked, FileSpreadsheet } from 'lucide-react';
import Section from './Section';
import References from './References';
import Quote from './Quote';
import ExpandableContent from './ExpandableContent';

const MindMap = () => {
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
};

export default MindMap;