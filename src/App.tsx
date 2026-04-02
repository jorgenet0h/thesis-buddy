import { useState, useMemo } from 'react';
import { useCitations } from './hooks/useCitations';
import { CitationForm } from './components/CitationForm';
import { CitationCard } from './components/CitationCard';
import { Search, LibraryBig } from 'lucide-react';

export default function App() {
  const { citations, loading, error, add, remove } = useCitations();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCitations = useMemo(() => {
    if (!searchTerm) return citations;
    const lowerSearch = searchTerm.toLowerCase();
    return citations.filter(c => 
      c.quote.toLowerCase().includes(lowerSearch) || 
      c.thoughts.toLowerCase().includes(lowerSearch) ||
      c.chapter.toLowerCase().includes(lowerSearch)
    );
  }, [citations, searchTerm]);

  return (
    <div className="min-h-screen relative font-sans text-gray-800">
      
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-md"></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto p-6 pt-12">
        
        <h1 className="sr-only">Thesis Buddy - Seu organizador de fichamentos acadêmicos</h1>

        {error && (
          <div className="bg-red-100/90 text-red-700 p-4 rounded-xl mb-6 text-center font-bold backdrop-blur-sm shadow-sm">
            {error}
          </div>
        )}

        <CitationForm onSubmit={add} />

        <section className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/40 min-h-[400px]">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Meus Fichamentos</h2>
            
            <div className="relative w-full sm:w-72">
              <input 
                type="text" 
                placeholder="Buscar citações ou ideias..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-200 bg-gray-50 rounded-full py-2.5 pl-4 pr-10 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm"
                aria-label="Campo de busca de fichamentos"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {loading && <p className="text-center text-gray-500 font-medium mt-10">Carregando seus dados...</p>}

          {!loading && filteredCitations.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center py-16 px-4">
              <div className="bg-blue-50 p-6 rounded-full mb-6">
                <LibraryBig className="h-16 w-16 text-blue-300" />
              </div>
              <p className="text-gray-600 mb-6 font-medium max-w-md">
                Nenhuma citação encontrada. Comece adicionando seu primeiro fichamento acima!
              </p>
            </div>
          )}

          <div className="grid gap-6">
            {filteredCitations.map(citation => (
              <CitationCard 
                key={citation.id} 
                citation={citation} 
                onDelete={remove} 
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}