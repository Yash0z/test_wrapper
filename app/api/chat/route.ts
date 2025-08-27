import { convertToModelMessages, streamText, type UIMessage } from 'ai';
import { openai } from '@/components/providers/sdk_providers';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai('gpt-4.1-nano'),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
