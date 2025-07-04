import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
          <h1 className="text-3xl font-bold">Welcome to Boilerplate App</h1>
          <p className="text-muted-foreground text-sm">
            This is a simple boilerplate app using Next.js, Prisma, and Tailwind CSS.
          </p>
         <Link href="/signin">
            <Button className="cursor-pointer">Sign In</Button>
          </Link>
          
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
