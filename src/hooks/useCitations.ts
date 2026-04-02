import { useState, useEffect, useCallback } from 'react';
import type { Citation, NewCitation } from '../types';
import * as api from '../services/api';

export function useCitations() {
  const [citations, setCitations] = useState<Citation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      const data = await api.getCitations();
      setCitations(data);
      setError(null);
    } catch (err) {
      setError('Não foi possível carregar os dados. A API (json-server) está rodando?');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const add = async (data: NewCitation) => {
    const newCit = await api.createCitation(data);
    setCitations((prev) => [...prev, newCit]);
  };

  const remove = async (id: string) => {
  try {
            await api.deleteCitation(id);
            setCitations((prev) => prev.filter((c) => c.id !== id));
        } catch {
            setError('Erro ao excluir fichamento.');
        }
    };

  return { citations, loading, error, add, remove };
}