import type { Citation } from '../types';
import { Trash2 } from 'lucide-react';

interface Props {
  citation: Citation;
  onDelete: (id: string) => void;
}

export function CitationCard({ citation, onDelete }: Props) {
  return (
    <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group">
      <div className="flex justify-between items-start mb-4">
        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
          {citation.chapter}
        </span>
        <button 
          onClick={() => onDelete(citation.id)}
          aria-label={`Excluir citação de ${citation.source}`}
          className="text-gray-400 hover:text-red-500 p-1.5 rounded-full hover:bg-red-50 transition-colors cursor-pointer"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <blockquote className="italic text-gray-800 text-lg mb-4 border-l-4 border-blue-400 pl-4 bg-gray-50/50 py-2 rounded-r-lg">
        "{citation.quote}"
      </blockquote>
      <div className="text-sm text-gray-500 mb-4 font-medium">
        — <span className="text-gray-900">{citation.source}</span>
      </div>
      <div className="bg-yellow-50/50 border border-yellow-100 p-4 rounded-xl text-sm text-gray-800">
        <strong className="block mb-1 text-yellow-800">Meus Insights:</strong>
        {citation.thoughts}
      </div>
    </article>
  );
}