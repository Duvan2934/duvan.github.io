import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

interface QuoteProps {
  text: string;
  author: string;
  year: string;
}

const Quote = ({ text, author, year }: QuoteProps) => {
  return (
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
};

export default Quote;