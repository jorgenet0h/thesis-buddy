import { useState } from 'react';
import type { NewCitation } from '../types';
import { User, Compass, Quote, Lightbulb, Check } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface Props {
  onSubmit: (data: NewCitation) => Promise<void>;
}

export function CitationForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<NewCitation>({
    quote: '', source: '', page: '', thoughts: '', chapter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(formData);
    setFormData({ quote: '', source: '', page: '', thoughts: '', chapter: '' }); 
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl mb-10 border border-white/40">
      
      <div className="flex justify-center border-b border-gray-200/80 pb-6 mb-8">
        <img 
          src={logoImg} 
          alt="Logo Thesis Buddy" 
          className="h-32 md:h-40 object-contain mix-blend-multiply opacity-95" 
        />
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Novo Fichamento</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
        <div className="flex flex-col">
          <label htmlFor="source" className="text-sm font-semibold text-gray-700 mb-2">Fonte (Autor/Ano)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input required type="text" id="source" name="source" value={formData.source} onChange={handleChange} 
              className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" 
              placeholder="Ex: Foucault, 1975" />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="chapter" className="text-sm font-semibold text-gray-700 mb-2">Capítulo do TCC</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Compass className="h-5 w-5 text-gray-400" />
            </div>
            <input required type="text" id="chapter" name="chapter" value={formData.chapter} onChange={handleChange} 
              className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" 
              placeholder="Ex: Metodologia" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col mb-5">
        <label htmlFor="quote" className="text-sm font-semibold text-gray-700 mb-2">Citação Exata</label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <Quote className="h-5 w-5 text-gray-400" />
          </div>
          <textarea required id="quote" name="quote" value={formData.quote} onChange={handleChange} 
            className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors h-28 resize-none" 
            placeholder="Copie a citação aqui..." />
        </div>
      </div>

      <div className="flex flex-col mb-6">
        <label htmlFor="thoughts" className="text-sm font-semibold text-gray-700 mb-2">Seus Comentários / Insights</label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
          </div>
          <textarea required id="thoughts" name="thoughts" value={formData.thoughts} onChange={handleChange} 
            className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors h-24 resize-none" 
            placeholder="Por que isso é importante para a pesquisa?" />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} 
        className="w-full bg-[#1e40af] text-white font-semibold py-3 rounded-full hover:bg-blue-800 disabled:bg-blue-300 transition-colors shadow-md flex justify-center items-center gap-2">
        <Check className="h-5 w-5" />
        {isSubmitting ? 'Salvando...' : 'Salvar Fichamento'}
      </button>
    </form>
  );
}