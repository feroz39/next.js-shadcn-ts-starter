'use client'

import {ModeToggle} from '@/components/atoms/ModeToggle'
import {ThemeToggle} from '@/components/atoms/ThemeToggle'
import {Button, buttonVariants} from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center gap-4 bg-primary/5">
      <Button>click Me</Button>
      <Link href={'/'} className={buttonVariants({variant: 'ghost'})}>
        Click here
      </Link>
      <ModeToggle />
      <ThemeToggle />
    </main>
  )
}
