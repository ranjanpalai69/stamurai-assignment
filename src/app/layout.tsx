"use client"

import './globals.css'
import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Management App',
  description: 'A Simple Task Management Application Made with Next.Js And TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
        {children}
        </ChakraProvider>
        </body>
    </html>
  )
}
