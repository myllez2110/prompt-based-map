import { getGroqClient } from './groq/client';
import { generateStatisticalPrompt } from './groq/prompts';
import { parseGroqResponse } from './groq/parser';
import { GroqConfigError, GroqClientError, GroqAPIError } from './groq/errors';
import type { GeoJsonData } from '../types';

export const generateStatisticalMap = async (
  topic: string,
  year: number,
  region: string
): Promise<GeoJsonData> => {
  try {
    const groq = getGroqClient();
    const prompt = generateStatisticalPrompt(topic, year, region);
    
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'mixtral-8x7b-32768',
      temperature: 0.3,
      max_tokens: 32768,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new GroqAPIError('No response received from GROQ API');
    }

    return parseGroqResponse(response);
  } catch (error) {
    if (error instanceof GroqConfigError || 
        error instanceof GroqClientError || 
        error instanceof GroqAPIError) {
      throw error;
    }
    
    throw new GroqAPIError(
      `Failed to generate statistical map: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};