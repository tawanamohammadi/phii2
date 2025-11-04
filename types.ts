
export interface Message {
  speaker: 'user' | 'bot';
  content: string;
  sources?: { name: string; type: 'Wikipedia' | 'Web' | 'arXiv' }[];
}
