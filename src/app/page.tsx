"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Heading width="full" m="25px auto" textAlign="center" color="black.200"  textDecoration="underline" textDecorationColor="orange.400">Task Management App</Heading>
    </div>
  )
}
