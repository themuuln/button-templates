import Image from 'next/image';
import { Button } from './components/button/Button';

export default function Home() {
  return (
    <main className='space-x-10 min-h-screen pt-10 container '>
      <Button>Get Started</Button>
      <Button variant={'outline'}>Get Started</Button>
    </main>
  );
}
