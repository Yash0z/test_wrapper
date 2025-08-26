'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();
  return (
    <div className='inline-flex items-center p-1 text-foreground'>
      <Button onClick={() => setTheme('light')}>
        <Sun className='h-4 w-4' />
      </Button>
      <Button onClick={() => setTheme('dark')}>
        <Moon className='h-4 w-4' />
      </Button>
      <Button onClick={() => setTheme('system')}>
        <Monitor className='h-4 w-4' />
      </Button>
    </div>
  );
}
