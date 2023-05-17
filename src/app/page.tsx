import type { MemeTemplate } from '@/app/(data)/types';
import Image from 'next/image'
import { Anton } from 'next/font/google'
import MemeDisplay from './(components)/MemeDisplay';

const anton = Anton({ weight: "400", subsets: ['latin'] });

export default async function Home() {
  const memeTemplatesReq = await fetch("http://localhost:3000/api/memeTemplates");
  const memeTemplates = await memeTemplatesReq.json();
  console.log(memeTemplates);
  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="max-w-[900px]">
        <MemeDisplay {...memeTemplates[0]} />
      </div>
    </main>
  )
}
