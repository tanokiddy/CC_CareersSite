import { Footer, Header } from '@/components/molecules'
import React from 'react'

export default function DefaultLayout({ children} : { children: JSX.Element}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
