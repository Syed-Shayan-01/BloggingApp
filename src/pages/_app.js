import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

import { SessionProvider } from "next-auth/react"
import Head from 'next/head'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
    <SessionProvider session={session}>
      <Head>
        <title>
          BLOGGER.COM
        </title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}