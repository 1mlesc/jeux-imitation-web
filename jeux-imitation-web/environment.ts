//src/environment.ts

interface Environment {
  apiUrl: string;
}

const environment: Environment = {
  apiUrl: import.meta.env.VITE_API_URL || '',
};

export default environment;