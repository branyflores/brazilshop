import React from 'react'

import { Layout } from '../components'
import '../styles/globals.css'


const Myapp = ( { Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      </Layout>
  )
}

export default Myapp