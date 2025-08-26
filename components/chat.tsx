/** biome-ignore-all lint/style/useDefaultSwitchClause: <explanatio> */
'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
} from '@/components/ai-elements/prompt-input';

export default function Chat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage } = useChat();
  return (
    <div className='stretch mx-auto flex w-full max-w-md flex-col py-24'>
      {messages.map((message) => (
        <div className='whitespace-pre-wrap' key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
        </div>
      ))}
      <PromptInput
        className='relative mt-4'
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput('');
        }}
      >
        <PromptInputTextarea
          onChange={(e) => setInput(e.currentTarget.value)}
          value={input}
        />
        <PromptInputToolbar>
          <PromptInputSubmit
            className='absolute right-1 bottom-1'
            disabled={false}
            status={'ready'}
          />
        </PromptInputToolbar>
      </PromptInput>
    </div>
  );
}
