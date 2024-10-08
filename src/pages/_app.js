import React from 'react';
import Navbar from '../components/Navbar'; 
import '../styles/navbar.module.css'; 
import '../styles/styles.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
