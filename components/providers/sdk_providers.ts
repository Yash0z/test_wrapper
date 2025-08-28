/** biome-ignore-all lint/suspicious/noConsole: <explanation */
import { createOpenAI } from '@ai-sdk/openai';
import { useApiKey } from '@/store/apiKeyStore';

const getKey = useApiKey.getState().getKey;
const keys = useApiKey.getState().keys;

console.log(keys);
console.log(getKey('OpenAI'));

export const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
