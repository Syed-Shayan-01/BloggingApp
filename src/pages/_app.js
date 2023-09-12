/* eslint-disable @next/next/no-sync-scripts */
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}