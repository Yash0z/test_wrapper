import ThemeSwitcher from '@/components/misc/themeswitcher';
import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <main className='flex h-full flex-col justify-between'>
      <div className='flex h-full w-full justify-between gap-10 p-5 text-5xl/loose'>
        <div className='mt-3 w-full pl-3'>
          <div>Background</div>
          <h1 className='font-display text-7xl/tight'>Heading-72</h1>
          <h1 className='text-3xl/loose'>Heading-30</h1>
          <h1 className='font-mono text-base/loose'>Heading-16</h1>
        </div>
        <div className='w-full'>
          <div className='w-full space-x-2'>
            <Button>Button</Button>
            <Button variant='reversed'>reversed</Button>
            <Button variant='secondary'>secondary</Button>
          </div>
          <div className='w-full space-x-2'>
            <Button variant='outline'>outline</Button>
            <Button variant='destructive'>destructive</Button>
            <Button variant='ghost'>ghost</Button>
          </div>
        </div>
        <div className='pr-5'>
          <ThemeSwitcher />
        </div>
      </div>
      <div className='h-full bg-secondary p-10 font-serif text-3xl/loose text-secondary-foreground'>
        Secondary Background
        <p className='text-wrap font-mono text-lg text-secondary-foreground'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </main>
  );
}
