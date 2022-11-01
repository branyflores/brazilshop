import React from 'react'
import { StateContext } from '../context/StateContext'

import {Toaster} from 'react-hot-toast'
import { Layout } from '../components'
import '../styles/globals.css'


const Myapp = ( { Component, pageProps }) => {
  return (
      <StateContext>
        <Layout>
          <Toaster />
         <Component {...pageProps} />
        </Layout>
       </StateContext>
  )
}

export default Myapp