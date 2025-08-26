'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
} from '@/components/ai-elements/prompt-input';
import { Response } from '@/components/ai-elements/response';

const Chat = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div className='relative mx-auto size-full h-screen max-w-4xl rounded-lg p-6'>
      <div className='flex h-full flex-col'>
        <Conversation>
          <ConversationContent>
            {messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case 'text': // we don't use any reasoning or tool calls in this example
                        return (
                          <Response key={`${message.id}-${i}`}>
                            {part.text}
                          </Response>
                        );
                      default:
                        return null;
                    }
                  })}
                </MessageContent>
              </Message>
            ))}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput
          className='relative mx-auto mt-4 w-full max-w-2xl'
          onSubmit={handleSubmit}
        >
          <PromptInputTextarea
            className='pr-12'
            onChange={(e) => setInput(e.currentTarget.value)}
            placeholder='Say something...'
            value={input}
          />
          <PromptInputSubmit
            className='absolute right-1 bottom-1'
            disabled={!input.trim()}
            status={status === 'streaming' ? 'streaming' : 'ready'}
          />
        </PromptInput>
      </div>
    </div>
  );
};

export default Chat;
