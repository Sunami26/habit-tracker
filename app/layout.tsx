import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Personal Habit Tracker',
  description: 'Track your habits and analytics',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
