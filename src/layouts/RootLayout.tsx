import { useState } from 'react';
import './root.css';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import Contact from '../components/Contact';
export default function RootLayout() {
  return (
    <>
      <Header />
      <Hero />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
}
