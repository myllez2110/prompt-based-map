import Groq from 'groq-sdk';
import { getGroqConfig } from './config';
import { GroqClientError } from './errors';
import type { GroqConfig } from './types';

let groqClient: Groq | null = null;

export const createGroqClient = (config: GroqConfig): Groq => {
  try {
    return new Groq({
      apiKey: config.apiKey,
      dangerouslyAllowBrowser: true
    });
  } catch (error) {
    throw new GroqClientError(
      `Failed to initialize GROQ client: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};

export const getGroqClient = (): Groq => {
  if (!groqClient) {
    const config = getGroqConfig();
    groqClient = createGroqClient(config);
  }
  return groqClient;
};