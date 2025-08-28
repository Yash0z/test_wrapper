/** biome-ignore-all lint/nursery/useConsistentTypeDefinitions: <explanation */
export interface ApiKeys {
  keys: Record<string, string>; // Example: { openai: "sk-123", stripe: "sk-test-..." }
  setKey: (service: string, key: string) => void;
  removeKey: (service: string) => void;
  clearKeys: () => void;
}
