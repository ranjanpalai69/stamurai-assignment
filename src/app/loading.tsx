"use client"
import { Spinner } from '@chakra-ui/react'
import React from 'react'

const loading = () => {
  return (
    <div style={{"width":"50%","margin":"150px auto"}}>
        <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    </div>
  )
}

export default loading