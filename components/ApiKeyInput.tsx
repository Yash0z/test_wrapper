'use client';

import { KeyRound } from 'lucide-react';
import { useId, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const providers = ['OpenAI', 'Azure', 'Anthropic'] as const;

export default function API_KeyInput() {
  const id = useId();
  const [inputValues, setInputValues] = useState<Record<string, string>>({});

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>ADD API KEY</Button>
      </DialogTrigger>
      <DialogContent>
        <div className='flex flex-col items-center gap-2'>
          <div
            aria-hidden='true'
            className='flex size-9 shrink-0 items-center justify-center rounded-full border'
          >
            <KeyRound className='opacity-80' size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className='sm:text-center'>
              API Key Required
            </DialogTitle>
          </DialogHeader>
        </div>

        <form className='space-y-5'>
          <div className='*:not-first:mt-2'>
            {providers.map((provider) => (
              <div key={provider}>
                <Label className='my-3 text-md' htmlFor={`${id}-${provider}`}>
                  {provider}
                </Label>
                <Input
                  className='font-thin text-sm'
                  id={`${id}-${provider}`}
                  onChange={(e) =>
                    setInputValues((prev) => ({
                      ...prev,
                      [provider]: e.target.value,
                    }))
                  }
                  placeholder={`Enter your ${provider} API key`}
                  type='text'
                  value={inputValues[provider] || ''}
                />
              </div>
            ))}
          </div>
          <DialogFooter className='mt-10'>
            <DialogClose asChild>
              <Button className='flex-1' type='button' variant='outline'>
                Cancel
              </Button>
            </DialogClose>
            <Button className='flex-1' type='button' variant='secondary'>
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
