import { GroqConfigError } from './errors';

export const getGroqConfig = () => {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  
  if (!apiKey?.trim()) {
    throw new GroqConfigError('GROQ API key is not configured or is empty');
  }
  
  return {
    apiKey: apiKey.trim()
  };
};