import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link className="flex items-center justify-center" href="#">
      <LeafIcon className="h-6 w-6" />
      <span className="sr-only">Органический Бустер</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Продукты
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        О нас
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Наука
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Контакты
      </Link>
    </nav>
  </header>
  )
}

function LeafIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

