import Head from 'next/head'
import React from 'react'
import Header from '../Header/Header'

const Layout = ({ children, title }) => {
  return (
      <>
        <Head>
            <title>Hasan Erdal | {title}</title>
        </Head>
        <Header />
        {children}
      </>
  )
}

export default Layout