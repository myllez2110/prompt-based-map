export interface GroqConfig {
  apiKey: string;
}

export interface GroqError extends Error {
  code?: string;
  status?: number;
}

export interface GroqResponse {
  choices: Array<{
    message?: {
      content?: string;
    };
  }>;
}