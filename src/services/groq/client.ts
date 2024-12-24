import Groq from 'groq-sdk';

let groqClient: Groq | null = null;

export const getGroqClient = () => {
  if (!groqClient) {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    if (!apiKey) {
      throw new Error('GROQ API key is not configured');
    }
    groqClient = new Groq({ apiKey });
  }
  return groqClient;
};