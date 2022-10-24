import React from "react";

import Head from 'next/head'

import Navbar from "./Navbar";
import Footer from "./Footer";





const Layout = ({ children }) => {
  return (
    <div className='layout'>  
        <Head>
       <title>js Mastery Store</title>
        </Head>

        <hearder>
            <Navbar />        
        </hearder>

        <main className='main-container'>
        {children}
        </main>

        <footer>
         <Footer/>
        </footer>
    </div>
  )
}

export default Layout