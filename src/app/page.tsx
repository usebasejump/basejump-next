import Header from '@/components/getting-started/header'
import BasejumpLogo from '@/components/getting-started/basejump-logo';
import Link from 'next/link';

export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-screen-lg flex justify-end items-center p-3 text-sm">
            <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center gap-x-2 items-center text-sm">
          <p className="text-3xl">👦🐯</p>
        <p>
            There&apos;s treasure everywhere
        </p>
      </footer>
    </div>
  )
}
