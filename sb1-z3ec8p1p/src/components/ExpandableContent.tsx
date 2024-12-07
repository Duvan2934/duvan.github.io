import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

export default ExpandableContent;