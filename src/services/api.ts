import type { Citation, NewCitation, UpdateCitation } from '../types';

const BASE_URL = 'http://localhost:3000/citations';

export const getCitations = async (): Promise<Citation[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Falha ao buscar fichamentos');
  return res.json();
};

export const createCitation = async (data: NewCitation): Promise<Citation> => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Falha ao criar fichamento');
  return res.json();
};

export const updateCitation = async (id: string, data: UpdateCitation): Promise<Citation> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Falha ao atualizar fichamento');
  return res.json();
};

export const deleteCitation = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${id}`, { 
    method: 'DELETE' 
  });
  if (!res.ok) throw new Error('Falha ao deletar fichamento');
};