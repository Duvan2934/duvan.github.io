import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  colorClass: string;
}

const Section = ({ title, icon: Icon, children, colorClass }: SectionProps) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-xl p-6 ${colorClass} transform transition-all duration-300 
        hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden group`}
    >
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
};

export default Section;