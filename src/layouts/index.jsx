import { Footer, Header } from '@/components/molecules'
import React from 'react'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}