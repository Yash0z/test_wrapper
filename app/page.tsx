import API_KeyInput from '@/components/ApiKeyInput';
import Chat from '@/components/chat';

export default function Home() {
  return (
    <main className='mx-10 flex items-center'>
      <API_KeyInput />
      <Chat />
    </main>
  );
}
