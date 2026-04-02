export interface Citation {
  id: string;
  quote: string;   
  source: string; 
  page: string;    
  thoughts: string;
  chapter: string;
}

export type NewCitation = Omit<Citation, 'id'>;

export type UpdateCitation = Partial<NewCitation>;