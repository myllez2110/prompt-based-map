export class GroqConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GroqConfigError';
  }
}

export class GroqClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GroqClientError';
  }
}

export class GroqAPIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GroqAPIError';
  }
}