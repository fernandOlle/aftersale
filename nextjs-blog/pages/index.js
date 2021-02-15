import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Body from '../components/Body' 
import Footer from '../components/Footer' 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Desafio aftersale</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}